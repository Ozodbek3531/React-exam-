import React from 'react'
import "./Product.css"
import { AiOutlineHeart, AiOutlineShoppingCart, AiFillHeart, AiFillStar, AiOutlineStar } from "react-icons/ai"
import {HiTrash} from "react-icons/hi"
import { useDispatch, useSelector } from "react-redux"
import { ADD_TO_HEART, REMOVE_FROM_HEART, ADD_TO_CART } from "../../context/action/actionType"
import { Link } from 'react-router-dom'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from "../../server"
import { useState } from 'react'
import { useEffect } from 'react'
import { async } from '@firebase/util'


export const DATA = [
  {
    id: "pro-1",
    name: "Notebook HP ...",
    price: 2_9500_000,
    img: "https://images.uzum.uz/cfvjbt7hj8j9g698psj0/original.jpg",
  },
  {
    id: "pro-2",
    name: "Notebook Lenovo...",
    price: 2_710_000,
    img: "https://images.uzum.uz/cg87067g49devoaajqfg/original.jpg",
  },
  {
    id: "pro-3",
    name: "Notebook Lenovo ",
    price: 3_055_000,
    img: "https://images.uzum.uz/cehnjgqvtie1lhbfak2g/original.jpg",
  },
  {
    id: "pro-4",
    name: "martphone Xiaomi Redmi Note 11S ",
    price: 2_600_000,
    img: "https://images.uzum.uz/ceva21gl08k0o9qhjpp0/original.jpg",
  },
  {
    id: "pro-5",
    name: "G'ilof, shaffof, silicone, iPhone 7/8 SE/XR/X/XS/11/12/13 Pro/14 uchun",
    price: 13_000,
    img: "https://images.uzum.uz/cf8q07avtie1lhbhgfv0/original.jpg",
  },
  {
    id: "pro-6",
    name: "Idish yuvish uchun suyuqlik",
    price: 8000,
    img: "https://images.uzum.uz/cg7bvmnhj8j9g699p9eg/t_product_540_high.jpg#1678981355930",
  },
  {
    id: "pro-7",
    name: "Klassik kola + shakarsiz Kola + brendlangan stakan",
    price: 22_000,
    img: "https://images.uzum.uz/cg8mo37g49devoaalmgg/t_product_540_high.jpg#1678981355950",
  },
  {
    id: "pro-8",
    name: "Erkaklar futbolkasi Base",
    price: 39_000,
    img: "https://images.uzum.uz/cg6435ng49devoaa9np0/t_product_540_high.jpg#1678981355954",
  },
  {
    id: "pro-9",
    name: "Xurmo Date Bam, 650g",
    price: 22_000,
    img: "https://images.uzum.uz/cg63rsvg49devoaa9m00/t_product_540_high.jpg#1678981355960",
  },
  {
    id: "pro-10",
    name: "Bolalar krosovkalari",
    price: 195_000,
    img: "https://images.uzum.uz/cg7ej0nhgiov1qiebn3g/t_product_540_high.jpg#1678981355969",
  },
];

function Product({ admin }) {

  const dispatch = useDispatch()
  const heart = useSelector(s => s.heart)
  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState()

  const productRef = collection(db, "products")


  useEffect(() => {
    const fetchData = async () => {
      const getProducts = await getDocs(productRef)
      setData(getProducts.docs.map(item => ({ ...item.data(), id: item.id })))
    }
    fetchData()
  }, [refresh])

  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id))
      .then(res => setRefresh(!refresh))
      .catch(res => console.log(res))
  }

  return (
    <div>
      <div className="product__wrapper">
        {
          data?.map((item, inx) => <div className='product__card' key={inx}>
            <Link to={`/product/${item.id}`} state={item} className="pro__card-img">
              <img src={item.img} alt="" />
            </Link>
            <p className='pro__card-title'>{item.name}</p>

            <div className='pro__bottom'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <div className="bottom__top">
              <del>{item.price * 1.2} so'm</del>
              <p className='pro__card-price'>{item.price} so'm</p>
              {
                admin ? 
                <button className='bir__klik' onClick={()=> deleteProduct(item.id)}><HiTrash/> delete</button>
                :
                <button onClick={()=> dispatch({type: ADD_TO_CART, payload: item})} className='bir__klik'>Bir klikda olish</button>
              }
            </div>
            <div className='pro__heart'>
              {
                heart?.some(i => i.id === item.id) ?
                  <AiFillHeart onClick={() => dispatch({ type: REMOVE_FROM_HEART, payload: item })} /> :
                  <AiOutlineHeart onClick={() => dispatch({ type: ADD_TO_HEART, payload: item })} />
              }
            </div>

          </div>)
        }
      </div>
        <div className="footer__skill">
            <h1>Asaxiy kompaniyasi haqida</h1>
            <p>Butun O‘zbekiston bo‘ylab maishiy texnika va elektronika tovarlarini yetkazib beruvchi kompaniyamizning asosiy afzalligi – ko‘p yillik ish tajribasi va yaxshi nom qozonib ulgurganidir. Asos solinganidan buyon Asaxiy internet-do‘koni va uning jamoasi iste’mol bozorining talablari tendensiyalarini tinimsiz kuzatib kelmoqda; bu esa bizga eng so‘nggi texnologiyalar va innovatsion yechimlardan hamisha boxabar bo‘lib turish imkonini beradi
              <br />
              <br />
              .Kompaniiya mutaxassislari mijozlarimizning istaklarini diqqat bilan o‘rganishadi, shu bois resurs doimiy tarzda hamyonbop narxlardagi sifatli yangi mahsulotlar bilan boyitilib kelmoqda. </p>
              <br />
              <h3 className='footer__skill__h3__firstchild'>Kompaniyaning ish tamoyili</h3>
              <h3 className='footer__skill__h3__lastchild'>Bizning afzalliklarimiz</h3>
              <ul className="footer__collection">
                <li>"Asaxiy Books" MCHJ </li>
                <li>Ro'yxatdan o'tish raqami: 646439</li>
                <li>INN: 305829008</li>
                <li>MCHJ rahbari: Allayev Firuz Abdunasimovich</li>
              </ul>
              <br />
        </div>
    </div>
  )
}

export default Product