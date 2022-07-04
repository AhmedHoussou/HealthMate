import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { TouchableHighlight } from 'react-native-gesture-handler';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = ()=> {
        signInWithEmailAndPassword(auth, email, password)
  
  .catch((error) => {
    
    const errorMessage = error.message;
    alert(errorMessage)
  });
    } 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              
              navigation.replace('Chat')
              const uid = user.uid;
              // ...
            } else {
              // User is signed out
              // ...
            }
          });

          return unsubscribe
    }, []
    );

    
    return (
        <View style={styles.container}>
            <Input 
            placeholder="Enter your email"
            label="Email"
            leftIcon={{type:'material',name:'email'}}
            value={email}
            onChangeText={text => setEmail(text)}
            />
            <Input 
            placeholder="Enter your password"
            label="Password"
            leftIcon={{type:'material',name:'lock'}}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            />
            <TouchableHighlight
            style ={{ height: 40, width:160, borderRadius:10, backgroundColor : "yellow", marginLeft :50, marginRight:50, marginTop :20}}
            >
            <Button title='Sign In' style={styles.button} onPress={signIn} />
            </TouchableHighlight>
            <TouchableHighlight
            style ={{ height: 40, width:160, borderRadius:10, backgroundColor : "yellow", marginLeft :50, marginRight:50, marginTop :20}}
            >
            <Button title='Register' style={styles.button} onPress={()=>navigation.navigate('Register')} />
            </TouchableHighlight>
        </View>
    )
}

export default LoginScreen
const styles = StyleSheet.create(
    {
        button:{
            width:370,
            marginTop: 10,
            
        },
        container:{
            flex: 1,
            alignItems: 'center',
            padding: 10
            
        }
    }
)
    