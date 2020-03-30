import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormCard from './components/FormCard';

class App extends React.Component {

	state={
    users:[],
    user_check_note:""
  }
  
  addUser = (event,user_data) => {
    let user_obj={};
    event.preventDefault();
    if(user_data[0]){
      user_obj['first_name']=user_data[0].trim();
    }
    if(user_data[1]){
      user_obj['last_name']=user_data[1].trim();
    }
    if(user_data[2]){
      user_obj['username']=user_data[2].trim().toLowerCase();
    }
    if(user_obj['username'] && user_obj['last_name'] && user_obj['first_name']){
      user_obj['no_of_games_played']=0;
      
      let username_exists=this.username_already_exists(user_obj['username']);
      if(!username_exists){
        this.setState(oldState => ({
          users: [...oldState.users,user_obj],
          user_check_note:""
        }));
      }else{
        this.setState({
          user_check_note: "Username already exists"
        });
      }
    
    }
  };



  username_already_exists=(username)=>{
    let current_user=this.state.users.filter((user)=>{
      return (user.username===username);
    });
    return (current_user.length>0)?true:false;
  }


  deleteLastItem = event => {
    this.setState(prevState => ({ users: this.state.users.slice(0, -1) }));
  };

noItemsFound = () => {
    return this.state.users.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <FormCard deleteLastItem={this.deleteLastItem} hideShowNoGamesPlayed={this.hideShowNoGamesPlayed} noItemsFound={this.noItemsFound} addUser={this.addUser} state={this.state} />
    
      </div>
    );
  }
}
   
export default App;
