import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderItem = ({ order }) => {
    return (
        <View style={styles.container}>
            <View style={styles.orderInfo}>
                <Text style={styles.order}>Order Id: {order._id}</Text>
                <Text style={styles.order}>Date: {order.date}</Text>
            </View>
            <Text>Product Name: {order.productInfo.name}</Text>
            <Text>Price:  ₹{order.productInfo.price}</Text>
            <Text>Quantity: {order.productInfo.qty}</Text>
            <Text>Total Amount: {order.totalAmount}</Text>
            <Text style={styles.status}>Order Status: {order.status}</Text>
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        margin: 10,
        padding: 10,
        borderRadius: 5,
        elevation: 5
    },
    orderInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        paddingBottom: 10,
        marginBottom: 10
    },
    order: {
        fontWeight: "bold",
        fontSize: 15
    },
    status:{
        marginTop:10,
        borderTopWidth:1,
        borderTopColor:"lightgray",
        paddingTop:10,
        fontSize:15,
        fontWeight:"bold"
    }
})