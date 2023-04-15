import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import "./Admin.css"
import CreateProduct from './create-product/CreateProduct'
import ManageProduct from './manage-product/ManageProduct'
import { Routes, Route } from 'react-router-dom'

function Admin() {
  return (
    <div className='admin'>
        <Sidebar/>
        <div className="admin__content">
            <Routes>
                <Route path='/create-product' element={<CreateProduct/>}/>
                <Route path='/manage-product' element={<ManageProduct/>}/>
            </Routes>
        </div>
    </div>
  )
}

export default Admin