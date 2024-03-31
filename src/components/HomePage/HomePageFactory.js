import React, { useState } from 'react';
import '../NavBar/NavBlue.css'
import './Home.css'
import { Button, Card, Col, Container, Form, Modal, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import mobile from '../../images/mobile.png'
import logo from '../../images/logo.png'
import iconOne from '../../images/icon-1.png'
import iconFour from '../../images/icon-4.png'
import iconThree from '../../images/icon-3.png'
import iconTwo from '../../images/icon-2.png'
import play from '../../images/play.png'
import apple from '../../images/apple2.png'
import locat from '../../images/location.png'
import { Link } from 'react-router-dom';
import Slider from '../Slider/Sliderr';
import offer from '../../images/off.png'
import fav from '../../images/fav.png'
import prod1 from '../../images/prod1.png'
import prod2 from '../../images/prod2.png'
import prod3 from '../../images/prod3.png'
import prod4 from '../../images/prod4.png'
import prod5 from '../../images/prod5.png'
import star from '../../images/star.png'
import fire from '../../images/fireIcon.svg'
import clothPic from '../../images/cloth.png'
import shose from '../../images/shose.png'
import tools from '../../images/tools.png'
import card1 from '../../images/card1.png'
import card2 from '../../images/card2.png'
import card3 from '../../images/card3.png'
import newIcon from '../../images/newIcon.svg'
import delivery from '../../images/delivery.png'
import circle from '../../images/circle.png'
import box from '../../images/box.png'
import rectangle from '../../images/Rectangle.png'
import googlePlay from '../../images/google-play.png'
import shield from '../../images/shield.png'
import hours from '../../images/24-hours.png'
import wear from '../../images/prod8.png'
import black from '../../images/black.png'
import ArrowImg from '../../images/ARROW.png'
import profileIcon from '../../images/profileIcon.png'
import favIcon from '../../images/favIcon.svg'
import outIcon from '../../images/outIcon.png'
import addressIcon from '../../images/addressIcon.png'
import prod8 from '../../images/prod8.png'
import deleteIcon from '../../images/deleteIcon.png'
import img1 from '../../images/addIcon.png'
import img2 from '../../images/minusIcon.png'
import userIcon from '../../images/userIcon.png'
import notIcon from '../../images/notIcon.png'
import cartIcon from '../../images/cartIcon.png'
import orderIcon from '../../images/orderIcon.png'
import favo from '../../images/favo.png'
import greenGround from '../../images/greenGround.png'
import { IoHeartCircleSharp, IoSearch } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
const HomePageFactory = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return <>
    <div style={{background:'linear-gradient(266.85deg, #7EA91A 2.11%, #AEDC44 98.8%)'}}  >
<Container>
 <Row>
 <div className='navbarBlue'  style={{display:'flex',  justifyContent :'space-around', gap:'40px'}}>

   <div style={{display:'flex', justifyContent:'center', alignItems:'center',gap:'5px', marginTop:'6px'}}>
    <div style={{display:'flex', gap:'5px'}}>

         <div><img src={iconOne} /></div>
         <p style={{color:'#FFFFFF'}}  >مصر</p>
   </div>

   <div style={{display:'flex', gap:'5px'}}>

   <div><img src={iconFour} /></div>
      <p  style={{color:'#FFFFFF'}} >الدعم الفني</p>
    </div>


<Link to='/store-partner' style={{textDecoration:'none'}}>
  <div style={{display:'flex', gap:'5px'}}>
      <div><img src={iconThree} /></div>
       <p  style={{color:'#FFFFFF'}} >كن شريك </p>
    </div>
</Link>
   



<div style={{display:'flex', gap:'5px'}}>

<div><img src={iconTwo} /></div>
<p  style={{color:'#FFFFFF'}} > تواصل معنا </p>
</div>



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

<div className="bg-body-tertiary">

<Container   >
<Row>
<Col >
<Navbar expand="lg" className="bg-body-tertiary">
<Container fluid>
    <Navbar.Brand href="/">  <img src={logo} style={{width:'100px'}} />   </Navbar.Brand>
    <Navbar.Toggle  />
    <Navbar.Collapse >
    <Nav
        className="me-2 my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        
    >
        <Nav.Link href="/">الرئيسيه</Nav.Link>
        <Nav.Link href="/sales">الخصومات</Nav.Link>
        <Nav.Link href="/Newest-products">احدث المنتجات</Nav.Link>


    </Nav>
    <Form className="d-flex">
        <Form.Control
        type="search"
        placeholder="ابحث ياسم المنتج او المتجر"
        className="me-2 mt-2"
    
        />
    </Form>

    <div className='me-auto  menu ' style={{display:'flex', gap:'10px', justifyContent:'center'}}>

<div style={{position:'relative', marginLeft:'-45px', marginTop:'6px'}}>
<img  className='locatPic' src={locat} style={{marginLeft:'25px'}}/>
</div>
    
    
    <div  className='textLocat'  style={{marginLeft:'-10px', marginTop:'15px'}}>
    <p style={{border:' 2px solid #7EA91A61', width:'245px', borderRadius:'20px', background:'#7EA91A33', padding:'2px 10px', fontSize:'13px'}} >  

توصيل الي <span style={{color:'#7EA91A'}} >22، ميدان الجزائر، المعادي</span>       </p>
    </div>
    

    <Link to='/home-page-store' style={{textDecoration:'none'}}>
    <div className='factroyButton'  style={{marginTop:'9px', marginRight:'5px'}}>
    <button style={{border:'2px solid #FFFFFF', color:'#FFFFFF', background:'linear-gradient(89.51deg, #02E4D8 -0.41%, #019AED 97.31%)', borderRadius:'50px',
    padding:'5px 20px', fontWeight:'bold'}}>المتاجر</button>
    </div>
   </Link>




<div style={{marginTop:'10px', display:'flex', gap:'5px'}} className='icons'>

<Link to='/current-order-store' style={{textDecoration:'none'}}>
  <div style={{borderRadius:'8px', background:'#FFFFFF', width:'40px', height:'40px'}}><img src={orderIcon} /></div>

  <div style={{display:'flex'}}><p style={{marginTop:'-45px', position:'absolute', borderRadius:'50px',marginRight:'-10px'
   , padding:'2px 7px' , fontSize:'10px', color:'#FFFFFF', background:'linear-gradient(180deg, #FF0000 0%, #F38118 100%)'}}>2</p></div>
</Link>
 
<div>
<div  onClick={handleShow}
        style={{borderRadius:'8px', background:'#FFFFFF', width:'40px', height:'40px', cursor:'pointer'}}><img src={cartIcon} width="30px" height='30px' style={{marginTop:'5px'}}/></div>
    <div style={{display:'flex'}}><p style={{marginTop:'-45px', position:'absolute', borderRadius:'50px',marginRight:'-10px'
        , padding:'2px 7px' , fontSize:'10px', color:'#FFFFFF', background:'linear-gradient(180deg, #FF0000 0%, #F38118 100%)'}}>1</p></div>
</div>
  
  

  <Link to='/notifications' style={{textDecoration:'none'}}>
  <div style={{borderRadius:'8px', background:'#FFFFFF', width:'40px', height:'40px'}}><img src={notIcon} width="30px" height='30px' /></div>
  <div style={{display:'flex'}}><p style={{marginTop:'-45px', position:'absolute', borderRadius:'50px',marginRight:'-10px'
   , padding:'2px 7px' , fontSize:'10px', color:'#FFFFFF', background:'linear-gradient(180deg, #FF0000 0%, #F38118 100%)'}}>2</p></div>
  </Link>

  <NavDropdown title={ <div style={{borderRadius:'8px', background:'#FFFFFF', width:'40px', height:'40px'}}><img src={userIcon} style={{marginTop:'5px'}} /></div>} className='pp'    >
    <NavDropdown.Item  style={{display:'flex', gap:'5px'}}  href='/personal-information'>  <div><img src={profileIcon}  /></div>  الملف الشخصي       </NavDropdown.Item>
    <NavDropdown.Item style={{display:'flex', gap:'5px'}}   href='/favorites-products' >  <div><img src={favIcon}  /></div> المفضله     </NavDropdown.Item>
    <NavDropdown.Item style={{display:'flex', gap:'5px'}}   href='/address' >  <div><img src={addressIcon}  /></div> العناوين     </NavDropdown.Item>
    <NavDropdown.Item style={{display:'flex', gap:'5px'}}   href='/' >  <div><img src={outIcon}  /></div> تسجيل الخروج     </NavDropdown.Item>
 
  </NavDropdown> 

  {/* <Link to='' style={{textDecoration:'none'}}>
  <div style={{borderRadius:'8px', background:'#FFFFFF', width:'40px', height:'40px'}}><img src={userIcon} style={{marginTop:'5px'}} /></div>
   </Link> */}
 
</div>


<Modal show={show} onHide={handleClose}>

<Modal.Body>  <div style={{background:'#FFFFFF' , borderRadius:'20px', padding:'8px 20px'}}>
 
 <p style={{color:'#220E5F', fontWeight:'bold', fontSize:'25px'}}> عربه التسوق</p>
 <div style={{display:'flex', justifyContent:'space-between'}}>
     <div style={{color:'#220E5F', fontWeight:'bold', fontSize:'18px'}}> المنتجات: 3 </div>
     <div style={{display:'flex', gap:'12px'}}>
        <p style={{color:'#7EA91A',fontSize:'15px', fontWeight:'500'}}> تحديد الكل</p>
        <p style={{color:'#7A808A',fontSize:'15px', fontWeight:'500'}}>  حذف الكل</p>
     </div>
 </div>

 <div >


<div style={{display:'flex', gap:'5px'}}>
<Form.Check aria-label="option 1" style={{display:'flex'}} />

<div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto', background:'#FFFFFF'}}>




  <div style={{display:'flex' , justifyContent:'center' }}  >

   
  
    <img src={prod2} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px', width:'79px', height:'90px'}} />


  <div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
    <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   موبايل سامسونج جالاكسي بشريحتين اتصال </p>
  
<div style={{display:'flex'}}>
   <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px', width:'70px'}}> 83 جنيه  </p>
   <p style={{color: "#7A808A", fontSize:'18px', marginTop:'-15px', marginBottom:'-25px', marginRight:'15px'}}> <del>83 جنيه </del> </p>
</div>

<div style={{display:'flex', marginTop:'10px'}}>
<p> اللون :</p>
<div><img src={black} /></div>
</div>

<div style={{color:'#585858', display:'flex', marginTop:'-15px'}}> الحجم: 128 جيجا </div>

<div style={{display:'flex', justifyContent:'space-between', marginTop:'25px'}} >
<div style={{display:'flex', marginRight:'-70px', gap:'8px', marginTop:'-25px'}}>
<div><img src={favo} style={{width:'34px'}}/></div>
 <div><img src={deleteIcon}/></div>

</div>




</div>
 
 </div>


 </div>


<div style={{display:'flex', flexDirection:'column'}}>
<div><img src={offer} style={{marginLeft:'20px', width:'34px'}} /></div>

<div style={{display:'flex', gap:'15px'}}>  
    <div style={{display:'flex', flexDirection:'column', marginTop:'55px', marginLeft:'14px'}}>
<div style={{color:'#7A808A', fontSize:'13px'}}>الكميه : بالقطعه</div>
<div style={{display:'flex', justifyContent:'center', gap:'10px', marginTop:'8px'}}> 
<div><img src={img1} width='25px' /></div>
      <h4> 1 </h4>

      <div><img src={img2} width='25px' /></div>
</div>


    </div>
     


     
     </div>

</div>


</div>
</div>



<div style={{display:'flex'}}>


<Form.Check aria-label="option 1" style={{display:'flex'}} />
<div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , 
width:'auto', background:'#FFFFFF', marginTop:'15px', marginBottom:'10px'}}>




<div style={{display:'flex' , justifyContent:'center' }}  >



<img src={prod8} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px', width:'79px', height:'90px'}} />


<div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
<p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   سويت شيرت بغطاء للرأس
وسوستة مزين برسومات</p>

<div style={{display:'flex'}}>
<p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px', width:'70px'}}> 200 جنيه  </p>
<p style={{color: "#7A808A", fontSize:'18px', marginTop:'-15px', marginBottom:'-25px', marginRight:'15px'}}> <del>250 جنيه </del> </p>
</div>

<div style={{display:'flex', marginTop:'10px'}}>
<p> اللون :</p>
<div><img src={black} /></div>
</div>

<div style={{color:'#585858', display:'flex', marginTop:'-15px'}}> المقاس: M</div>

<div style={{display:'flex', justifyContent:'space-between', marginTop:'25px'}} >
<div style={{display:'flex', marginRight:'-70px', gap:'8px', marginTop:'-25px'}}>
<div><img src={favo} style={{width:'34px'}}/></div>
<div><img src={deleteIcon}/></div>

</div>



</div>

</div>


</div>


<div style={{display:'flex', flexDirection:'column'}}>
<div><img src={offer} style={{marginLeft:'20px', width:'34px'}} /></div>

<div style={{display:'flex', gap:'15px'}}>  
<div style={{display:'flex', flexDirection:'column', marginTop:'55px', marginLeft:'14px'}}>
<div style={{color:'#7A808A' , fontSize:'13px'}}>الكميه : بالشوال</div>
<div style={{display:'flex', justifyContent:'center', gap:'10px', marginTop:'8px'}}> 
<div><img src={img1} width='25px' /></div>
<h4> 1 </h4>

<div><img src={img2} width='25px' /></div>
</div>


</div>



</div>

</div>


</div>
</div>

<div style={{background:'#FFFFFF', border: "1.83px solid #ECECEC", borderRadius:'15px', width:'78%', marginRight:'25px'}}>


<div style={{display:'flex',justifyContent:"space-between"}}>
<div style={{margin:'10px 10px 2px 10px'}}>
<p style={{color:'#220E5F', fontWeight:'bold'}} >  الاجمالي</p>
<p style={{color:'#E51937', fontWeight:'bold', marginTop:'-15px'}}>   12.800 جنيه</p>
</div>
</div>
</div>

<Link to='/cart-checkout' style={{textDecoration:'none'}}>
<div  className='d-flex mt-3  ' style={{borderRadius:'30px', justifyContent:'center' }} >
   <div style={{ color:' rgba(255, 255, 255, 1)' , fontWeight:'700' , fontSize :'20px' , border:'none'
    , paddingTop:'10px', display:'flex', justifyContent:'center', cursor:'pointer', position:'absolute', 
    marginTop:'-85px', marginRight:'95px', marginRight:'150px' }} 
   className='profileButton2'  > 
  
  الذهاب للدفع <div>  <img src={ArrowImg} style={{paddingRight:'5px'}}/>  </div> </div>
  
</div>
</Link>





</div>


</div></Modal.Body>

</Modal>


</div>


    </Navbar.Collapse>
</Container>
</Navbar>


</Col>

</Row>


</Container>
</div>

<div>
  <img src={greenGround} alt='' style={{maxWidth:'100%', display:'flex', justifyContent:'center', position:'absolute'}}/>
</div>

<Slider  />

<div class="container text-center">
  <div class="row row-cols-auto mt-5 mb-5" style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'5px'}}>

  
    <div class="col" style={{marginLeft:'-20px'}} >
<Link to='/products-page-details-2' style={{textDecoration:'none'}}>

    <div style={{ background:'pink', display:'flex', height:'75px', borderRadius:'12px'}}>
             
             <p style={{color:'#220E5F', marginTop:'5px', width:'65px', fontSize:'18px', fontWeight:'bold'}}> الازياء الرجالي</p>
             <div style={{marginTop:'-25px'}}><img src={clothPic} width="75px" height="95px" /></div>
    </div>
  
</Link>    
    </div>

  
    <div class="col" style={{marginLeft:'-20px'}} >
    <div style={{ background:'#F3D0A6', display:'flex', height:'75px', borderRadius:'12px'}}>
             
             <p style={{color:'#220E5F', marginTop:'5px', width:'65px', fontSize:'18px', fontWeight:'bold'}}> احذيه حريمي </p>
             <div style={{marginTop:'-25px'}}><img src={shose} width="75px" height="95px" /></div>
    </div>
    </div>

    <div class="col" style={{marginLeft:'-20px'}} >
    <div style={{ background:'#A6F3CE', display:'flex', height:'75px', borderRadius:'12px'}}>
             
             <p style={{color:'#220E5F', marginTop:'5px', width:'65px', fontSize:'18px', fontWeight:'bold'}}> ادوات مكتبه </p>
             <div style={{marginTop:'-25px'}}><img src={tools}/></div>
    </div>
    </div>


    <div class="col" style={{marginLeft:'-20px'}} >

<div style={{ background:'pink', display:'flex', height:'75px', borderRadius:'12px'}}>
         
         <p style={{color:'#220E5F', marginTop:'5px', width:'65px', fontSize:'18px', fontWeight:'bold'}}> الازياء الرجالي</p>
         <div style={{marginTop:'-25px'}}><img src={clothPic} width="75px" height="95px" /></div>
</div>

</div>


<div class="col" style={{marginLeft:'-20px'}} >
<div style={{background:'#F3D0A6', display:'flex', height:'75px', borderRadius:'12px'}}>
         
         <p style={{color:'#220E5F', marginTop:'5px', width:'65px', fontSize:'18px', fontWeight:'bold'}}> احذيه حريمي </p>
         <div style={{marginTop:'-25px'}}><img src={shose} width="75px" height="95px" /></div>
</div>
</div>

<div class="col" style={{marginLeft:'-20px'}} >
<div style={{ background:'#A6F3CE', display:'flex', height:'75px', borderRadius:'12px'}}>
         
         <p style={{color:'#220E5F', marginTop:'5px', width:'65px', fontSize:'18px', fontWeight:'bold'}}> ادوات مكتبه </p>
         <div style={{marginTop:'-25px'}}><img src={tools}/></div>
</div>
</div>


<div class="col" style={{marginLeft:'-20px'}} >

<div style={{ background:'pink', display:'flex', height:'75px', borderRadius:'12px'}}>
         
         <p style={{color:'#220E5F', marginTop:'5px', width:'65px', fontSize:'18px', fontWeight:'bold'}}> الازياء الرجالي</p>
         <div style={{marginTop:'-25px'}}><img src={clothPic} width="75px" height="95px" /></div>
</div>

</div>


<div class="col" style={{marginLeft:'-20px'}} >
<div style={{ background:'#F3D0A6', display:'flex', height:'75px', borderRadius:'12px'}}>
         
         <p style={{color:'#220E5F', marginTop:'5px', width:'65px', fontSize:'18px', fontWeight:'bold'}}> احذيه حريمي </p>
         <div style={{marginTop:'-25px'}}><img src={shose} width="75px" height="95px" /></div>
</div>
</div>



  
  


   
  </div>
</div>


<div style={{background:' #F4F5F7'}}>
    <div class="container text-center mb-5 p-5">
    <div style={{display:'flex', justifyContent:'space-between'}} className='show-all'>

    <div style={{display:'flex'}}>
    <h5 style={{ fontWeight:'bold'}}> <img src={fire} /> 

ينتهي الخصم في 
</h5>

<div style={{display:'flex',justifyContent:'center', alignItems:'center', gap:'5px', paddingRight:'10px'}}>
<p style={{background: "linear-gradient(180deg, #FF0000 0%, #F38118 100%)", borderRadius:'3px',
 width:'26px', height:'26px', color:'#FFFFFF'}}>09</p> <span style={{marginTop:'-20px', fontWeight:'bold', fontSize:'25px',
 color:'red'}}> : </span> 
 <p style={{background: "linear-gradient(180deg, #FF0000 0%, #F38118 100%)", borderRadius:'3px',
 width:'26px', height:'26px', color:'#FFFFFF'}}>24</p> <span style={{marginTop:'-20px', fontWeight:'bold', fontSize:'25px',
 color:'red'}}> : </span>
 <p style={{background: "linear-gradient(180deg, #FF0000 0%, #F38118 100%)", borderRadius:'3px',
 width:'26px', height:'26px', color:'#FFFFFF'}}>02</p>
</div>
 
    </div>

    <Link to='/sales' style={{textDecoration:'none'}}>

<div>
    <p style={{background:'linear-gradient(266.85deg, #7EA91A 2.11%, #AEDC44 98.8%)', borderRadius:'25px', color:'#FFFFFF', padding:'5px 20px'}}>عرض الكل</p>
    </div>
</Link>
</div>


<div class="  row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 ">
  <div class="col mb-3">

<Link to='/factory-product' style={{textDecoration:'none'}}>

<Card style={{ width: '100%' , height:'100%'}}>
<div style={{display:'flex'}}>
        <img src={offer} alt='' style={{marginRight:'10px'}} />
      </div>

      <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
            <img src={favIcon} />
      </div>
      
<div>

<div >
  <div>  <img src={wear} style={{width:'120px', height:'120px'}} /></div>
  <div style={{marginTop:'-10px', display:'flex'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', padding:'5px 7px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
</div>
 




<Card.Text >
موبايل سامسونج جالاكسي بشريحتين اتصال   
</Card.Text>
<div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
<FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
            
            <p style={{color: "#7A808A", marginRight:'5px', fontSize:'18px'}}>4.5</p>
        </div>
        <div style={{display:'flex', marginRight:'15px'}}>
            <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px'}}> 83 جنيه  </p>
           
        </div>
</div>
</Card>
</Link>
    </div>

    <div class="col mb-3">
 
    <Card style={{ width: '100%' , height:'100%'}}>
<div style={{display:'flex'}}>
        <img src={offer} alt='' style={{marginRight:'10px'}} />
      </div>

      <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
            <img src={favIcon} />
      </div>
      
<div>

<div >
  <div>  <img src={wear} style={{width:'120px', height:'120px'}} /></div>
  <div style={{marginTop:'-10px', display:'flex'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', padding:'5px 7px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
</div>
 




<Card.Text >
موبايل سامسونج جالاكسي بشريحتين اتصال   
</Card.Text>
<div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
<FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
            
            <p style={{color: "#7A808A", marginRight:'5px', fontSize:'18px'}}>4.5</p>
        </div>
        <div style={{display:'flex', marginRight:'15px'}}>
            <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px'}}> 83 جنيه  </p>
           
        </div>
</div>
</Card>
    </div>

    <div class="col mb-3">
 
    <Card style={{ width: '100%' , height:'100%'}}>
<div style={{display:'flex'}}>
        <img src={offer} alt='' style={{marginRight:'10px'}} />
      </div>

      <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
            <img src={favIcon} />
      </div>
      
<div>

<div >
  <div>  <img src={wear} style={{width:'120px', height:'120px'}} /></div>
  <div style={{marginTop:'-10px', display:'flex'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', padding:'5px 7px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
</div>
 




<Card.Text >
موبايل سامسونج جالاكسي بشريحتين اتصال   
</Card.Text>
<div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
<FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
            
            <p style={{color: "#7A808A", marginRight:'5px', fontSize:'18px'}}>4.5</p>
        </div>
        <div style={{display:'flex', marginRight:'15px'}}>
            <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px'}}> 83 جنيه  </p>
           
        </div>
</div>
</Card>
    </div>

    <div class="col mb-3">
 
    <Card style={{ width: '100%' , height:'100%'}}>
<div style={{display:'flex'}}>
        <img src={offer} alt='' style={{marginRight:'10px'}} />
      </div>

      <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
            <img src={favIcon} />
      </div>
      
<div>

<div >
  <div>  <img src={wear} style={{width:'120px', height:'120px'}} /></div>
  <div style={{marginTop:'-10px', display:'flex'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', padding:'5px 7px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
</div>
 




<Card.Text >
موبايل سامسونج جالاكسي بشريحتين اتصال   
</Card.Text>
<div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
<FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
            
            <p style={{color: "#7A808A", marginRight:'5px', fontSize:'18px'}}>4.5</p>
        </div>
        <div style={{display:'flex', marginRight:'15px'}}>
            <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px'}}> 83 جنيه  </p>
           
        </div>
</div>
</Card>
    </div>

   <div class="col mb-3">
 
   <Card style={{ width: '100%' , height:'100%'}}>
<div style={{display:'flex'}}>
        <img src={offer} alt='' style={{marginRight:'10px'}} />
      </div>

      <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
            <img src={favIcon} />
      </div>
      
<div>

<div >
  <div>  <img src={wear} style={{width:'120px', height:'120px'}} /></div>
  <div style={{marginTop:'-10px', display:'flex'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', padding:'5px 7px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
</div>
 




<Card.Text >
موبايل سامسونج جالاكسي بشريحتين اتصال   
</Card.Text>
<div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
<FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
            
            <p style={{color: "#7A808A", marginRight:'5px', fontSize:'18px'}}>4.5</p>
        </div>
        <div style={{display:'flex', marginRight:'15px'}}>
            <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px'}}> 83 جنيه  </p>
           
        </div>
</div>
</Card>
    </div>
    
    <div class="col mb-3">
 
    <Card style={{ width: '100%' , height:'100%'}}>
<div style={{display:'flex'}}>
        <img src={offer} alt='' style={{marginRight:'10px'}} />
      </div>

      <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
            <img src={favIcon} />
      </div>
      
<div>

<div >
  <div>  <img src={wear} style={{width:'120px', height:'120px'}} /></div>
  <div style={{marginTop:'-10px', display:'flex'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', padding:'5px 7px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
</div>
 




<Card.Text >
موبايل سامسونج جالاكسي بشريحتين اتصال   
</Card.Text>
<div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
<FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
            
            <p style={{color: "#7A808A", marginRight:'5px', fontSize:'18px'}}>4.5</p>
        </div>
        <div style={{display:'flex', marginRight:'15px'}}>
            <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px'}}> 83 جنيه  </p>
           
        </div>
</div>
</Card>
    </div>
  </div>


</div>
   
   </div>

   <Container>
    <Row>
        <Col>
        <div style={{display:'flex', justifyContent:'center', gap:'15px', marginBottom:'-70px'}}> 
        <img src={card2} width='30%'/>
        <img src={card1} width='30%'/>
        <img src={card3} width='30%'/>
        </div>
           
        </Col>
    </Row>
</Container>

<div class="container text-center mb-5 p-5">


<div style={{display:'flex', justifyContent:'space-between'}} >
<h5 style={{ fontWeight:'bold'}}> <img src={newIcon} /> احدث المنتجات </h5>


<Link to='/Newest-products' style={{textDecoration:'none'}}>

<div>
    <p style={{background:'linear-gradient(266.85deg, #7EA91A 2.11%, #AEDC44 98.8%)', borderRadius:'25px', color:'#FFFFFF', padding:'5px 20px'}}>عرض الكل</p>
    </div>
</Link>
</div>
   <div class="  row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 ">

  <div class="col mb-3">

<Link to='/factory-product' style={{textDecoration:'none'}}>
 <Card style={{ width: '100%' , height:'100%'}}>
<div style={{display:'flex'}}>
        <img src={offer} alt='' style={{marginRight:'10px'}} />
      </div>

      <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
            <img src={favIcon} />
      </div>
      
<div>

<div >
  <div>  <img src={wear} style={{width:'120px', height:'120px'}} /></div>
  <div style={{marginTop:'-10px', display:'flex'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', padding:'5px 7px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
</div>
 




<Card.Text >
موبايل سامسونج جالاكسي بشريحتين اتصال   
</Card.Text>
<div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
<FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
            
            <p style={{color: "#7A808A", marginRight:'5px', fontSize:'18px'}}>4.5</p>
        </div>
        <div style={{display:'flex', marginRight:'15px'}}>
            <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px'}}> 83 جنيه  </p>
           
        </div>
</div>
</Card>
</Link>

    </div>

    <div class="col mb-3">
 
  <Card style={{ width: '100%' , height:'100%'}}>
<div style={{display:'flex'}}>
        <img src={offer} alt='' style={{marginRight:'10px'}} />
      </div>

      <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
            <img src={favIcon} />
      </div>
      
<div>

<div >
  <div>  <img src={wear} style={{width:'120px', height:'120px'}} /></div>
  <div style={{marginTop:'-10px', display:'flex'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', padding:'5px 7px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
</div>
 




<Card.Text >
موبايل سامسونج جالاكسي بشريحتين اتصال   
</Card.Text>
<div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
<FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
            
            <p style={{color: "#7A808A", marginRight:'5px', fontSize:'18px'}}>4.5</p>
        </div>
        <div style={{display:'flex', marginRight:'15px'}}>
            <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px'}}> 83 جنيه  </p>
           
        </div>
</div>
</Card>
    </div>

    <div class="col mb-3">
 
  <Card style={{ width: '100%' , height:'100%'}}>
<div style={{display:'flex'}}>
        <img src={offer} alt='' style={{marginRight:'10px'}} />
      </div>

      <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
            <img src={favIcon} />
      </div>
      
<div>

<div >
  <div>  <img src={wear} style={{width:'120px', height:'120px'}} /></div>
  <div style={{marginTop:'-10px', display:'flex'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', padding:'5px 7px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
</div>
 




<Card.Text >
موبايل سامسونج جالاكسي بشريحتين اتصال   
</Card.Text>
<div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
<FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
            
            <p style={{color: "#7A808A", marginRight:'5px', fontSize:'18px'}}>4.5</p>
        </div>
        <div style={{display:'flex', marginRight:'15px'}}>
            <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px'}}> 83 جنيه  </p>
           
        </div>
</div>
</Card>
    </div>

    <div class="col mb-3">
 
<Card style={{ width: '100%' , height:'100%'}}>
<div style={{display:'flex'}}>
        <img src={offer} alt='' style={{marginRight:'10px'}} />
      </div>

      <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
            <img src={favIcon} />
      </div>
      
<div>

<div >
  <div>  <img src={wear} style={{width:'120px', height:'120px'}} /></div>
  <div style={{marginTop:'-10px', display:'flex'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', padding:'5px 7px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
</div>
 




<Card.Text >
موبايل سامسونج جالاكسي بشريحتين اتصال   
</Card.Text>
<div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
<FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
            
            <p style={{color: "#7A808A", marginRight:'5px', fontSize:'18px'}}>4.5</p>
        </div>
        <div style={{display:'flex', marginRight:'15px'}}>
            <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px'}}> 83 جنيه  </p>
           
        </div>
</div>
</Card>
    </div>

   <div class="col mb-3">
 
  <Card style={{ width: '100%' , height:'100%'}}>
<div style={{display:'flex'}}>
        <img src={offer} alt='' style={{marginRight:'10px'}} />
      </div>

      <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
            <img src={favIcon} />
      </div>
      
<div>

<div >
  <div>  <img src={wear} style={{width:'120px', height:'120px'}} /></div>
  <div style={{marginTop:'-10px', display:'flex'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', padding:'5px 7px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
</div>
 




<Card.Text >
موبايل سامسونج جالاكسي بشريحتين اتصال   
</Card.Text>
<div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
<FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
            
            <p style={{color: "#7A808A", marginRight:'5px', fontSize:'18px'}}>4.5</p>
        </div>
        <div style={{display:'flex', marginRight:'15px'}}>
            <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px'}}> 83 جنيه  </p>
           
        </div>
</div>
</Card>
    </div>
    
  
  </div>
   
</div>



   <div class='container text-center '>
   <div class=" m-5 row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 ">
   <div class="col">
    <div >
               <div  > 
               <img src={mobile} style={{height:'530.97px' , width:'80%'}} /> </div>

              
            </div></div>


   <div class="col" style={{display:'flex' , justifyContent:'center', alignItems:'center'}} >
    <div>
    <div>
                  <img src={logo}  />
                  <h1 style={{color:'#2D2D2D', fontWeight:'bold'}} >  تنزيل التطبيق مجانــاً </h1>
                  <h4 style={{display:'flex' , color:'#00000075' , fontSize:'20px', margin:'15px 0px' , justifyContent:'center' }}>  احصل علي العديد من العروض الحصرية  </h4>
                  <img className='mt-3' src={googlePlay} />

               </div>
    </div>
   </div>
  
</div>
</div>

<div className='shapes'>
<div style={{display:'flex' , position:'absolute', marginTop:'-240px' , zIndex:'-1'}} >
      <img src={rectangle} width='50%'  /></div>
      <div style={{display:'flex' , justifyContent:'flex-end' ,  marginTop:'-260px'}}>
        <img src={circle} width='140px'  />
      </div>
</div>

<Container style={{marginBottom:'60px'}} >
      <div style={{border:'1px solid #FFFFFF', display:'flex', justifyContent:'center' , gap:'100px', boxShadow:'0px 24px 100px 0px #16193212'
               , padding:'50px 50px' , margin:'15px' , borderRadius:'15px'}}>

      <Row className='me-auto' md={4} xs={2}  >


        <Col>  
        
        <div className='box' style={{}}> 
          <div  className='small-boxs' style={{display:'flex'}} >
        <div ><img src={box} style={{marginLeft:'15px' , marginTop:'5px'}} /> </div>
        <div style={{display:'flex', flexWrap:'wrap'}}>
        <h5 style={{display:'flex' , color: "#220E5F" , fontWeight:'bold'}} >  خصومات  </h5>
        <p style={{color: "#9A9CAA"}} > كل أسبوع مبيعات جديدة  </p>
        </div>
                        
          </div>
        </div>
      </Col>

        <Col>
        <div className='box' style={{}}> 

<div className='small-boxs'  style={{display:'flex'}} >
<div ><img src={delivery} style={{marginLeft:'15px' , marginTop:'5px'}} /> </div>
<div style={{display:'flex', flexWrap:'wrap'}}>
<h5 style={{display:'flex' , color: "#220E5F" , fontWeight:'bold'}} >  توصيل مجاني  </h5>
<p style={{color: "#9A9CAA"}} > مجاني 100% لجميع الطلبات </p>
</div>
                
</div>
        </div>
        </Col>

        <Col>
        <div className='box' style={{}}> 

<div className='small-boxs'  style={{display:'flex'}} >
<div ><img src={hours} style={{marginLeft:'15px' , marginTop:'5px'}} /> </div>
<div style={{display:'flex', flexWrap:'wrap', flexDirection:'column'}}>
  <h5 style={{display:'flex' , color: "#220E5F" , fontWeight:'bold'}} >  دعم فني   </h5>
  <p style={{color: "#9A9CAA"  }} > نحن نهتم بتجاربك </p>
</div>
                
</div>
       </div>
        </Col>

        <Col>
        <div className='box' style={{}}> 

<div className='small-boxs'  style={{display:'flex'}} >
<div ><img src={shield} style={{marginLeft:'15px' , marginTop:'5px'}} /> </div>
<div style={{display:'flex', flexWrap:'wrap'}}>
  <h5 style={{display:'flex' , color: "#220E5F" , fontWeight:'bold'}} >  دفع امن  </h5>
  <p style={{color: "#9A9CAA"  }} > طريقة دفع آمنة 100% </p>
</div>
                
</div>
       </div>
        </Col>

      </Row>
</div>
    </Container>

 </>;
}



export default HomePageFactory;