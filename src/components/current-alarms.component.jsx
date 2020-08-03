import React, { Component } from 'react';
//import * as ReactBottStrap from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import {Alert}  from "react-bootstrap";


class CurrentAlarms extends Component {
    constructor() {
      super();
  
      this.state = {
        alarms: []
      };
    }
   
    componentDidMount() {
      fetch('/outages')
        .then(response => response.json())
        //.then(recent => console.log(recent));
        .then(recent => this.setState({ alarms: recent }));   
      
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
      return (
        
          <div >         
            <Alert variant='danger'><h5>Current Alarms</h5></Alert>  
            <div>      
              <BootstrapTable striped keyField='id' data={ filteredalarms } columns={ columns }  /> 
            </div>        
          </div>
     
      );
    }
  }
  
  export default CurrentAlarms;