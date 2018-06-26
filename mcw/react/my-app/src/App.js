import React, {Component} from 'react';
import Button from '@material/react-button/dist'; // /index.js is implied
import logo from './logo.svg';
import './App.css';
// add the appropriate line(s) in Step 2a if you are using compiled CSS instead.

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button
          raised
          className='button-alternate'
          onClick={() => console.log('clicked!')}
        >
          Click Me!
        </Button>
      </div>
    );
  }
}

export default App;
