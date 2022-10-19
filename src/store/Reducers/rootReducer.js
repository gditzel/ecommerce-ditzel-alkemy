import { combineReducers } from "redux";

import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers ({
    shopping: cartReducer
})

export default rootReducer;