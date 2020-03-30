import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ItemDisplayCard extends Component{
  	static  propTypes={
      users: PropTypes.array.isRequired
    }
    state={
    game_played_check_text:"Hide the Number of Games Played",
    game_played_status:"hide",
    }

    hideShowNoGamesPlayed=()=>{
      if(this.state.game_played_status==="hide"){
        this.setState({
          game_played_check_text:"Show the Number of Games Played",
          game_played_status:"show",
        })
      }else{
        this.setState({
          game_played_check_text:"Hide the Number of Games Played",
          game_played_status:"hide",
        })
      }
    }
  render(){
    const {users} =this.props;
    const {game_played_status,game_played_check_text}=this.state;
    return (
      	<div className="user-lists">
          <p className="items">Users and Games Played:</p>
          <ol className="item-list">
            {users.map((user) =>{
              return (
                <li key={user.username}>{user.username} played {(game_played_status==="hide")?user.no_of_games_played:"*"} games.</li>
              );
            })
            }
          </ol>
          {users.length>0 && (
            <p>
            <button type="button" onClick={this.hideShowNoGamesPlayed}>{game_played_check_text}</button>
          </p>
          )}
          
    	</div>
    );
  }
  
}

export default ItemDisplayCard;