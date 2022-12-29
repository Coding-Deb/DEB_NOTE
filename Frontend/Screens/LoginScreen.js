import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

export default function LoginScreen() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40, fontWeight: '700', marginTop: 25, marginBottom: 25,color:'#041E42' }}>
                Login Here
            </Text>
            <View style={{ borderColor: 'black', borderWidth: 2, height: height - 200, width: width - 40, alignItems: 'center', backgroundColor: '#041E42', borderRadius: 50 }}>
                <View style={{ top: 25 }}>
                    <TextInput
                        style={{ borderBottomColor: 'white', borderBottomWidth: 2, height: 60, width: width - 80, padding: 15, fontSize: 20, fontWeight: '600', marginTop: 45, marginBottom: 35,color:'white' }}
                        placeholder='Enter Your Name'
                        placeholderTextColor='white'
                    />
                    <TextInput
                        style={{borderBottomColor: 'white', borderBottomWidth: 2, height: 60, width: width - 80, padding: 15, fontSize: 20, fontWeight: '600', marginTop: 35, marginBottom: 35,color:'white' }}
                        placeholder='Enter Your Email'
                        placeholderTextColor='white'
                    />
                    <TextInput
                        style={{ borderBottomColor: 'white', borderBottomWidth: 2, height: 60, width: width - 80, padding: 15, fontSize: 20, fontWeight: '600', marginTop: 35, marginBottom: 35,color:'white' }}
                        placeholder='Enter Your Password'
                        placeholderTextColor='white'
                    />
                </View>
                <TouchableOpacity style={{ width: 1 / 2 * width, height: 60, backgroundColor: 'white', top: 80, justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}
                onPress={()=>{navigation.navigate('Notetake')}}
                >
                    <Text style={{ color: '#041E42', fontSize: 22, fontWeight: '700' }}>
                        LOG IN
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0CAFFF',
        // backgroundColor: '#99FFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
})