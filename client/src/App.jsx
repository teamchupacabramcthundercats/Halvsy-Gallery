import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/Gallery';

const App = () => (
  <div>
    <Gallery productId="1" />
  </div>
);

ReactDOM.render('<App />', document.getElementById('app'));

export default App;
