import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/state.js';
import { BrowserRouter } from "react-router-dom";
import './css/index.scss';
import MainWrapper from './components/MainWrapper.js';


let renderDOM = (state) => {ReactDOM.render(
  <BrowserRouter>
    <MainWrapper appState={state} dispatch={store.dispatch.bind(store)}/>
  </BrowserRouter>,
  document.getElementById('root')
);
}

renderDOM(store.getState());

store.subscribe(renderDOM);
