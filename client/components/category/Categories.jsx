import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { categoryData } from '../../data/categoryData'
import AntDesign from 'react-native-vector-icons/AntDesign';

const Categories = () => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                {
                    categoryData.map((category) => {
                        return (
                            <View key={category._id}>
                                <TouchableOpacity style={styles.items}>
                                    <AntDesign name={category.icon} size={30} />
                                    <Text>{category.name}</Text>
                                </TouchableOpacity>

                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flexDirection: "row",
        padding: 8,
    },
    items: {
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
    }
})