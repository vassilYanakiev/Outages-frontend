import React, { Component } from 'react';
//import * as ReactBottStrap from "react-bootstrap";
import BootstrapTable from 'react-bootstrap-table-next';
import {Alert}  from "react-bootstrap";


class FlappingAlarms extends Component {
    constructor() {
      super();
  
      this.state = {
        alarms: []
      };
    }
  
    componentDidMount() {
      fetch('/flappings')
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
        text: 'Service Id',
        sort: true
      }, {
        dataField: 'duration',
        text: 'Duration (minutes)',
        sort: true
      }, {
        dataField: 'start',
        text: 'Start Time',
        sort: true
      },  {
        dataField: 'end',
        text: 'End Time',
        sort: true
      }, {
        dataField: 'sum_outages',
        text: 'Total minutes',
        sort: true
      }];
  
  
      const alarms  = this.state.alarms;
      const searchField = this.props.searchField;
      //console.log(alarms[service_id]);
      const filteredalarms = alarms.filter(alarm => 
        //console.log(alarm.service_id.toString().includes(searchField))
        (alarm.amount_outages.toString().includes(searchField.toLowerCase()) || 
        alarm.duration.toString().includes(searchField.toLowerCase()) ||
        alarm.end.toString().includes(searchField.toLowerCase())||
        alarm.service_id.toString().includes(searchField.toLowerCase())||
        alarm.start.toString().includes(searchField.toLowerCase())||
        alarm.sum_outages.toString().includes(searchField.toLowerCase())
        )             
        
      );
      return (
        
          <div >         
            <Alert variant='success'><h5>Flapping Alarms</h5></Alert>  
            <div>      
              <BootstrapTable striped keyField='id' data={ filteredalarms } columns={ columns }  /> 
            </div>        
          </div>
     
      );
    }
  }
  
  export default FlappingAlarms;