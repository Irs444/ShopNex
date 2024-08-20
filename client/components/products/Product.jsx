import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductCard from './ProductCard'
import { productData } from '../../data/productData'

const Product = () => {
  return (
    <View>
      {
        productData.map((pro) => {
          return (
            <ProductCard key={pro._id} pro={pro} />
          )
        })
      }
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})