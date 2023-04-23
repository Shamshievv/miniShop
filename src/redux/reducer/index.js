const initialState = {
    product:[],
    basket:[]
}

export const Reducer = (state = initialState,actions) => {
    switch (actions.type){
        case "GET_PRODUCT":
            return {...state,product:actions.payload}
        default:
            return state
    }
}