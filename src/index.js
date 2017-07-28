import _ from 'lodash';
import print from './print.js';
import './styles.css';

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    //print('Print called from hot module replacement');
  });
}


function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  //element.onclick = print.bind(null, 'Hello webpack!');

  return element;
}

document.body.appendChild(component());
