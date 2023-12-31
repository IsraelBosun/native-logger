import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc"
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from "react-native-heroicons/solid"
import { useNavigation } from '@react-navigation/native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function SignUpScreen() {

  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = async () => {
  //   if (email && password) {
  //     try {
  //       await createUserWithEmailAndPassword(auth, email, password);
  //     } catch (err) {
  //       // console.log("got error", err.message)
  //     }
  //   }
  // }

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        const jsonValue = JSON.stringify(auth);
        await AsyncStorage.setItem('my-key', jsonValue);
        alert(`${name} is signed up`)
        console.log(auth)
      } catch (err) {
        console.log("got error", err.message)
      }
    }
  }



  

  return (
    <View style={[tw`flex-1 bg-white`, {backgroundColor: themeColors.bg}]}>
      <SafeAreaView style={tw`flex`}>
        <View style={tw`flex-row justify-start`}>
          <TouchableOpacity onPress={()=> navigation.goBack()}  style={tw`bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4`}>
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-center`}>
          <Image source={require("../assets/images/signup.png")} style={{width: 165, height: 110}} />
        </View>
      </SafeAreaView>
      <View style={[tw`flex-1 bg-white px-8 pt-8 mt-2`, {borderTopLeftRadius: 50, borderTopRightRadius: 50}]}>
        <View style={tw`flex my-2 `}>
          <Text style={tw`text-gray-700 ml-4 mb-1`}>Full Name</Text>
          <TextInput style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3`} value={name} onChangeText={value=> setName(value)} placeholder='Enter Fullname' />
          <Text style={tw`text-gray-700 ml-4 mb-1`}>Email Address</Text>
          <TextInput style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3`} value={email} onChangeText={value=> setEmail(value)} placeholder='Enter Email' />
          <Text style={tw`text-gray-700 ml-4 mb-1`}>Password</Text>
          <TextInput style={tw`p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7`} secureTextEntry  value={password} onChangeText={value=> setPassword(value)} placeholder='Enter Password' />
          
          {/* <TouchableOpacity style={tw`flex items-end mb-5`}>
            <Text style={tw`text-gray-700`}>Forgot Password?</Text>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={handleSubmit} style={tw`py-3 bg-yellow-400 rounded-xl`}>
            <Text style={tw`font-bold text-center text-gray-700`}>
              Sign Up
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
          <Text style={tw`text-gray-500 font-semibold`}>Already have an account?</Text>
          <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
            <Text style={tw`font-semibold text-yellow-500`}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

// flex-row justify-center
// flex items-center