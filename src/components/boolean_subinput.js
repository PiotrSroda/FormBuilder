import React, {Component} from 'react';

class BooleanSubInput extends Component {

  constructor(props, context) {
    super(props);

    this.state = {
      boolean: ['']
    };
  }
  onHandleBooleanChange = (e) => {
    this.setState({boolean: [e.target.value]});
    console.log(this.state.boolean)
  }

  render() {
    return (
      <div className="form-style__inputs form-style__inputs-subinput">
      <input type="text" placeholder="Title" className="form-style__inputs-input form-style__inputs-input-title"/>
      <input type="text" placeholder="Type your question here" className="form-style__inputs-input form-style__inputs-input-question"/>
      <div className="form-style__inputs-input form-style__inputs-input-radio-buttons">
        <div className="form-style__inputs-input-radio-buttons-choose">Choose your desired answer</div>
        <div className="form-style__inputs-input-radio-buttons-button"><input type="radio" name="field2" value="yes" onChange={this.onHandleBooleanChange}/>
          <span>Yes</span>
        </div>
        <div className="form-style__inputs-input-radio-buttons-button"><input type="radio" name="field2" value="no" onChange={this.onHandleBooleanChange}/>
          <span>No</span>
        </div>
      </div>
      <div className="form-style__inputs-input-dropbtn form-style__inputs-input-dropbtn">
        <div className="dropdown">
          <div className="dropbtn">+</div>
          <div className="dropdown-content">
            <span className="dropdown-content-item" data-inputtype="boolean" data-key="0">Yes/no question</span>
            <span className="dropdown-content-item" data-inputtype="integer" data-key="0">Number based question</span>
            <span className="dropdown-content-item" data-inputtype="string" data-key="0">Open question</span>
          </div>
        </div>
        {}
      </div>
    </div>)
  }
}

export default BooleanSubInput;
