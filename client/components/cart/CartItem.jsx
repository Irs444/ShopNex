import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const CartItem = ({ item }) => {

    const [qty, setQty] = useState(1)

    const handleIncrement = () => {
        if (qty === 10) return alert("You can't add more than 10 quantity")
        setQty(qty + 1)
    }

    const handleDecerement = () => {
        if (qty <= 1) return
        setQty(qty - 1)
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: item?.imageUrl }} style={styles.image} />
            <View>
                <Text style={styles.title}>{item?.name}</Text>
                <Text>Price: {item?.price}</Text>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnQty} onPress={() => handleDecerement()}>
                        <Text style={styles.btnText}>-</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}>{qty}</Text>
                    <TouchableOpacity style={styles.btnQty} onPress={() => handleIncrement()}>
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        margin: 12,
        backgroundColor: "white",
        justifyContent: "space-evenly",
        flexDirection: 'row',
        alignItems: "center",
        borderRadius: 3,
        elevation: 10,
        padding: 6
    },
    image: {
        height: 50,
        width: 50,
        resizeMode: "contain"
    },
    title: {
        fontSize: 13,
        fontWeight: "bold",
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center",
        marginVertical: 10
    },
    btnQty: {
        backgroundColor: "#729762",
        borderRadius: 5,
        height: 30,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        margin:5
        
    },
    btnText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold"
    }
})