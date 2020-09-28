import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import {Alert}  from "react-bootstrap";
import LoaderComponent from './loader.component.jsx';

var proxyUrl='https://dry-island-50669.herokuapp.com/';
var url = "https://outages-api.herokuapp.com/outages/recent:1440";

class RecentAlarms extends Component {
    constructor() {
      super();
  
      this.state = {
        alarms: [],
        loading: false,
      };
    }
  
    componentDidMount() {
      this.setState({ loading: true });
      fetch(proxyUrl +url)
        .then(response => response.json())
        //.then(recent => console.log(recent));
        .then(recent => this.setState({ alarms: recent, loading: false  }));   
      
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
      if (this.state.loading) return(
  
        <div style={{"display" : "flex",'justify-content': 'center','margin-top':'100px'}}> 
            <LoaderComponent />
        </div> 
      
     )
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