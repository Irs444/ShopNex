import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Dashboard = () => {
  return (
    <Layout>
      <View style={styles.main}>
        <Text style={styles.heading}>Dashboard</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity  style={styles.btn}>
            <AntDesign name="edit" style={styles.icon}  />
            <Text style={styles.text}>Manage Products</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.btn}>
            <AntDesign name="edit" style={styles.icon}  />
            <Text style={styles.text}>Manage Categories</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.btn}>
            <AntDesign name="user" style={styles.icon}  />
            <Text style={styles.text}>Manage Users</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.btn}>
            <AntDesign name="bars" style={styles.icon}  />
            <Text style={styles.text}>Manage Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity  style={styles.btn}>
            <AntDesign name="infocirlceo" style={styles.icon}  />
            <Text style={styles.text}>About App</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Layout>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  main:{
    height: '100%',
  },
  heading:{
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center",
    backgroundColor:"#597445",
    color:"white",
    padding:10,
    margin:10,
    borderRadius:5
  },
  btnContainer:{
    marginVertical:20,
    marginHorizontal:10
  },
  btn:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"lightgray",
    padding:10,
    borderRadius:4,
    elevation:2,
    marginBottom:20
  },
  icon:{
    fontSize:25,
    marginRight:15,
    marginLeft:10
    
  },
  text:{
    fontSize:18
  }
})