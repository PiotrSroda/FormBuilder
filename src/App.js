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

  handleAddForm = () => {
    this.setState({
      formList: this.state.formList.concat([1])
    });
  }

  handleFormDelete = (i) => () => {
    this.setState({
      formList: this.state.formList.filter((s, sidx) => i !== sidx)
    });
  }


  render() {
    return (
      <div>
        <div className="container">
          <header className="header">
            <div className="header__text">Build-a-form</div>
          </header>
          <div className="content">
          <nav className="sidebar">
              <ul className="side-nav">
                <li className="side-nav__item">
                  <div className="side-nav__button" onClick={this.handleAddForm}>Add a form</div>
                </li>
              </ul>
          </nav>
          <div className="form-container">
          {this.state.formList.map((form, i) => (
            <div className="form-container__row" key={i}>
            <FormGen key={i}/>
            <span onClick={this.handleFormDelete(i)} className="delete-button">&#10006;</span>
            </div>
          ))}
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
