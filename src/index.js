import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import Login from './components/Login';
import Home from "./components/Home";


ReactDOM.render(
    <React.StrictMode>
        <Home/>
		{/* <Login /> */}
    </React.StrictMode>,
  document.getElementById('root')
);
