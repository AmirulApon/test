
const {createStore,applyMiddleware}=require("redux");
const { default: logger } = require("redux-logger");
//products constant
const GET_PRODUCTS ="GET_PRODUCTS ";
const ADD_PRODUCTS ="ADD_PRODUCTS ";



// products state
const initialProductState = {
    products: ["suger", "salt"],
    numberofProducts:2,
};

//product action
const getProducts=() =>{
    return{
        type :GET_PRODUCTS ,
    };
};
const addProducts=(product) =>{
    return{
        type : ADD_PRODUCTS,
        payload: product,
    };
};

//product reducer
const productReducer =(state=initialProductState,action) =>{
switch (action.type) {
    case GET_PRODUCTS:
        return{
            ...state,
        };
    case ADD_PRODUCTS:
        return{
            products :[...state.products, action.payload],
            numberofProducts: state.numberofProducts +1,
        };
       
      default:
      return state;
}
};

const store = createStore(productReducer,applyMiddleware(logger ));
store.subscribe(()=>{
    console.log(store.getState());

});


store.dispatch(getProducts());
store.dispatch(addProducts("book"));
