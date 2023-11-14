import toolkit from '@reduxjs/toolkit'

const {configureStore,createAction,createReducer} = toolkit

const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION");

const cartReducer = createReducer([],(builder) => {
    builder
        .addCase(addToCart,(state,action) => {
            state.push(action.payload)
        })
})
const loginReducer = createReducer({status:false},(builder) => {
    builder.addCase(login,(state) => {
        state.status = true
    })
})


const store = configureStore({
    reducer : {
        cart : cartReducer,
        login : loginReducer
    }
})
console.log("on cretae store",store.getState());
store.subscribe(() => {
    console.log("test",store.getState())
})

store.dispatch(addToCart({id:1,qty:10}))
store.dispatch(addToCart({id:4,qty:30}))
store.dispatch(login())

