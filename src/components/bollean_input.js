import React, {Component} from 'react';
import SubInp from './subinputs';
import _ from 'lodash';


class BooleanInput extends Component {

  constructor(props, context) {
    super(props);

    this.state = {
      showSubinput: [],
      change: '',
      boolean: '',
      question:'',
      answer:''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this)
  }
  onHandleBooleanChange = (e) => {
    this.setState({boolean: [e.target.value]});
    console.log(this.state.boolean)
  }

  handleQuestionChange = (question) => {
    this.setState({question});
  }

  handleTitleChange= (e) => {
    this.props.handleTitle(e.target.value, this.props.idx)
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


  handleTitleChange(val, idx){
    let inp_temp = this.state.inputs;
    inp_temp[idx].name=val
  }



  render() {
    return (
      <div className="form-style__inputs form-style__inputs-subinput">
        <div className="form-style__inputs-container">
      {!this.props.notFirst  ? <div
        className="form-style__inputs-input form-style__inputs-input-title"
        >New Form</div> :
      <div className="form-style__inputs-input form-style__inputs-input-question-asked">"{this.props.question}" {!this.props.operator ? `is equal to` : `is ${this.props.operator}`} "{this.props.answer}"</div>}
    <input type="text" placeholder="Type your question here" className="form-style__inputs-input-question" value={this.state.question} onChange={event => this.handleQuestionChange(event.target.value)}/>
       <div className=" form-style__inputs-input-radio-buttons">
        <div className="form-style__inputs-input-radio-buttons-choose" >Choose your desired answer</div>
        <div className="form-style__inputs-input-radio-buttons-button"><input type="radio" name="field2" value="yes" onChange={this.onHandleBooleanChange}/>
          <span>Yes</span>
        </div>
        <div className="form-style__inputs-input-radio-buttons-button"><input type="radio" name="field2" value="no" onChange={this.onHandleBooleanChange}/>
          <span>No</span>
        </div>
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
                  answer={this.state.boolean}
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

export default BooleanInput;
