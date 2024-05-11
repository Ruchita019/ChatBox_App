import { View, Text, Platform } from "react-native";
import React from "react";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { blurhash } from "../utils/common";
import { useAuth } from "../context/authContext";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { MenuItem } from "./CustomMenuItems";
import { Feather, MaterialIcons } from "@expo/vector-icons";


const android = Platform.OS == "android";

export default function HomeHeader() {
  const { user, logout } = useAuth();
  const { top } = useSafeAreaInsets();
  const handleProfile = () =>{
     
  }

  const handleLogout = async()=>{
    await logout()
  }
  return (
    <View
      style={{ paddingTop: android ? top + 10 : top }}
      className="flex-row justify-between px-5 bg-indigo-400 pb-6 rounded-b-3xl shadow"
    >
      <View>
        <Text style={{ fontSize: hp(3) }} className="font-medium text-white">
          Chats
        </Text>
      </View>
      <View>
        <Menu>
          <MenuTrigger customStyles={{
            triggerWrapper: {
                // trigger wrapper style
            }
          }}>
            <Image
              style={{ height: hp(4.3), aspectRatio: 1, borderRadius: 100 }}
              source={user?.profileUrl}
              placeholder={blurhash}
              transition={500}
            />
          </MenuTrigger>
          <MenuOptions
            customStyles={{
              optionsContainer:{
                borderRadius: 10,
                borderCurve: 'continuous',
                marginTop: 40,
                backgroundColor: 'white',
                width: 140
              }
            }}>
            <MenuItem
            text = "Profile"
            action={handleProfile}
            value = {null}
            icon={<Feather name="user" size={hp(3)} color="#737373"/>}/>
          <Divider/>
            <MenuItem
            text = "SignOut"
            action={handleLogout}
            value = {null}
            icon={<MaterialIcons name="logout" size={hp(3)} color="#737373"/>}/>
            
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
}

const Divider = () => {
  return(
    <View className='p-[1px] w-full bg-neutral-200'/>
  )
}