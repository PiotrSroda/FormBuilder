import React, { Component } from 'react';
import CustInp from './input';
import _ from 'lodash';
let id = 0;

class FormGen extends Component {

  constructor(props, context) {
    super(props);

    this.state = {
      inputs: [],
      change: ''
    };
    this.handleInputDelete = this.handleInputDelete.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.inputs!==this.state.inputs){
       this.setState({
        change:this.state.inputs
      })
    }
  }

  handleAddInput = (e) => {
    let inputKey = e.target.dataset.key
    let inputType = e.target.dataset.inputtype
    this.setState({
      inputs: this.state.inputs.concat({ inputName: inputType, key: inputKey, id:++id})
    });
    e.target.dataset.key++
    console.log(inputKey)
  }

  handleInputDelete = (idx) => () => {
    console.log('idx',idx);
    let inp = this.state.inputs;
    _.pullAt(inp, idx);
    console.log('inp,',inp)
    this.setState({
      inputs: inp
    });
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
      {
          _.map(this.state.inputs,((input, idx) => (
        <div key={'key-'+input.id} className="fullWidth">
        {input.inputName !== null?
          <div>
           <CustInp
             handleTitle={this.handleTitleChange}
             inType={input}
             idx={idx}

             />
           <span
             onClick={this.handleInputDelete(idx)}
             className="form-style__inputs-delete-button">&#10006;</span>
           </div>
           :
           <span className="noInput"></span>
         }
        </div>
      )
    ))

  }
      </div>
    </form>
  </div>

  )
}
}

export default FormGen;
