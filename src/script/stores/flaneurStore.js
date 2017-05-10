import {createStore} from 'redux';
import playerReducer from 'reducers/playerReducer';

const store = createStore(playerReducer);
export default store;
