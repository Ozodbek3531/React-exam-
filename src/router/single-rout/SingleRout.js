import React from 'react'
import "./SingleRout.css"
import { AiFillStar, AiOutlineHeart,AiFillHeart } from "react-icons/ai"
import { BsFillBagCheckFill } from "react-icons/bs"
import {useLocation} from "react-router-dom"
import { ADD_TO_HEART, REMOVE_FROM_HEART } from "../../context/action/actionType"
import { useDispatch,useSelector } from "react-redux"


function SingleRout() {
  const dispatch = useDispatch()
  const heart = useSelector(s => s.heart)

  // let params = useParams()
  const oneItem = useLocation()?.state
  console.log(oneItem);
  if( ! oneItem){
    return <div style={{textAlign: "center"}}>
      <h1>404</h1>
      <p>mahsulot topilmadi</p>
    </div>
  }
  return (
    <div className='single__container container'>
      <div className="single__card extra__card">
      <img src={oneItem?.img} alt="" />
      </div>
      <div className="single__card extra__card2">
        <div className="single__card__orab">
            <AiFillStar className='single__star'/>
            <span>5.0 (ajoyib natija)</span>
            <span className='single__left'>Ko'proq 200 buyurtma</span>
            <div className="leftga">
              {
              heart?.some(i => i.id === heart.id) ?
              <AiFillHeart onClick={() => dispatch({ type: REMOVE_FROM_HEART, payload: heart })} /> :
              <AiOutlineHeart onClick={() => dispatch({ type: ADD_TO_HEART, payload: heart })} />
              }
            </div>
            <span>istaklarga</span>
        </div>
      <h2 className='single__main__h2'>{oneItem?.name}</h2>
      <div className="single__orab">
      <span className='orab__span'>Sotuvchi: </span> <span>Gilos market</span>
      </div>
      <div className="single__orab">
      <span className='orab__span'> Yetkazib berish:</span> <span>1 kun, bepul</span>
      </div>
      <hr />
      <h3 className='single__main__h2 razmer'>Размер:</h3>
      <div className="singlroute__btns single__orab">
        <button> 240 MM</button>
        <button> 260 MM</button>
        <button> 280 MM</button>
        <button> 220 MM</button>
      </div>
      
      <div className="single__card__price">
      <span className='orab__span margin__top'>Narxi: </span>
      <h3 className='single__main__h2 font'>{oneItem.price} so'm</h3>
      <del className='single__del'>{oneItem.price * 1.2}</del> 
      <span className='single__del som'>so'm</span>
      </div>
      <button className='price__btn'><span>Oyiga {oneItem.price * 1.2 / 12} so'mdan</span> muddatli to'lov</button>
      <div className="single__btn__df">
        <button className='single__btn__df__button button__btn1'>Savatga qo'shish</button>
        <button className='single__btn__df__button button__btn2'>Tugmani 1 bosishda xarid qilish</button>
      </div>
      <button className='price__button '><BsFillBagCheckFill/> Bu haftada 30 kishi sotib oldi</button>

      </div>
    </div>
  )
}

export default SingleRout