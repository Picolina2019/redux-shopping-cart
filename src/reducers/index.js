import {combineReducers} from 'redux';
import {basketReducer} from './basketReducer';
// import {videoReducer} from './videoReducer'

export default combineReducers({
   basketState:basketReducer,
   // videoState:videoReducer
})