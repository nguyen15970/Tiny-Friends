import React from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import "./introduce.scss";
import img from "../../../images/TINYFRIEND.gif";
import { Link } from "react-router-dom";
import Widget from "../../widget/Widget";
import Title from "../../title";
import Info from "../../info/Info";

import imgTrieu from "../../../images/Trmieu Amnk pr0 vjp.jpg";
import imgTram from "../../../images/SA140304 Le Nguyen Quynh Tram.jpg";
import imgLin from "../../../images/lin.jpg";
import imgDoan from "../../../images/đoan.JPG";

export default function Introduce() {
  var listInfo = [
    {
      img: imgTrieu,
      text: "TRIÊU ANH",
    },
    {
      img: imgTram,
      text: "QUỲNH TRÂM",
    },
    {
      img: imgLin,
      text: "THẾ LIN",
    },
    {
      img: imgDoan,
      text: "KHÁNH ĐOAN",
    },
  ];
  document.title ='Giới thiệu'
  window.scrollTo(0, 0)
  return (
    <div className="introduce">
      <Header />
      <div className="introducecontainer">
        <div className="premble">
          <div className="premble-left">
            <p>CHÚNG TỐI LÀ NHỮNG NGƯỜI BẠN BÉ NHỎ</p>
            <img src={img} alt="" />
          </div>
          <div className="box box-1">
            <div className="box-top box-top-1">
              <div className="icon-box"></div>
            </div>
            <div className="box-bottom">
              <p>
                <Link to="/" style={{ color: "#333", fontWeight: "600" }}>
                  Tiny Friends
                </Link>{" "}
                là thương hiệu đồ lưu niệm nổi tiếng với hình tượng là các nhân
                vật dễ thương đến từ thế giới{" "}
                <Link to="/" style={{ color: "#333", fontWeight: "600" }}>
                  Tiny Worlds
                </Link>
                Các bé Tiny đại diện cho những cá tính riêng biệt để các bạn có
                những sự lựa chọn sản phẩm phù hợp cho riêng mình, hay cũng có
                thể là một sự lựa chọn tuyệt vời để gửi tặng cho những người bạn
                yêu thương. Hãy đến với{" "}
                <Link to="/" style={{ color: "#333", fontWeight: "600" }}>
                  Tiny Friends
                </Link>
                , tìm kiếm cá tính của bạn và tận hưởng sự dễ thương của những
                người bạn tí hon này nhé.
              </p>
            </div>
          </div>
        </div>
        <Title title="những nhân vật nhỏ bé của tiny friends" />
        <Widget />

        <div className="box box-2">
          <div className="box-top box-top-2">
            <div className="icon-box"></div>
          </div>
          <div className="box-bottom">
            <p>
              Chào mừng những người bạn đã đến với thế giới của chúng tôi, chúng
              tôi là những người sáng lập nên thương hiệu của Tiny Friends. Sứ
              mệnh của{" "}
              <Link to="/" style={{ color: "#333", fontWeight: "600" }}>
                Tiny Friends
              </Link>{" "}
              được tạo ra là để lan toả lối sống tích cực thông qua 4 linh vật
              của Tiny Friends là{" "}
              <Link to="/" style={{ color: "#333", fontWeight: "600" }}>
                An, Lin, Don, Chom
              </Link>{" "}
              lần lượt đại diện cho trí tuệ, lòng nhân ái, nhiệt huyết, và sự
              cẩn thận đều là những đức tính tốt ở mỗi người và thông qua những
              linh vật chúng tôi muốn tiếp cận với giới trẻ để nhầm truyền bá
              lối sống tích cực và lành mạnh. Ngoài ra, chúng mình lấy cảm hứng
              từ tính cách của các thành viên trong nhóm như: Anh - An, Trâm -
              Chom, Linh - Lin, Đoan - Don. Hy vọng mọi người sẽ có một trải
              nghiệm vui vẻ ở thế giới bé nhỏ của tụi mình. Chân thành cảm ơn
              mọi người đã ủng hộ sản phẩm của bọn mình.{" "}
            </p>
          </div>
        </div>

        <div className="info-member">
          {listInfo.map((list, index) => (
            <Info img={list.img} text={list.text} key={list.index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
