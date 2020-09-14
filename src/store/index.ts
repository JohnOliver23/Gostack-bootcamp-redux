import { createStore } from 'redux';
import cart from './modules/cart/reducer';
import rootReducer from './modules/rootReducer';
import { ICartState } from './modules/cart/types';

export interface IState {
  cart: ICartState;
}

const store = createStore(rootReducer);

export default store;
