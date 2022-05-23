import { useState} from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import { listMockhoa } from "../../../fakeProducts";
import "./product.scss";
import Productitem from "../../productitem/Productitem";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export const Product = ({productDetail}) => {

  document.title="Sản phẩm"
  //sesarch
  const [text, setText] = useState("");
  const handleInput = (e) => {
    setText(e.target.value);
  };
  const listSearch = [];
  for (var i = 0; i < listMockhoa.length; i++) {
    const stringLow = listMockhoa[i].tenSanpham.toLocaleLowerCase();
    const stringUp = listMockhoa[i].tenSanpham.toLocaleUpperCase();
    if (
      stringLow.includes(text.toLocaleLowerCase()) ||
      stringUp.includes(text.toLocaleUpperCase())
    ){
      listSearch.push(listMockhoa[i]);
      listMockhoa[i].active = true
      
    }
    else{
      listMockhoa[i].active = false
    }
    if(listSearch.length === 32){
      listMockhoa[i].active = true

    }
  }
  window.scrollTo(0, 0)
  console.log(listMockhoa)
  return (
    <div className="product">
      <Header></Header>
      <div className="productcontainer">
        <ul className="sibar">
          <li className="sibar-item">Tất cả</li>
          <Link to='#mockhoa'><li className="sibar-item">Móc khóa</li></Link>
          <Link to='#lygiunhiet'><li className="sibar-item">Ly giữ nhiệt</li></Link>
          <Link to='#napthuong'><li className="sibar-item" id='nap-thuong'>Nắp thường</li></Link>
          <Link to='#napvom'><li className="sibar-item" id='nap-vom'>Nắp vòm</li></Link>
          <Link to='#oplung'><li className="sibar-item">Ốp lưng</li></Link>
          <Link to='#sticker'><li className="sibar-item">Sticker</li></Link>
        </ul>
        <div className="product-content">
          <div className="filter">
            <input
              type="text"
              value={text}
              onChange={handleInput}
              placeholder="Tên sản phẩm"
            />
          </div>
          <div className="mockhoa" id="#mockhoa">
            <div className="product-title">MÓC KHÓA</div>
            <ul className="mockhoa-list">
              {listMockhoa.map((list, index) =>
                list.category === 1 ? (
                  <Productitem
                    alo={productDetail}
                    img={list.img}
                    name={list.tenSanpham}
                    price={list.gia}
                    id={index}
                    active={list.active}
                    slug={list.slug}
                  />
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
          <div className="lygiunhiet" id="#napthuong">
            <div className="product-title">LY GIỮ NHIỆT - NẮP THƯỜNG</div>
            <ul className="mockhoa-list">
              {listMockhoa.map((list) =>
                list.category === 2 ? (
                  <Productitem
                    alo={productDetail}
                    img={list.img}
                    name={list.tenSanpham}
                    price={list.gia}
                    key={list.id}
                    active={list.active}
                    slug={list.slug}
                  />
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
          <div className="lygiunhiet" id="#napvom">
            <div className="product-title">LY GIỮ NHIỆT - NẮP VÒM</div>
            <ul className="mockhoa-list">
              {listMockhoa.map((list) =>
                list.category === 3 ? (
                  <Productitem
                  alo={productDetail}
                    img={list.img}
                    name={list.tenSanpham}
                    price={list.gia}
                    key={list.id}
                    active={list.active}
                    slug={list.slug}
                  />
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
          <div className="lygiunhiet" id="#oplung">
            <div className="product-title">ỐP LƯNG</div>
            <ul className="mockhoa-list">
              {listMockhoa.map((list) =>
                list.category === 4 ? (
                  <Productitem
                  alo={productDetail}
                    img={list.img}
                    name={list.tenSanpham}
                    price={list.gia}
                    key={list.id}
                    active={list.active}
                    slug={list.slug}
                  />
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
          <div className="lygiunhiet" id="#sticker">
            <div className="product-title">STICKER</div>
            <ul className="mockhoa-list">
              {listMockhoa.map((list) =>
                list.category === 5 ? (
                  <Productitem
                  alo={productDetail}
                    img={list.img}
                    name={list.tenSanpham}
                    price={list.gia}
                    key={list.id}
                    active={list.active}
                    slug={list.slug}
                  />
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
