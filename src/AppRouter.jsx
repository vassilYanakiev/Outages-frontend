import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CurrentAlarms from './components/current-alarms.component.jsx';
import FlappingAlarms from './components/flapping-alarms.component.jsx';
import RecentAlarms from './components/recent-alarms.component.jsx';
import AllAlarms from './components/all-alarms.component.jsx';
import AddAlarm from './components/add-alarm.component.jsx';



 
function AppRouter(props){
    
 return(
      <div> 
      
      <div className='App'>   
     
       
      <Switch>                             
        <Route  exact path='/current' component={() => <CurrentAlarms searchField={props.searchField}/>} />
        <Route  exact path='/recent' component={() => <RecentAlarms searchField={props.searchField}/>} />
        <Route  exact path='/flapping' component={() => <FlappingAlarms searchField={props.searchField}/>} />
        <Route  exact path='/all' component={() => <AllAlarms searchField={props.searchField}/>} />
        <Route  exact path='/add' component={() => <AddAlarm searchField={props.searchField}/>} />
        
       
 
      </Switch>
        
      </div>
      </div>
    )
  
 }

export default AppRouter;
