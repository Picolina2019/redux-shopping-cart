import {GET_BASKET} from './types';

export const getBasket=()=>{
    return(dispatch)=>{
        dispatch({
            type: GET_BASKET
        })
    }
}