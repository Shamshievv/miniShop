import React from 'react';
import {useSelector} from "react-redux";
import ProductCard from "../Product/ProductCard";

const Favorite = () => {
    const {favorite} = useSelector(state => state)
    return (
        <div className="container mx-auto w-5/6 py-16">
            <div className="basis-1/4 flex flex-wrap gap-32"></div>
            {
                favorite.map(el => <ProductCard el={el}/>)
            }
        </div>
    );
};

export default Favorite;