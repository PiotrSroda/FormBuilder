import React, {Component} from 'react';
import SubInp from './subinputs';
import _ from 'lodash';

class IntegerInput extends Component {



  constructor(props, context) {
    super(props);

    this.state = {
      showSubinput: [],
      integerOperator:'',
      integerValue: null,
      question:'',
    };

  }

  handleAddInput = (e) => {
    let inputKey = e.target.dataset.key
    let inputType = e.target.dataset.inputtype
    this.setState({
      showSubinput: this.state.showSubinput.concat({ inputName: inputType, key: inputKey})
    });
    e.target.dataset.key++
    console.log(inputKey)
  }


  onHandleOperatorChange = (e) => {
    if (e.target.value !== "Choose..")
    this.setState({integerOperator: e.target.value});
  }

  handleQuestionChange = (question) => {
    this.setState({question});
  }
  handleIntegerChange = (integerValue) => {
    this.setState({integerValue});
  }


  render() {
    return (
      <div className="form-style__inputs form-style__inputs-subinput">
        <div className="form-style__inputs-container">
          {!this.props.notFirst  ? <div
            className="form-style__inputs-input form-style__inputs-input-title"
            >New Form</div> :  <div className="form-style__inputs-input form-style__inputs-input-question-asked">"{this.props.question}" {!this.props.operator ? `is equal to` : `is ${this.props.operator}`} "{this.props.answer}"</div>}
          <input type="text" placeholder="Type your question here" className="form-style__inputs-input-question" value={this.state.question} onChange={event => this.handleQuestionChange(event.target.value)}/>
          <div className="form-style__inputs-input-numbers">
            <div className="form-style__inputs-input-numbers-choose">Choose a number and an operator</div>
            <select name="operators" className="form-style__inputs-input-numbers-select" onChange={this.onHandleOperatorChange}>
              <option>Choose..</option>
              <option value="equal to" >Equal to</option>
              <option value="greater than" >Greater than</option>
              <option value="lower than" >Lower than</option>
            </select>
            <input type="number" min="0" step="1" placeholder="Answer" className="form-style__inputs-input-numbers-answer" value={this.state.integerValue} onChange={event => this.handleIntegerChange(event.target.value)}/>
          </div>
          </div>
          <div className="form-style__inputs__dropdown">
                <div className="form-style__inputs__dropdown-dropbutton"><div className="form-style__inputs__dropdown-dropicon">Choose next input</div></div>
                  <div className="form-style__inputs__dropdown-content">
                    <span className="form-style__inputs__dropdown-content-item" data-inputtype="boolean" data-key="0" onClick={this.handleAddInput}>Yes/no question</span>
                    <span className="form-style__inputs__dropdown-content-item" data-inputtype="integer" data-key="0" onClick={this.handleAddInput}>Number based question</span>
                    <span className="form-style__inputs__dropdown-content-item" data-inputtype="string" data-key="0" onClick={this.handleAddInput}>Open question</span>
                  </div>
          </div>
          {
            this.state.showSubinput.map((sub, idx) => (
              <div className="fullWidth">
              {
                sub.inputName !== null
                  ?
                    <div className="relative-container">
                    <SubInp
                      subInType={sub}
                      idx={idx}
                      answer={this.state.integerValue}
                      operator={this.state.integerOperator}
                      question={this.state.question}
                      notFirst={true}/>
                    </div>
                  : <span className="noInput"></span>
              }
            </div>
          ))
          }
    </div>)
  }
}
export default IntegerInput;
