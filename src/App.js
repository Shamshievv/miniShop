import './App.css';
import Header from "./component/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./component/Home";
import Product from "./component/Product";
import Basket from "./component/Basket";
import Footer from "./component/Footer";
import Favorite from "./component/Favorite";
function App() {
  return (
    < div className="App">
    < Header />
      < Routes >
        < Route path={"/"} element={< Home /> }/>
        < Route path={"/product"} element={< Product /> }/>
        < Route path={"/basket"} element={< Basket /> }/>
        < Route path={"/favorite"} element={< Favorite /> }/>
      </ Routes >
      < Footer />
    </ div >
  );
}
export default App;