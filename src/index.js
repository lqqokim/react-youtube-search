import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// import { createStore } from 'redux';
// import rootReducer from './store/modules';

//Store 생성
// const store = createStore(rootReducer);
// console.log(store.getState());

ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.getElementById('root')
);
// registerServiceWorker();