import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'

const Login = () => {

    const [hide , setHide] = useState(true)
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} label='Email' mode='outlined' />
            <Text>Password</Text>
            <TextInput label='Password' mode='outlined' secureTextEntry={hide} right={<TextInput.Icon icon={"eye"}  onPress={() => setHide(!hide)} />} />
            <View>
                <Button title='Sign in'/>
            </View>
            <Text style={{ marginTop: 25, fontSize: 15, textAlign: "center" }}>Create an account? <Text onPress={() => navigation.navigate("Signup")} style={{ color: "darkviolet", fontWeight: "bold" }}>Sign up</Text> </Text>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container:{
       borderWidth:1,
       marginHorizontal:20,
       marginVertical:40,
       padding:20
        
    },
    heading:{
        fontSize:40,
        marginBottom:20
    },
    label:{
        marginBottom:5
    }
})