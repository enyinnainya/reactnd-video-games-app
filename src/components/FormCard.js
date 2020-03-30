import React, {Component} from 'react';
import FormInputCard from './FormInputCard';
import ItemDisplayCard from './ItemDisplayCard';
import PropTypes from 'prop-types';

class FormCard extends Component{
    state = {
    first_name: '',
    last_name: '',
    username: ''
  	};

	static  propTypes={
        state: PropTypes.object.isRequired,
        addUser: PropTypes.func.isRequired,
        deleteLastItem: PropTypes.func.isRequired,
        noItemsFound: PropTypes.func.isRequired
    }

  handleChange = (inputValue, state_field) => {
    let update_obj={};
    update_obj[state_field]=inputValue.trim();
    this.setState(update_obj);
  };


  inputIsEmpty = () => {
    return !(this.state.first_name !== '' && this.state.last_name !== '' && this.state.username !== '');
  };

  render(){
    const {noItemsFound,deleteLastItem,addUser}=this.props;
    const {user_check_note,users}=this.props.state;
   return (
   		<div className="content-holder">
     
     		<h2>Video Game Users</h2>
        	<FormInputCard state={this.state} user_check_note={user_check_note} inputIsEmpty={this.inputIsEmpty} handleChange={this.handleChange} addUser={addUser}   />
        	<ItemDisplayCard users={users} />
		</div>
   ); 
    
  }
  
}

export default FormCard;