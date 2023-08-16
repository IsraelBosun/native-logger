import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from "react-native-heroicons/solid"
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {

  const navigation = useNavigation()

  return (
    <View style={[tw`flex-1 bg-white`, {backgroundColor: themeColors.bg}]}>
      <SafeAreaView style={tw`flex`}>
        <View style={tw`flex-row justify-start`}>
          <TouchableOpacity onPress={()=> navigation.goBack()}  style={tw`bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4`}>
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-center`}>
          <Image source={require("../assets/images/login.png")} style={{width: 200, height: 200}} />
        </View>
      </SafeAreaView>
      <View style={[tw`flex-1 bg-white px-8 mt-2 pt-8`, {borderTopLeftRadius: 50, borderTopRightRadius: 50}]}>
        <View style={tw`flex my-2 `}>
          <Text style={tw`text-gray-700 ml-4 mb-1`}>Email Address</Text>
          <TextInput style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3`} value='israeldev@gmail.com' placeholder='Enter Email' />
          <Text style={tw`text-gray-700 ml-4 mb-1`}>Password</Text>
          <TextInput style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl`} secureTextEntry value='test1234' placeholder='Enter Password' />
          <TouchableOpacity style={tw`flex items-end mb-5`}>
            <Text style={tw`text-gray-700`}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`py-3 bg-yellow-400 rounded-xl`}>
            <Text style={tw`font-bold text-center text-gray-700`}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={tw`text-xl text-gray-700 font-bold text-center py-5`}>
          Or
        </Text>
        <View style={tw`flex-row justify-between gap-12`}>
           <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl`}>
              <Image source={require("../assets/icons/google.png")} style={tw`w-10 h-10`} />
           </TouchableOpacity>
           <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl`}>
              <Image source={require("../assets/icons/apple.png")} style={tw`w-10 h-10`} />
           </TouchableOpacity>
           <TouchableOpacity style={tw`p-2 bg-gray-100 rounded-2xl`}>
              <Image source={require("../assets/icons/facebook.png")} style={tw`w-10 h-10`} />
           </TouchableOpacity>
        </View>
           
           <View style={tw`flex-row justify-center mt-7 gap-2 `}>
          <Text style={tw`text-gray-500 font-semibold`}>Don't have an account?</Text>
          <TouchableOpacity onPress={()=> navigation.navigate("SignUp")}>
            <Text style={tw`font-semibold text-yellow-500`}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

// flex-row justify-center
// flex items-center