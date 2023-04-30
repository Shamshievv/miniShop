import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {AiOutlineHeart} from "react-icons/ai";
import {BsBasket2Fill, BsFillBasket2Fill} from "react-icons/bs";


const ProductCard = ({el}) => {
    const dispatch = useDispatch()
    const [button,setButton] = useState(false)
    const {favorite} = useSelector(state => state)
    const heart = favorite.some(some => some.id === el.id)
    const addBasket =  () => {
        dispatch({type :  "ADD_TO_TASK",payload : el})
    }
    const btn = () => {
        setButton(!button)
    }
    const favoriteAdd = () => {
        dispatch({type:"ADD_TO_FAVORITE",payload:el})
    }
    return (
        <div>
                <div className="pt-10 " >
                    <div
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src={el.image} alt=""/>
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.description}
                            </p>
                            {
                              button ? <NavLink to={"/basket"}>
                                          <button className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type={button} >
                                              <BsBasket2Fill/>
                                          </button>
                                  </NavLink>
                                 :  <button onClick={() => {
                                     addBasket(el)
                                     btn()
                                  }} className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">{el.price}</button>
                            }
                            <button onClick={favoriteAdd} className="mx-4 text-white bg-gradient-to-br from-purple-600 to-blue-600 ">
                                <AiOutlineHeart className={heart ? "text-red-600" : "text-white"}/>
                            </button>
                        </div>
                    </div>
                </div>
        </div>
);
};

export default ProductCard;