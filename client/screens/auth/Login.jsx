import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-paper'

// redux hook
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/features/auth/userAction'
import { useCustomHook } from '../../hooks/customHook'


const Login = ({ navigation }) => {

    const [hide, setHide] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // hook
    const dispatch = useDispatch()
    // global state
    const loading = useCustomHook(navigation, "home")

    const handleLogin = () => {
        if (!email || !password) {
            alert("Please fill all the fields")
        }
        dispatch(login(email, password))

    }


    return (

        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.heading}>Login</Text>
                {/* {loading && <Text>Loading...</Text>} */}

                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} label='Email' mode='outlined'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <Text style={styles.label}>Password</Text>
                <TextInput label='Password' mode='outlined' secureTextEntry={hide} onChangeText={(text) => setPassword(text)}
                    right={<TextInput.Icon icon={"eye"}
                        onPress={() => setHide(!hide)} />}
                    style={styles.label}
                    value={password}

                />

                <View style={styles.btn}>
                    <Button title='Sign in' color={"#597445"} onPress={() => handleLogin()} />
                </View>
                <Text style={{ marginTop: 25, fontSize: 15, textAlign: "center" }}>Create an account? <Text onPress={() => navigation.navigate("signup")} style={{ color: "#597445", fontWeight: "bold" }}>Sign up</Text> </Text>
            </View>
        </View>

    )
}

export default Login

const styles = StyleSheet.create({
    main: {
        height: "100%",
        justifyContent: "center",
    },
    container: {
        elevation: 5,
        marginHorizontal: 20,
        marginVertical: 40,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 5,


    },
    heading: {
        fontSize: 40,
        marginBottom: 20
    },
    label: {
        marginBottom: 5,
        fontSize: 15
    },
    input: {
        marginBottom: 15,
        backgroundColor: "white"
    },
    btn: {
        marginTop: 20
    }
})