import React from 'react'
import { Routes , Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import Navbar from '../components/navbar/Navbar'
import MenuNavbar from '../components/navbar/MenuNavbar'
import Banner from '../components/banner/Banner'
import MainMenu from '../components/menu/MainMenu'
import Product from '../components/product/Product'

const Index = () => {
  return (
    <Routes>
        <Route path='/' element={<>
            <Navbar/>
            <MenuNavbar/>
            <Banner/>
            <MainMenu/>
            <Product/>
        </>}/>
    </Routes>
  )
}

export default Index