import React, {useState,useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Empty from '../../components/empty/Empty'
import {ADD_TO_CART, DEC_FORM_CART, REMOVE_ALL_FROM_CART, REMOVE_FROM_CART} from "../../context/action/actionType"
import { BsTrash3Fill } from "react-icons/bs"
import Footer from "../../components/footer/Footer"
import "./Cart.css"

const BOT_TOKEN = "5907174313:AAFFOigtJZOM84iU2vS8Bvt10HQFIv7Pe-U"
const CHAT_ID = "-1001817488997"
// CHAT ID NI OLISH
// https://api.telegram.org/bot5907174313:AAFFOigtJZOM84iU2vS8Bvt10HQFIv7Pe-U/getUpdates

// XABAR YUBORISH
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]

function Cart() {
  const cart = useSelector(s => s.cart)
  const dispatch = useDispatch()
  // useState yordamida qiymat olsak - Controlled form
  const [name, setName] = useState("")
  // useRef yordamida qiymat olsak - Uncontrolled form
    const tel = useRef()
    const address = useRef()
  


  const handleSubmitMsg = ()=>{
    let text = ""
    text += `Ismi: ${name} %0A`
    text += `Tel: ${tel.current.value} %0A`
    text += `Manzil: ${address.current.value} %0A`

    cart?.forEach(item =>{
      text += `Nomi: ${item.name} %0A`
      text += `Narxi: ${item.price} %0A`
      text += `Miqdori: ${item.quantity} %0A%0A`
    })
    text += `Jami: ${cart?.reduce((a,b) => a +(b.price * b.quantity), 0)}`

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`

    let api = new XMLHttpRequest()
    api.open("GET", url,true)
    api.send()
    dispatch({type: REMOVE_ALL_FROM_CART})
  }
  return (
    <div>
      {
        !cart.length ? 
        <Empty
        url="https://uzum.uz/static/img/shopocat.8cee444.png" 
        title="Savatda hozircha mahsulot yoʻq"
        desc="Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
        btn="Akkountga kirish"
        /> : 
        <div className='container cart__wrapper'>
          <div className='cart__form1'>
          <h2 className='cart__main__h2'>Savatcha:</h2>
          {
            cart?.map((item, inx) => <div className='cart__card' key={inx}>
              <div className="cart__container">
              <div className="cart__cards1">
              <div className="cart__img">
              <img src={item?.img} width={200} alt="" />
              </div>
              <div className="cart__df">
              <h3>{item?.name}</h3>
              <BsTrash3Fill className='cart__delete__btn' onClick={() => dispatch({ type: REMOVE_FROM_CART, payload: item })}></BsTrash3Fill>
              <span className='cart__delete__span' onClick={() => dispatch({ type: REMOVE_FROM_CART, payload: item })}>delete</span>
              <div className="cart__bottom">
              <p className='sotuvchi'>Sotuvchi:  Mobi Land</p>
              <div className="kopkina__buttons">
              <button className='cart__card__buttons color__var color__var1' onClick={() => dispatch({ type: DEC_FORM_CART, payload: item })}>-</button>
              <button className='cart__card__buttons color__white'>{item?.quantity}</button>
              <button className='cart__card__buttons color__var color__var2' onClick={() => dispatch({ type: ADD_TO_CART, payload: item })} >+</button>
              </div>
              <p className='cart__bottom__price'>{item?.price * item?.quantity} so'm</p>
              </div>
              </div>

              </div>

              </div>
              
            </div>)
          }
          </div>
          <div className='cart__form2'>
            <h3>Siz uchun eshikkacha bepul yetkazib berish mavjud</h3>
            <p>Tanlovingizga koʻra tez yetkazib berish</p>
            <hr />
            <h4 className='buyurtma'>Buyurtmangiz:</h4>


            <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Ism' type="text" />
            <br />
            <input ref={tel} placeholder='number' type="number" />
            <br />
            <input ref={address} placeholder='address' type="text" />
            <button onClick={handleSubmitMsg} className='cart__form2__df__btn2'>Rasmiylashtirishga o'tish</button>

          </div>
          </div>
      }
      <Footer/>
    </div>
  )
}

export default Cart