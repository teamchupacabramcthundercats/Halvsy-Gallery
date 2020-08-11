import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/Gallery';
import { generateCss } from '../../utils/client/generateCss';

generateCss();

const App = () => (
  <div>
    <Gallery productId="2" />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
