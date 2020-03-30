import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ItemDisplayCard extends Component{
  	static  propTypes={
        state: PropTypes.object.isRequired
    }
  render(){
    const {users} =this.props.state;
    return (
      	<div>
          <p className="items">Items</p>
          <ol className="item-list">
            {users.map((item, index) => <li key={index}>{item}</li>)}
          </ol>
    	</div>
    );
  }
  
}

export default ItemDisplayCard;