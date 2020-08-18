import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/Gallery';
import './styles.css';

const App = () => (
  <div>
    <Gallery productId="2" />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
