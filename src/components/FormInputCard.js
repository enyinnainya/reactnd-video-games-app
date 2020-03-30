import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FormInputCard extends Component{
  
  	static  propTypes={
        addUser: PropTypes.func.isRequired,
        inputIsEmpty: PropTypes.func.isRequired,
        handleChange: PropTypes.func.isRequired
    }

    
  render(){
    
    const {inputIsEmpty,user_check_note,handleChange,addUser} =this.props;
    const {first_name,last_name,username} =this.props.state;
    
   	return (

    	<form onSubmit={(event)=>addUser(event,[first_name,last_name,username])}>
		<div className="field-row">
          <div className="field-col left-col two_col">
			<input
            type="text"
            placeholder="Enter First Name"
            value={first_name}
            onChange={(event)=>handleChange(event.target.value,"first_name")}
          />
          </div>
          <div className="field-col two_col">
			<input
            type="text"
            placeholder="Enter Last Name"
            value={last_name}
            onChange={(event)=>handleChange(event.target.value,"last_name")}
          />
          </div>
		</div>
		<div className="field-row">
  		<div className="field-col ">
           <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(event)=>handleChange(event.target.value,"username")}
          />
		</div>
		</div>
      {user_check_note.length>0 && (
        <div className="field-row user-check-note">
  		<div className="field-col">
      <p>{user_check_note}</p>
      </div>
    </div>
      )}
    
		<div className="field-row add-btn">
  		<div className="field-col ">
          <button disabled={inputIsEmpty()}>Add User</button>
          </div>
		</div>
        </form>
    ); 
    
  }
  
  
}

export default FormInputCard;