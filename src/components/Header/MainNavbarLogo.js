import React, {Component} from 'react';   
import { NavLink } from 'react-router-dom'
import './header.css'
class MainnavLogo extends Component { 
  render() {   
     return (
       <>  
       <div className='topNav' id="navbar_top" style={{height:'0px'}} ></div>
        <div className=' logo' style={{height:'108px',backgroundColor:'#fdf1f2'}}  > 
                <h1 style={{display:'none'}}>Flower Folib</h1>
          <NavLink to='/' exact><img src='/img/logo.png' alt='logo' style={{left:'0'}}/></NavLink>
        </div> 
       </>
     );

 }
}
 export default MainnavLogo;
