import React from 'react';
import {useSelector} from "react-redux";
import ProductCard from "../Product/ProductCard";

const Favorite = () => {
    const {favorite} = useSelector(state => state.favorite)
    const {basket} = useSelector(s => s.basket)
    let baskets = [...basket,{...favorite,quantity:1}]
    localStorage.setItem(`basket`,JSON.stringify(baskets))

    return (
        <div className="container  mx-auto w-5/6 py-16">
            <div className="basis-1/4 d-flex justify-between  flex-wrap gap-32"></div>
            {
                favorite.map(el => <ProductCard el={el}/>)
            }
        </div>
    );
};

export default Favorite;