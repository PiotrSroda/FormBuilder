import React, { Component } from 'react';
import CustInp from './input';
import _ from 'lodash';

class Form extends Component {

  constructor(props, context) {
    super(props);

    this.state = {
      inputs: [{
        inputName: null,
        key: null
      }]
        };

  }

  handleAddInput = (e) => {
    let inputKey = e.target.dataset.key++
    this.setState({
      inputs: this.state.inputs.concat({ inputName: e.target.dataset.inputtype, key: inputKey })
    });
    e.target.dataset.value++
  }
  handleInputDelete= (input) => () => {
    this.setState({
      inputs: _.reject(this.state.inputs, input)
    });
  }



render() {


  return (

  <div className="form-style">
  <h2>
    <div className="dropdown">
      <div className="dropbtn">+</div>
        <div className="dropdown-content">
          <span className="dropdown-content-item" onClick={this.handleAddInput} data-inputtype = "boolean" data-key = "0">Yes/no question</span>
          <span className="dropdown-content-item" onClick={this.handleAddInput} data-inputtype = "integer" data-key = "0">Number based question</span>
          <span className="dropdown-content-item" onClick={this.handleAddInput} data-inputtype = "string" data-key = "0">Open question</span>
        </div>
    </div>
  </h2>
    <form className = "form-style__inputs">
      <div className="form-style__row">
      {_.map(this.state.inputs,(
        (input, idx) => (
        <div key={idx} className="fullWidth">
        {input.inputName !== null?
          <div>
           <CustInp inType={input.inputName}/>
           <span onClick={this.handleInputDelete(input)} className="form-style__inputs-delete-button">&#10006;</span>
           </div>
           :
           <span className="noInput"></span>
         }
        </div>
      )
    ))}
      </div>
    </form>
  </div>

  )
}
}

export default Form;
