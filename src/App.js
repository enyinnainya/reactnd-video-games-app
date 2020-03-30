import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormCard from './components/FormCard';

class App extends React.Component {

	state={
    users: []
    }
  
addItem = (event,user_data) => {
  console.log(user_data);
    event.preventDefault();
    this.setState(oldState => ({
      users: [...oldState.users, user_data],
    }));
  };


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
        <FormCard deleteLastItem={this.deleteLastItem} noItemsFound={this.noItemsFound} addItem={this.addItem} state={this.state} />
    
      </div>
    );
  }
}
   
export default App;
