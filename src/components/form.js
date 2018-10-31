import React, { Component } from 'react';

class FormGen extends Component {

  constructor(props, context) {
    super(props);

    this.state = {
      booleanForms: [{
        inputName: null,
        key: null
      }]
        };

  }

  handleAddInput = (e) => {
    this.setState({
      booleanForms: this.state.booleanForms.concat([{ inputName: e.target.innerHTML }])
    });
    console.log(this.state.booleanForms)
  }
  handleInputDelete= (e, z) => () => {
    console.log(e.inputName, z)
    this.setState({
      booleanForms: this.state.booleanForms.filter((s, sidx) => (e !== s && z !== s))
    });
  }



render() {


  return (

  <div className="form-style">
    <h2>New Form</h2>
    <form className = "form-style__inputs">
      <div className="form-style__row--bg">
      {this.state.booleanForms.map(
        (input, i) => (
        <div key={i} className="fullWidth">
        {input.inputName === "Link 1"? <input type="text" name="field1" placeholder="Full Name" className ="form-style__inputs-input"/> : <div></div>}
        {input.inputName === "Link 2"? <input type="text" name="field1" placeholder="Mail" className ="form-style__inputs-input"/> : <div></div>}
        {input.inputName === "Link 3"? <input type="text" name="field1" placeholder="John" className ="form-style__inputs-input"/> : <div></div>}
        {input.inputName !== null? <span onClick={this.handleInputDelete(input, i)} className="form-style__inputs-delete-button">&#10006;</span> : <div></div>}        
        </div>
      )
        )}

      </div>
      <div className="form-style__row--sm">
        <div className="dropdown">
          <div className="dropbtn">Dropdown</div>
            <div className="dropdown-content">
              <span className="dropdown-content-item" onClick={this.handleAddInput}>Link 1</span>
              <span className="dropdown-content-item" onClick={this.handleAddInput}>Link 2</span>
              <span className="dropdown-content-item" onClick={this.handleAddInput}>Link 3</span>
            </div>
        </div>
      </div>
    </form>
  </div>

  )
}
}

export default FormGen;
