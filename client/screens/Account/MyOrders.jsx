import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import { orderData } from '../../data/orderData'
import OrderItem from '../../components/Form/OrderItem'

const MyOrders = () => {
    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.heading}>MyOrders</Text>
                <ScrollView>
                    {
                        orderData.map((order) => (
                            <OrderItem key={order._id} order={order}/>
                        ))
                    }
                </ScrollView>
            </View>
        </Layout>


    )
}

export default MyOrders

const styles = StyleSheet.create({
    container:{
        marginVertical: 20
    },
    heading:{
        fontSize:20,
        textAlign:"center",
        fontWeight:"bold"
    }
})