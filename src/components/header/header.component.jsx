import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import { withRouter } from 'react-router-dom';


const Header= function () {


return(

      <div className="sticky" >
      <div className='headerLight'>
          
          <button className="logo-container">
            ALARM Manager
          </button>             

              <div className="options">
              <button className="buttonh2">
                  <Link className='option' to='/all'>
                    All
                  </Link>
                </button>
                <button className="buttonh2">
                  <Link className='option' to='/current'>
                    Current
                  </Link>
                </button>
                <button className="buttonh2">
                <Link className='option' to='/recent'>
                    Recent
                </Link>
                </button>
                <button className="buttonh2">
                <Link className='option' to='/flapping'>
                    Flapping
                </Link>
                </button>
                <button className="buttonh2">
                <Link className='option' to='/add'>
                    Add 
                </Link>
                </button>

            </div>      
          </div>        
           
          </div>
      
      

)
}


export default withRouter(Header)