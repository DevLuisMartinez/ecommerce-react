import axios from 'axios';
import { LOADING, TOAST } from './Notify';
import * as constants from '../constants';
//Types
const GET_PRODUCTS = 'PRODUCTS/GET';
const CREATE_PRODUCT = 'PRODUCT/CREATE';

//initialState
const initialState = {
    data:[]
}

//Reducer
export default function reducer(state=initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            console.log(action);
            return {
                ...state,
                data: action.payload,
            }
        case CREATE_PRODUCT:
            return {
                ...state,
                data: [...state.data, action.payload]
            }    
        default:
            return state;
    };
}

//actions
export const getProducts = () => (
    (dispatch) => {
        try{
            axios.get('http://localhost:8089/products')
            .then( ({data}) => {
                dispatch({ type: GET_PRODUCTS, payload: data });
                dispatch({ type: LOADING, payload: false });
            });
          
        }catch(error){
            dispatch({ type: TOAST, payload: { 
                text: 'ERROR GETTING PRODUCT',
                color: constants.ERROR,
                show: true
             } });
        }
    }
);

export const createProduct = payload => ({
    type: CREATE_PRODUCT,
    payload
});

