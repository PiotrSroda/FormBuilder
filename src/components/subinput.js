import React, { Component } from 'react';
class SubInp extends Component {

  constructor(props, context) {
    super(props);

    this.state = {
      inputType : [this.props.inType]

      };


  }

  componentDidUpdate(prevProps) {
    console.log(prevProps)
    if (this.props !== prevProps) {
      this.setState({
        inputType: [this.props.inType]
      });
    }
  }


/*
  handleAddInput = (e) => {
    this.setState({
      inputs: this.state.inputs.concat([{ inputName: e.target.innerHTML }])
    });
    console.log(this.state.inputs)
  }
  handleInputDelete= (e, z) => () => {
    console.log(e.inputName, z)
    this.setState({
      inputs: this.state.inputs.filter((s, sidx) => (e !== s && z !== s))
    });
  }

  {this.state.inputType.map(
    (inp, i) => (
        {input === 'boolean'?
        <div className="flexcontainer">
        <input type="text" name="field1" placeholder="Full Name" className ="form-style__inputs-input"/>
        <input type="email" name="field2" placeholder="Email" className ="form-style__inputs-input"/>
        <input type="url" name="field3" placeholder="Website" className ="form-style__inputs-input"/>
        <textarea placeholder="Message" className ="form-style__inputs-input"></textarea>
        <input type="button" value="Send Message" className ="form-style__inputs-input"/>
        : <span className="noInput"></span>
        </div>
        }) )}
*/


render() {

  return(

    <div>
      <div>
    { this.state.inputType.map((inp, i) =>(
      <div>
        {inp === 'boolean'?
        <div className="form-style__inputs form-style__inputs-border">
        <input type="text" placeholder="Title" className ="form-style__inputs-input form-style__inputs-input-title"/>
        <input type="text" placeholder="Type your question here" className ="form-style__inputs-input form-style__inputs-input-question"/>
        <div className ="form-style__inputs-input form-style__inputs-input-radio-buttons">
        <div className="form-style__inputs-input-radio-buttons-choose">Choose your desired answer</div>
        <div className="form-style__inputs-input-radio-buttons-button"><input type="radio" name="field2" value="yes" /><span>Yes</span></div>
        <div className="form-style__inputs-input-radio-buttons-button"><input type="radio" name="field2" value="no" /><span>No</span></div>
        </div>
        <div className="form-style__inputs-input-dropbtn form-style__inputs-input-dropbtn">
            <div className="dropdown">
            <div className="dropbtn">+</div>
              <div className="dropdown-content">
                <span className="dropdown-content-item" data-inputtype = "boolean" data-key = "0">Yes/no question</span>
                <span className="dropdown-content-item" data-inputtype = "integer" data-key = "0">Number based question</span>
                <span className="dropdown-content-item" data-inputtype = "string" data-key = "0">Open question</span>
              </div>
            </div>
        </div>
        </div>
        :
        <span className="noInput"></span>
        }
      </div>
    ) ) }
  </div>
  <div>
    { this.state.inputType.map((inp, i) =>(
      <div>
        {inp === 'integer'?
        <div className="form-style__inputs form-style__inputs-border">
        <input type="text" placeholder="Title" className ="form-style__inputs-input form-style__inputs-input-title"/>
        <input type="text" placeholder="Type your question here" className ="form-style__inputs-input form-style__inputs-input-question"/>
        <div className ="form-style__inputs-input form-style__inputs-input-numbers">
          <div className="form-style__inputs-input-numbers-choose">Choose a number and an operator</div>
          <select name="operators" class="form-style__inputs-input-select">
            <option value="grater">Greater than</option>
            <option value="equal">Equal to</option>
            <option value="lower">Lower than</option>
        </select>
        <input type="number" min="0" step="1" placeholder="Type the number" className ="form-style__inputs-input form-style__inputs-input-numbers-answer"/>
        </div>
        <div className="form-style__inputs-input-dropbtn form-style__inputs-input-dropbtn">
            <div className="dropdown">
            <div className="dropbtn">+</div>
              <div className="dropdown-content">
                <span className="dropdown-content-item" data-inputtype = "boolean" data-key = "0">Yes/no question</span>
                <span className="dropdown-content-item" data-inputtype = "integer" data-key = "0">Number based question</span>
                <span className="dropdown-content-item" data-inputtype = "string" data-key = "0">Open question</span>
              </div>
            </div>
        </div>
        </div>
        :
        <span className="noInput"></span>
        }
      </div>
    ) ) }
  </div>
  <div>
    { this.state.inputType.map((inp, i) =>(
      <div>
        {inp === 'string'?
        <div className="form-style__inputs form-style__inputs-border">
        <input type="text" placeholder="Title" className ="form-style__inputs-input form-style__inputs-input-title"/>
        <input type="text" placeholder="Type your question here" className ="form-style__inputs-input form-style__inputs-input-question"/>
        <input type="text" placeholder="Type your answer here" className ="form-style__inputs-input form-style__inputs-input-answer"/>
        <div className="form-style__inputs-input-dropbtn form-style__inputs-input-dropbtn">
            <div className="dropdown">
            <div className="dropbtn">+</div>
              <div className="dropdown-content">
                <span className="dropdown-content-item" data-inputtype = "boolean" data-key = "0">Yes/no question</span>
                <span className="dropdown-content-item" data-inputtype = "integer" data-key = "0">Number based question</span>
                <span className="dropdown-content-item" data-inputtype = "string" data-key = "0">Open question</span>
              </div>
            </div>
        </div>
        </div>
        :
        <span className="noInput"></span>
        }
      </div>
    ) ) }
  </div>
  </div>

)}
}

export default SubInp;
