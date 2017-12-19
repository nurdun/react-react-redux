import { createStore,applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import { rootReducer } from '../reducer/reducer';
import { logState } from '../reducer/loginReducer';

//store 
const middleware = [thunk];
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore); 
// export let store = createStore(reducer);
// export let logStore = createStore(logState);

export const configureStore = (initialState)=>{
    return createStoreWithMiddleware(rootReducer,initialState);
}