import React, {Component} from 'react';
import BooleanInput from './bollean_input'
import IntegerInput from './integer_input'
import StringInput from './string_input'

class CustInp extends Component {

  constructor(props, context) {
    super(props);

    this.state = {
    input: {
      inputType: this.props.inType.input,
      inputKey: this.props.idx
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
    input:{
      inputType: '',
      inputKey: ''
    }
  })
  }

  render() {
    return (
    <div className='form-style__inputs form-style__inputs-subinput'>
      <div>
        <div>
          {
            this.state.input.inputType === 'boolean'
              ? <div  className="form-style__inputs form-style__inputs-border">
                <BooleanInput
                  idx={this.props.idx}
                  handleTitle={this.props.handleTitle}
                  inType={this.props.inType}
              />
              <span
                onClick={this.handleInputDelete}
                className="form-style__inputs-delete-button">&#10006;</span>
              </div>
              : null
          }
        </div>
      </div>

      <div>
        <div>
            {
                this.state.input.inputType === 'integer'
                ?
                <div className="form-style__inputs form-style__inputs-border">
                <IntegerInput
                    idx={this.props.idx}
                    handleTitle={this.props.handleTitle}
                    inType={this.props.inType}
                />
                <span
                  onClick={this.handleInputDelete}
                  className="form-style__inputs-delete-button">&#10006;</span>
                  </div>
                : null

            }
          </div>

      </div>
      <div>

            <div>
            {
                this.state.input.inputType === 'string'
                ?
                <div className="form-style__inputs form-style__inputs-border">
                <StringInput
                    idx={this.props.idx}
                    handleTitle={this.props.handleTitle}
                    inType={this.props.inType}
                />
                <span
                  onClick={this.handleInputDelete}
                  className="form-style__inputs-delete-button">&#10006;</span>
                </div>
                : null
            }
          </div>
      </div>
    </div>)
  }
}

export default CustInp;
