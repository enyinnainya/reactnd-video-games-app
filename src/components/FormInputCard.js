import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FormInputCard extends Component{
  
  	static  propTypes={
        addItem: PropTypes.func.isRequired,
        inputIsEmpty: PropTypes.func.isRequired,
        handleChange: PropTypes.func.isRequired
    }
  render(){
    
    const {inputIsEmpty,handleChange,addItem} =this.props;
    const {first_name,last_name,username} =this.props.state;
    
   	return (
    	<form onSubmit={(event)=>addItem(event,{first_name:first_name,last_name:last_name,username:username})}>
		<div className="field-row">
          <div className="field-col left-col two_col">
			<input
            type="text"
            placeholder="Enter First Name"
            value={first_name}
            onChange={(event)=>handleChange(event.target.value,"first_name")}
          />
          </div>
          <div className="field-col right-col two_col">
			<input
            type="text"
            placeholder="Enter Last Name"
            value={last_name}
            onChange={(event)=>handleChange(event.target.value,"last_name")}
          />
          </div>
		</div>
		<div className="field-row">
  		<div className="field-col right-col ">
           <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(event)=>handleChange(event.target.value,"username")}
          />
		</div>
		</div>
		<div className="field-row add-btn">
  		<div className="field-col right-col add-btn">
          <button disabled={inputIsEmpty()}>Add User</button>
          </div>
		</div>
        </form>
    ); 
    
  }
  
  
}

export default FormInputCard;