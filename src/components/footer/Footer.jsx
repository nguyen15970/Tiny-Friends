import React from 'react'
import "./footer.scss"
import img from '../../images/4_nhan_vat.png'
import { AiOutlineInstagram, } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";


function Footer() {
  return (
    <div className='footer'>
      <div className="footer-item">
          <div className="footer-title">LINH VẬT CỦA CỬA HÀNG</div>
          <img src={img} alt="" />
          <div className="content">TINY FRIENDS</div>
      </div>
       <div className="footer-item info">
          <div className="title-info">Giới thiệu</div>
          <p>Về chúng tôi</p>
          <p>Sản phẩm</p>
          <p>Quà lưu niệm</p>
          <p>Cửa hàng</p>
      </div> 
      <div className="footer-item info">
          <div className="title-info">Điều khoản</div>
          <p>Điều khoảng sử dụng</p>
          <p>Quy tắc sử dụng</p>
      </div> 
      <div className="contact">
        <AiOutlineInstagram className='intag-icon'/>
        <FaFacebook className='fb-icon'/>
      </div>  
    </div>
  )
}

export default Footer