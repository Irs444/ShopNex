import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { productData } from '../data/productData'

const ProductDetail = ({route}) => {

  const {params} = route
  const [pDetails , setPDetails] = useState({})
  // get product detail
   useEffect(() => {
      const getData = productData.find((p) => {
        return p?._id === params?._id
      })

      setPDetails(getData)
   }, [params?._id])
  return (
    <View>
      <Text>{JSON.stringify(pDetails)}</Text>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({})