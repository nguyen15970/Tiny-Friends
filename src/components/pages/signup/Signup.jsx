import React from 'react'
import Button from '../../../components/button/Button'
import Footer from '../../../components/footer/Footer'
import Header from '../../../components/header/Header'
import { Link } from 'react-router-dom'
import imgLogin from '../../../images/4_nhan_vat.png'
import  './signup.scss'


export const Signup = () => {
  return (
    <div className ='signup'>
    <Header/>
    <div className="signupcontainer ">
      <div className=" form-signup">
        <img src={imgLogin} alt="" />
      </div>
      <div className="form-right login" >
        <p  className='check'>Bạn có phải là thành viên?
          <Link to='/login' style={{color:'blue'}}>Đăng nhập ngay</Link>  
        </p>
        <h1>Đăng ký vào <br/> Tiny Friends</h1>
        <div className="username">
          <p>Họ</p>
          <p>Tên</p>
        </div>
        <div className="input">
          <input type="text" className='ho' placeholder='Họ'/>
          <input type="text" className='ten' placeholder='Tên'/>
        </div>
        <div className="user">
          <p>Email</p>
          <input type="email"  placeholder='Email'/>
        </div>
        <div className="password">
          <p>Mật khẩu</p>
          <input type="password"  placeholder='6+ ký tự'/>
        </div>
        <div className="checkbox">
          <input type="checkbox" />
          <p>Tạo tài khoản có nghĩa là bạn đã đồng ý <Link to='/signup' style={{color:'blue'}}> Điều <br/> khoản dịch vụ ,Chính sách 
            , quyền riêng tư</Link> và <br/> <Link  to='/signup' style={{color:'blue'}}>Cài đặt thông báo mặc định của chúng tôi</Link></p>
        </div>
        <Button text='ĐĂNG KÝ' w='120px' h='40'/>
      </div>


    </div>
    <Footer/>
  </div>
  )
}
