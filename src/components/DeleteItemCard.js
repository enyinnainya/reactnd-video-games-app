import React, {Component} from 'react';
import PropTypes from 'prop-types';


class DeleteItemCard extends Component{
  
  static  propTypes={
        deleteLastItem: PropTypes.func.isRequired,
        noItemsFound: PropTypes.func.isRequired
    }
  render(){
    const {noItemsFound,deleteLastItem}=this.props;
    return (
 		<button onClick={deleteLastItem} disabled={noItemsFound()}>
          Delete Last Item
        </button>
    );
           
  }
  
}

export default DeleteItemCard;