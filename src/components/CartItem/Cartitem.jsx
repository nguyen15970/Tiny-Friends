import {Fragment, useState} from 'react';
import { useSelector } from 'react-redux';
import { productCart } from '../../redux/selector';


const Cartitem = ({name,price,img,id,number , totalData}) => {
    const listCart = useSelector(productCart)
    const [count, setcount] = useState(number);
    const [list, setList] = useState(1);

    
    
    var total = 0
   
    for(let i = 0 ; i < listCart.length ; i++ ) {
      listCart[i].id === id ? listCart[i].sumTotal = price * count :<Fragment/>
      total = total + listCart[i].sumTotal

    }
    totalData(total)
    const handleDelete = () =>{

       for(let i = 0 ; i < listCart.length ; i++){
          if(listCart[i].id == id){
            setList(list+1)
            listCart.splice(i,1)
          }
       }
    }
    const handleCountOnclick = () => {
      count <= 1 ? setcount(1) :setcount(count-1)
    }
    return (
        <div>
             <li className="product-item-cart" key={id}>
              <img  src={img} alt="" />
              <div className="product-list-right">
                <div className="product-detail">
                  <div className="product-detail-title">{name}</div>
                  <div className="product-detail-content">Ốp lưng chất liệu dẻo , chống dơ , họa tiết caro Dành cho các dòng Iphone</div>
                </div>
                <div className="classsify">
                  <p className='classify-title'>Phân loại :</p>
                  <p>Móc khóa</p>
                </div>
                <div className="count" >
                  <div className={count <= 1 ? 'minus-active minus' :'minus'} onClick={handleCountOnclick} >-</div>
                  <div className="count-number">{count}</div>
                  <div className="flus" onClick={() => setcount(count + 1)}>+</div>
                </div>
                <div className="cart-price">Giá : {price * count} Đ</div>
                <div className="delete" onClick={handleDelete}>X</div>
              </div>
            </li>
        </div>
    );
}

export default Cartitem;
