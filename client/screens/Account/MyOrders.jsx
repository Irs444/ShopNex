import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../../components/Layout/Layout'

const MyOrders = () => {
    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.heading}>MyOrders</Text>
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