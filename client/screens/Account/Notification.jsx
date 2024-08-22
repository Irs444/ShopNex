import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../../components/Layout/Layout'

const Notification = () => {
    return (
        <Layout>
            <View style={{justifyContent:"center", alignItems:"center", height:"100%"}}>
                <Text style={{fontSize:20}}>Oops ! You don't have any notification</Text>
            </View>
        </Layout>
    )
}

export default Notification

const styles = StyleSheet.create({})