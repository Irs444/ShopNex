import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Layout from '../components/Layout/Layout'

const Checkout = ({ navigation }) => {

    const handleCOD = () => {
        alert("Cash on Delivery")
    }

    const handleOnline = () => {
        navigation.navigate("payment")
    }
    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.heading}>Payment Options</Text>
                <Text style={styles.price}>Total Amount: 1297</Text>
                <View style={styles.paymentCard}>
                    <Text style={styles.paymentHeading}>Select your Payment Mode</Text>
                    <TouchableOpacity style={styles.paymentBtn} onPress={() => handleCOD()}>
                        <Text style={styles.paymentText}>Cash on Delivery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.paymentBtn} onPress={() => handleOnline()}>
                        <Text style={styles.paymentText}>Online (Credit | Debiit Card)</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Layout>

    )
}

export default Checkout

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 20
    },
    price: {
        fontSize: 18,
        marginBottom: 10
    },
    paymentCard: {
        backgroundColor: "white",
        width: 300,
        padding: 20,
        elevation: 5,
        borderRadius: 3
    },
    paymentHeading: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    paymentBtn: {
        backgroundColor: "#597445",
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        alignItems: "center"
    },
    paymentText: {
        color: "white"
    }
})