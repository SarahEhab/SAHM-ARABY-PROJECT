import React, { useState } from 'react';
import './Auth.css'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import facebook from "../../images/face.png";
import gmail from "../../images/gamil.png";
import apple from "../../images/apple.png";
import logo from "../../images/logo.png";
import RegisterPage from './RegisterPage';
import ForgetPasswordPage from './ForgetPasswordPage';


const LoginPage = () => {


     //to make modal
     const [show, setShow] = useState(false);
     const [showReg, setShowRwg] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     const handleClosee = () => setShowRwg(false);
     const handleShowReg = () => setShowRwg(true);



  
return(
    <Container>
    <Row  >
     <Col className=" d-flex justify-content-center text-center  " style={{padding:'initial'}} >
     <div style={{ width:'400px' ,borderRadius:'15px' ,padding:'25px',}}>
      <img src={logo}  style={{width:'172px', marginLeft:'25px'}}/>

      <h5 style={{fontWeight:'700' ,  color:'#220E5F', marginBottom:'30px'}}  >    تسجيل الدخول    </h5>
  <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      
 
       
      <Form.Control type="text" placeholder=" 789 456 123" style={{  background:'#FFFFFF' ,borderRadius: '10px', 
               padding:'20px 35px 15px 15px' , border:'2px solid #7EA91A'}}  /> 

<Form.Label style={{ display:'flex' , padding:'3px 35px', marginTop:'-63px', position:'absolute',fontSize:'15px',color:'#585858'
}}>رقم الموبيل</Form.Label>
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicEmail">
         <Form.Label style={{display:'flex' , padding:'3px 30px', display:'flex', marginBottom:'-30px' ,
          position:'absolute',fontSize:'15px',color:'#585858'}}> كلمه المرور  </Form.Label>
         
         <Form.Control type="password"  style={{  background:'#FFFFFF' ,borderRadius: '10px', 
                 padding:'15px' }}  />
      </Form.Group>
  


    <div style={{display:'flex' , justifyContent:'center' , gap:'120px'}}>
       <p style={{ color:'#7EA91A'}}  > <input style={{marginLeft:'10px' , marginTop:'10px'}} type='checkbox' />تذكرني  </p>
       <p style={{color:'rgba(235, 60, 60, 1)' , cursor:'pointer'}}  onClick={handleShow} >     نسيت كلمة المرور؟     </p>

    <Modal show={show} onHide={handleClose} style={{width:'410px' , marginLeft:'20px'}}>
      <ForgetPasswordPage />
    </Modal>
   </div>

    <div  className='d-flex justify-content-center align-items-center   ' style={{borderRadius:'30px' }} >
           <button style={{ color:' rgba(255, 255, 255, 1)' , fontWeight:'700' , fontSize :'25px' , border:'none' , paddingTop:'5px', display:'flex', justifyContent:'center'}} 
           className='profileButton' >تسجيل دخول</button>
    </div>

     <div style={{display:'flex' , justifyContent:'center'}}> <p style={{color:'#888888'}} >  لا تمتلك حساب ؟  </p>

    <div>
      <p style={{color:'#7EA91A' , paddingLeft:'4px', cursor:'pointer'}}   onClick={handleShowReg}  >   قم بإنشاء حساب </p>
   </div>
            
     <Modal  show={showReg} onHide={handleClosee} style={{width:'410px'}}>
            <RegisterPage />
      </Modal>
    

    </div>

     <div>
          <p style={{color:'#888888', margin:'-5px'}}  >او من خلال</p>
          <div className='d-flex justify-content-center align-items-center'>
          
             <a href="https://www.messenger.com/" ><img style={{padding:'10px'}} src={apple} alt=""  /></a>
             <a href=" https://web.whatsapp.com/" ><img style={{padding:'10px'}} src={gmail} alt=""  /></a>
             <a href="https://www.facebook.com/" ><img style={{padding:'10px'}} src={facebook} alt=""  /></a>
         </div>
      </div>

     </Form>

     </div>
     </Col>
   </Row>
 </Container>
)
     ;
}



export default LoginPage;