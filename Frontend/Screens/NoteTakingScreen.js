import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function NoteTakingScreen() {
  return (
    <View style={styles.container}>
      <View style={{
       alignItems:'center',justifyContent: 'center',top:50,margin:20,borderRadius:30
      }}>
        <TextInput
        placeholder='Title'
        placeholderTextColor='#041E42'
        style={{height:100,width:width-50,backgroundColor:'white',padding:18,fontSize:20,color:'#041E42',fontWeight:'600',borderRadius:30,marginTop:20,marginBottom:20}}
        />
        <TextInput
        placeholder='Enter Notes Here'
        placeholderTextColor='#041E42'
        style={{height:150,width:width-50,backgroundColor:'white',padding:18,fontSize:20,color:'#041E42',fontWeight:'600',borderRadius:30,marginBottom:20}}
        />
        <TouchableOpacity style={{height:60,width:1/2 * width,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderRadius:30,marginBottom:35}}>
          <Text style={{color:'#041E42',fontSize:18,fontWeight:'600'}}>
            Create
          </Text>
        </TouchableOpacity>
        <Text style={{color:'white',fontSize:25,fontWeight:'600',right:80}}>
          Our Recent Notes
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#041E42',
    // backgroundColor: '#0CAFFF',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})