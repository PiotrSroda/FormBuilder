import React, { Component } from 'react';
import FormGen from './components/form';
import './App.css';

class App extends Component {

  constructor(props) {


    super(props);

    this.state = {
      formList: []
    };
  }

  render() {
    return (
      <div>
        <div className="container">
          <header className="header">
            <div className="header__text">Build-a-form</div>
          </header>
          <div className="content">
          <div className="form-container">
            <FormGen/>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
