import {ADD_TO_BASKET} from './types'

const addToBasket=(product)=>{
   return (dispatch)=> {
       dispatch({
             type:ADD_TO_BASKET,
             payload:product
       })
     
   }
}
export default addToBasket;