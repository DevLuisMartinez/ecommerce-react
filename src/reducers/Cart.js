import axios from 'axios';
import { act } from 'react-dom/test-utils';

//types
const ADD_CART = 'CART/ADD';
const INCREMENT_CART = 'CART/INCREMENT';
const DECREMENT_CART = 'CART/DECREMENT';
const GET_CURRENT_CART = 'CART/GET/CURRENT';

//initialState
const initialState = {
    products: [],
    products_quantity: 0,
    cart_id : 0
};


//reducer
export default function reducer(state=initialState, action){
    switch (action.type) {
        case GET_CURRENT_CART:
            return {
                ...state,
                cart_id: action.payload.id,
                products: action.payload.products,
                products_quantity: action.payload.quantity_cart
            } 
        case ADD_CART:
            return {
                ...state,
                products: [...state.products, action.payload],
                products_quantity: state.products_quantity + 1

            } 
        case INCREMENT_CART:
            return {
                ...state,
                products: state.products.map( product => 
                    product.id === action.payload
                    ? { ...product, quantity: product.quantity + 1 } 
                    : product
                ),
                products_quantity: state.products_quantity + 1
            }   
        case DECREMENT_CART:
                return {
                    ...state,
                    products: state.products.map( product => 
                        product.id === action.payload
                        ? { ...product, quantity: product.quantity - 1 } 
                        : product
                    ),
                    products_quantity: state.products_quantity - 1
                }     
        default:
            return state;
    }
}


//actions

const productsStore = (productsState) => {
    
    const products = productsState.reduce((acum,el) => ({
        ...acum,
        [el.id]:el
    }),{});

    return products;
}

const existProductInCart = (productsState, idProduct) => {
    
    if(productsState.length > 0){
        const products = productsStore(productsState);
        const productFound = products[idProduct];
        if(productFound) return true;
    }   
    
    return false;
}

const saveProductInCart = async (product) => {

    try{
        const res = await axios.post('http://localhost:8089/cart/products', {
            products: [{
                product_id : product.id,
                quantity: product.quantity
            }]
        });
        console.log(res);
    }catch(error){
        console.log(error);
    }
}

const quantityByProduct = (products) => {
    const sum = products.map( product => product.pivot.quantity);
    return sum.reduce((acum, el) => el + acum, 0);
}

export const getCurrentCart = () => (
    async dispatch => {
        try{
            const { data } = await axios.get('http://localhost:8089/cart/current');
            const products = {
                ...data,
                products: data.products.map( product => ({
                    ...product,
                    quantity: product.pivot.quantity
                })),
                quantity_cart: quantityByProduct(data.products)
            }
            dispatch({ type:GET_CURRENT_CART, payload: products});
        }catch(error){

        }
    }
);

export const addCart = payload => (
    (dispatch, getState) => {
        const { Cart: { products }} = getState();
        if(!existProductInCart(products,payload.id)){
            //saveProductInCart(payload);
            dispatch({ type: ADD_CART, payload: payload })
        }else{
            dispatch(incrementCart(payload.id));
        }
       
    }
);

export const incrementCart = payload => ({
    type:INCREMENT_CART,
    payload
});

export const decrementCart = payload => ({
    type:DECREMENT_CART,
    payload
});

export const checkout = () => (
    async (dispatch) => {
        try{
            const { data } = await axios.post('http://localhost:8089/cart/checkout');
            console.log(data);
        }catch(error){
            console.log(error);
        }
        
    }
)
