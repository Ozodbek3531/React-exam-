import React from 'react'
import Footer from '../../components/footer/Footer'
import "./Pay.css"

function Pay() {
  return (
    <div className='pay__container'>
      <div className="pay__card">
        <h1>To'lov</h1>
        <p className='pay__card__alone_p'>Buyurtma yoki shaxsiy ID raqamingizni bexato kiriting</p>
        <input required placeholder='Namuna: A777 yoki M333' type="text" />
        <br />
        <button>Tasqiqlash</button>
        <p className='pay__letter'>B - buyurtma uchun</p>
        <p className='pay__letter'>A - akkount uchun</p>
        <p className='pay__letter'>M - rassrochkani so'ndirish uchun</p>
      </div>
      <Footer/>
    </div>
  )
}

export default Pay