import {DELETE_ITEM} from './types';

export const deleteItem=(item)=>{
return(dispatch)=>{
    dispatch({
        type: DELETE_ITEM,
        payload:item
    })
}
}