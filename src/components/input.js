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

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        input: [{
          inputType: this.props.inType.inputName,
          inputKey: this.props.inType.key
        }]
      });
    }

  }


  render() {

    return (<div>
      <div>
        {
          this.state.input.map((inp, i) => (<div>
            {
              inp.inputType === 'boolean'
                ? <div className="form-style__inputs form-style__inputs-border"><BooleanInput/></div>
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
                ? <div className="form-style__inputs form-style__inputs-border"><IntegerInput/></div>
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
                ? <div className="form-style__inputs form-style__inputs-border"><StringInput/></div>
                : <span className="noInput"></span>
            }
          </div>))
        }
      </div>
    </div>)
  }
}

export default CustInp;
