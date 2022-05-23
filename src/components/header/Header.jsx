import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import img from '../../images/shoppingcart.png'
import { useSelector } from "react-redux";
import { productCart } from "../../redux/selector";


function Header() {
  var listCart = useSelector(productCart)
  return (
    <div className="header">
      <ul className="menu">
        <Link to="/introduce" className="introduce-menu">
          <li>Giới thiệu</li>
        </Link>
        <Link to="/products" className="product-menu">
          <li>Quà lưu niệm</li>
        </Link>
        <Link to="/">
          <li className="logo">TINY FRIENDS</li>
        </Link>
        <Link to="/signup" className="signup-menu">
          <li>Đăng ký</li>
        </Link>
        <Link to="/login" className="login-menu">
          <li> Đăng nhập</li>
        </Link>
        <Link to="/cart" className="cart-menu">
          <li className="cart-menu-img">
            <img src={img} alt="" />
            <p className={listCart.length === 0 ?'count-cart-active' : 'count-cart'}>{listCart.length}</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Header;
