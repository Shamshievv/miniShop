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
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadPbZ9bcueu6nn76guS0QLEHT1BCNe3Iomw&usqp=CAU'
        },
        {
            id:2,
            title: 'The Select Moscow ',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 2300,
            countInStock: 2,
            rating: 3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3UYBncUYQBUT1zvI8r_rcUEoHAZ-rMkfiQ&usqp=CAU'
        },
        {
            id:3,
            title: 'A-A Awesome Apparel ',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 9000,
            countInStock: 2,
            rating: 5,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREKNjAAL4QDUAvRrbnHr5JXNQZ717PJLglq_y2g2UsaBPbqveMAN4tat_2293GArUQkBM&usqp=CAU'
        },
        {
            id:4,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5000,
            countInStock: 2,
            rating: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF-Q0t1TtGy4MASL-Ce6qpujTSEjYvcUhA6Iwm_uQfVQN0qiJjcsH-pqBz2t1aXbaP0i8&usqp=CAU'
        },
        {
            id:4,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5000,
            countInStock: 2,
            rating: 1,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV98lXrkFabtbZbRvY1aUFpffVtW4_heqZmg&usqp=CAU'
        },
        {
            id:4,
            title: 'Jolifashn',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 5000,
            countInStock: 2,
            rating: 3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0E9XbknuzFE6hMRrY8q_rSx53dcNxEN03uA&usqp=CAU'
        },
        {
            id:5,
            title: 'Love Republic',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 4000,
            countInStock: 2,
            rating: 4,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRls4yXiSpW9Om-oNbWO9zM0aCFsrVTC59Zvg&usqp=CAU'
        },
        {
            id:6,
            title: 'Love Republic',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 4000,
            countInStock: 2,
            rating: 4,
            image: 'https://www.topmodeloftheworld.com/wp-content/uploads/2023/03/Top-Model-of-the-World-finale-2023-Winner-mexico-1.jpg'
        } ,{
            id:7,
            title: 'Love Republic',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 4000,
            countInStock: 2,
            rating: 4,
            image: 'https://www.touchemodels.com/galleries/202/43/model-agency-amsterdam-touchemodels-1.jpg'
        },
        {
            id:8,
            title: 'Love Republic',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 4000,
            countInStock: 2,
            rating: 4,
            image: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/04/07/16808454171837.jpg'
        },
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
            id:2,
            title: 'The Select Moscow ',
            description: 'Вискоза - 80%, Полиэстер - 20%',
            price: 2300,
            countInStock: 2,
            rating: 3,
            image: 'https://a.lmcdn.ru/img600x866/M/P/MP002XW1AUK0_5586039_1_v1.jpeg'
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