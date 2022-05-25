import { useState} from 'react'
import './detail.scss'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import { Link } from 'react-router-dom'
import Info from '../../info/Info'
import { listProductMore } from '../../../fakeProducts'
import { useDispatch } from 'react-redux'
import { AddtoCart } from '../../../redux/action'
import { useSelector } from 'react-redux'
import {productCart} from '../../../redux/selector'



export const Detail = ({productDetail}) => {
  const [count, setCount] = useState(1);
  const Dispatch = useDispatch()
  var listCart  = useSelector(productCart)

  
  productDetail.number=count
  document.title = productDetail.tenSanpham


  const AddtocartOnClick = () =>{

    // if(!listCart.length){
    //   Dispatch(AddtoCart(productDetail))
    //   alert('DÃ THÊM VÀO GIỎ HÀNG')
    // }
    var check 
    // Dispatch(AddtoCart(productDetail))
    for(let i = 0 ; i< listCart.length ; i++){
      if(listCart[i].id === productDetail.id){
        check =true
      }
      else{
        check = false
      }
    }
    if(check){
      alert("SẢN PHẨM ĐÃ CÓ TRONG GIỎ HÀNG")
    }
    else{
      Dispatch(AddtoCart(productDetail))
      alert('DÃ THÊM VÀO GIỎ HÀNG') 
    }
  }

  return (
    <div className='detail'>
      <Header/>
      <div className="detailcontainer">
          <div className="detailproduct">
            <p>Quà lưu niệm / Ly giữ nhiệt - <Link to='/products' style={{color:'#ccc'}}>nắp vòm giữ nhiệt - chom</Link></p>
            <div className="product-iitem">
              <img src={productDetail.img} alt="" onClick={AddtocartOnClick}/>
              <div className="product-info">
                <div className="product-name">{productDetail.tenSanpham}</div>
                <div className="product-describe">Chất liệu nhựa , nắp vòm , có ống hút đi kèm</div>
                <div className="product-price">{productDetail.gia} Đ </div>
                <div className="count">
                  <div className={count === 1 ? "minus-active minus":"minus"} onClick={() => count===1 ? setCount(1) :setCount(count -1)}>-</div>
                  <div className="count-number">{count}</div>
                  <div className="flus"onClick={() => setCount(count+1)}>+</div>
                </div>
                <button className='button' onClick={AddtocartOnClick}>Thêm vào giỏ hàng</button>
              </div>
            </div>
          </div>
          <p className='more-product'>GỢI Ý CHO BẠN</p>
      </div>
         <div className="detail-info">
          <div className="info-member">
              {listProductMore.map(list =>(
                <Info img={list.img} text={list.tenSanpham} key={list.id} price={list.gia}/>
              ))}
              </div>
         </div>
      <Footer/>

    </div>
  )
}