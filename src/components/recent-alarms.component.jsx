import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {Alert}  from "react-bootstrap";


class RecentAlarms extends Component {
    constructor() {
      super();
  
      this.state = {
        alarms: []
      };
    }
  
    componentDidMount() {
      fetch('/outages/recent:1440')
        .then(response => response.json())
        //.then(recent => console.log(recent));
        .then(recent => this.setState({ alarms: recent }));   
      
    }
    onSearchChange = event => {
      this.setState({ searchField: event.target.value });
    };
   
    render() {  
      
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
      //console.log(alarms[service_id]);
      const filteredalarms = alarms.filter(alarm => 
        //console.log(alarm.service_id.toString().includes(searchField))
        (alarm.service_id.toString().includes(searchField.toLowerCase()) || 
        alarm.duration.toString().includes(searchField.toLowerCase()) ||
        alarm.startTime.toString().includes(searchField.toLowerCase())
        )       
        
      );
      return (
        <div>        
         
          <div >         
            <Alert variant='warning'><h5>Recent Alarms - Last 24h</h5></Alert>            
            <BootstrapTable striped keyField='id' data={ filteredalarms } columns={ columns }  />      
          </div>
        
        </div>
      );
    }
  }
  
  export default RecentAlarms 