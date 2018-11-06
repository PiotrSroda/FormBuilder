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
  <div className="slider-menu">
  <input type="checkbox" className="slider-menu__checkbox" id="slide-toggle" value=''/>
      <label htmlFor="slide-toggle" className="slider-menu__button"><span className="slider-menu__icon">&nbsp;</span></label>
      
      <div className="slider-menu__item-container">
            <span className="slider-menu__item" onClick={this.handleAddInput} data-inputtype = "boolean" data-key = "0">Yes/no question</span>
            <span className="slider-menu__item" onClick={this.handleAddInput} data-inputtype = "integer" data-key = "0">Number based question</span>
            <span className="slider-menu__item" onClick={this.handleAddInput} data-inputtype = "string" data-key = "0">Open question</span>
      </div>

  </div>
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
