import React from 'react';
import './NavBlue.css'
import iconOne from '../../images/icon-1.png'
import iconFour from '../../images/icon-4.png'
import iconThree from '../../images/icon-3.png'
import iconTwo from '../../images/icon-2.png'
import play from '../../images/play.png'
import apple from '../../images/apple2.png'
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBarBlue = () => {
    return <>
       <div style={{background:'linear-gradient(89.51deg, #02E4D8 -0.41%, #019AED 97.31%)'}}  >
  <Container>
    <Row>
    <div className='navbarBlue'  style={{display:'flex',  justifyContent :'space-around', gap:'40px'}}>

      <div style={{display:'flex', justifyContent:'center', alignItems:'center',gap:'5px', marginTop:'6px'}}>
       <div style={{display:'flex', gap:'5px'}}>

            <div><img src={iconOne} /></div>
            <p style={{color:'#FFFFFF'}}  >مصر</p>
      </div>


  <Link to='/new-request-technical-support' style={{textDecoration:'none'}}>
      <div style={{display:'flex', gap:'5px'}}>
      <div><img src={iconFour} /></div>
         <p  style={{color:'#FFFFFF'}} >الدعم الفني</p>
       </div>
</Link>

<Link to='/store-partner' style={{textDecoration:'none'}}>
     <div style={{display:'flex', gap:'5px'}}>
         <div><img src={iconThree} /></div>
          <p  style={{color:'#FFFFFF'}} >كن شريك </p>
       </div>
</Link>
      


<Link to='/contact-us' style={{textDecoration:'none'}}>
 <div style={{display:'flex', gap:'5px'}}>

<div><img src={iconTwo} /></div>
   <p  style={{color:'#FFFFFF'}} > تواصل معنا </p>
 </div>
  
</Link>


      </div>
      <div style={{display:'flex', justifyContent:'center' ,alignItems:'center', gap:'5px'}} >
        <p style={{marginTop:'10px', color:'#FFFFFF'}}> حمل التطبيق الان </p>
        <div>
          <img src={play} />
        </div>

        <div>
          <img src={apple} />
        </div>
      </div>
    </div>
    

    </Row>
  </Container>
</div> 
    </>;
}


export default NavBarBlue;