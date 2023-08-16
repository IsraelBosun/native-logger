import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc"
import { themeColors } from "../theme"
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {

  const navigation = useNavigation()

  return (
    <SafeAreaView style={[tw`flex-1`, {backgroundColor: themeColors.bg}]} >
      <View style={tw`flex-1 flex justify-around my-4`}>
        <Text style={tw`text-white font-bold text-4xl text-center`}>
            Let's Get Started!
        </Text>
        <View style={tw`flex-row justify-center`}>
          <Image source={require("../assets/images/welcome.png")} style={{width:350, height:350}} /> 
        </View>
      </View>
      <View style={tw`my-4`}>
        <TouchableOpacity onPress={()=> navigation.navigate('SignUp')} style={tw`py-3 bg-yellow-400 mx-7 rounded-xl`}>
          <Text style={tw`text-xl font-bold text-center text-gray-700`}>Sign Up</Text>
        </TouchableOpacity>
        <View style={tw`flex-row justify-center gap-6 my-6`}>
          <Text style={tw`text-white font-semibold`}>Already have an account</Text>
          <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
            <Text style={tw`font-semibold text-yellow-400`}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}