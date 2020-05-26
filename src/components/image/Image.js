import React from 'react';
import style from './Image.module.css';

const Image = ({ item, add, addToBasket }) => {
  return (
    <div className={style.image}>
      <img src={item.img} alt='image1' />
      <h3>{item.name}</h3>
      <h4>price:{item.price}</h4>
      <a
        onClick={() => addToBasket(item.article)}
        className={style.add}
        href='#'
      >
        Add to the cart{' '}
      </a>
    </div>
  );
};
export default Image;
