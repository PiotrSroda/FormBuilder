import React, {Component} from 'react';
import BooleanInput from './bollean_input'
import IntegerInput from './integer_input'
import StringInput from './string_input'

class SubInp extends Component {

  constructor(props, context) {
    super(props);

    this.state = {
    subInput: [{
      subInputType: this.props.subInType.inputName,
      subInputKey: this.props.subInType.key
    }]
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps !== this.props){
    }
  }
  handleTitleChange= (e) => {
    this.props.handleTitle(e.target.value, this.props.idx)
  }

  render() {
    return (
    <div key={'key-'+this.props.idx}>
      <div>
        <div>
          {
            this.props.subInType.inputName === 'boolean'
              ? <div>
                <BooleanInput
                  idx={this.props.idx}
                  subInType={this.props.subInType}
                  answer={this.props.answer}
                  question={this.props.question}
                  operator={this.state.integerOperator}
                  notFirst={true}
              />
              </div>
              : <span className="noInput"></span>
          }
        </div>
      </div>

      <div>
        <div>
            {
              this.props.subInType.inputName === 'integer'
                ? <IntegerInput
                  idx={this.props.idx}
                  subInType={this.props.subInType}
                  answer={this.props.answer}
                  question={this.props.question}
                  operator={this.state.integerOperator}
                  notFirst={true}
                />
                : <span className="noInput"></span>
            }
          </div>

      </div>
      <div>

            <div>
            {
              this.props.subInType.inputName === 'string'
                ? <StringInput
                  idx={this.props.idx}
                  subInType={this.props.subInType}
                  answer={this.props.answer}
                  question={this.props.question}
                  operator={this.state.integerOperator}
                  notFirst={true}
                />
                : <span className="noInput"></span>
            }
          </div>
      </div>
    </div>)
  }
}
export default SubInp;
