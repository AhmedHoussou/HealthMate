import React, { useLayoutEffect, useState, useCallback, useEffect } from 'react'
import { View, Text } from 'react-native'
import { signOut } from "firebase/auth";
import { auth, db } from '../firebase';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat'
import { collection, addDoc, onSnapshot, query, getDocs, orderBy } from "firebase/firestore"; 

const ChatScreen = ({navigation}) => {

    const [messages, setMessages] = useState([]);
  useLayoutEffect(() => {
    const q = query(collection(db, 'chats'), orderBy('createdAt', 'desc'));
const unsubscribe = onSnapshot(q, (snapshot) => setMessages(
    snapshot.docs.map(doc => ({
        _id: doc.data()._id,
        createdAt: doc.data().createdAt.toDate(),
        text: doc.data().text,
        user: doc.data().user,
    }))
));

return () => {
  unsubscribe();
};
   }, [])
   
  
    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      const {
        _id,
        createdAt,
        text,
        user
      }=messages[0]
      const docRef = addDoc(collection(db, "chats"), {
        _id,
        createdAt,
        text,
        user
      });
    }, [])
  

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity style={{
                    marginLeft: 30
                }}
                onPress={()=>navigation.navigate('Home')}
                >
                    <AntDesign name="back" size={24} color="black" />
                </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity style={{
                    marginRight: 30
                }}
                onPress={signOutUser}
                >
                    <AntDesign name="logout" size={24} color="black" />
                </TouchableOpacity>
                
            )
        }

        )
    }
    )

    const signOutUser = ()=>{
        signOut(auth).then((re) => {
            // Sign-out successful.
            navigation.replace('Login');
          }).catch((error) => {
            console.log(err);
            // An error happened.
          });
    }
    return (
        <GiftedChat
        messages={messages}
        showAvatarForEveryMessage={true}
        onSend={messages => onSend(messages)}
        user={{
          _id: auth?.currentUser?.email,
          name: auth?.currentUser?.displayName,
          avatar: auth?.currentUser?.photoURL
        }}
      />
    )

}

export default ChatScreen