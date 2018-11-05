import React, { Component } from 'react';
import CustInp from './input';
import _ from 'lodash';

class FormGen extends Component {

  constructor(props, context) {
    super(props);

    this.state = {
      inputs: [],
      change: ''
    };
    this.handleTitleChange = this.handleTitleChange.bind(this)
  }

  handleAddInput = (e) => {
    this.setState({
      inputs: this.state.inputs.concat({input: e.target.dataset.inputtype})
    })
  }

  handleTitleChange(val, idx){
    let inp_temp = this.state.inputs;
    inp_temp[idx].name=val
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
        {this.state.inputs.map((input, indx) => (
          <CustInp
            handleTitle={this.handleTitleChange}
            inType={input}
            idx={indx}
            key={indx}
            />
        ))}
      </div>
    </form>
  </div>

  )
}
}

export default FormGen;
