import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Video from './components/videos/Video'

function App() {
  return (
    <div className='App'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/video' component={Video} />
          <Route path='/cart' component={Cart} />
          <Route component={() => (<div>404 Not found </div>)} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
