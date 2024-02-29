import React from 'react';
import NavBarBlue from '../NavBar/NavBarBlue';
import '../../components/Partners/partners.css'
import { Card, Col, Container, Form, FormControl, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import locat from '../../images/location.png'
import logo from '../../images/logo.png'
import contact from "../../images/contact.png";
import facebook from "../../images/facebookk.png";
import whats from "../../images/whatsup.png";
import messgener from "../../images/messagnerr.png";
import instagram from "../../images/instgram.png";
import linkedIn from "../../images/linked.png";
import sendIcon from "../../images/Send.png";
import Mail from "../../images/Mail.png";
import iPhone from "../../images/iPhone.png";
import NavbarLogin from '../NavBar/NavbarLogin';
const ContactUs = () => {
    return <>
    <NavBarBlue />
    <NavbarLogin />

    <Container>
    <Row>
      <Col>
      <div style={{marginTop:'15px'}}>
        <h3 style={{color: 'rgba(255, 255, 255, 1)' , fontWeight:'500' , paddingBottom :'20px', paddingTop:'10px' , borderRadius:'25px'}} className=" background-image">
        تواصل معنا</h3>
        </div>
      </Col>
    </Row>
    </Container>

    <Container>
     <Row style={{marginBottom:'80px'}} >
        <Col sm="6" xs='12' style={{marginTop:'25px'}} >
            <img  src={contact} alt="" style={{ maxWidth: '100%', height: 'auto' }} />
            <div style={{display:'flex', justifyContent:'center', marginTop:'15px'}}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'start', flexDirection:'column'}}>
              <div style={{display:'flex', justifyContent:'center', gap:'10px'}}>
                <div><img src={sendIcon} /></div>
                <p>  جمهورية مصر العربية – القاهرة</p>
            </div>

            <div style={{display:'flex', justifyContent:'center', gap:'10px'}}>
              <div><img src={Mail} /></div>
              <p> companyname@mail.net</p>
            </div>

            <div style={{display:'flex', justifyContent:'center', gap:'10px'}}>
              <div><img src={iPhone} /></div>
              <p> 111 111 11 (02) - 111 111 11 (02)</p>
            </div>

            </div>
            </div>

            <div className='d-flex justify-content-center align-items-center'>
                <a href="https://www.instagram.com/" ><img style={{padding:'10px'}} src={instagram} alt=""  /></a>
                <a href="https://www.linkedin.com/login/ar" ><img style={{padding:'10px'}} src={linkedIn} alt=""  /></a>
                <a href="https://www.messenger.com/" ><img style={{padding:'10px'}} src={messgener} alt=""  /></a>
                <a href=" https://web.whatsapp.com/" ><img style={{padding:'10px'}} src={whats} alt=""  /></a>
                <a href="https://www.facebook.com/" ><img style={{padding:'10px'}} src={facebook} alt=""  /></a>
            </div>
        </Col>

        <Col sm="6" xs='12' style={{marginTop:'40px', display:'flex', justifyContent:'center'}} >
        <div style={{background:'#F4F5F7', padding:'20px', height:'490px', borderRadius:'20px', width:'75%'}}>

        <h5 style={{color:'#220E5F', marginBottom:'25px'}}> ارسل ملاحظاتك هنا</h5>
            <form class="form-floating mt-2 ">
              <input type="text" class="form-control" id="floatingInputValue" placeholder="الاسم " value="Mohamed Ahmed " 
              style={{borderRadius:'15px', color: "#585858" , paddingRight:'20px'}}/>
              <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} >الاسم بالكامل  </label>
            </form>

            <form class="form-floating mt-2" >
              <input type="text" class="form-control" id="floatingInputValue" placeholder="رقم الموبايل" value=" 123 456 789" 
              style={{borderRadius:'15px', color: "#585858" , paddingRight:'20px'}}/>
              <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} >   رقم الموبايل</label>
            </form>

          <form class="form-floating mt-2 " >
            <input type="text" class="form-control" id="floatingInputValue" placeholder="البريد الالكتروني " value="username@mail.com" 
              style={{borderRadius:'15px', color: "#220E5F" , paddingRight:'20px'}}/>
            <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} >   البريد الالكتروني</label>
          </form>

          <form class="form-floating mt-2 " >
            <textarea type="textarea" class="form-control" id="floatingInputValue" placeholder=" اكتب ملاحظاتك هنا " value="اكتب ملاحظاتك  هنا" 
              style={{borderRadius:'15px', color: "#220E5F" , paddingRight:'30px' , height:'116px'}}> </textarea>
            <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} >   ملاحظاتك</label>
          </form>

          <div  className='d-flex mt-3  ' style={{borderRadius:'30px', justifyContent:'center' }} >
              <div style={{ color:' rgba(255, 255, 255, 1)' , fontWeight:'700' , fontSize :'25px' , border:'none'
                , paddingTop:'5px', display:'flex', justifyContent:'center' }} 
              className='profileButton2' > ارسال</div>
        </div>
        </div>
       </Col>
     </Row>
    </Container>
    </>;
}
export default ContactUs;