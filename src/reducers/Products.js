import axios from 'axios';
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
    async dispatch => {
        try{
            const { data } = await axios.get('http://localhost:8089/products');
            dispatch({ type: GET_PRODUCTS, payload: data });
        }catch(error){

        }
    }
);

export const createProduct = payload => ({
    type: CREATE_PRODUCT,
    payload
});

