import React from 'react'; // useState criaçao de estados dentro da aplicaçao

import './App.css';

import logo from './assets/logo.svg';

import Routes from './routes';

function App() {
  return (
     <div className="container">
       <img src={logo} alt="AirCnC"/>
       <div className="content">
          <Routes />
       </div>
     </div>
  );
}

export default App;