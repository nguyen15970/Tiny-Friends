import "./app.scss"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"; 

import { Login } from "./components/pages/login/Login";
import { Logout, Signup } from "./components/pages/signup/Signup";
import { Home } from "./components/pages/home/Home";
import { Product } from "./components/pages/product/Product";
import { Cart } from "./components/pages/cart/Cart";
import { Detail } from "./components/pages/detail/Detail";
import Introduce from "./components/pages/introduce/Introduce";
import {useState} from 'react'





function App() {
  const [productDetail, setproductDetail] = useState([]);
  // console.log(product  Detail)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/tiny-friends/" element={<Home/>} />
          <Route path="/products" element={<Product productDetail={setproductDetail}/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/introduce" element={<Introduce/>} />
          <Route  path='/products/:slug' element={<Detail  productDetail={productDetail}/> }/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
