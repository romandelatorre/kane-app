import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import Login from './components/Login';
import Home from "./components/Home";
import Navbar from './components/Navbar'


ReactDOM.render(
    <React.StrictMode>
        <Navbar/>
        <Home/>
		{/* <Login /> */}
    </React.StrictMode>,
  document.getElementById('root')
);
