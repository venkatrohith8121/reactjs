import { combineReducers } from "redux";
import { messageReducer } from "./Msg/message.reducer";
import { productReducer } from "./Product/Product.reducer";
let rootReducer = combineReducers({ "product": productReducer, "info": messageReducer })
export {
    rootReducer
}