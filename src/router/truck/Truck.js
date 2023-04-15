import React from 'react'
import Footer from "../../components/footer/Footer"
import "./Truck.css"

function Truck() {
  return (
    <>
    <div className='truck__container container'>
        <div className="truck__cards extra__with ">
          <h1>Buyurtma holati</h1>
          <p>Buyurtmani ko'rish uchun kerakli maydonlarni to'ldiring. Buyurtma raqami sizning raqamingizga SMS-xabar shaklida yuborilgan</p>
          <p>Buyurtma raqami *</p>
          <input required type="text" />
          <p>Buyurtma berilgandagi telefon raqami *</p>
          <input required placeholder='+___(__)___-__-__' type="text" />
          <button>Ko'rinish</button>
        </div>
        <div className="truck__cards extra__with2">
          <img src="https://asaxiy.uz/custom-assets/images/tracking.svg" alt="" />
        </div>
    </div>
        <Footer/>
    </>
  )
}

export default Truck