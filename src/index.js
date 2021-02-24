import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BaseLayout from './components/layout/BaseLayout';
import Hooks from './components/Hooks';
import Classes from './components/Classes';
import Testing from './components/Testing';
import reducer from './reducers/reducer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css'
import {createStore} from 'redux';
import {Provider} from 'react-redux';


// for initializing redux store
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// we load data above ^ and save data below 


// Provider hooks react to redux. 
// Must pass redux instance to prodiver via 'store' prop
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/hooks" component={Hooks}/>
            <Route path="/classes" component={Classes}/>
            <Route path="/testing" component={Testing}/>
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
