import React from 'react';
import NavBarBlue from '../NavBar/NavBarBlue';
import { Button, Card, Col, Container, Form, FormControl, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import locat from '../../images/location.png'
import logo from '../../images/logo.png'
import sad from '../../images/sad.png'
import { Link } from 'react-router-dom';
import './profile.css'
import NavbarLogin from '../NavBar/NavbarLogin';
const PasswordPage = () => {
    return <>
    <NavBarBlue />
    <NavbarLogin />

    <Container>
     <Row>
      <Col>
    <div style={{marginTop:'15px'}}>
    <h3 style={{color: 'rgba(255, 255, 255, 1)' , fontWeight:'500' , paddingBottom :'20px', paddingTop:'10px' , borderRadius:'25px'}} className=" background-image">
    الملف الشخصي</h3>
    </div>
      </Col>
     </Row>
    </Container>

    <Container className='d-flex justify-content-center align-items-center' >
      <Row className="m-3">
        <Col xs="6" md="6" lg="6" style={{ textAlign: 'center', marginBottom: '10px' }}>
      
        <Link to='/personal-information' style={{textDecoration:'none'}}>
        <div style={{border :'2px solid rgba(232, 232, 232, 1)' , borderRadius:'15px' , width:'170px' , height:'33.74px' , 
                  background:'linear-gradient(0deg, #E8E8E8, #E8E8E8),linear-gradient(0deg, #F5F5F5, #F5F5F5)' }}>
            <h6 style={{ color:'rgba(5, 20, 39, 1)', paddingTop:'4px'}}>البيانات الاساسيه</h6>
          </div>
          </Link>
        </Col>
      
        <Col xs="6" md="6" lg="6" style={{ textAlign: 'center', marginBottom: '10px' }}>
        <div style={{border :'none' , borderRadius:'15px' , width:'170px' , height:'33.74px' , 
          background:'linear-gradient(89.51deg, #02E4D8 -0.41%, #019AED 97.31%)' , marginTop:'-5px'}}>
                <h6 style={{  color:'#FFFFFF' , fontSize:'15px', marginTop:'5px', paddingTop:'5px'}}>كلمه المرور </h6>
            </div>
        </Col>
      </Row>
     </Container>

    <Container>
    <Row>
        <Col>  <div style={{marginLeft:'-55px', marginBottom: '15px', borderBottom:'2px solid #EEEEEE ', width:'100%' }}></div></Col>
    </Row>
    </Container>

  <Container>
    <Row>
      <Col style={{display:'flex', justifyContent:'center'}} >
        <div style={{ padding:'20px', height:'490px', borderRadius:'20px', width:'45%'}} className='card-info'>
         <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label style={{padding:'3px 30px', display:'flex',
                  position:'absolute',fontSize:'15px',color:'#585858'  }}> كلمه المرور الحاليه </Form.Label>
                    
                    <Form.Control type="password"  style={{ borderRadius: '15px', 
                            padding:'25px 38px 15px 15px', marginBottom:'10px' }}  />
           </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label style={{padding:'3px 30px', display:'flex',
                  position:'absolute',fontSize:'15px',color:'#585858'  }}> كلمه المرور الجديده </Form.Label>
                    
                    <Form.Control type="password"  style={{ borderRadius: '15px', 
                            padding:'25px 38px 15px 15px', marginBottom:'10px' }}  />
           </Form.Group>

          <Form.Group className="mb-1" controlId="formBasicEmail">
                    <Form.Label style={{padding:'3px 30px', display:'flex',
                  position:'absolute',fontSize:'15px',color:'#585858' }}>تاكيد كلمه المرور  </Form.Label>
                    
                    <Form.Control type="password"  style={{  borderRadius: '15px', 
                          padding:'25px 38px 15px 15px', marginBottom:'10px' }}  />
            </Form.Group>

          <div  className='d-flex mt-3  ' style={{borderRadius:'30px', justifyContent:'center' }} >
              <div style={{ color:' rgba(255, 255, 255, 1)' , fontWeight:'700' , fontSize :'25px' , border:'none'
                , paddingTop:'5px', display:'flex', justifyContent:'center' }} 
              className='profileButton2' > حفظ</div>
         </div>
        </div>
      </Col>
    </Row>
   </Container>
</>;
}
export default PasswordPage;