import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { userData } from '../../data/userData'

const Profile = () => {

    const [hide, setHide] = useState(true)
    const [email, setEmail] = useState(userData.email)
    const [password, setPassword] = useState(userData.password)
    const [name, setName] = useState(userData.name)
    const [profile , setProfile] = useState(userData.profile)

    return (
        <Layout>
            <View style={styles.container}>
                <Text>Profile</Text>
            </View>
        </Layout>
    )
}

export default Profile

const styles = StyleSheet.create({})