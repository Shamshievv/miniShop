const initialState = {
    basket:JSON.parse(localStorage.getItem(`basket`)) || [],

}

export const BasketReducer = (state = initialState,actions) => {
    switch (actions.type){

        case "ADD_TO_TASK":
            const foundBasket = state.basket.find(el => el.id === actions.payload.id)
            if (foundBasket){
                return {...state,basket: state.basket.map((el)=> el.id === foundBasket.id ? {...el,quantity:el.quantity + 1} : 1)}
            }
            else{
                return {...state,basket: [...state.basket,{...actions.payload,quantity: 1}]}
            }
        case "MINUS_QUANTITY":
            const minusQuantity = state.basket.find(el => el.id === actions.payload.id)
            if (minusQuantity){

                return {...state,basket: state.basket.map((el)=> el.id === minusQuantity.id ? {...el,quantity:el.quantity - 1} : 1)}

            }
            else{
                return {...state,basket: [...state.basket,{...actions.payload,quantity: 1}]}
            }

        case "DELETE_PRODUCT" :
            return {...state,basket: state.basket.filter(el => el.id !== actions.payload.id)}
        default:
            return state
    }
}