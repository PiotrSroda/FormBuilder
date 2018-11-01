import React, {Component} from 'react';
import BooleanSubInput from './boolean_subinput'
class BooleanInput extends Component {

  constructor(props, context) {
    super(props);

    this.state = {
      boolean: [''],
      showSubinput: [{
        id: '',
        key: ''
      }],
      question:'',
      answer:''
    };
  }
  onHandleBooleanChange = (e) => {
    this.setState({boolean: [e.target.value]});
    console.log(this.state.boolean)
  }

  handleAddInput = (e) => {
    let inputKey = e.target.dataset.key++
    this.setState({
      showSubinput: this.state.showSubinput.concat({ id: e.target.dataset.inputtype, key: inputKey })
    });
    e.target.dataset.value++
  }

  handleQuestionChange = (question) => {
    this.setState({question});
  }

  render() {
    return (
      <div className="form-style__inputs form-style__inputs-border">
      <input type="text" placeholder="Title" className="form-style__inputs-input form-style__inputs-input-title"/>
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
        this.state.showSubinput.map((sub, i) => (
          <div>
          {
            sub.id === 'boolean'
              ? <BooleanSubInput bool={this.state.boolean} question={this.state.question}/>
              : <span className="noInput"></span>
          }
        </div>
      ))
      }
    </div>)
  }
}

export default BooleanInput;
