import toolkit from '@reduxjs/toolkit'

const {configureStore,createSlice} = toolkit

const cartSlice = createSlice({
    name:"cart",
    initialState : [],
    reducers : {
        addToCart : (state,action) => {
            state.push(action.payload)
        },

    }
})

const loginSlice = createSlice({
    name:"login",
    initialState : {status:false},
    reducers : {
        login : (state,) => {
            state.status = true
        },

    }
})


const store = configureStore({
    reducer : {
        cart : cartSlice.reducer,
        login : loginSlice.reducer,
    }
})
console.log("on create store",store.getState());
store.subscribe(() => {
    console.log("test",store.getState())
})

store.dispatch(cartSlice.actions.addToCart({id:1,qty:10}))
store.dispatch(cartSlice.actions.addToCart({id:4,qty:540}))
store.dispatch(loginSlice.actions.login())

