import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { cartData } from '../data/cartData'
import PriceTable from '../components/cart/PriceTable'
import Layout from '../components/Layout/Layout'
import CartItem from '../components/cart/CartItem'

const Cart = ({navigation}) => {

    const [cartItems, setCartItems] = useState(cartData)

    return (
        <Layout>
            <Text style={styles.heading}>
                {
                    cartItems?.length > 0 ? `You have  ${cartItems.length} items in your cart` : "Your cart is  empty"
                }
            </Text>
            {
                cartItems?.length > 0 && (
                    <>
                        <ScrollView>
                            {
                                cartItems.map((item) => {
                                    return <CartItem item={item} key={item._id} />
                                })
                            }

                        </ScrollView>
                        <View>
                            <PriceTable title={"Price"} price={` ₹ 9999`} />
                            <PriceTable title={"Tax"} price={` ₹ 20`} />
                            <PriceTable title={"Shipping"} price={` ₹ 100`} />
                            <View style={styles.grandTotal}>
                                <PriceTable title={"GrandTotal"} price={` ₹ 77880`} />
                            </View>
                            <TouchableOpacity style={styles.checkout}  onPress={() => alert("checkout page")}>
                                <Text style={styles.text}>CHECKOUT</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )
            }
        </Layout>
    )
}

export default Cart

const styles = StyleSheet.create({
    heading: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 20,
    },
    grandTotal: {
        elevation: 2,
        padding: 8,
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: "lightgray",
        borderRadius: 5
    },
    checkout:{
        justifyContent:"center",
        alignItems:"center",
        marginTop:10,
        backgroundColor:"#597445",
        height:40,
        marginHorizontal:20,
        borderRadius:5,
    },
    text:{
        color:"white",
        fontWeight:'bold'
    }
})