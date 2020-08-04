import React, { useState } from 'react';
import {Form, Button,Col} from "react-bootstrap";




export default function AddAlarm() {
  // Declare a new state variable, which we'll call "count"
        const [alarm, setAlarm] = useState();
        const [start, setStart] = useState('');
        const [duration, setDuration] = useState(0);
        const alarmInstance = {"service_id":parseInt(alarm),"startTime":start.toString(),"duration":parseInt(duration)};
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
                const response = await fetch('/outages',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',

                    },
                    body: JSON.stringify(alarmInstance)
                });
                response.ok?alert(JSON.stringify("Added successfuly!")):setShow(false);
                

             }}
            
            >   Add
            </Button >
           
            </Form>

            
               
             
            
            
    </div>
    
    </div>
   
  );
}