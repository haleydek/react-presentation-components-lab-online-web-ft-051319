import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function handleClick(event){
  return event.target.innerText = "I am just sad"
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={event => event.target.innerText = "I am just sad"} />
  </div>,
  document.getElementById('root')
);