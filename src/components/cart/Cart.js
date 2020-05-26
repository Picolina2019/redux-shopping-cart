import React from 'react';
import { connect } from 'react-redux';
import style from './Cart.module.css';
import { setQuantity } from '../../actions/setQuantityAction';
import { deleteItem } from '../../actions/deleteItemAction';

const Cart = ({ basketProps, setQuantity, deleteItem }) => {
  console.log(basketProps);
  let itemsInCart = [];
  Object.keys(basketProps.items).forEach((item) => {
    if (basketProps.items[item].inBasket) {
      itemsInCart.push(basketProps.items[item]);
    }
    console.log(itemsInCart);
  });
  itemsInCart = itemsInCart.map((item, id) => {
    return (
      <React.Fragment key={item.id}>
        <div className={style.product}>
          <span>{item.name}</span>

          <ion-icon
            onClick={() => deleteItem(item.article)}
            style={{ width: '1rem' }}
            name='close-circle'
          ></ion-icon>
          <img src={item.img} />
        </div>
        <div className={style.priceP}>{item.price},00$</div>
        <div className={style.amount}>
          <ion-icon
            onClick={() => setQuantity('decrease', item.article)}
            className={style.decrease}
            name='arrow-back-circle-outline'
          ></ion-icon>
          <span>{item.amount}</span>
          <ion-icon
            onClick={() => setQuantity('increase', item.article)}
            className={style.increase}
            name='arrow-forward-circle-outline'
          ></ion-icon>
        </div>
        <div className={style.total}>${item.amount * item.price},00</div>
      </React.Fragment>
    );
  });
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h5 className={style.title}>PRODUCT</h5>
        <h5 className={style.price}>PRICE</h5>
        <h5 className={style.quantity}>AMOUNT</h5>
        <h5 className={style.containerTotal}>TOTAL</h5>
      </div>
      <div className={style.items}>{itemsInCart}</div>
      <div className={style.basketContainer}>
        <h4 className={style.basketTotalTitle}>Basket Total</h4>
        <h4 className={style.basketTotal}>{basketProps.cost},00$</h4>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});
export default connect(mapStateToProps,{setQuantity,deleteItem})(Cart)
