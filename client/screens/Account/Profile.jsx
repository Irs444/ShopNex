import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { userData } from '../../data/userData'
import { TextInput } from 'react-native-paper'

const Profile = ({navigation}) => {

    const [hide, setHide] = useState(true)
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")
    const [name, setName] = useState(" ")
    const [profile, setProfile] = useState(" ")

    const handleUpdate = () => {
        if (!email || !password || !name ) {
            alert("Please fill all the fields")
        } else {
            alert("Profile Update Successfully")
            navigation.navigate("account")
        }
    }

    return (
        <Layout>
            <View style={{marginVertical:20}}>
                <ScrollView>
                    {
                        userData.map((item) => {
                            return (
                                <View key={item._id}>
                                    <View  style={styles.imgContainer}>
                                        <Image source={{ uri: item.profile }} style={styles.image} />
                                        <Pressable onPress={() => alert("profile dialogbox")}>
                                            <Text style={{fontWeight:"bold"}}>Update your profile picture</Text>
                                        </Pressable>
                                    </View>
                                    <View style={styles.container}>
                                        <Text style={styles.label}>Name</Text>
                                        <TextInput value={item.name} onChangeText={item.setName} mode='outlined' label="Name" style={styles.input} />

                                        <Text style={styles.label}>Email</Text>
                                        <TextInput style={styles.input} label='Email' mode='outlined'
                                            value={item.email}
                                            onChangeText={item.setEmail}
                                        />

                                        <Text style={styles.label}>Password</Text>
                                        <TextInput label='Password' mode='outlined' secureTextEntry={hide}
                                            right={<TextInput.Icon icon={"eye"}
                                                onPress={() => setHide(!hide)} />}
                                            style={styles.label}
                                            value={item.password}
                                           onChangeText={item.setPassword}
                                        />

                                        <View style={styles.btn}>
                                            <Button title='Upadate profile' color={"#597445"} onPress={() => handleUpdate()} />
                                        </View>

                                    </View>
                                </View>
                            )
                        })
                    }
                </ScrollView>

            </View>
        </Layout>
    )
}

export default Profile

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: "100%",
        resizeMode: "contain"
    },
    imgContainer: {
        justifyContent: "center",
        alignItems: 'center'
    },
    container: {
        elevation: 5,
        marginHorizontal: 20,
        marginVertical: 40,
        padding: 20,
        backgroundColor: "white",
        borderRadius: 5,


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