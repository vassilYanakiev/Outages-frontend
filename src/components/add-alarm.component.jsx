import React, { useState } from 'react';
import {Form, Button, Col} from "react-bootstrap";

var proxyUrl='https://dry-island-50669.herokuapp.com/';
var url = "http://127.0.0.1:5000/outages/add";
var url2 = "https://outages-api.herokuapp.com/outages/add";

export default function AddAlarm() {
  // Declare a new state variable, which we'll call "count"
        const [alarm, setAlarm] = useState();
        const [start, setStart] = useState('');
        const [duration, setDuration] = useState(0);
        
        const [show, setShow] = useState(false);
        return (
            <div style={{}}>
            <div style={{marginLeft: '120px', background: 'lightblue',height: '250px', justifycontent: 'center', marginTop: '50px', width: '700px' }}>
                
            <style type="text/css">
                    {`
                    
                    .btn-flat {
                    background-color: rgb(165, 204, 216);
                    color: white;
                    }

                    .btn-xxl {
                    padding: 1rem 1.5rem;
                    font-size: 1.5rem;
                    }
                    `}
            </style>
            <br />     
           
            <Form>
            <Form.Row >
                <Form.Label column="sm" lg={2}>
                    
                </Form.Label>
                <Col xs={8} >
                <Form.Control size="sm" type="text" placeholder="Alarm id" onChange={e=>setAlarm(e.target.value)}/>
                </Col>
            </Form.Row>
            <br />

            <Form.Row >
                <Form.Label column="sm" lg={2}>
                    
                </Form.Label>
                <Col xs={8}>
                <Form.Control size="sm" type="number" placeholder="Duration" onChange={e=>setDuration(e.target.value)} />
                </Col>
            </Form.Row>
            <br />

            <Form.Row>
                <Form.Label column="sm" lg={2}>
                    
                </Form.Label>
                <Col xs={8}>
                <Form.Control size="sm" type="text" placeholder="Start Time" onChange={e=>setStart(e.target.value)}/>
                </Col>
            </Form.Row>
            <br />

            <Button variant="flat" type="submit"
            onClick={async() =>{
                
                const alarmInstance = {"service_id":parseInt(alarm),"startTime":start.toString(),"duration":parseInt(duration)};
                const mybody = JSON.stringify(alarmInstance);               
                
                try{
                const response = await fetch(url2,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: mybody
                })
                if(!response.ok){alert(response.status)}
                else{ alert(response.status)}
                }
                
                catch(error) {
                    alert("server failure " + error)
                }
               

                
             }}
            
            >   Add
            </Button >
           
            </Form>

            
               
             
            
            
    </div>
    
    </div>
   
  );
}