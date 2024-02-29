import React from 'react';
import NavBarBlue from '../NavBar/NavBarBlue';
import { Button, Card, Col, Container, Form, FormControl, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import locat from '../../images/location.png'
import logo from '../../images/logo.png'
import sad from '../../images/sad.png'
import { Link } from 'react-router-dom';
import './profile.css'
import NavbarLogin from '../NavBar/NavbarLogin';
const PersonaLinformation = () => {
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
         <div style={{border :'none' , borderRadius:'15px' , width:'170px' , height:'33.74px' , 
            background:'linear-gradient(89.51deg, #02E4D8 -0.41%, #019AED 97.31%)' }}>
            <h6 style={{color:'#FFFFFF' , paddingTop:'4px'}}>البيانات الاساسيه</h6>
          </div>
        </Col>

        <Col xs="6" md="6" lg="6" style={{ textAlign: 'center', marginBottom: '10px' }}>
        <Link to='/password-page' style={{textDecoration:'none'}}>
        <div style={{border :'2px solid rgba(232, 232, 232, 1)' , borderRadius:'15px' , width:'170px' , height:'33.74px' , 
               background:'linear-gradient(0deg, #E8E8E8, #E8E8E8),linear-gradient(0deg, #F5F5F5, #F5F5F5)' }}>
                <h6 style={{  color:'rgba(5, 20, 39, 1)' , fontSize:'15px', marginTop:'5px'}}>كلمه المرور </h6>
            </div>
        </Link>
       
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
            
           <form class="form-floating mt-2 ">
                <input type="text" class="form-control" id="floatingInputValue" placeholder="الاسم " value="Mohamed Ahmed " 
                style={{borderRadius:'15px', color: "#585858" , paddingRight:'20px'}}/>
                <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} >الاسم بالكامل  </label>
            </form>

          <Form.Group className="mt-3" controlId="formBasicEmail">
                <Form.Label style={{padding:'3px 30px', display:'flex',
                position:'absolute',fontSize:'15px',color:'#585858', display:'flex' }}>رقم الموبيل</Form.Label>
                  <div>
              

                    <Button style={{position:'absolute', margin:'13px 70px 13px 13px' , borderRadius:'18px' 
                    , background:'linear-gradient(266.85deg, #7EA91A 2.11%, #AEDC44 98.8%)' , border:'none', padding:'3px 30px',
                    color:'#FFFFFF'}}      >تفعيل</Button>
                </div>

              
                  <Form.Control type="text" placeholder=" 789 456 123" style={{ borderRadius: '10px', 
                        padding:'25px 35px 15px 15px' , marginBottom:'10px' }}  />
                      
          </Form.Group>
              <form class="form-floating mt-3 " >
              <input type="text" class="form-control" id="floatingInputValue" placeholder="البريد الالكتروني " value="username@mail.com" 
                style={{borderRadius:'15px', color: "#220E5F" , paddingRight:'20px'}}/>
              <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} >   البريد الالكتروني</label>
            </form>

            <div  className='d-flex justify-content-center align-items-center' style={{borderRadius:'30px' }} >
                <Button style={{ color:' rgba(229, 25, 55, 1)' , fontSize :'20px'  , fontWeight:'600'}} 
                  className='deleteButton ' >  <img src={sad} />  حذف الحساب </Button>
            </div>
            
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

export default PersonaLinformation;