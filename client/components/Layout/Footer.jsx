import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { useCustomHook } from '../../hooks/customHook';
import { logout } from '../../redux/features/auth/userAction';


const Footer = () => {

  const route = useRoute()
  const navigation = useNavigation()
  const dispatch = useDispatch();
  const loading = useCustomHook(navigation, path ="login")

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate("home")}>
        <AntDesign name="home" size={27} color="#524C42" style={route.name === "home" && styles.active} />
        <Text style={[styles.input, route.name === "home" && styles.active]}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menu}  onPress={() => navigation.navigate("notification")}>
        <AntDesign name="bells" size={27} color="#524C42"  style={route.name === "notification" && styles.active} />
        <Text style={[styles.input , route.name === "notification" && styles.active]}>Notification</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menu}  onPress={() => navigation.navigate("cart")}>
        <AntDesign name="shoppingcart" size={27} color="#524C42"  style={route.name === "cart" && styles.active} />
        <Text style={[styles.input,  route.name === "cart" && styles.active]}>Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menu}  onPress={() => navigation.navigate("account")}>
        <AntDesign name="user" size={27} color="#524C42"  style={route.name === "account" && styles.active} />
        <Text style={[styles.input,  route.name === "account" && styles.active ]}>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menu}  onPress={() => {dispatch(logout())}}>
        <AntDesign name="logout" size={27} color="#524C42" />
        <Text style={styles.input}>Logout</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,

  },
  menu: {
    alignItems: "center"
  },
  input: {
    color: "#524C42",
    fontWeight: "bold",
    fontSize: 12,
  },
  active: {
    color: "#481E14"
  }
})