import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/Gallery';
import './styles.css';

const App = () => {
  const productId = (window.location.pathname).substr(-4);

  return (
    <div>
      <Gallery productId={productId} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('gallery'));

export default App;
