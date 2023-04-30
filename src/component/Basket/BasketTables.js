import React from 'react';
import Basket from "./index";
import {RiDeleteBin5Line} from "react-icons/ri";
import {useDispatch} from "react-redux";
import {AiOutlineDelete} from "react-icons/ai";



const BasketTables = ({el}) => {
    const dispatch = useDispatch()

    const deleteProduct = () => {
        dispatch({type:"DELETE_PRODUCT",payload:el})
    }
    return (

                <tr className="bg-blue-950 px-4 py-4">
                    <th scope="col" className=" align-middle px-6 py-3">
                        {el.title}
                    </th>
                    <th scope="col" className=" align-middle px-6 py-3">
                        <img width="70" src={el.image} alt="#"/>
                    </th>
                    <th scope="col" className=" align-middle px-6 py-3">
                        {el.description}
                    </th>
                    <th scope="col" className=" align-middle px-6 py-3">
                        {el.price}
                    </th>
                    <th>
                        <button onClick={deleteProduct}>
                            <RiDeleteBin5Line style={{fontSize:"20px",cursor:"pointer",color:"red"}}/>
                        </button>
                    </th>

                </tr>


    );
};

export default BasketTables;