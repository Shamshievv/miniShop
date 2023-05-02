import axios from "axios";

const initialState = {
    product:[]
}
export const getProduct = async (dispatch) => {
    try{
        const responsive = await axios(`https://fakestoreapi.com/products`)
        const {data} = responsive
        dispatch({type:`GET_PRODUCT`,payload:data})
    } catch (e){
        console.log(e)
    }
}

export const MainReducer = (state = initialState,actions) => {
    switch (actions.type){
        case "GET_PRODUCT":
            return {...state,product:actions.payload}

        default:
            return state
    }
}






