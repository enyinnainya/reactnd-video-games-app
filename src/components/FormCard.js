import React, {Component} from 'react';
import FormInputCard from './FormInputCard';
import DeleteItemCard from './DeleteItemCard';
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
        addItem: PropTypes.func.isRequired,
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
    const {noItemsFound,deleteLastItem,state,addItem}=this.props;
   return (
   		<div className="content-holder">
     
     		<h2>Users List</h2>
        	<FormInputCard state={this.state} inputIsEmpty={this.inputIsEmpty} handleChange={this.handleChange} addItem={addItem}   />
        	<DeleteItemCard deleteLastItem={deleteLastItem} noItemsFound={noItemsFound} />
        	<ItemDisplayCard state={state}/>
		</div>
   ); 
    
  }
  
}

export default FormCard;