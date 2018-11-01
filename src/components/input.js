import React, { Component } from 'react';

class CustInp extends Component {

  constructor(props, context) {
    super(props);

    this.state = {
      inputType: [this.props.inType]
        };

  }
/*
  handleAddInput = (e) => {
    this.setState({
      inputs: this.state.inputs.concat([{ inputName: e.target.innerHTML }])
    });
    console.log(this.state.inputs)
  }
  handleInputDelete= (e, z) => () => {
    console.log(e.inputName, z)
    this.setState({
      inputs: this.state.inputs.filter((s, sidx) => (e !== s && z !== s))
    });
  }

  {this.state.inputType.map(
    (inp, i) => (
        {input === 'boolean'?
        <div className="flexcontainer">
        <input type="text" name="field1" placeholder="Full Name" className ="form-style__inputs-input"/>
        <input type="email" name="field2" placeholder="Email" className ="form-style__inputs-input"/>
        <input type="url" name="field3" placeholder="Website" className ="form-style__inputs-input"/>
        <textarea placeholder="Message" className ="form-style__inputs-input"></textarea>
        <input type="button" value="Send Message" className ="form-style__inputs-input"/>
        : <span className="noInput"></span>
        </div>
        }) )}
*/


render() {
  return(
    <div>
  <div>
    { this.state.inputType.map((inp, i) =>(
      <div className="flexcontainer">
        {inp === 'boolean'?
        <div>
        <input type="text" name="field1" placeholder="Full Name" className ="form-style__inputs-input"/>
        <input type="email" name="field2" placeholder="Email" className ="form-style__inputs-input"/>
        <input type="url" name="field3" placeholder="Website" className ="form-style__inputs-input"/>
        </div>
        :
        <span className="noInput"></span>
        }
      </div>
    ) ) }
  </div>
  <div>
    { this.state.inputType.map((inp, i) =>(
      <div className="flexcontainer">
        {inp === 'integer'?
        <div>
        <input type="text" name="field1" placeholder="yyyy" className ="form-style__inputs-input"/>
        <input type="email" name="field2" placeholder="yyyy" className ="form-style__inputs-input"/>
        <input type="url" name="field3" placeholder="yyyy" className ="form-style__inputs-input"/>
        </div>
        :
        <span className="noInput"></span>
        }
      </div>
    ) ) }
  </div>
  <div>
    { this.state.inputType.map((inp, i) =>(
      <div className="flexcontainer">
        {inp === 'string'?
        <div>
        <input type="text" name="field1" placeholder="xxxx" className ="form-style__inputs-input"/>
        <input type="email" name="field2" placeholder="xxx" className ="form-style__inputs-input"/>
        <input type="url" name="field3" placeholder="xxx" className ="form-style__inputs-input"/>
        </div>
        :
        <span className="noInput"></span>
        }
      </div>
    ) ) }
  </div>
  </div>

)}
}

export default CustInp;
