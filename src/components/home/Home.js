import React from 'react';
import {items} from '../../items';
import Image from '../image/Image';
import style from './Home.module.css';
import {connect} from 'react-redux';
import addToBasket from '../../actions/addItemAction'


const Home = (props) => {
  return (
    <>
      <div className={style.container}>
        {items.map((item) => {
          return (
            <Image addToBasket={props.addToBasket} key={item.id} item={item} />
          );
        })}
      </div>
    </>
  );
};
export default connect (null, {addToBasket}) (Home);