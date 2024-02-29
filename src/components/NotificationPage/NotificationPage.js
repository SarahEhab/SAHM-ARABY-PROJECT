import React from 'react';
import './notification.css'
import NavBarBlue from '../NavBar/NavBarBlue';
import { Card, Col, Container, Form, FormControl, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import locat from '../../images/location.png'
import logo from '../../images/logo.png'
import deleteicon from "../../images/deleteIcon.png";
import picNotifcation from "../../images/picNoti.png";
import NavbarLogin from '../NavBar/NavbarLogin';
const NofiticationPage = () => {
    return <>
    <NavBarBlue />
    <NavbarLogin />

    <Container>
      <Row>
      <Col>
      <div style={{marginTop:'15px'}}>
        <h3 style={{color: 'rgba(255, 255, 255, 1)' , fontWeight:'500' , paddingBottom :'20px', paddingTop:'10px' , borderRadius:'25px'}} className=" background-image">
        الاشعارات</h3>
        </div>
      </Col>
      </Row>
    </Container>

      <Container >
        <Row style={{marginTop:'10px'}}>
        <Col sm='12' className='d-flex justify-content-center align-items-center' >
                <div style={{background:'rgba(255, 255, 255, 1)' , width:'55%' , boxShadow:'0px 0px 42px 0px rgba(3, 20, 37, 0.05)'
                   , border:"2px solid rgba(238, 238, 238, 1)" , borderRadius:'8px' , marginBottom:'20px'}} className='notification-card'>
                  <div className='d-flex justify-content-between align-items-center m-2'>
                  <h5 style={{color:'#7EA91A', fontSize:'17px'}}>  
                  #3658744
                    </h5>
               
                    <img src={deleteicon} alt='' style={{paddingLeft:'10px'}}  />
                  </div>
                  
                  <Col sm='8' style={{ textAlign:'start'}} >
                  <div style={{margin:'5px 15px 15px 15px'}}>
                   <h6 style={{color:'#220E5F' , display:'flex',lineHeight:'25px', marginTop:'-15px'}}>   تمت الموافقه علي طلبك </h6>
                    <p style={{color:'rgba(122, 128, 138, 1)'  , display:'flex' , fontSize:'15px'}}>30/11/2023-09:30PM</p>
                   </div>
                  </Col>
                   
                </div>
            </Col>

            <Col sm='12' className='d-flex justify-content-center align-items-center' >
                <div style={{background:'rgba(255, 255, 255, 1)' , width:'55%' , boxShadow:'0px 0px 42px 0px rgba(3, 20, 37, 0.05)'
                   , border:"2px solid rgba(238, 238, 238, 1)" , borderRadius:'8px' , marginBottom:'20px'}}  className='notification-card'>
                  <div className='d-flex justify-content-between align-items-center m-2'>
                  <h5 style={{color:'#7EA91A', fontSize:'17px'}}>  
                  #3658744
                    </h5>
               
                    <img src={deleteicon} alt='' style={{paddingLeft:'10px'}}  />
                  </div>
                  
                  <Col sm='8' style={{ textAlign:'start'}} >
                  <div style={{margin:'5px 15px 15px 15px'}}>
                   <h6 style={{color:'#220E5F' , display:'flex',lineHeight:'25px', marginTop:'-15px'}}>  تم وصول طلبك </h6>
                    <p style={{color:'rgba(122, 128, 138, 1)'  , display:'flex' , fontSize:'15px'}}>30/11/2023-09:30PM</p>
                   </div>
                  </Col>
                   
                </div>
            </Col>

            <Col sm='12' className='d-flex justify-content-center align-items-center' >
                <div style={{background:'rgba(255, 255, 255, 1)' , width:'55%' , boxShadow:'0px 0px 42px 0px rgba(3, 20, 37, 0.05)'
                    , border:"2px solid rgba(238, 238, 238, 1)" , borderRadius:'8px'  , marginBottom:'20px'}} className='notification-card'>

                  <div className='d-flex justify-content-between align-items-center m-2'>
                  <h5 style={{color:'#7EA91A', fontSize:'17px'}}>  
                    تطبيق السهم العربي
                    </h5>
            
                    <img src={deleteicon} alt='' style={{paddingLeft:'10px'}}  />
                  </div>

              <Col sm='8' style={{ textAlign:'start'}}>
                 <div style={{margin:'5px 15px 15px 15px'}}>
                      <div>
                      <h6 style={{color:'#220E5F' , display:'flex' ,lineHeight:'25px', marginTop:'-15px'}}>  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص.</h6>
                      </div>
                     <p style={{color:'rgba(122, 128, 138, 1)'  , display:'flex' , fontSize:'15px'}}>30/11/2023-09:30PM</p>
                  </div>
              </Col>
                </div>
            </Col>

            <Col sm='12' className='d-flex justify-content-center align-items-center' >
                <div style={{background:'rgba(255, 255, 255, 1)' , width:'55%' , boxShadow:'0px 0px 42px 0px rgba(3, 20, 37, 0.05)'
                , border:"2px solid rgba(238, 238, 238, 1)" , borderRadius:'8px' , marginBottom:'60px' }} className='notification-card'>

                  <div className='d-flex justify-content-between align-items-center m-2'>
                    <h5 style={{color:'#7EA91A', fontSize:'17px'}}>  
                    تطبيق السهم العربي
                    </h5>
                  
                    <img src={deleteicon} alt='' style={{paddingLeft:'10px'}}  />
                  </div>  

              <Col sm='8' style={{ textAlign:'start'}} >
              <div style={{margin:'5px 15px 15px 15px'}}>
                  <div style={{display:'flex'}}>
                  <h6 style={{color:'#220E5F' , display:'flex' ,lineHeight:'25px', marginTop:'-15px'}}>  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص.</h6>
                  </div>
                                  
                    <p style={{color:'rgba(122, 128, 138, 1)'  , display:'flex' , fontSize:'15px'}}>30/11/2023-09:30PM</p>
                     <img src={picNotifcation} alt='' style={{display:'flex' , maxWidth:'100%'}} />
                  </div>
                                
              </Col>
                </div>
            </Col>
      </Row>
     </Container>
    </>;
}


export default NofiticationPage;