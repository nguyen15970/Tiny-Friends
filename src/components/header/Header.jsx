import { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import img from "../../images/shoppingcart.png";
import { useSelector } from "react-redux";
import { productCart } from "../../redux/selector";
import { AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { listMenu } from "../../fakeProducts";
import MobileItem from "../headerMobile/MobileItem";

function Header() {
  var listCart = useSelector(productCart);
  const [Check, setCheck] = useState(false);

  const handleMenuOnclick = (i) => {
    for (let i = 0; 1 < listMenu.length; i++) {
      if ((listMenu[i].id = i)) {
        console.log(true);
      } else {
        console.log(false);
      }
    }
  };

  return (
    <div>
      <div className="header">
        <ul className="menu">
          <AiOutlineMenu className="list-icon" onClick={() => setCheck(true)} />
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
              <p
                className={
                  listCart.length === 0 ? "count-cart-active" : "count-cart"
                }
              >
                {listCart.length}
              </p>
            </li>
          </Link>
        </ul>
      </div>
      <div
        className={
          Check ? "header-mobile-active header-mobile" : "header-mobile"
        }
      >
        <div className="close-menu-icon">
          <AiOutlineMenuUnfold onClick={() => setCheck(false)} />
        </div>
        <div className="search-mobile"></div>
        <ul className="menu-mobile-list">
          {listMenu.map((list) => (
            <MobileItem
              text={list.text}
              index={list.id}
              slug={list.slug}
              active={list.active}
              onclick={handleMenuOnclick}
            />
          ))}
        </ul>
        <div className="icon-menu-mobile">
          <BsFacebook />
          <BsInstagram />
        </div>
      </div>
      <div
        className={Check ? "background background-active" : "background"}
      ></div>
    </div>
  );
}

export default Header;
