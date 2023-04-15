import React from 'react'
import Empty from '../../components/empty/Empty'
import { useSelector, useDispatch } from 'react-redux'
import { AiFillHeart,AiFillStar,AiOutlineStar } from 'react-icons/ai';
import { REMOVE_FROM_HEART } from "../../context/action/actionType"
import { ADD_TO_CART } from "../../context/action/actionType"
import "./Wishlist.css"

function Wishlist() {
  const dispatch = useDispatch()
  const heart = useSelector(s => s.heart)
  return (
    <div>
      {
        heart.length === 0 ?
          <Empty
            url="https://uzum.uz/static/img/hearts.cf414be.png"
            title="Sizga yoqqanini qoʻshing"
            desc="Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi"
            btn="Akkauntga kirish"
          /> :
          <div className='product__wrapper' style={{ justifyContent: "flex-start", paddingLeft: "55px" }}>
            {
              heart?.map((item, inx) => <div className='product__card' key={inx}>
                <div className="pro__card-img">
                  <img src={item.img} alt="" />
                </div>
                <p className='pro__card-title'>{item.name}</p>
                <div className='pro__bottom'>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <div className='pro__bottom2'>
                  <div>
                    <del>{item.price * 1.2} so'm</del>
                    <p className='pro__card-price'>{item.price} so'm</p>
                  </div>
                  <div className='pro__cart'>
                    <button onClick={() => dispatch({ type: ADD_TO_CART, payload: item })} className='bir__klik'>Bir klikda olish</button>
                  </div>
                </div>
                <div className='pro__heart'>
                  <AiFillHeart onClick={() => dispatch({ type: REMOVE_FROM_HEART, payload: item })} />
                </div>
              </div>)
            }
          </div>
      }
    </div>
  )
}

export default Wishlist