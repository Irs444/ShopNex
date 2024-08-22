import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Checkout = () => {
  return (
    <View>
      <Text>Payment Options</Text>
      <Text>Total Amount: 1297</Text>
      <View>
        <Text>Select your Payment Mode</Text>
        <TouchableOpacity>
            <Text>Cash on Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>Online (Credit | Debiit Card)</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Checkout

const styles = StyleSheet.create({})