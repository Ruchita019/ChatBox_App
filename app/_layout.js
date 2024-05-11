<<<<<<< HEAD
import React, { useEffect } from 'react'
import {View, Text} from 'react-native'
import {Slot, useSegments, useRouter} from "expo-router";
import { useAuth,  AuthContextProvider } from '../context/authContext';

// Import your global CSS file
import "../global.css"
import { MenuProvider } from 'react-native-popup-menu';

const MainLayout = () =>{
    const {isAuthenticated} = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(()=>{
        //check if user is authenticated or not
        if(typeof isAuthenticated=='undefined') return;
        const inApp = segments[0] == '(app)';
        if(isAuthenticated && !inApp){
            //redirect to home
            router.replace('home');
        }else if(isAuthenticated==false){
            //redirect to signal
            router.replace('signIn');
        }
    }, [isAuthenticated])

    return <Slot/>
}


export default function RootLayout (){
    return (
        <MenuProvider>
            <AuthContextProvider>
                <MainLayout/>
            </AuthContextProvider>
        </MenuProvider>
    
    )
}

=======
import React, { useEffect } from 'react'
import {View, Text} from 'react-native'
import {Slot, useSegments, useRouter} from "expo-router";
import { useAuth,  AuthContextProvider } from '../context/authContext';

// Import your global CSS file
import "../global.css"
import { MenuProvider } from 'react-native-popup-menu';

const MainLayout = () =>{
    const {isAuthenticated} = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(()=>{
        //check if user is authenticated or not
        if(typeof isAuthenticated=='undefined') return;
        const inApp = segments[0] == '(app)';
        if(isAuthenticated && !inApp){
            //redirect to home
            router.replace('home');
        }else if(isAuthenticated==false){
            //redirect to signal
            router.replace('signIn');
        }
    }, [isAuthenticated])

    return <Slot/>
}


export default function RootLayout (){
    return (
        <MenuProvider>
            <AuthContextProvider>
                <MainLayout/>
            </AuthContextProvider>
        </MenuProvider>
    
    )
}

>>>>>>> 061116044d1f66b6aaeca91f79caef0cb60bf953
