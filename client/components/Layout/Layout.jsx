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
            <Footer />
        </>
    )
}

export default Layout

const styles = StyleSheet.create({})