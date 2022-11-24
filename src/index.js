import './style/index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';

function isMobile() {
  let user = navigator.userAgent;
  let regexp = /android|iphone/i;

  return regexp.test(user)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {isMobile()
    ? <App />
    : <div className='Center'>
        <h1>Sorry! This service was designed for mobile users</h1>
        <h1>A Desktop version is coming soon...</h1>
        <h4>Trust me I am saving your eyes :')</h4>
      </div>
    }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
