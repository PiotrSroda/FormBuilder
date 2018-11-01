import React, { Component } from 'react';
import CustInp from './input';

class FormGen extends Component {

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
    this.setState({
      inputs: this.state.inputs.concat([{ inputName: e.target.dataset.inputtype }])
    });
    console.log(this.state.inputs)
  }
  handleInputDelete= (e, z) => () => {
    console.log(e.inputName, z)
    this.setState({
      inputs: this.state.inputs.filter((s, sidx) => (e !== s && z !== s))
    });
  }



render() {


  return (

  <div className="form-style">
    <h2>New Form</h2>
    <form className = "form-style__inputs">
      <div className="form-style__row--bg">
      {this.state.inputs.map(
        (input, i) => (
        <div key={i} className="fullWidth">
        {input.inputName !== null? <CustInp inType={input.inputName}/> : <span className="noInput"></span>}
        {input.inputName !== null? <span onClick={this.handleInputDelete(input, i)} className="form-style__inputs-delete-button">&#10006;</span> : <div className="noInput"></div>}
        </div>
      )
        )}

      </div>
      <div className="form-style__row--sm">
        <div className="dropdown">
          <div className="dropbtn">Choose Input</div>
            <div className="dropdown-content">
              <span className="dropdown-content-item" onClick={this.handleAddInput} data-inputtype = "boolean">Yes/no question</span>
              <span className="dropdown-content-item" onClick={this.handleAddInput} data-inputtype = "integer">Number based question</span>
              <span className="dropdown-content-item" onClick={this.handleAddInput} data-inputtype = "string">Open question</span>
            </div>
        </div>
      </div>
    </form>
  </div>

  )
}
}

export default FormGen;
