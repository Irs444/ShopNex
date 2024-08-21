import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ProductCard = ({ pro }) => {

  const navigation = useNavigation()
  const handledetail = (id) => {
    navigation.navigate("productdetail", { _id: id })
    console.log(id);
  }

  const handleCart = (id) => {
    alert("Product added to cart")
    console.log(id);
    
  }
  return (
    <View>
      <View style={styles.card}>
        <Image source={{ uri: pro?.imageUrl }} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{pro?.name}</Text>
        <Text style={styles.cardDes}>{pro?.description.substring(0, 40)} ...more</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnText} onPress={() => handledetail(pro._id)}>
            <Text style={styles.btn1}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCart}  onPress={() => handleCart(pro._id)}>
            <Text style={styles.btn1}>ADD TO CART</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
  card: {
    // borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    width: "50%",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
    elevation: 5,
    borderRadius: 5
  },
  cardImage: {
    height: 150,
    width: "100%",
    marginBottom: 10
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 5
  },
  cardDes: {
    fontSize: 12,
    textAlign: "left"
  },
  btnContainer: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "space-evenly",
    alignItems: "center"

  },
  btnCart: {
    elevation: 2,
    backgroundColor: "#597445",
    borderRadius: 3,
    width: 90,
    height: 30,
    justifyContent: "center",
    marginHorizontal: 10

  },
  btnText: {
    elevation: 2,
    backgroundColor: "#729762",
    borderRadius: 3,
    width: 90,
    height: 30,
    justifyContent: "center",
    marginHorizontal: 10

  },
  btn1: {
    textAlign: "center",
    fontSize: 12,
    color: "white",
    fontWeight: "bold"
  }
})