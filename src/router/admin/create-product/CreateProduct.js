import React from 'react'
import "../Admin.css"
import {db} from "../../../server"
import { collection,addDoc } from "firebase/firestore"
import { useState } from 'react'

function CreateProduct() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [img, setImg] = useState("")
  const [loading, setLOading] = useState(false)

  const productRef = collection(db, "products")

  const handleSubmit = async (e)=>{
    e.preventDefault()
    setLOading(true)
    let newProduct = {
      name,
      price: +price,
      img
    }
    await addDoc(productRef,newProduct)
    .then(res => {
      console.log(res);
      setPrice("")
      setName("")
      setImg("")
    })
    .catch(res => console.log(res))
    .finally(()=> setLOading(false))

  }
  return (
    <div className='create-product'>
        <h2>CreateProduct</h2>
        <form onSubmit={ handleSubmit } action="">
            <input required value={name} onChange={e => setName(e.target.value)} type="text" placeholder='name'/>
            <input required value={price} onChange={e => setPrice(e.target.value)} type="number" placeholder='price'/>
            <input required value={img} onChange={e => setImg(e.target.value)} type="text" placeholder='img'/>
            <button type='submit' disabled={loading}>{loading ? "Loading ..." : "Create Product"}</button>
        </form>
    </div>
  )
}

export default CreateProduct