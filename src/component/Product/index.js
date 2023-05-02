import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import ProductCard from "./ProductCard";
import {getProduct} from "../../redux/reducer";

const Product = () => {
    const dispatch = useDispatch()
    const {product} = useSelector(state => state.main)
    useEffect(() => {
        dispatch(getProduct)
    },[])
    return (
        <div className="container mx-auto w-5/6 py-16">
        <div className="basis-1/4 flex flex-wrap gap-32">
    {
      product.map((el)=> <ProductCard el={el}/>)
    }
        </div>
        </div>
    );
};

export default Product;