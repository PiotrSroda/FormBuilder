import React, {Component} from 'react';
import BooleanInput from './bollean_input'
import IntegerInput from './integer_input'
import StringInput from './string_input'

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
            this.props.inType.inputName === 'boolean'
              ? <div  className="form-style__inputs form-style__inputs-border">
                <BooleanInput
                  idx={this.props.idx}
                  handleTitle={this.props.handleTitle}
                  inType={this.props.inType}
              />
              </div>
              : <span className="noInput"></span>
          }
        </div>
      </div>

      <div>
        <div>
            {
              this.props.inType.inputName === 'integer'
                ? <IntegerInput
                    idx={this.props.idx}
                    handleTitle={this.props.handleTitle}
                    inType={this.props.inType}
                />
                : <span className="noInput"></span>
            }
          </div>

      </div>
      <div>

            <div>
            {
              this.props.inType.inputName === 'string'
                ? <StringInput
                    idx={this.props.idx}
                    handleTitle={this.props.handleTitle}
                    inType={this.props.inType}
                />
                : <span className="noInput"></span>
            }
          </div>
      </div>
    </div>)
  }
}

export default CustInp;
