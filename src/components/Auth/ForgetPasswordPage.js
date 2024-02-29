import React, { useState } from 'react';
import './Auth.css'
import logo from "../../images/logo.png";
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';

// import ForgetPass2 from './ForgetPass2';
// import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import ForgetPass2 from './ForgetPass2';

const ForgetPasswordPage = () => {

     //to make modal
     const [showW, setShoww] = useState(false);

     const handleClosee = () => setShoww(false);
     const handleShoww = () => setShoww(true);
 
     const [show, setShow] = useState(false);
 
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);


    return <>

<Container>
       <Row  >
        <Col className=" d-flex justify-content-center text-center  " style={{padding:'initial'}} >
         <div style={{ width:'400px'  ,borderRadius:'15px' ,padding:'25px',}}>

         <img src={logo}  style={{width:'172px', marginLeft:'25px'}}/>

<h5 style={{fontWeight:'700' ,  color:'#220E5F', marginBottom:'30px', marginTop:'15px'}}  >    نسيت كلمة المرور؟   </h5>
            <p style={{color:'#585858' , fontSize:'18px'}}>
             قم بادخال رقم الموبايل لاستعادة كلمة المرور</p>
          
        <Form>
         <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{padding:'3px 30px', display:'flex',
          position:'absolute',fontSize:'15px',color:'#585858', display:'flex'  }}>رقم الموبيل</Form.Label>
         
     
          <Form.Control type="text" placeholder=" 789 456 123" style={{  background:'#FFFFFF' ,borderRadius: '10px', 
                  padding:'25px 35px 15px 15px' }}  />  
         </Form.Group>

         <div  className='d-flex justify-content-center align-items-center' style={{borderRadius:'30px' }} >
              <Button style={{ color:' rgba(255, 255, 255, 1)' , fontWeight:'700' , fontSize :'25px' , border:'none' , paddingTop:'5px'}}
               onClick={handleShoww} className='profileButton' >التالي</Button>
            <Modal show={showW} onHide={handleClosee} style={{width:'410px' , marginLeft:'20px'}}>
              <ForgetPass2 />
            </Modal>

         </div>

        </Form>

        </div>
        </Col>
      </Row>
    </Container>


    </>;
}


export default ForgetPasswordPage;