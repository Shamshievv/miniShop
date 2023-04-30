import React from 'react';
import {useDispatch} from "react-redux";
import ProductCard from "./ProductCard";

const Product = () => {
    const dispatch = useDispatch()
    const data = [


        {
            id:1,
            title: 'Love Republic',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 4000,
            countInStock: 2,
            rating: 4,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg'
        },

        {
            id:3,
            title: 'A-A Awesome Apparel ',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 9000,
            countInStock: 2,
            rating: 5,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW0472M_12786127_1_v1_2x.jpg'
        },
        {
            id:4,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5000,
            countInStock: 2,
            rating: 2,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
        },
        {
            id:4,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5000,
            countInStock: 2,
            rating: 1,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
        },
        {
            id:4,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5000,
            countInStock: 2,
            rating: 3,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW14IKP_10702601_1_v1.jpeg'
        },{
            id:5,
            title: 'Love Republic',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 4000,
            countInStock: 2,
            rating: 4,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg'
        },{
            id:6,
            title: 'Love Republic',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 4000,
            countInStock: 2,
            rating: 4,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW050MQ_13147420_1_v1_2x.jpeg'
        }

    ]
    dispatch({type:"GET_PRODUCT",payload:data})
    return (
        <div className="container mx-auto w-5/6 py-16">
        <div className="basis-1/4 flex flex-wrap gap-32">
    {
      data.map((el)=> <ProductCard el={el}/>)
    }
        </div>
        </div>
    );
};

export default Product;