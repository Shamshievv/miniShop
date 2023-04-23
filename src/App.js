import './App.css';
import Header from "./component/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./component/Home";
import Product from "./component/Product";
import Basket from "./component/Basket";
import Footer from "./component/Footer";


function App() {
  return (
    <div className="App">
    <Header/>
      <Routes>
        <Route path={"/"} element={<Home/> }/>
        <Route path={"/product"} element={<Product/> }/>
        <Route path={"/basket"} element={<Basket/> }/>
      </Routes>

      <Basket/>
      <Footer/>
    </div>
  );
}

export default App;
