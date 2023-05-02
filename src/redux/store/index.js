import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {MainReducer} from "../reducer";
import {BasketReducer} from "../reducer/BasketReducer";
import {FavoriteReducer} from "../reducer/FavoriteReducer";

export const store = createStore(combineReducers({
    main:MainReducer,
    basket:BasketReducer,
    favorite:FavoriteReducer
}),composeWithDevTools(applyMiddleware(thunk)))
