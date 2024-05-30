import React from 'react';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="form">
        <div className="title">Chat Application</div>
        <input type="text" className="input" placeholder="Username" />
        <input type="password" className="input" placeholder="Password" />
        <button className="button">
          <span>Login</span>
        </button>
        <div className="error">Invalid credentials</div>
      </div>
    </div>
  );
}

export default App;
