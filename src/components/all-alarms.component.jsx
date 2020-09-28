import React, { Component } from 'react';
//import * as ReactBottStrap from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import {Alert}  from "react-bootstrap";
import LoaderComponent from './loader.component.jsx';


var proxyUrl='https://dry-island-50669.herokuapp.com/';
var url = "https://outages-api.herokuapp.com/outages";


class AllAlarms extends Component {
    constructor() {
      super();
  
      this.state = {
        alarms: [],
        loading: false,
      };
    }
   
   
    componentDidMount() {
      this.setState({ loading: true });
      fetch(proxyUrl+url)
        .then(response => response.json())
        //.then(recent => console.log(recent));
        .then(recent => this.setState({ alarms: recent, loading: false  }));   
      
    }
    onSearchChange = event => {
      this.setState({ searchField: event.target.value });
    };
    
    render() {  
      //const searchField = ;
     
      
      const columns = [{
        dataField: 'service_id',
        text: 'Service ID',
        sort: true,
        
      }, {
        dataField: 'duration',
        text: 'Duration (minutes)',
        sort: true
      }, {
        dataField: 'startTime',
        text: 'Start Time',
        sort: true
      }];
  
  
      const alarms  = this.state.alarms;
      const searchField = this.props.searchField;
      
      const filteredalarms = alarms.filter(alarm => 
        
        (alarm.service_id.toString().includes(searchField.toLowerCase()) || 
        alarm.duration.toString().includes(searchField.toLowerCase()) ||
        alarm.startTime.toString().includes(searchField.toLowerCase())
        )       
        
      );
      if (this.state.loading) return(
  
        <div style={{"display" : "flex",'justify-content': 'center','margin-top':'100px'}}> 
            <LoaderComponent />
        </div> 
      
     )
      return (
          
          <div >         
            <Alert variant='info'><h5>All Alarms</h5></Alert>  
            <div>      
              <BootstrapTable striped keyField='id' data={ filteredalarms } columns={ columns }  /> 
            </div>        
          </div>
     
      );
    }
  }
  
  export default AllAlarms;