import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBasket } from '../../actions/getAction';
import { connect } from 'react-redux';

const Header = (props) => {
  console.log(props);

  useEffect(() => {
    getBasket();
  }, []);

  return (
    <header>
      <div className='overlay'></div>
      <nav>
        <h2 style={{ fontSize: '2rem' }}>Shopping Time</h2>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/video'>Video</Link>
          </li>
          <li className='basket'>
            <Link to='/cart'>
              <ion-icon name='basket-outline'></ion-icon>
              <span>Cart : {props.basketProps.basket} </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps,{getBasket}) (Header);