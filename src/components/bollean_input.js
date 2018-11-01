import React, {Component} from 'react';
import IntegerInput from './integer_input';
import StringInput from './string_input';
import _ from 'lodash';
class BooleanInput extends Component {

  constructor(props, context) {
    super(props);

    this.state = {
      boolean: '',
      integerOperator:'',
      integerValue: null,
      showSubInput: [{
        id: '',
        key: ''
      }],
      question:'',
      answer:''
    };
  }
  handleInputDelete= (input) => () => {
    this.setState({
      showSubInput: _.reject(this.state.showSubInput, input)
    });
  }

  onHandleBooleanChange = (e) => {
    this.setState({boolean: [e.target.value]});
  }

  onHandleOperatorChange = (e) => {
    if (e.target.value !== "Choose..")
    this.setState({integerOperator: e.target.value});
    console.log(this.state.integerOperator)
  }

  handleAddInput = (e) => {
    let inputKey = e.target.dataset.key++
    this.setState({
            showSubInput: this.state.showSubInput.concat({ id: e.target.dataset.inputtype, key: inputKey })
    });
    e.target.dataset.value++
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
      {!this.props.notFirst ? <input type="text" placeholder="Title" className="form-style__inputs-input form-style__inputs-input-title-notfirst"/> :  <div className="form-style__inputs-input form-style__inputs-input-question-asked">"{this.props.question}" {!this.props.operator ? `is equal to` : `is ${this.props.operator}`} "{this.props.answer}"</div>}
      <input type="text" placeholder="Type your question here" className="form-style__inputs-input form-style__inputs-input-question" value={this.state.question} onChange={event => this.handleQuestionChange(event.target.value)}/>
      <div className="form-style__inputs-input form-style__inputs-input-radio-buttons">
        <div className="form-style__inputs-input-radio-buttons-choose" >Choose your desired answer</div>
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
            <span className="dropdown-content-item" data-inputtype="boolean" data-key="0" onClick={this.handleAddInput}>Yes/no question</span>
            <span className="dropdown-content-item" data-inputtype="integer" data-key="0" onClick={this.handleAddInput}>Number based question</span>
            <span className="dropdown-content-item" data-inputtype="string" data-key="0" onClick={this.handleAddInput}>Open question</span>
          </div>
        </div>
      </div>
      {
        this.state.showSubInput.map((sub, i) => (
          <div>
          {
            sub.id === 'boolean'
              ? <div className ="relative-container">
                <BooleanInput answer={this.state.boolean} question={this.state.question} notFirst={true}/>
                <span onClick={this.handleInputDelete(sub)} className="form-style__inputs-delete-button">&#10006;</span>
                </div>
              : <span className="noInput"></span>
          }
        </div>
      ))
      }
      {
        this.state.showSubInput.map((sub, i) => (
          <div>
          {
            sub.id === 'integer'
              ? <div className ="relative-container">
                <IntegerInput answer={this.state.boolean} question={this.state.question} notFirst={true}/>
                <span onClick={this.handleInputDelete(sub)} className="form-style__inputs-delete-button">&#10006;</span>
                </div>
              : <span className="noInput"></span>
          }
        </div>
      ))
      }
      {
        this.state.showSubInput.map((sub, i) => (
          <div>
          {
            sub.id === 'string'
              ? <div className ="relative-container">
                <StringInput answer={this.state.boolean} question={this.state.question} notFirst={true}/>
                <span onClick={this.handleInputDelete(sub)} className="form-style__inputs-delete-button">&#10006;</span>
                </div>
              : <span className="noInput"></span>
          }
        </div>
      ))
      }
    </div>)
  }
}

export default BooleanInput;
