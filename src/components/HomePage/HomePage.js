import React, { useState } from 'react';
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
import Slider from '../Slider/Sliderr';
import NavBarBlue from '../NavBar/NavBarBlue';
import ProductCard from '../Products/ProductCard';
import loginIcon from '../../images/login.png';
import loginFac from '../../images/loginFac.png';
import edit from '../../images/edit.png'
import currentLocat from '../../images/currlocat.png'
import addPic from '../../images/addPic.png'
import homeLocation from '../../images/home-locate.png'
import mapPic from '../../images/mapp.png'
import favIcon from '../../images/favIcon.svg'
import { FaStar } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';
const HomePage = () => {

   //to make modal screen
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   const [showAddress, setShowAddress] = useState(false);

   const handleCloseAddress = () => setShowAddress(false);
   const handleShowAddress = () => setShowAddress(true);


    return <>

{/* <div style={{background:'linear-gradient(89.51deg, #02E4D8 -0.41%, #019AED 97.31%)'}}  >
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
</div> */}

<NavBarBlue />

<div className="bg-body-tertiary">

<Container   >
<Row>
<Col >
<Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">  <img src={logo} style={{width:'100px'}} />   </Navbar.Brand>
        <Navbar.Toggle  />
        <Navbar.Collapse >
          <Nav
            className="me-5 my-2 my-lg-0"
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
          

        <NavDropdown title={      <div  className='textLocat'  style={{marginLeft:'-10px', marginTop:'10px'}}>
        
        <p style={{border:' 2px solid #7EA91A61', width:'273px', borderRadius:'20px', background:'#7EA91A33', padding:'2px 10px'}} >  

توصيل الي <span style={{color:'#7EA91A'}} >22، ميدان الجزائر، المعادي</span>       </p>


        </div>} className='pp'    >
            <NavDropdown.Item  style={{display:'flex', gap:'5px'}}  href='#'>   <div style={{background:'#FFFFFF', borderRadius:'18px',border:'2px solid #ECECEC', marginRight:'12px'  }}>
                        
                        <div style={{display:'flex', justifyContent:'space-between'}}>  
                          <div>
               
                           <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginRight:'15px'}}>
                                <div><img src={homeLocation}/></div>
                                <div style={{marginRight:'10px', marginTop:'10px',paddingLeft:'35px'}}>
                                    <h6 style={{color:'#220E5F', fontWeight:'bold', textAlign:'start'}} >المنزل  </h6>
                                     <p style={{color:'#585858', marginTop:'-5px', textAlign:'start', fontWeight:'500'}}>  18، شارع النصر، قسم المعادي</p>
                                 </div>
                            </div>
                           </div>
               
                                   
                         </div>
                      </div>      </NavDropdown.Item>
                      <NavDropdown.Item  style={{display:'flex', gap:'5px'}}  href='#'>   <div style={{background:'#FFFFFF', borderRadius:'18px',border:'2px solid #ECECEC', marginRight:'12px'  }}>
                        
                        <div style={{display:'flex', justifyContent:'space-between'}}>  
                          <div>
               
                           <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginRight:'15px'}}>
                                <div><img src={currentLocat}/></div>
                                <div style={{marginRight:'10px', marginTop:'10px',paddingLeft:'35px'}}>
                                    <h6 style={{color:'#220E5F', fontWeight:'bold', textAlign:'start'}} >الموقع الحالي  </h6>
                                     <p style={{color:'#585858', marginTop:'-5px', textAlign:'start', fontWeight:'500'}}>  18، شارع النصر، قسم المعادي</p>
                                 </div>
                            </div>
                           </div>
               
                                   
                         </div>
                      </div>      </NavDropdown.Item>
                      <NavDropdown.Item  style={{display:'flex', gap:'5px'}}  href='#'>    <div style={{border :' 1.5px solid #7EA91A61' , borderRadius:'23px' , width:'300px' , height:'33.74px' , 
              background:'rgb(126 169 26 / 21%)', display:'flex', justifyContent:'center'
                , alignItems:'center', gap:'10px' }} onClick={handleShowAddress}   >

            <div>
              <img src={addPic} style={{marginTop:'-5px'}} />
            </div>

              <h6 style={{  color:'#7EA91A' , fontSize:'15px', marginTop:'5px' , cursor:'pointer'}}  >اضافة عنوان جديد  </h6>
            </div>      </NavDropdown.Item>
          
          </NavDropdown>    

          <Modal show={showAddress} onHide={handleCloseAddress} >

<div style={{marginTop:'7px' , display:'flex', justifyContent:'center'}}>
   <h5 style={{  color:'#220E5F' , marginTop:'5px', fontWeight:'bold' }}  >اضافة عنوان جديد  </h5>
</div>


 <Col xs="auto" style={{display:'flex', justifyContent:'center'}}>
       <Form.Control
   style={{margin:'2px 15px' ,width:'80%'}}
         type="text"
         placeholder="ابحث.."
       
       />
  </Col>
   <div style={{display:'flex', justifyContent:'center'}}>
     <div><img src={mapPic} style={{width:'380px', borderRadius:'10px', margin:'10px'}}/></div>
   </div>

<form class="form-floating  " style={{margin:'0px 30px'}}>
     <input type="email" class="form-control" id="floatingInputValue" placeholder="اسم العنوان" value="المنزل " 
     style={{borderRadius:'15px', color: "#585858" , paddingRight:'20px'}}/>
     <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} >  اسم العنوان</label>
</form>

 <div class="row g-2 " style={{margin:'0px 30px 6px'}}>
   <div class="col-md">
<div class="form-floating">
 <select class="form-select" id="floatingSelectGrid">
   <option selected>   القاهره</option>
   <option value="1">One</option>
   <option value="2">Two</option>
   <option value="3">Three</option>
 </select>
 <label for="floatingSelectGrid">  المحافظه</label>
</div>
</div>
<div class="col-md">
<div class="form-floating">
 <select class="form-select" id="floatingSelectGrid">
   <option selected>   المعادي</option>
   <option value="1">One</option>
   <option value="2">Two</option>
   <option value="3">Three</option>
 </select>
 <label for="floatingSelectGrid">المنطقه  </label>
</div>
</div>
 </div>

 <form class="form-floating " style={{margin:'0px 30px 6px'}}>
     <input type="text" class="form-control" id="floatingInputValue" placeholder="  الشارع" value="  شارع النصر  " 
     style={{borderRadius:'15px', color: "#585858" , paddingRight:'20px'}}/>
     <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} >   الشارع  </label>
  </form>

   <div class="row g-2 " style={{margin:'0px 30px 6px'}}>
    <div class="col-md">
   <form class="form-floating ">
     <input type="email" class="form-control" id="floatingInputValue" placeholder="رقم المبني   " value="18 " 
     style={{borderRadius:'15px', color: "#585858" , paddingRight:'20px'}}/>
     <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} >  رقم المبني </label>
   </form>
   </div>
   <div class="col-md">
   <form class="form-floating ">
     <input type="email" class="form-control" id="floatingInputValue" placeholder="رقم الدور   " value="3 " 
     style={{borderRadius:'15px', color: "#585858" , paddingRight:'20px'}}/>
     <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} >  رقم الدور </label>
   </form>
  </div>
  </div>

   <form class="form-floating "  style={{margin:'0px 30px 6px'}}>
     <input type="text" class="form-control" id="floatingInputValue" placeholder="  علامه مميزه" value=" بجوار مطعم ماكدونالذ " 
     style={{borderRadius:'15px', color: "#585858" , paddingRight:'20px'}}/>
     <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} >   علامه مميزه  </label>
   </form>

   <form class="form-floating" style={{margin:'0px 30px 6px'}}>
     <input type="text" class="form-control" id="floatingInputValue" placeholder="رقم الموبايل" value=" 123 456 789" 
     style={{borderRadius:'15px', color: "#585858" , paddingRight:'20px'}}/>
     <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} >   رقم الموبايل</label>
   </form>

   <div className='d-flex mt-3 justify-content-center mb-3 ' style={{borderRadius:'30px' }} >
     <div style={{ color:' rgba(255, 255, 255, 1)' , fontWeight:'700' , fontSize :'25px' , border:'none'
       , paddingTop:'5px', display:'flex', justifyContent:'center' }} 
     className='profileButton2' > تاكيد</div>
</div>
 </Modal>

    

  <Link to='/home-page-factory' style={{textDecoration:'none'}}>

    <div className='factroyButton'  style={{marginTop:'9px', marginRight:'5px'}}>
    <button style={{border:'2px solid #FFFFFF', color:'#FFFFFF', background:'linear-gradient(266.85deg, #7EA91A 2.11%, #AEDC44 98.8%)', borderRadius:'50px',
    padding:'5px 20px', fontWeight:'bold'}}>   المصانع  </button>
    </div>
   </Link>


    <>
    <div style={{marginTop:'10px'}}>
    <button  onClick={handleShow} style={{border:'2px solid #039CED', color:'#039CED', background:'#FFFFFF', borderRadius:'50px',
    padding:'5px 20px', fontWeight:'bold', display:'flex'}}>  <img src={loginIcon} style={{marginTop:'4px'}}/>  تسجيل </button>
    </div>

    

      <Modal show={show} onHide={handleClose} style={{width:'410px' , marginLeft:'20px'}}>
       <LoginPage />
      </Modal>
    </>

    


    </div>

    
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
</Col>

</Row>

   
</Container>
</div>














    {/* <Container className='d-flex justify-content-center align-items-center'  >
        <Row className='m-3'>
          
            <Col xs="6" md="4" lg="2" >

            <div style={{height:'325px', background:'#FFFFFF', border:'2.26px solid #ECECEC', borderRadius:'15px', width:'237px'}} >
              <div style={{display:'flex'}}>
                <img src={offer} alt='' style={{marginRight:'10px'}} />
              </div>

              <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                <img src={fav} alt='' style={{}} />
              </div>
              
              <img src={prod1} />

              <div>
                <p style={{color: '#220E5F', fontSize:'20px', lineHeight:'25px',marginTop:'10px', textAlign:'start' , marginRight:'15px'}}  >    تروفال حلة طهي كلاسيكية مقاس 24 سم   </p>

                <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
                  <div><img src={star} alt=''  /></div>
                    
                    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                </div>
                <div style={{display:'flex', marginRight:'15px'}}>
                    <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 388 جنيه  </p>
                   
                </div>

              </div>


            </div>


      
            </Col>

            <Col xs="6" md="4" lg="2" >

<div style={{height:'325px', background:'#FFFFFF', border:'2.26px solid #ECECEC', borderRadius:'15px', width:'237px'}} >
  <div style={{display:'flex'}}>
    <img src={offer} alt='' style={{marginRight:'10px'}} />
  </div>

  <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
    <img src={fav} alt='' style={{}} />
  </div>
  
  <img src={prod1} />

  <div>
    <p style={{color: '#220E5F', fontSize:'20px', lineHeight:'25px',marginTop:'10px', textAlign:'start' , marginRight:'15px'}}  >    تروفال حلة طهي كلاسيكية مقاس 24 سم   </p>

    <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
      <div><img src={star} alt=''  /></div>
        
        <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
    </div>
    <div style={{display:'flex', marginRight:'15px'}}>
        <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 388 جنيه  </p>
       
    </div>

  </div>


</div>



           </Col>

            <Col xs="6" md="4" lg="2" >

            <div style={{height:'325px', background:'#FFFFFF', border:'2.26px solid #ECECEC', borderRadius:'15px', width:'237px'}} >
            <div style={{display:'flex'}}>
                <img src={offer} alt='' style={{marginRight:'10px'}} />
            </div>

            <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                <img src={fav} alt='' style={{}} />
            </div>
            
            <img src={prod1} />

            <div>
                <p style={{color: '#220E5F', fontSize:'20px', lineHeight:'25px',marginTop:'10px', textAlign:'start' , marginRight:'15px'}}  >    تروفال حلة طهي كلاسيكية مقاس 24 سم   </p>

                <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
                <div><img src={star} alt=''  /></div>
                    
                    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                </div>
                <div style={{display:'flex', marginRight:'15px'}}>
                    <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 388 جنيه  </p>
                
                </div>

            </div>


            </div>



            </Col>

            <Col xs="6" md="4" lg="2" >

<div style={{height:'325px',background:'#FFFFFF', border:'2.26px solid #ECECEC', borderRadius:'15px', width:'237px'}} >
  <div style={{display:'flex'}}>
    <img src={offer} alt='' style={{marginRight:'10px'}} />
  </div>

  <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
    <img src={fav} alt='' style={{}} />
  </div>
  
  <img src={prod1} />

  <div>
    <p style={{color: '#220E5F', fontSize:'20px', lineHeight:'25px',marginTop:'10px', textAlign:'start' , marginRight:'15px'}}  >    تروفال حلة طهي كلاسيكية مقاس 24 سم   </p>

    <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
      <div><img src={star} alt=''  /></div>
        
        <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
    </div>
    <div style={{display:'flex', marginRight:'15px'}}>
        <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 388 جنيه  </p>
       
    </div>

  </div>


</div>



           </Col>

            <Col xs="6" md="4" lg="2" >

            <div style={{ height:'325px',background:'#FFFFFF', border:'2.26px solid #ECECEC', borderRadius:'15px', width:'237px'}} >
            <div style={{display:'flex'}}>
                <img src={offer} alt='' style={{marginRight:'10px'}} />
            </div>

            <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                <img src={fav} alt='' style={{}} />
            </div>
            
            <img src={prod1} />

            <div>
                <p style={{color: '#220E5F', fontSize:'20px', lineHeight:'25px',marginTop:'10px', textAlign:'start' , marginRight:'15px'}}  >    تروفال حلة طهي كلاسيكية مقاس 24 سم   </p>

                <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
                <div><img src={star} alt=''  /></div>
                    
                    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                </div>
                <div style={{display:'flex', marginRight:'15px'}}>
                    <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 388 جنيه  </p>
                
                </div>

            </div>


            </div>



            </Col>



        </Row>
    </Container> */}

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



<div class="  row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 ">

<div class="col mb-3">
<Link to='/store-product'  style={{textDecoration:'none'}}>


<Card style={{ width: '100%' , height:'100%'}}>
<div style={{display:'flex'}}>
<img src={offer} alt='' style={{marginRight:'10px'}} />
</div>

<div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
    <img src={favIcon} />
</div>

<Card.Body>
<img src={prod2} style={{width:'120px', height:'120px', marginTop:'-15px'}} />

<Card.Text style={{marginTop:'5px'}}>
موبايل سامسونج جالاكسي بشريحتين اتصال   
</Card.Text>
<div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
<FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
    
    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'18px'}}>4.5</p>
</div>
<div style={{display:'flex', marginRight:'15px'}}>
    <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px'}}> 83 جنيه  </p>
   
</div>
</Card.Body>
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
      
<Card.Body>
<img src={prod2} style={{width:'120px', height:'120px', marginTop:'-15px'}} />

<Card.Text style={{marginTop:'5px'}}>
موبايل سامسونج جالاكسي بشريحتين اتصال   
</Card.Text>
<div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
<FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
            
            <p style={{color: "#7A808A", marginRight:'5px', fontSize:'18px'}}>4.5</p>
        </div>
        <div style={{display:'flex', marginRight:'15px'}}>
            <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px'}}> 83 جنيه  </p>
          
        </div>
</Card.Body>
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

<Card.Body>
<img src={prod2} style={{width:'120px', height:'120px', marginTop:'-15px'}} />

<Card.Text style={{marginTop:'5px'}}>
موبايل سامسونج جالاكسي بشريحتين اتصال   
</Card.Text>
<div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
<FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
 
 <p style={{color: "#7A808A", marginRight:'5px', fontSize:'18px'}}>4.5</p>
</div>
<div style={{display:'flex', marginRight:'15px'}}>
 <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px'}}> 83 جنيه  </p>

</div>
</Card.Body>
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

<Card.Body>
<img src={prod2} style={{width:'120px', height:'120px', marginTop:'-15px'}} />

<Card.Text style={{marginTop:'5px'}}>
موبايل سامسونج جالاكسي بشريحتين اتصال   
</Card.Text>
<div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
<FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
 
 <p style={{color: "#7A808A", marginRight:'5px', fontSize:'18px'}}>4.5</p>
</div>
<div style={{display:'flex', marginRight:'15px'}}>
 <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px'}}> 83 جنيه  </p>

</div>
</Card.Body>
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

<Card.Body>
<img src={prod2} style={{width:'120px', height:'120px', marginTop:'-15px'}} />

<Card.Text style={{marginTop:'5px'}}>
موبايل سامسونج جالاكسي بشريحتين اتصال   
</Card.Text>
<div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
<FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
 
 <p style={{color: "#7A808A", marginRight:'5px', fontSize:'18px'}}>4.5</p>
</div>
<div style={{display:'flex', marginRight:'15px'}}>
 <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px'}}> 83 جنيه  </p>

</div>
</Card.Body>
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

<Card.Body>
<img src={prod2} style={{width:'120px', height:'120px', marginTop:'-15px'}} />

<Card.Text style={{marginTop:'5px'}}>
موبايل سامسونج جالاكسي بشريحتين اتصال   
</Card.Text>
<div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
<FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
 
 <p style={{color: "#7A808A", marginRight:'5px', fontSize:'18px'}}>4.5</p>
</div>
<div style={{display:'flex', marginRight:'15px'}}>
 <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px'}}> 83 جنيه  </p>

</div>
</Card.Body>
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

<Card.Body>
<img src={prod2} style={{width:'120px', height:'120px', marginTop:'-15px'}} />

<Card.Text style={{marginTop:'5px'}}>
موبايل سامسونج جالاكسي بشريحتين اتصال   
</Card.Text>
<div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
<FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
 
 <p style={{color: "#7A808A", marginRight:'5px', fontSize:'18px'}}>4.5</p>
</div>
<div style={{display:'flex', marginRight:'15px'}}>
 <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px'}}> 83 جنيه  </p>

</div>
</Card.Body>
</Card>
</div>



</div>
{/* 
  <ProductCard /> */}
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



 
    <div class="container text-center mb-5 p-5">
<div style={{display:'flex', justifyContent:'space-between'}} >
<h5 style={{ fontWeight:'bold'}}>الاكثر مبيعا  </h5>
  
<Link to='/Best-seller' style={{textDecoration:'none'}}>

<div>
    <p style={{background:'linear-gradient(266.85deg, #7EA91A 2.11%, #AEDC44 98.8%)', borderRadius:'25px', color:'#FFFFFF', padding:'5px 20px'}}>عرض الكل</p>
    </div>
</Link>
</div>
   
  <ProductCard />
 
</div>
   
 



<div style={{background:' #F4F5F7'}}>
    <div class="container text-center mb-5 p-5">
    <h5 style={{display:'flex', fontWeight:'bold'}}>منتجات مقترحة لك</h5>
    
  <ProductCard />

 

</div>
   
   </div>



   

<div class='container text-center '>
   <div class=" m-5 row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 ">
   <Col sm={6} md={12} xl={6} >
    <div >
               <div  > 
               <img src={mobile} style={{width:'100%'}} /> </div>

              
            </div></Col>


   <Col sm={6} md={12} xl={6} style={{display:'flex' , justifyContent:'center', alignItems:'center'}} >
    <div>
    <div>
                  <img src={logo}  />
                  <h1 style={{color:'#2D2D2D', fontWeight:'bold'}} >  تنزيل التطبيق مجانــاً </h1>
                  <h4 style={{display:'flex' , color:'#00000075' , fontSize:'20px', margin:'15px 0px' , justifyContent:'center' }}>  احصل علي العديد من العروض الحصرية  </h4>
                  <img className='mt-3' src={googlePlay} />

               </div>
    </div>
   </Col>
  
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


export default HomePage;