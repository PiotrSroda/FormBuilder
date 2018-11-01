import React, {Component} from 'react';
import Subinp from './subinput';
import BooleanInput from './bollean_input'
class CustInp extends Component {

  constructor(props, context) {
    super(props);

    this.state = {
    input: [{
      inputType: this.props.inType.inputName,
      inputKey: this.props.inType.key
    }]
    }
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps.inType.key)
    if (this.props.inType.key === prevProps.inType.key) {
      if(this.props.inType.inputName !== prevProps.inType.inputName) {
      this.setState({
        input: [{
          inputType: this.props.inType.inputName,
          inputKey: this.props.inType.key
        }]
      });
      }
    }
  }


  render() {

    return (<div>
      <div>
        {
          this.state.input.map((inp, i) => (<div>
            {
              inp.inputType === 'boolean'
                ? <BooleanInput/>
                : <span className="noInput"></span>
            }
          </div>))
        }
      </div>
      <div>
        {
          this.state.input.map((inp, i) => (<div>
            {
              inp.inputType === 'integer'
                ? <div className="form-style__inputs form-style__inputs-border">
                    <input type="text" placeholder="Title" className="form-style__inputs-input form-style__inputs-input-title"/>
                    <input type="text" placeholder="Type your question here" className="form-style__inputs-input form-style__inputs-input-question"/>
                    <div className="form-style__inputs-input form-style__inputs-input-numbers">
                      <div className="form-style__inputs-input-numbers-choose">Choose a number and an operator</div>
                      <select name="operators" class="form-style__inputs-input-select">
                        <option value="grater">Greater than</option>
                        <option value="equal">Equal to</option>
                        <option value="lower">Lower than</option>
                      </select>
                      <input type="number" min="0" step="1" placeholder="Type the number" className="form-style__inputs-input form-style__inputs-input-numbers-answer"/>
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
                    </div>
                  </div>
                : <span className="noInput"></span>
            }
          </div>))
        }
      </div>
      <div>
        {
          this.state.input.map((inp, i) => (<div>
            {
              inp.inputType === 'string'
                ? <div className="form-style__inputs form-style__inputs-border">
                    <input type="text" placeholder="Title" className="form-style__inputs-input form-style__inputs-input-title"/>
                    <input type="text" placeholder="Type your question here" className="form-style__inputs-input form-style__inputs-input-question"/>
                    <input type="text" placeholder="Type your answer here" className="form-style__inputs-input form-style__inputs-input-answer"/>
                    <div className="form-style__inputs-input-dropbtn form-style__inputs-input-dropbtn">
                      <div className="dropdown">
                        <div className="dropbtn">+</div>
                        <div className="dropdown-content">
                          <span className="dropdown-content-item" data-inputtype="boolean" data-key="0">Yes/no question</span>
                          <span className="dropdown-content-item" data-inputtype="integer" data-key="0">Number based question</span>
                          <span className="dropdown-content-item" data-inputtype="string" data-key="0">Open question</span>
                        </div>
                      </div>
                    </div>
                  </div>
                : <span className="noInput"></span>
            }
          </div>))
        }
      </div>
    </div>)
  }
}

export default CustInp;
