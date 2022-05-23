import React from 'react'
import './login.scss'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import imgLogin from '../../../images/4_nhan_vat.png'
import { Link } from 'react-router-dom'
import Button from '../../button/Button'

export const Login = () => {
  return (
    <div className ='login'>
      <Header/>
      <div className="logincontainer form">
        <div className="form-left login">
          <img src={imgLogin} alt="" />
        </div>
        <div className="form-right login" >
          <p  className='check'>Bạn có phải là thành viên?
            <Link to='/signup' style={{color:'blue'}}>Đăng ký ngay</Link>  
          </p>
          <h1>Đăng nhập vào <br/> Tiny Friends</h1>
          <div className="user">
            <p>Tên người dùng hoặc địa chỉ Email</p>
            <input type="text"  placeholder='Email hoặc tên đăng nhập'/>
          </div>
          <div className="password">
            <p>Password</p>
            <input type="password"  placeholder='Password'/>
          </div>
          <Button text='ĐĂNG NHẬP' w='120px' h='40'/>
        </div>

      </div>
      <Footer/>
    </div>
  )
}
