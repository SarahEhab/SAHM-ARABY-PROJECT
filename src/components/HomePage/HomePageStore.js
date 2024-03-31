import React from 'react';
import NavBarBlue from '../NavBar/NavBarBlue';
import NavbarLogin from '../NavBar/NavbarLogin';
import Slider from '../Slider/Sliderr';
import './Home.css'
import { Button, Card, Col, Container, Form, Modal, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import mobile from '../../images/mobile.png'
import logo from '../../images/logo.png'
import circle from '../../images/circle.png'
import box from '../../images/box.png'
import rectangle from '../../images/Rectangle.png'
import googlePlay from '../../images/google-play.png'
import shield from '../../images/shield.png'
import hours from '../../images/24-hours.png'
import offer from '../../images/off.png'
import fav from '../../images/fav.png'
import prod1 from '../../images/prod1.png'
import prod2 from '../../images/prod2.png'
import prod3 from '../../images/prod3.png'
import prod4 from '../../images/prod4.png'
import prod5 from '../../images/prod5.png'
import star from '../../images/star.png'
import card1 from '../../images/card1.png'
import card2 from '../../images/card2.png'
import card3 from '../../images/card3.png'
import newIcon from '../../images/newIcon.svg'
import fire from '../../images/fireIcon.svg'
import cat1 from '../../images/cat1.png' 
import cat2 from '../../images/cat2.png'
import cat3 from '../../images/cat3.png'
import cat4 from '../../images/cat4.png'
import cat5 from '../../images/cat5.png'
import cat6 from '../../images/cat6.png'
import cat7 from '../../images/cat7.png'
import cat8 from '../../images/cat8.png'
import delivery from '../../images/delivery.png'
import locat from '../../images/location.png'
import LoginPage from '../Auth/LoginPage';
import { Link } from 'react-router-dom';
import ProductCard from '../Products/ProductCard';


const HomePageStore = () => {
    return <>
        <NavBarBlue />
        <NavbarLogin />
        <Slider />

        <div class="container text-center">
  <div class="row row-cols-auto" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>

  
    <div class="col" style={{padding:'initial'}} >

<Link to='/products-page-details' style={{textDecoration:'none'}}>
      <div className='cat-box'> 
        <img src={cat1} style={{margin:'10px'}} />
      </div>
       <p style={{color:'#220E5F'}}> الموبايلات  </p>
</Link>

    </div>

  
    <div class="col" style={{padding:'initial'}} >
      <div className='cat-box'> 
        <img src={cat2} style={{margin:'10px', height:'80px', width:'80px'}} />
      </div>
       <p style={{color:'#220E5F'}}> الازياء الرجالي  </p>
    </div>

    <div class="col" style={{padding:'initial'}} >
      <div className='cat-box'> 
        <img src={cat5} style={{margin:'10px', height:'80px', width:'80px'}} />
      </div>
       <p style={{color:'#220E5F'}}> الازياء الحريمي </p>
    </div>


    <div class="col" style={{padding:'initial'}} >
      <div className='cat-box'> 
        <img src={cat4} style={{margin:'10px', height:'80px', width:'80px'}} />
      </div>
       <p style={{color:'#220E5F'}}>   بقالة </p>
    </div>


   <div class="col" style={{padding:'initial'}} >
      <div className='cat-box'> 
        <img src={cat3} style={{margin:'10px', height:'80px', width:'80px'}} />
      </div>
       <p style={{color:'#220E5F'}}>   ازياء اطفال </p>
    </div>


    <div class="col" style={{padding:'initial'}}>
      <div className='cat-box'> 
        <img src={cat7} style={{margin:'14px', height:'80px', width:'80px'}} />
      </div>
       <p style={{color:'#220E5F'}}>  الصحه والجمال   </p>
    </div>


     <div class="col" style={{padding:'initial'}} >
      <div className='cat-box'> 
        <img src={cat6} style={{margin:'10px', height:'80px', width:'80px'}} />
      </div>
       <p style={{color:'#220E5F'}}>  الاجهزه المنزليه    </p>
    </div>
    <div class="col" style={{padding:'initial'}} >
      <div className='cat-box'> 
        <img src={cat8} style={{margin:'13px', height:'80px', width:'80px'}} />
      </div>
       <p style={{color:'#220E5F'}}>   ادوات مكتبيه    </p>
    </div>
    <div class="col" style={{padding:'initial'}} >
      <div className='cat-box'> 
        <img src={cat1} style={{margin:'10px'}} />
      </div>
       <p style={{color:'#220E5F'}}> الموبايلات  </p>
    </div>

  
    <div class="col" style={{padding:'initial'}}>
      <div className='cat-box'> 
        <img src={cat2} style={{margin:'10px', height:'80px', width:'80px'}} />
      </div>
       <p style={{color:'#220E5F'}}> الازياء الرجالي  </p>
    </div>

    <div class="col" style={{padding:'initial'}} >
      <div className='cat-box'> 
        <img src={cat4} style={{margin:'10px', height:'80px', width:'80px'}} />
      </div>
       <p style={{color:'#220E5F'}}>   بقالة </p>
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



<ProductCard />
</div>
   
   </div>

   <div class="container text-center mb-5 p-5">


<div style={{display:'flex', justifyContent:'space-between'}} >
<h5 style={{ fontWeight:'bold'}}> <img src={newIcon} /> احدث المنتجات </h5>


<Link to='/Newest-products' style={{textDecoration:'none'}}>

<div>
    <p style={{background:'linear-gradient(266.85deg, #7EA91A 2.11%, #AEDC44 98.8%)', borderRadius:'25px', color:'#FFFFFF', padding:'5px 20px'}}>عرض الكل</p>
    </div>
</Link>
</div>
   
  <ProductCard />
</div>


<Container>
    <Row>
        <Col>
        <div style={{display:'flex', justifyContent:'center', gap:'15px', marginBottom:'-70px'}}> 
        <img src={card2} width='30%'/>
            <img src={card3} width='30%'/>
        <img src={card1} width='30%'/>
           
        </div>
           
        </Col>
    </Row>
</Container>

<div style={{background:' #F4F5F7'}}>
    <div class="container text-center mb-5 p-5">
    <h5 style={{display:'flex', fontWeight:'bold'}}>منتجات مقترحة لك</h5>
    
 <ProductCard />

 

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
          <div className='small-boxs'  style={{display:'flex'}} >
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

<div  className='small-boxs'  style={{display:'flex'}} >
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

<div  className='small-boxs' style={{display:'flex'}} >
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



export default HomePageStore;