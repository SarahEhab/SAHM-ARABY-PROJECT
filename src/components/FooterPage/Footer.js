import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import './footer.css'
import logo from '../../images/logo.png'
import facebook from '../../images/facebook.png'
import instgram from '../../images/instagram.png'
import whats from '../../images/whats.png'
import telegram from '../../images/telegram.png'
import youtube from '../../images/youtube.png'
import googlePlay from '../../images/google-play.png'
import cat1 from '../../images/cat1.png'
import { Link } from 'react-router-dom';
import { TbLocation } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { MdPhoneIphone } from "react-icons/md";

const Footer = () => {
    return <>
      <div style={{ background:'#F4F5F7' ,borderTop:'2px solid  rgba(167, 190, 174, 0.26)' , borderRadius:'15px' , marginTop:'15px'}}>
         <div class="container text-center mt-2 ">
  <div class="row row-cols-2 row-cols-lg-5 g-2 " style={{justifyContent:'center'}}>
    <div class="col">

      <div style={{display:'flex', justifyContent:'center'}}>
      <div style={{}}>
      <img src={logo} alt='' width='150px' />
      </div>
       
      </div>
    </div>

    <div class="col">
      <div class="">
     <div style={{display:'flex' , flexDirection:'column', justifyContent:'center', alignItems:'center'}} >
     <h5 style={{color:'#220E5F'}}>روابط اساسيه</h5>
   
      <a href="/" class="links"> الرئيسيه </a>
            <a href="/sales" class="links"> الخصومات </a>
            <a href="/Newest-products" class="links"> احدث المنتجات </a>
            <a href="/Best-seller" class="links"> الاكثر مبيعا</a>
   

     </div>
     
      </div>
    </div>


     <div class="col">
      <div class="">
     <div style={{display:'flex' , flexDirection:'column'}} >
     <h5 style={{color:'#220E5F'}}>الدعم </h5>
   
      <a href="/store-partner" class="links"> كن شريك </a>
            <a href="/contact-us" class="links"> تواصل معنا </a>
            <a href="/new-request-technical-support" class="links"> الدعم الفني</a>
           

     </div>
     
      </div>
    </div>

       <div class="col">
       <div style={{display:'flex', justifyContent:'center', marginTop:'15px'}}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'start', flexDirection:'column'}}>
              <div style={{display:'flex', justifyContent:'center', gap:'10px'}}>
              <TbLocation style={{fontSize:'25px', color:'#7EA91A'}} />
                <p style={{fontSize:'15px'}}>  جمهورية مصر العربية – القاهرة</p>
            </div>

            <div style={{display:'flex', justifyContent:'center', gap:'10px'}}>
            <HiOutlineMail  style={{fontSize:'25px', color:'#7EA91A'}}/>
              <p style={{fontSize:'15px'}} > companyname@mail.net</p>
            </div>

            <div style={{display:'flex', justifyContent:'center', gap:'10px'}}>
            <MdPhoneIphone style={{fontSize:'25px', color:'#7EA91A'}} />
              <p style={{fontSize:'15px'}} > 111 111 11 (02) - 111 111 11 (02)</p>
            </div>

            </div>
        </div>
    </div>
  


    <div class="col">
      <div class="d-flex ">
      <div>
      <p style={{color:'#636270'}} > تواصل معنا علي  </p>
        <div style={{display:'flex', justifyContent:'center'}}>
        <img src={youtube} alt=''  style={{padding:'5px',height:'40px'}}  />
            <img src={telegram} alt=''  style={{padding:'5px',height:'40px'}} />
            <img src={whats} alt='' style={{padding:'5px',height:'40px'}}  />
            <img src={instgram} alt='' style={{padding:'5px',height:'40px'}} />
            <img style={{padding:'5px',height:'40px'}} src={facebook} alt='' />
            
        </div>
        <img className='mt-3' src={googlePlay} width='200px' />
      </div>
     
      </div>
    </div>
   
  </div> 
         </div>

        <div style={{background:'#d9d9d982' , borderTop:'2px solid #7EA91A21', marginTop:'20px'}} >
        <Container style={{display:'flex', justifyContent:'space-between', marginTop:'5px'}}>
            <p >حقوق الطبع والنشر @ 2023. جميع الحقوق محفوظة Tech4life.</p>

          <a href="/conditions-and-roles" style={{textDecoration:'none'}} >
          <p style={{color:'#000000'}}>الشروط والاحكام</p>
          </a>
        </Container>
        </div>

      </div>
       </>;
}
export default Footer;