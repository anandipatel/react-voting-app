import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import Results from './components/results';
import myApp from './reducers';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(myApp);

function render(){

    ReactDOM.render(
      <div className="jumbotron">
      <App store={store} />
      <hr/>
      <Results store={store}/>
      </div>
      ,
      document.getElementById('root'));
    }

store.subscribe(render);
registerServiceWorker();

render();
