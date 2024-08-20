import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Header = () => {

    const [searchText , setSearchText] = useState("")

    const handleSearch = () => {
        console.log(searchText);
        setSearchText("");
        
    }

    return (
        <View style={{ height: 90, marginTop: 40, backgroundColor: "gray" }}>
            <View style={styles.container}>
                <TextInput style={styles.inputBox} value={searchText} onChangeText={(text) => setSearchText(text)} />
                <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
                    <FontAwesome name="search" size={23} />
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,

    },
    inputBox: {

        width: "100%",
        position: "absolute",
        padding: 8,
        backgroundColor: "#fff",
        borderRadius: 5,
         elevation:10,
    },
    searchBtn: {
        position: "absolute",
        left: "94%",
        color: "gray",
        elevation: 10,
    }
})