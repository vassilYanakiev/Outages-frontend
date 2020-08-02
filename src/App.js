import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.component.jsx';
import {SearchBox} from './components/search-box.component';
import AppRouter from './AppRouter.jsx'

class App extends Component {
  constructor() {
    super();

    this.state = {      
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('/outages/recent:80000')
      .then(response => response.json())
      .then(recent => this.setState({ alarms: recent }));   
    
  }
  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };
 
  render() {  
        
        
    
    return (
      <div> 
      <div>  
            <Header/>
      </div>,
      <div className='App'>   
      <SearchBox onSearchChange={this.onSearchChange} />  
       
      <AppRouter searchField={this.state.searchField}/>
        
      </div>
      </div>
    );
  }
}

export default App;
