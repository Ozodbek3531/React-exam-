import React from 'react'
import Banner from '../../components/banner/Banner'
import Product from '../../components/product/Product'
import Footer from "../../components/footer/Footer"

function Home() {
  return (
    <div className='container'>
        <Banner/>
        <div className="container">

        <Product admin={false}/>  
        </div>
        <Footer/>
    </div>
  )
}

export default Home