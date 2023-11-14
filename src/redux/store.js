
import {configureStore} from "@reduxjs/toolkit";
import cardReducer from "./slices/cardSlice";

const store = configureStore({
    reducer : {
        card : cardReducer
    }
})

store.subscribe("store changed :",store.getState())

export default store