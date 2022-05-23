import "./productitem.scss";
import { listMockhoa } from "../../fakeProducts";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { DetailProduct } from "../../redux/action";

const Productitem = ({ img, name, price, id, active ,alo , slug}) => {
  const [productDetail, setProductDetail] = useState({});
  const Dispatch = useDispatch();
  const handleOnclick = (name) => {
    for (var i = 0; i < listMockhoa.length; i++) {
      var listName = listMockhoa[i].tenSanpham;
      if (listName == name) {
        // setProductDetail(listMockhoa[i]);
        alo(listMockhoa[i]);
      }
    }
    Dispatch(DetailProduct(productDetail));
  };

  return (
    <Link to={`/products${slug}`}>
      <div
        className={active === false ? "active product-item" : "product-item"}
        onClick={() => handleOnclick(name)}
      >
        <img src={img} alt="" />
        <p className="name">{name}</p>
        <p className="price">{price}</p>
      </div>
    </Link>
  );
};

export default Productitem;
