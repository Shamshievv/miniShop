const initialState = {
    favorite:JSON.parse(localStorage.getItem(`favorite`)) || []
}
export const FavoriteReducer = (state = initialState,actions) => {
    switch (actions.type){
        case "ADD_TO_FAVORITE" :{
            let foundBasket = state.favorite.find(el => el.id === actions.payload.id)
            if (foundBasket){
                return {...state,favorite: state.favorite.filter(el => el.id !== foundBasket.id)}
            }
            else {
                return  {...state,favorite: [...state.favorite,actions.payload]}
            }
        }

        default:
            return state
    }
}

