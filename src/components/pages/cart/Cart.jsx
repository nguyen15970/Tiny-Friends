import {useState} from "react";
import "./cart.scss";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import Cartitem from "../../CartItem/Cartitem";
import { useSelector } from "react-redux";
import { productCart } from "../../../redux/selector";
import { Link } from "react-router-dom";



export const Cart = () => {
  document.title ='Giỏ hàng'
  const listCart = useSelector(productCart);
  const [total, setTotal] = useState(0);
  return (
    <div className="cart">
      <Header></Header>
      <div className={listCart.length === 0 ?'alert-active alert':'alert'}>
        Bạn không có sản phẩm nào
        <Link to='/products'><br/>Quay lại cửa hàng</Link>
      </div>
      <div className={listCart.length == 0 ? 'cartcontainer-active' : ' cartcontainer'}>
        <div>
        <h1>GIỞ HÀNG</h1>
        <ul className="product-list">
          {listCart.map((list,index) => (
            <Cartitem
              name={list.tenSanpham}
              price={list.gia}
              img={list.img}
              id={list.id}
              number={list.number}
              totalData ={setTotal}
            />
          ))}
        </ul>
        <div className="payment">
          <p>Tổng thanh toán :{listCart.length} sản phẩm </p>
          <div className="payment-price">
            <p>{total} Đ</p>
            <button className="button">Mua ngay</button>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
