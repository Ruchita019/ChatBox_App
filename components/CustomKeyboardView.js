import { View, Text, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import React from 'react'

const android = Platform.OS == 'android';
export default function CustomKeyboardView({children, inChat}) {
  let kavConfig = {};
  let scrollViewConfig = {};
  if(inChat){
    kavConfig = {keyboardVerticalOffset: 90};
    scrollViewConfig = {contentContainerStyle: {flex:1}};
  }
  return (
    <KeyboardAvoidingView 
        behavior = {android? 'height': 'padding'}
        style={{flex: 1}}
        {...kavConfig}
    >
        <ScrollView
            style={{flex: 1}}
            bounces={false}
            showsVerticalScrollIndicator={false}
            {...scrollViewConfig}>
            {
                children
            }
        </ScrollView>
    </KeyboardAvoidingView>
    
  )
}