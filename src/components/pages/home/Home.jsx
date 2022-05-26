import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import "./home.scss";
import imgCase15 from "../../../images/Case__15_.png";
import Widget from "../../widget/Widget";
import imgLygau from "../../../images/ly gau.jpg";
import imgLyvit from "../../../images/ly up con vit.png";
import imgLychuot from "../../../images/ly up con chuot.png";
import imgLytho from "../../../images/ly tho.jpg";
import imgTogether from "../../../images/together 1.png";
import imgMockhoa from "../../../images/key-chain-mockup-display-design-key-chain-mock-up-cozy-home-design-blank-rhombus-white-sublima.jpg";

import Title from "../../title";
import Button from "../../button/Button";
import Slider from "../../Slider/Slider";
import { listSlider } from "../../../fakeProducts";
import {AiOutlineLeft, BiChevronLeft ,AiOutlineRight} from "react-icons/ai";
import {useState} from 'react'
import { Link } from "react-router-dom";
export const Home = () => {
  const [slider, setSlider] = useState(1);
  document.title="Trang chủ"

  const minusOnclick = () =>{
      slider <= 1 ? setSlider(3) : setSlider(slider - 1)
  }
  const plusOnclick = () =>{
    slider >=3 ? setSlider(1) : setSlider(slider + 1)
}
  return (
    <div className="home">
      <Header />
      <div className="homecontainer">
        <div className="slider">
          {listSlider.map(list =>(
            <Slider active={list.active} img={list.img} id={list.id} slider={slider}></Slider>
          ))}
        <div className="slider-content">
          <div className="icon">
            <AiOutlineLeft className='icon-left' onClick={minusOnclick}/>
            <p>{slider}/3</p>
            <AiOutlineRight className="icon-right" onClick={plusOnclick}/>
          </div>
          <p className="friends">FRIENDS <br/>FOR LIFE</p>
          <Link to='/products' className="shownow"><Button text='SHOP NOW' w='172px' h='30px'/></Link>
        </div>
        </div>
        <Widget />
        <Title title="SẢN PHẨM BÁN CHẠY" />
        <div className="oplung">
          <div className="oplung-left">
            <div className="text">
              <div className="oplung-left-title">ỐP LƯNG</div>
              <div className="oplung-left-content">
                Kết hợp họa tiết caro với các nhân vật của Tiny Friends tạo ra
                những ốp lưng màu sắc đơn giản nhưng vẫn giữ nét dễ thương. Chất
                liệu nhựa cứng, chống bẩn
              </div>
              <div className="price">60.000Đ</div>
              <Link to='/products'><Button text="mua ngay" h="40px" w="150px" /></Link>
            </div>
          </div>
          <div className="oplung-right">
            <img src={imgCase15} alt="" />
          </div>
        </div>
        <ul className="lynhua-list">
          <li className="lynhua-item">
            <img src={imgLygau} alt="" className="lynhua-img" />
            <div className="content">
              <p>LY GIỮ NHIỆT - LIN</p>
               <Link to='/products'><Button text="110.000Đ" w="130px" h="45px" /></Link>
            </div>
          </li>
          <li className="lynhua-item">
            <img src={imgLyvit} alt="" className="lynhua-img" />
            <div className="content">
              <p>LY GIỮ NHIỆT NẮP vòm - CHOM</p>
               <Link to='/products'><Button text="110.000Đ" w="130px" h="45px" /></Link>
            </div>
          </li>
          <li className="lynhua-item">
            <img src={imgLychuot} alt="" className="lynhua-img" />
            <div className="content">
              <p>LY GIỮ NHIỆT NẮP vòm - DON</p>
               <Link to='/products'><Button text="110.000Đ" w="130px" h="45px" /></Link>
            </div>
          </li>
          <li className="lynhua-item">
            <img src={imgLytho} alt="" className="lynhua-img" />
            <div className="content">
              <p>LY GIỮ NHIỆT - AN</p>
               <Link to='/products'><Button text="110.000Đ" w="130px" h="45px" /></Link>
            </div>
          </li>
        </ul>
        <Title title="CỬA HÀNG LƯU NIỆM" />
        <div className="oplung mockhoa ">
          <div className="oplung-left">
            <div className="text mockhoa-text">
              <div className="oplung-left-title">MÓC KHÓA</div>
              <div className="oplung-left-content">
                Móc khóa tình bạn, với thông điệp lưu giữ kỉ niệm với các người
                bạn nhỏ nhắn của Tiny Friends , luôn bên bạn mọi lúc mọi nơi.{" "}
                <br />
                Móc khóa dẻo nhựa in hình các nhân vật dễ thương của Tiny
                Friends , phủ keo bóng chất lượng, móc kim loại chắc chắn, bền
                đẹp.
              </div>
              <div className="price">60.000Đ</div>
              <Link to='/products'><Button text="mua ngay" h="40px" w="150px" /></Link>
            </div>
          </div>
          <div className="oplung-right">
            <img src={imgMockhoa} alt="" />
          </div>
        </div>

        <div className="cauchuyenvechungtoi">
          <div className="about">
            <div className="about-title">CÂU CHUYỆN VỀ CHÚNG TÔI</div>
            <div className="about-content">
              Tiny Friends là thương hiệu đồ lưu niệm nổii tiếng với hình tượng
              là các nhân vật dễ thương đến từ thế giới Tiny World ...
            </div>
            <Link to ='/introduce'><Button text="XEM NGAY" h="40px" w="120px" /></Link>
          </div>
          <img src={imgTogether} alt="" />
        </div>
      </div>

      <Footer />
    </div>
  );
};
