import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import { userData } from '../../data/userData'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Account = ({ navigation }) => {
    return (
        <Layout>
            {
                userData.map((user) => {
                    return (
                        <View style={styles.container} key={user._id}>
                            <Image source={{ uri: user.profile }} style={styles.image} />
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <Text style={styles.name}>Hi {user.name}</Text>
                                <Text>{user.email}</Text>
                                <Text>{user.phone}</Text>
                            </View>
                            <View style={styles.btnContainer}>
                                <Text style={styles.heading}>Account Setting</Text>
                                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("profile", { id: userData._id })}>
                                    <AntDesign name='edit' size={20} style={{ margin: 10 }} />
                                    <Text style={styles.btnText}>Edit Profile</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btn}  onPress={() => navigation.navigate("order", {id: userData._id})}>
                                    <AntDesign name='bars' size={20} style={{ margin: 10 }} />
                                    <Text style={styles.btnText}>My Orders</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("notification")}>
                                    <AntDesign name='bells' size={20} style={{ margin: 10 }} />
                                    <Text style={styles.btnText}>Notification</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.btn}>
                                    <MaterialIcons name='admin-panel-settings' size={20} style={{ margin: 10 }} />
                                    <Text style={styles.btnText}>Admin Panel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })
            }
        </Layout>
    )
}

export default Account

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    image: {
        height: 100,
        width: "100%",
        resizeMode: "contain"
    },
    name: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold"
    },
    btnContainer: {
        backgroundColor: "white",
        marginVertical: 20,
        marginHorizontal: 15,
        borderRadius: 5,
        elevation: 5,
        paddingBottom: 10
    },
    heading: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        paddingBottom: 10,
        marginTop: 15
    },
    btn: {
        flexDirection: "row"
    },
    btnText: {
        fontSize: 15,
        margin: 10
    }
})