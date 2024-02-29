import React, { useState } from 'react';
import './Auth.css'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import ForgetPass2 from './ForgetPass2';
import logo from "../../images/logo.png";
const ForgetPass3 = () => {
  //to make modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return <>

    <Container>
        <Row  >
         <Col className=" d-flex justify-content-center text-center  " style={{padding:'initial'}} >
          <div style={{ width:'400px' ,borderRadius:'15px' ,padding:'25px',}}>

       
          <img src={logo}  style={{width:'172px', marginLeft:'25px'}}/>

<h5 style={{fontWeight:'700' ,  color:'#220E5F', marginBottom:'30px', marginTop:'15px'}}  >    نسيت كلمة المرور؟   </h5>
             <p style={{color:'#585858' , fontSize:'18px'}}>
             قم بادخال كلمة المرور الجديدة</p>
 
         <Form>
           <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{padding:'3px 30px', display:'flex',
          position:'absolute',fontSize:'15px',color:'#585858', display:'flex' }}>كلمه المرور الجديده </Form.Label>
            
            <Form.Control type="password"  style={{  background:'rgba(245, 245, 245, 1)' ,borderRadius: '10px', 
                     padding:'15px 35px 15px 15px' }}  />
           </Form.Group>   

            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{padding:'3px 30px', display:'flex',
          position:'absolute',fontSize:'15px',color:'#585858', display:'flex'  }}>    تأكيد كلمة المرور الجديدة  </Form.Label>
            <Form.Control type="password"  style={{  background:'rgba(245, 245, 245, 1)' ,borderRadius: '10px', 
                     padding:'15px 35px 15px 15px'}}  />
            </Form.Group>  
 
          <div  className='d-flex justify-content-center align-items-center' style={{borderRadius:'30px' }} >
               <Button style={{ color:' rgba(255, 255, 255, 1)' , fontWeight:'700' , fontSize :'25px' , border:'none' , paddingTop:'5px'}}
                className='profileButton' >حفظ</Button>
          </div>
 
         </Form>
 
         </div>
         </Col>
       </Row>
     </Container>
     </>;
}
export default ForgetPass3;