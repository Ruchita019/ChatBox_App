import { View, Text, Button, ActivityIndicator } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useAuth } from '../../context/authContext';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Chatlist from '../../components/Chatlist';
import { usersRef } from '../../firebaseConfig';
import {getDocs, query, where} from 'firebase/firestore';

export default function Home() {
    const { user} = useAuth();
    const [users, setUsers] = useState([]);


    useEffect(()=>{
      if(user?.uid) 
          getUsers();
    },[])

    const getUsers = async() => {
      //fetch users
      const q = query(usersRef, where('userId' ,'!=', user?.uid));

      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach(doc => {
        data.push({...doc.data()});
        
      });
      setUsers(data);
      console.log('got users ', data);
    }

  return (
    <View className='flex-1 bg-white'>
      <StatusBar style="light"/>

      {
        users.length >0? (
            <Chatlist currentUser={user} users={users} />
        ) : (
          <View className="flex items-center" style = {{top:hp(30)}}>
            <ActivityIndicator size='larger' color="gray"/>
          </View>
        )
      }
    </View>
  )
}