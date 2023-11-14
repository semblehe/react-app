
import {configureStore} from "@reduxjs/toolkit";
import cardReducer from "./slices/cartSlice";

const store = configureStore({
    reducer : {
        cart : cardReducer
    }
})
console.log("on create store",store.getState());
store.subscribe(() => {
    console.log("test",store.getState())
})
export default store