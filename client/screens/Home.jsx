import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import Categories from '../components/category/Categories'
import Banner from '../components/banner/Banner'
import Product from '../components/products/Product'
import Header from '../components/Layout/Header'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../redux/features/auth/userAction'

const Home = () => {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.user);  
    
    useEffect(() => {
        dispatch(getUserData());
        console.log(user);
    },[dispatch]);
    
    return (
        <Layout>
            <Header />
            <Categories/>
            <Banner/>
            <Product/>
        </Layout>
    )
}

export default Home

const styles = StyleSheet.create({})