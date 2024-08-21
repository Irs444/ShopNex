import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { StatusBar } from 'expo-status-bar'

const Layout = ({ children }) => {
    return (
        <>
            <StatusBar />
            <Header />
            <View>
                {children}
            </View>
            <View style={styles.footer}>
                <Footer />
            </View>
        </>
    )
}

export default Layout

const styles = StyleSheet.create({
    footer:{
        position:"absolute",
        bottom:0,
        borderTopWidth:1,
        borderTopColor:"lightgray",
        width:"100%",
        padding:12,
       backgroundColor:"gray",
      
        
    }
})