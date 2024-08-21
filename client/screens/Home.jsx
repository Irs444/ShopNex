import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../components/Layout/Layout'
import Categories from '../components/category/Categories'
import Banner from '../components/banner/Banner'
import Product from '../components/products/Product'
import Header from '../components/Layout/Header'

const Home = () => {
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