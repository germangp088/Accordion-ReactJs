import React, { PureComponent } from 'react';
import logo from '../logo.svg';
import './Accordion.css';

class Accordion extends PureComponent {

	componentDidMount() {
		const { getContent } = this.props;
		getContent();
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Accordion;
