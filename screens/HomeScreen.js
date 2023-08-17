import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "twrnc"
import { TouchableOpacity } from 'react-native'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'

export default function HomeScreen() {

const handleSubmit = async () => {
  await signOut(auth)
}

  return (
    <SafeAreaView style={tw`flex-1 flex-row gap-3 justify-center items-center`}>
      <Text style={tw`text-lg`}>Home Page</Text>
      <TouchableOpacity onPress={handleSubmit}  style={tw`p-1 bg-red-400 rounded-lg `}>
        <Text style={tw`text-white text-lg font-bold`}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}