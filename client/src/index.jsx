import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import TopResults from './components/TopResults.jsx';

const App = (props) => {
  return(
    <div>
      <h2>It's Go Time</h2>
      <TopResults />
    </div>
  )
};

ReactDOM.render(<App /> ,document.getElementById('app'));