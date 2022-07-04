import React, { Component, useLayoutEffect, useState, useCallback, useEffect } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Input, Button } from 'react-native-elements';
import { signOut } from "firebase/auth";
import { auth, db } from '../firebase';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {signOutUser} from './ChatScreen'
import { Avatar } from 'react-native-elements';
import { TouchableHighlight } from 'react-native-gesture-handler';

function HomeScreen({navigation}) {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{
                    marginLeft:20
                }}>
                <Avatar rounded source={{ uri:auth?.currentUser?.photoURL}}/>
                 </View>
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

  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Image
          source={require("../assets/images/HEALTHMATE-removebg-preview.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <TouchableHighlight
            style ={{ height: 40, width:160, borderRadius:10, backgroundColor : "yellow", marginLeft :170, marginRight:10, marginTop :20}}
            >
<Button title='Discussion Hub' style={styles1.button} onPress={()=>navigation.navigate('Chat')} />
        </TouchableHighlight>
        <TouchableHighlight
            style ={{ height: 40, width:160, borderRadius:10, backgroundColor : "yellow", marginLeft :170, marginRight:50, marginTop :20}}
            >
<Button title='Educational Space' style={styles1.button} onPress={()=>navigation.navigate('Education')} />
        </TouchableHighlight>
        <TouchableHighlight
            style ={{ height: 40, width:160, borderRadius:10, backgroundColor : "yellow", marginLeft :170, marginRight:50, marginTop :20}}
            >
<Button title='Online Store' style={styles1.button} onPress={()=>navigation.navigate('Products')} />
        </TouchableHighlight>
      </View>
    </View>
  );

  
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 444,
    height: 712,
    backgroundColor: "rgba(157,117,203,1)",
    marginTop: -49,
    alignSelf: "center"
  },
  image: {
    width: 289,
    height: 315,
    marginTop: 100,
    marginLeft: 86
  }
});

export default HomeScreen;
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