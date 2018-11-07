import React, {Component} from 'react';
import BooleanInput from './bollean_input'
import IntegerInput from './integer_input'
import StringInput from './string_input'

class SubInp extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      return false;
    } else {
      return true;
    }
  }


  constructor(props, context) {
    super(props);

    this.state = {
    subInput: {
      subInputType: this.props.subInType.inputName,
      subInputKey: this.props.subInType.key
    }
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps !== this.props){
    }
  }
  handleTitleChange= (e) => {
    this.props.handleTitle(e.target.value, this.props.idx)
  }

  handleInputDelete = () => {
  this.setState({
    subInput:{
      subInputType: '',
      subInputKey: ''
    }
  })
  }

  render() {
    return (
    <div key={'key-'+this.props.idx}>
      <div>
        <div>
          {
            this.state.subInput.subInputType === 'boolean'
              ? <div>
                <BooleanInput
                  idx={this.props.idx}
                  subInType={this.props.subInType}
                  answer={this.props.answer}
                  question={this.props.question}
                  operator={this.props.operator}
                  notFirst={true}
              />
              <span
                onClick={this.handleInputDelete}
                className="form-style__inputs-delete-button">&#10006;</span>
              </div>
              : <span className="noInput"></span>
          }
        </div>
      </div>

      <div>
        <div>
            {
              this.state.subInput.subInputType === 'integer'
                ? <div>
                  <IntegerInput
                  idx={this.props.idx}
                  subInType={this.props.subInType}
                  answer={this.props.answer}
                  question={this.props.question}
                  operator={this.props.operator}
                  notFirst={true}
                />
                <span
                  onClick={this.handleInputDelete}
                  className="form-style__inputs-delete-button">&#10006;</span>
                </div>
                : <span className="noInput"></span>
            }
          </div>

      </div>
      <div>

            <div>
            {
              this.state.subInput.subInputType === 'string'
                ? <div>
                  <StringInput
                  idx={this.props.idx}
                  subInType={this.props.subInType}
                  answer={this.props.answer}
                  question={this.props.question}
                  operator={this.props.operator}
                  notFirst={true}
                />
                <span
                onClick={this.handleInputDelete}
                className="form-style__inputs-delete-button">&#10006;</span>
                </div>
                : <span className="noInput"></span>
            }
          </div>
      </div>
    </div>)
  }
}
export default SubInp;
