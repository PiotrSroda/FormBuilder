import React, {Component} from 'react';
import SubInp from './subinputs';
import _ from 'lodash';
let id = 0

class StringInput extends Component {

  constructor(props, context) {
    super(props);

    this.state = {
      showSubinput: [],
      question:'',
      answer:''
    };
    this.handleInputDelete = this.handleInputDelete.bind(this)
  }
  handleAddInput = (e) => {
    let inputKey = e.target.dataset.key
    let inputType = e.target.dataset.inputtype
    this.setState({
      showSubinput: this.state.showSubinput.concat({ inputName: inputType, key: inputKey, id:++id})
    });
    e.target.dataset.key++
    console.log(inputKey)
  }
  handleInputDelete = (idx) => () => {
    let inp = this.state.showSubinput;
    _.pullAt(inp, idx);
    this.setState({
      inputs: inp
    });
  }

  handleQuestionChange = (question) => {
    this.setState({question});
  }

  handleAnswerChange = (answer) => {
    this.setState({answer});
  }


  render() {
    return (
      <div className="form-style__inputs form-style__inputs-subinput">
          <div className="form-style__inputs-container">
          {!this.props.notFirst  ? <div
            className="form-style__inputs-input form-style__inputs-input-title"
            >New Form</div> :  <div className="form-style__inputs-input form-style__inputs-input-question-asked">"{this.props.question}" {!this.props.operator ? `is equal to` : `is ${this.props.operator}`} "{this.props.answer}"</div>}
          <input type="text" placeholder="Type your question here" className="form-style__inputs-input-question" value={this.state.question} onChange={event => this.handleQuestionChange(event.target.value)}/>
          <input type="text" placeholder="Type your answer here" className="form-style__inputs-input-question" value={this.state.answer} onChange={event => this.handleAnswerChange(event.target.value)}/>
          </div>
          <div className="form-style__inputs__dropdown">
              <div className="form-style__inputs__dropdown-dropbutton">+</div>
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
                      answer={this.state.answer}
                      question={this.state.question}
                      notFirst={true}/>
                    <span
                    onClick={this.handleInputDelete(idx)}
                    className="form-style__inputs-delete-button">&#10006;</span>
                    </div>
                  : <span className="noInput"></span>
              }
            </div>
          ))
          }
    </div>)
  }
}
export default StringInput;
