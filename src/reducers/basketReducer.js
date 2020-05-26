import { ADD_TO_BASKET, GET_BASKET,INCREASE_QUANTITY, DECREASE_QUANTITY, DELETE_ITEM } from "../actions/types";

const initialState={
    basket:0,
    cost:0,
    items:{
        partyDress:{ 
            id:1,
            img: 'https://images.asos-media.com/products/boohoo-bardot-crochet-lace-dress-in-blush/14619112-1-blush?$n_640w$&wid=634&fit=constrain',
            name:'Party dress',
            price:20,
            amount:0,
            inBasket:false,
            article:'partyDress'
        },
      jeansShorts: {
            id:2,
            img: 'https://images.asos-media.com/products/one-above-another-milkmaid-top-with-volume-sleeves-in-leopard-mesh/14796516-1-leopardprint?$n_640w$&wid=634&fit=constrain',
            name:'Jeans shorts',
            price:35,
            amount:0,
            inBasket:false,
             article:'jeansShorts'

        },
       classyDress: {
            id:3,
            img: 'https://images.asos-media.com/products/asos-design-ruched-detail-pencil-midi-dress-in-cream/14730692-1-cream?$n_640w$&wid=634&fit=constrain',
            name:'Classy dress',
            price:30,
            amount:0,
            inBasket:false,
            article:'classyDress'
        },
       pinkDress:{
            id:4,
            img: 'https://images.asos-media.com/products/prettylittlething-plunge-tiered-skater-dress-in-rose/14436778-1-rose?$n_480w$&wid=476&fit=constrain',
            name:'Pink dress',
            price:10,
            amount:0,
            inBasket:false,
            article:'pinkDress'
        }
        

    }
}
export const basketReducer=(state=initialState,action)=>{
    let itemChange=''
    switch(action.type){
        case ADD_TO_BASKET:
            itemChange = {...state.items[action.payload]}
            itemChange.amount +=1;
            itemChange.inBasket = true;
    
            
            return{
                ...state,
                basket:state.basket + 1,
                cost: state.cost + state.items[action.payload].price,
                items:{
                    ...state.items,
                    [action.payload]:itemChange
                }
            }
        case GET_BASKET:
            return{
              ...state
            }
            case INCREASE_QUANTITY:
                itemChange = {...state.items[action.payload]}
                itemChange.amount +=1;
                return{
                  ...state,
                  basket: state.basket + 1,
                  cost: state.cost + state.items[action.payload].price,
                  items:{
                      ...state.items,
                      [action.payload]:itemChange

                  }
                }
            case DECREASE_QUANTITY:
                let newCost = 0;
                let newBasket = 0;
                itemChange = {...state.items[action.payload]};
                if(itemChange.amount ===0){
                   itemChange.amount = 0;
                   newCost = state.cost;
                   newBasket = state.basket;
                   
                }else{
                    itemChange.amount -=1;
                    newCost =  state.cost - state.items[action.payload].price;
                    newBasket = state.basket - 1
                }
               
                return{
                  ...state,
                  basket:newBasket,
                  cost: newCost,
                  items:{
                      ...state.items,
                      [action.payload]:itemChange

                    
                }
            }
            case DELETE_ITEM:
                itemChange = {...state.items[action.payload]};
                let prevItems= itemChange.amount;
                itemChange.amount=0;
                itemChange.inBasket = false
                return{
                    ...state,
                    basket:state.basket - prevItems,
                    cost:state.cost -(prevItems *itemChange.price),
                    items:({
                        ...state.items,
                    [action.payload]:itemChange
                    })

                }
        default:
            return state;
    }
}