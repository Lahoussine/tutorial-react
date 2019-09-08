import React from 'react';

class FormStep3 extends React.Component{
    render(){
        if (this.props.currentStep !== 3) { // Prop: The current step
            return null
          }
          // The markup for the Step 1 UI
          return(
            <div className="form-group">
              <label htmlFor="pwd">password</label>
              <input
                className="form-control"
                id="pwd"
                name="pwd"
                type="text"
                placeholder="Enter pwd"
                value={this.props.pwd} // Prop: The pwd input data
                onChange={this.props.handleChange} // Prop: Puts data into state
              />
            </div>
          )
    }

}
export default FormStep3;