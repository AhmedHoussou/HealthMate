import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements';
import { auth } from '../firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [imageURL, setImageURL] = useState('');
    const register = ()=>{
        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
        displayName: name, photoURL: imageURL ? imageURL:"https://clicknathan.com/wp-content/uploads/2013/07/avatar-2.jpg"
      }).then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
    // ...
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
    }
    return (
        <View style={styles.container}>
            <Input 
            placeholder="Enter your name"
            label="Name"
            leftIcon={{type:'material',name:'badge'}}
            value={name}
            onChangeText={text => setName(text)}
            />
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
             <Input 
            placeholder="Enter your image URL"
            label="Profile Picture"
            leftIcon={{type:'material',name:'face'}}
            value={imageURL}
            onChangeText={text => setImageURL(text)}
            />
            <Button title='Register' onPress={register}/>
        </View>
    )
}

export default RegisterScreen
const styles = StyleSheet.create(
    {
        button:{
            width:200,
            marginTop: 10
        },
        container:{
            flex: 1,
            alignItems: 'center',
            padding: 10
        }
    }
)
    