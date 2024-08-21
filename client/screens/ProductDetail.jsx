import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { productData } from '../data/productData'
import Layout from '../components/Layout/Layout'


const ProductDetail = ({ route }) => {

  const { params } = route
  const [pDetails, setPDetails] = useState({})
  const [qty, setQty] = useState(1)

  // get product detail
  useEffect(() => {
    const getData = productData.find((p) => {
      return p?._id === params?._id
    })

    setPDetails(getData)
  }, [params?._id])

  const handleIncrement = () => {
    if (qty === 10) return alert("You can't add more than 10 quantity")
    setQty(qty + 1)
  }

  const handleDecerement = () => {
    if (qty <= 1) return
    setQty(qty - 1)
  }
  return (
    <Layout >
      <Image source={{ uri: pDetails?.imageUrl }} style={styles.image} />

      <View style={styles.container} >

        <Text style={styles.name}>{pDetails?.name}</Text>
        <Text style={styles.name}>{pDetails?.quantity > 0 ? <Text>Price: ₹ {pDetails.price}</Text>  : <Text style={{textDecorationLine:"line-through", color:"red"}}>Out of Stock</Text> }</Text>
        <Text><Text style={{ fontWeight: "bold" }}>Details:</Text> {pDetails?.description}</Text>

        <View style={styles.btnContainer}>

          <TouchableOpacity style={styles.cart}
            onPress={() => alert(`${qty} items are added to cart` )}
            disabled={pDetails?.quantity <= 0}
            >
            <Text style={styles.cartText}>
              {
                pDetails?.quantity > 0 ? "ADD TO CART" : <Text >OUT OF STOCK</Text> 
              }
            </Text>
          </TouchableOpacity>

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
    </Layout>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  image: {
    height: 400,
    width: "100%"
  },
  container: {
    marginTop: 10,
    paddingHorizontal: 10
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 20
  },
  cart: {
    backgroundColor: "#597445",
    borderRadius: 5,
    height: 40,
    width: 150,
    justifyContent: "center",
  },
  cartText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold"
  },
  btnQty: {
    backgroundColor: "#729762",
    borderRadius: 5,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5
  },
  btnText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  }

})