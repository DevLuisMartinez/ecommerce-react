export const LOADING = 'NOTIFY/LOADING';
export const DISABLED = 'NOTIFY/DISABLED';
export const TOAST = 'NOTIFY/TOAST';

const initialState = {
    loading: false,
    disabled: '',
    toast: {
        message: '',
        color: '#fff',
        show: false
    }
}

export default function reducer(state=initialState, action){
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case DISABLED:
            return {
                ...state,
                disabled: action.payload
            }
        case TOAST:
                return {
                    ...state,
                    toast: {
                        ...state.toast, 
                        message: action.payload.message,
                        color: action.payload.color,
                        show: action.payload.show
                    }
                }
        default:
            return state;
    }
}

export const loading = payload => ({
    type: LOADING,
    payload
});

export const disabled = payload => ({
    type:DISABLED,
    payload
})

export const toast = payload => ({
    type:TOAST,
    payload
})
