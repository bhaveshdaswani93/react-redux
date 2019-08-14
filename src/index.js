import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore,combineReducers } from 'redux'
import { Provider } from 'react-redux'
import Counter from './store/reducers/counter'
import Result from './store/reducers/result'

// import reducer from './store/reducer';

const rootReducer = combineReducers({
    ctr:Counter,
    res:Result
})


const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
