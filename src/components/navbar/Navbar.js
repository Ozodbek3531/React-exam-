import React, { useState } from "react";
import "./Navbar.css";
import { HiOutlineSearch } from "react-icons/hi";
import { FaTshirt } from "react-icons/fa";
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineHeart, AiOutlineHome, AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { RiHeadphoneFill, RiCupFill } from "react-icons/ri"
import { BsChevronRight,BsGlobe } from "react-icons/bs"
import { GiChelseaBoot, GiSchoolBag } from "react-icons/gi"
import { NavLink,useLocation } from "react-router-dom";
import { FiX } from "react-icons/fi"
import {MdOutlinePayment} from 'react-icons/md'
function Navbar() {
  const {pathname} = useLocation()
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const defaultCase = () => {
    setShow(false);
  };
  const checkAdmin = () => {
    setShow(true);
  };

  if(pathname.includes("admin")){
    return <></>
  }
  return (
    <>
      <div className="navbar">
        <div className="navbar__top">
          <NavLink to={"/"} className="nav__logo">
            <img src="https://asaxiy.uz/custom-assets/images/logos/asaxiy-logo.svg" alt="" />
          </NavLink>
          
          <div className="nav__search">
            <input type="text" placeholder="Qidirish..." />
            <button>
              <HiOutlineSearch />
              <h4>Qidirish</h4>
            </button>
          </div>
          <div className="nav__icons">
            <NavLink to={"/"} className="nav__item nav__none">
              <AiOutlineHome />
              <p>bosh saxifa</p>
            </NavLink>
            <NavLink to={"pay"} className="nav__item">
              <MdOutlinePayment />
              <p>To'lov</p>
            </NavLink>
            <NavLink to={"truck"} className="nav__item">
              <img src="https://asaxiy.uz/custom-assets/images/icons/header/tracker.svg" alt="" />
              <p>Trek</p>
            </NavLink>
            <div className="nav__item">
              <BsGlobe/>
              <p>Ruscha</p>
            </div>
            <NavLink to={"cart"} className="nav__item">
              <AiOutlineShoppingCart />
              <p>Savatcha</p>
            </NavLink>
            <NavLink to={"/wishilist"} className="nav__item">
              <AiOutlineHeart />
              <p>Sevimlilar</p>
            </NavLink>
            <NavLink to={"/admin"} className="nav__item">
              <AiOutlineUser />
              <p>Admin</p>
            </NavLink>

          </div>
        </div>
        <hr />
        <div className="navbar__bottom">
          <ul className="nav__collection">
          <button onClick={() => setShow2(!show2)} className="navbar__bottom__bolimlar">
            {
              show2 ? <AiOutlineClose className="nav__var__color"/> : <AiOutlineMenu className="nav__var__color"/>
            }
            <span>Barcha bolimlar</span>
          </button>

            {
              show2 ?
                <div className="catalog">
                  <div className="catalog__wrapper">
                    <div className="catalog__icon">
                      <RiHeadphoneFill/>
                      <p>Ramazon chegirmalari</p>
                      <BsChevronRight/>
                    </div>
                    <div className="catalog__icon">
                      <RiCupFill/>
                      <p>Kitoblar</p>
                      <BsChevronRight/>
                    </div>
                    <div className="catalog__icon">
                      <FaTshirt/>
                      <p>Telefonlar va Gadjetlar</p>
                      <BsChevronRight/>
                    </div>
                    <div className="catalog__icon">
                      <GiChelseaBoot/>
                      <p>Kompyuter texnologiyasi</p>
                      <BsChevronRight/>
                    </div>
                    <div className="catalog__icon">
                      <GiSchoolBag/>
                      <p>Geymerlar uchun</p>
                      <BsChevronRight/>
                    </div>
                    <div className="catalog__icon">
                      <GiSchoolBag/>
                      <p>Maishiy texnika</p>
                      <BsChevronRight/>
                    </div>
                  </div>
                </div>
                : <></>
            }
                <span>Ramazon chegirmalari</span>
                <span>Yangiliklar</span>
                <span>Yangi kelganlar</span>
                <span>Chegirmalar</span>
                <span>Kitoblar</span>
                <span>Telefonlar va gadjetlar</span>
                <span>Televizorlar</span>
          </ul>
        </div>
      </div>
      {show ? (
        <>
          <div onClick={defaultCase} className="nav__shadow"></div>
          <div className="nav__login">
            <FiX onClick={defaultCase} className="nav__close" />
            <h3 style={{ textAlign: "center" }}>Admin panel kirish</h3>
            <input
              className="ad__inputs"
              type="text"
              placeholder="username"
            />
            <input
              className="ad__inputs"

              type="password"
              placeholder="password"
            />
            <button>Login</button>
          </div>
        </>
      ) : (
        <></>
      )}
    </>

  );
}

export default Navbar;
