import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {loadState, saveState} from './localStorage'
import _ from 'lodash';

const middleware= [thunk];
const persistedState=loadState();
const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(...middleware))
);
store.subscribe(_.throttle(()=>{
    saveState(
      store.getState()
    );
  },1000));

export default store;