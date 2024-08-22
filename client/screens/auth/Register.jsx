import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'

const Register = ({ navigation }) => {

    const [hide, setHide] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [cpassword, setCpassword] = useState("")

    const handleRegister = () => {
        if (!email || !password || !name || !cpassword) {
            alert("Please fill all the fields")
        } else {
            alert("Register Success")
            navigation.navigate("login")
        }
    }

    return (

        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.heading}>Register</Text>

                <Text style={styles.label}>Name</Text>
                <TextInput style={styles.input} label='Name' mode='outlined'
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} label='Email' mode='outlined'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />

                <Text style={styles.label}>Password</Text>
                <TextInput label='Password' mode='outlined' secureTextEntry={hide}
                    right={<TextInput.Icon icon={"eye"}
                        onPress={() => setHide(!hide)} />}
                    style={styles.label}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <Text style={styles.label}>Confirm Password</Text>
                <TextInput label='confirm Password' mode='outlined' secureTextEntry={hide}
                    right={<TextInput.Icon icon={"eye"}
                        onPress={() => setHide(!hide)} />}
                    style={styles.label}
                    value={cpassword}
                    onChangeText={(text) => setCpassword(text)}
                />

                <View style={styles.btn}>
                    <Button title='Sign up' color={"#597445"} onPress={() => handleRegister()} />
                </View>
                <Text style={{ marginTop: 25, fontSize: 15, textAlign: "center" }}>Already a member <Text onPress={() => navigation.navigate("login")} style={{ color: "#597445", fontWeight: "bold" }}> Sign in</Text> </Text>
            </View>
        </View>

    )
}

export default Register

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