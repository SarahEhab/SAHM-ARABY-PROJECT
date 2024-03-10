import React from 'react';
import '../BestSeller/seller.css'
import './product.css'
import NavBarBlue from '../NavBar/NavBarBlue';
import { Accordion, Card, Col, Container, Form, FormControl, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import locat from '../../images/location.png'
import logo from '../../images/logo.png'
import star from '../../images/star.png'
import fav from '../../images/fav.png'
import search from '../../images/search.png'
import offer from '../../images/off.png'
import prod1 from '../../images/prod2.png'
import prod2 from '../../images/mob1.png'
import prod3 from '../../images/mob2.png'
import group from "../../images/Group1.png";
import plate from "../../images/plate.png";
import group1 from "../../images/Group2.png";
import sortIcon from "../../images/sort-icon.png";
import { Link } from 'react-router-dom';
import NavbarLogin from '../NavBar/NavbarLogin';
import Pagination from '../Pagination/Pagination';
import { IoHeartCircleSharp, IoSearch } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
const ProductPageDetails = () => {
    return <>

    <NavBarBlue />
    
    <NavbarLogin />
    
    <Container>
    <Row>
    <Col>
    <div style={{marginTop:'15px'}}>
      <h3 style={{color: 'rgba(255, 255, 255, 1)' , fontWeight:'500' , paddingBottom :'25px', paddingTop:'25px' , borderRadius:'10px'}} className=" ground-img">
   الموبايلات</h3>
      </div>
    </Col>
    </Row>
    </Container>
    
    <Container style={{marginTop:'20px'}}>
            <Row>
           
              
                <Col sm='3' >
                 <div style={{background: "rgba(244, 245, 247, 1)" , height:'auto' , borderRadius:'15px'}}>
                    <div style={{display:'flex' , justifyContent:'space-around' , padding:'6px'}}>
                        <h4 style={{color: "rgba(4, 32, 48, 1)" , fontWeight:'bold', fontSize:'19px'}} >الفئات</h4>
                        <p style={{color: "rgba(122, 128, 138, 1)" , fontSize:'14px'}} >مسح الكل</p>
                    </div>
    
                 
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header  >هواتف اندرويد</Accordion.Header>
                            <Accordion.Body>
                       
                          <div style={{display:'flex' , flexDirection:'column'}} >
                          
                                <label class="form-check-label d-flex" > <input style={{margin:'5px'}} type='checkbox' />الكل  </label>
                                <label class="form-check-label d-flex " > <input style={{margin:'5px'}} type='checkbox' />سامسونج   </label> 
                                <label class="form-check-label d-flex" > <input style={{margin:'5px'}} type='checkbox' />شاومي  </label> 
                                <label class="form-check-label d-flex " > <input style={{margin:'5px'}} type='checkbox' />نوكيا</label> 
                                <label class="form-check-label d-flex" > <input style={{margin:'5px'}} type='checkbox' />اوبو  </label> 
                          </div>
                       
                            </Accordion.Body>
                        </Accordion.Item>
      
                      </Accordion>

                      <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >هواتف ايفون</Accordion.Header>
                            <Accordion.Body>
                       
                          <div style={{display:'flex' , flexDirection:'column'}} >
                          
                                <label class="form-check-label d-flex" > <input style={{margin:'5px'}} type='checkbox' />الكل  </label>
                                <label class="form-check-label d-flex " > <input style={{margin:'5px'}} type='checkbox' />سامسونج   </label> 
                                <label class="form-check-label d-flex" > <input style={{margin:'5px'}} type='checkbox' />شاومي  </label> 
                                <label class="form-check-label d-flex " > <input style={{margin:'5px'}} type='checkbox' />نوكيا</label> 
                                <label class="form-check-label d-flex" > <input style={{margin:'5px'}} type='checkbox' />اوبو  </label> 
                          </div>
                       
                            </Accordion.Body>
                        </Accordion.Item>
      
                      </Accordion>
                     
                      <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header >تابلت </Accordion.Header>
                            <Accordion.Body>
                       
                          <div style={{display:'flex' , flexDirection:'column'}} >
                          
                                <label class="form-check-label d-flex" > <input style={{margin:'5px'}} type='checkbox' />الكل  </label>
                                <label class="form-check-label d-flex " > <input style={{margin:'5px'}} type='checkbox' />سامسونج   </label> 
                                <label class="form-check-label d-flex" > <input style={{margin:'5px'}} type='checkbox' />شاومي  </label> 
                                <label class="form-check-label d-flex " > <input style={{margin:'5px'}} type='checkbox' />نوكيا</label> 
                                <label class="form-check-label d-flex" > <input style={{margin:'5px'}} type='checkbox' />اوبو  </label> 
                          </div>
                       
                            </Accordion.Body>
                        </Accordion.Item>
      
                      </Accordion>
            
                 </div>
    
                 <div style={{background: "rgba(244, 245, 247, 1)" , height:'150px' , borderRadius:'15px', marginTop:'10px'}}>
                    <div style={{display:'flex' , justifyContent:'space-around' , padding:'6px'}}>
                        <h4 style={{color: "rgba(4, 32, 48, 1)" , fontWeight:'bold', fontSize:'19px'}} >اللون</h4>
                        <p style={{color: "rgba(122, 128, 138, 1)" , fontSize:'14px'}} >مسح الكل</p>
                    </div>
    
                 
                    <div style={{display:'flex' , flexDirection:'column', marginRight:'15px'}} >
                     
                       <div><img src={plate} width='150px' /></div>
                     <p style={{color:'#7EA91A' ,  display:'flex' }}>عرض المزيد</p>
             </div>
            
                 </div>
    
    
                 <div style={{background: "rgba(244, 245, 247, 1)" , height:'150px' , borderRadius:'15px', marginTop:'10px'}}>
                    <div style={{display:'flex' , justifyContent:'space-around' , padding:'6px'}}>
                        <h4 style={{color: "rgba(4, 32, 48, 1)" , fontWeight:'bold', fontSize:'19px'}} >الحجم</h4>
                        <p style={{color: "rgba(122, 128, 138, 1)" , fontSize:'14px'}} >مسح الكل</p>
                    </div>
    
                 
                    <div style={{display:'flex' , flexDirection:'column', marginRight:'15px'}} >
                     
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'15px', gap:'3px' }}>
                    <div style={{border:'1.5px solid #ECECEC', borderRadius:'10PX', padding:'7px 12px', background:'#FFFFFF'}}>  32جيجا</div>
                    <div style={{border:'1.5px solid #ECECEC', borderRadius:'10PX', padding:'7px 12px', background:'#FFFFFF'}}>  32جيجا</div>
                   
                  
            </div>
                     <p style={{color:'#7EA91A' ,  display:'flex' }}>عرض المزيد</p>
             </div>
            
                 </div>
    
    
                 <div  className='d-flex justify-content-center align-items-center   ' style={{borderRadius:'30px' }} >
           <button style={{ color:' rgba(255, 255, 255, 1)' , fontWeight:'700' , fontSize :'18px' , border:'none' , paddingTop:'7px', display:'flex', justifyContent:'center'}} 
           className='profileButton' > تاكيد   </button>
                 </div>
                </Col>
    
                <Col sm='9'>

                <div class="mb-4">
  <div class="row row-cols-auto" style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'15px'}}>

  
    <div class="col" style={{}} >
      
    <div style={{border :'none' , borderRadius:'23px' , width:'124px' , height:'33.74px' , 
            background:'linear-gradient(89.51deg, #02E4D8 -0.41%, #019AED 97.31%)' , boxShadow:'0px 3.6861166954040527px 3.6861166954040527px 0px rgba(209, 155, 111, 0.22)'
            , marginLeft:'-22px' }} className='title-card' >
            <p style={{color:'#FFFFFF', fontWeight:'bold', padding:'2px'}}>هواتف ذكيه</p>
          </div>
    </div>

  
    <div class="col" style={{}} >
      
    <div style={{border :'1.70px solid #E8E8E8' , borderRadius:'23px' , width:'124px' , height:'33.74px' , 
            background:'rgba(244, 245, 247, 1)' , marginLeft:'-22px'}} className='title-card'>
                <h6 style={{  color:'rgba(5, 20, 39, 1)' , fontSize:'15px', marginTop:'5px'}}> اجهزة لوحية</h6>
            </div>
    </div>

    <div class="col" style={{}} >
      
    <div  style={{border :'1.70px solid #E8E8E8' , borderRadius:'23px' , width:'124px' , height:'33.74px' , 
             background:'rgba(244, 245, 247, 1)', marginLeft:'-22px'}} className='title-card'  >
                <h6 style={{  color:'rgba(5, 20, 39, 1)' , fontSize:'15px', marginTop:'5px'}}>هواتف قديمة</h6>
            </div>
    </div>


    <div class="col" style={{}} >
     
    <div style={{border :'1.70px solid #E8E8E8' , borderRadius:'23px' , width:'124px' , height:'33.74px' , 
            background:'rgba(244, 245, 247, 1)' , marginLeft:'-22px'}} className='title-card'>
                <h6 style={{  color:'rgba(5, 20, 39, 1)' , fontSize:'15px', marginTop:'5px'}}> شواحن </h6>
            </div>
    </div>


   <div class="col" style={{}} >
    
   <div style={{border :'1.70px solid #E8E8E8' , borderRadius:'23px' , width:'124px' , height:'33.74px' , 
            background:'rgba(244, 245, 247, 1)', marginLeft:'-22px' }} className='title-card'>
                <h6 style={{  color:'rgba(5, 20, 39, 1)' , fontSize:'15px', marginTop:'5px'}}> لاصقات حمايه </h6>
            </div>
    </div>


    <div class="col" style={{}}>
      
    <div style={{border :'1.70px solid #E8E8E8' , borderRadius:'23px' , width:'124px' , height:'33.74px' , 
            background:'rgba(244, 245, 247, 1)', marginLeft:'-22px' }} className='title-card' >
                <h6 style={{  color:'rgba(5, 20, 39, 1)' , fontSize:'15px', marginTop:'5px'}}> سماعات سلكية </h6>
            </div>
    </div>


    

    <div class="col" style={{}} >
      
    <div style={{border :'1.70px solid #E8E8E8' , borderRadius:'23px' , width:'124px' , height:'33.74px' , 
            background:'rgba(244, 245, 247, 1)', marginLeft:'-22px' }} className='title-card'  >
                <h6 style={{  color:'rgba(5, 20, 39, 1)' , fontSize:'15px', marginTop:'5px'}}> سماعات بلوتوث</h6>
            </div>
    </div>

   
  </div>
                 </div>

                
                <div className='d-flex justify-content-between mb-4'>
                    <Form >
                    <FormControl
                        type="search"
                        placeholder='ابحث باسم المنتج...'
                        className="me-2 w-100  "
                        aria-label="Search"
                      
                        />
                         <IoSearch
                        width="20px"
                        height="20px"
                        style={{
                          position: "absolute",
                          marginTop: "-30px",
                          marginRight: "70px",
                          fontSize: "22px",
                          color: "#00000082",
                        }}
                        className="img-search"
                      />
                    </Form>
    
                <div style={{display:'flex' , gap:'10px'}}>
    
                 <img src={sortIcon} alt='' width='15px' height="15px" style={{ marginRight:'5px', position:'absolute' , marginTop:'10px'}} />
    
                 <NavDropdown title="الترتيب حسب" id="collapsible-nav-dropdown" style={{background:'linear-gradient(0deg, rgba(1, 154, 237, 0.08), rgba(1, 154, 237, 0.08)),linear-gradient(0deg, rgba(3, 156, 237, 0.15), rgba(3, 156, 237, 0.15))' 
                    , border:' 1.5px solid #039CED26' ,borderRadius:'25px' , padding:'5px 25px 5px 10px' , color:'#220E5F' , fontWeight:'bold', fontSize:'14px' } }>
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                 </NavDropdown>
    
    
            
    
    <Link to='/products-page-details-sort' >
    <img 
                   src={group1} 
                   width='35px' 
                  height='35px' 
                   />
                </Link>

                <img src={group} alt=''  width='35px' height="35px"  />
                </div>
                </div>
    
                <div class="  row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 ">

                <div class="col mb-3">
<Link to='/store-product'  style={{textDecoration:'none'}}>

   
     <Card style={{ width: '100%', height:'100%' }}>
     <div style={{display:'flex'}}>
                   <img src={offer} alt='' style={{marginRight:'10px'}} />
                 </div>
   
                 <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                 <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "30px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                 </div>
                 
     <Card.Body>
     <img src={prod2} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
          
           <Card.Text>موبايل سامسونج جالاكسي بشريحتين اتصال
           </Card.Text>
           <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
           <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                       
                       <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                   </div>
                   <div style={{display:'flex', marginRight:'15px'}}>
                       <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 12.000 جنيه  </p>
                      
                   </div>
         </Card.Body>
       </Card>
</Link>

       </div>

        <div class="col mb-3">
     
      <Card style={{ width: '100%', height:'100%' }}>
      <div style={{display:'flex'}}>
                    <img src={offer} alt='' style={{marginRight:'10px'}} />
                  </div>
    
                  <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                  <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "30px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                  </div>
                  
      <Card.Body>
      <img src={prod1} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
           
            <Card.Text>موبايل سامسونج جالاكسي بشريحتين اتصال
            </Card.Text>
            <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
            <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                        
                        <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                    </div>
                    <div style={{display:'flex', marginRight:'15px'}}>
                        <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 12.000 جنيه  </p>
                       
                    </div>
          </Card.Body>
        </Card>
        </div>

        <div class="col mb-3">
     
      <Card style={{ width: '100%', height:'100%' }}>
      <div style={{display:'flex'}}>
                    <img src={offer} alt='' style={{marginRight:'10px'}} />
                  </div>
    
                  <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                  <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "30px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                  </div>
                  
      <Card.Body>
      <img src={prod3} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
           
            <Card.Text>موبايل سامسونج جالاكسي بشريحتين اتصال
            </Card.Text>
            <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
            <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                        
                        <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                    </div>
                    <div style={{display:'flex', marginRight:'15px'}}>
                        <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 12.000 جنيه  </p>
                       
                    </div>
          </Card.Body>
        </Card>
        </div>

        <div class="col mb-3">
     
     <Card style={{ width: '100%', height:'100%' }}>
     <div style={{display:'flex'}}>
                   <img src={offer} alt='' style={{marginRight:'10px'}} />
                 </div>
   
                 <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                 <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "30px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                 </div>
                 
     <Card.Body>
     <img src={prod2} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
          
           <Card.Text>موبايل سامسونج جالاكسي بشريحتين اتصال
           </Card.Text>
           <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
           <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                       
                       <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                   </div>
                   <div style={{display:'flex', marginRight:'15px'}}>
                       <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 12.000 جنيه  </p>
                      
                   </div>
         </Card.Body>
       </Card>
       </div>

       <div class="col mb-3">
     
     <Card style={{ width: '100%', height:'100%' }}>
     <div style={{display:'flex'}}>
                   <img src={offer} alt='' style={{marginRight:'10px'}} />
                 </div>
   
                 <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                 <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "30px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                 </div>
                 
     <Card.Body>
     <img src={prod1} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
          
           <Card.Text>موبايل سامسونج جالاكسي بشريحتين اتصال
           </Card.Text>
           <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
           <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                       
                       <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                   </div>
                   <div style={{display:'flex', marginRight:'15px'}}>
                       <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 12.000 جنيه  </p>
                      
                   </div>
         </Card.Body>
       </Card>
       </div>

        <div class="col mb-3">
     
      <Card style={{ width: '100%', height:'100%' }}>
      <div style={{display:'flex'}}>
                    <img src={offer} alt='' style={{marginRight:'10px'}} />
                  </div>
    
                  <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                  <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "30px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                  </div>
                  
      <Card.Body>
      <img src={prod3} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
           
            <Card.Text>موبايل سامسونج جالاكسي بشريحتين اتصال
            </Card.Text>
            <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
            <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                        
                        <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                    </div>
                    <div style={{display:'flex', marginRight:'15px'}}>
                        <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 12.000 جنيه  </p>
                       
                    </div>
          </Card.Body>
        </Card>
        </div>
    
        <div class="col mb-3">
     
      <Card style={{ width: '100%', height:'100%' }}>
      <div style={{display:'flex'}}>
                    <img src={offer} alt='' style={{marginRight:'10px'}} />
                  </div>
    
                  <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                  <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "30px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                  </div>
                  
      <Card.Body>
      <img src={prod2} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
           
            <Card.Text>موبايل سامسونج جالاكسي بشريحتين اتصال
            </Card.Text>
            <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
            <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                        
                        <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                    </div>
                    <div style={{display:'flex', marginRight:'15px'}}>
                        <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 12.000 جنيه  </p>
                       
                    </div>
          </Card.Body>
        </Card>
        </div>
    
       
        <div class="col mb-3">
     
      <Card style={{ width: '100%', height:'100%' }}>
      <div style={{display:'flex'}}>
                    <img src={offer} alt='' style={{marginRight:'10px'}} />
                  </div>
    
                  <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                  <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "30px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                  </div>
                  
      <Card.Body>
      <img src={prod1} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
           
            <Card.Text>موبايل سامسونج جالاكسي بشريحتين اتصال
            </Card.Text>
            <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
            <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                        
                        <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                    </div>
                    <div style={{display:'flex', marginRight:'15px'}}>
                        <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 12.000 جنيه  </p>
                       
                    </div>
          </Card.Body>
        </Card>
        </div>
      
   
        <div class="col mb-3">
     
     <Card style={{ width: '100%', height:'100%' }}>
     <div style={{display:'flex'}}>
                   <img src={offer} alt='' style={{marginRight:'10px'}} />
                 </div>
   
                 <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                 <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "30px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                 </div>
                 
     <Card.Body>
     <img src={prod3} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
          
           <Card.Text>موبايل سامسونج جالاكسي بشريحتين اتصال
           </Card.Text>
           <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
           <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                       
                       <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                   </div>
                   <div style={{display:'flex', marginRight:'15px'}}>
                       <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 12.000 جنيه  </p>
                      
                   </div>
         </Card.Body>
       </Card>
       </div>
    
       <div class="col mb-3">
     
     <Card style={{ width: '100%', height:'100%' }}>
     <div style={{display:'flex'}}>
                   <img src={offer} alt='' style={{marginRight:'10px'}} />
                 </div>
   
                 <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                 <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "30px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                 </div>
                 
     <Card.Body>
     <img src={prod2} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
          
           <Card.Text>موبايل سامسونج جالاكسي بشريحتين اتصال
           </Card.Text>
           <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
           <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                       
                       <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                   </div>
                   <div style={{display:'flex', marginRight:'15px'}}>
                       <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 12.000 جنيه  </p>
                      
                   </div>
         </Card.Body>
       </Card>
       </div>

       <div class="col mb-3">
     
      <Card style={{ width: '100%', height:'100%' }}>
      <div style={{display:'flex'}}>
                    <img src={offer} alt='' style={{marginRight:'10px'}} />
                  </div>
    
                  <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                  <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "30px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                  </div>
                  
      <Card.Body>
      <img src={prod1} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
           
            <Card.Text>موبايل سامسونج جالاكسي بشريحتين اتصال
            </Card.Text>
            <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
            <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                        
                        <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                    </div>
                    <div style={{display:'flex', marginRight:'15px'}}>
                        <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 12.000 جنيه  </p>
                       
                    </div>
          </Card.Body>
        </Card>
        </div>

        <div class="col mb-3">
     
     <Card style={{ width: '100%', height:'100%' }}>
     <div style={{display:'flex'}}>
                   <img src={offer} alt='' style={{marginRight:'10px'}} />
                 </div>
   
                 <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                 <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "30px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                 </div>
                 
     <Card.Body>
     <img src={prod3} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
          
           <Card.Text>موبايل سامسونج جالاكسي بشريحتين اتصال
           </Card.Text>
           <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
           <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                       
                       <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                   </div>
                   <div style={{display:'flex', marginRight:'15px'}}>
                       <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 12.000 جنيه  </p>
                      
                   </div>
         </Card.Body>
       </Card>
       </div>

       <div class="col mb-3">
     
     <Card style={{ width: '100%', height:'100%' }}>
     <div style={{display:'flex'}}>
                   <img src={offer} alt='' style={{marginRight:'10px'}} />
                 </div>
   
                 <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                 <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "30px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                 </div>
                 
     <Card.Body>
     <img src={prod2} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
          
           <Card.Text>موبايل سامسونج جالاكسي بشريحتين اتصال
           </Card.Text>
           <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
           <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                       
                       <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                   </div>
                   <div style={{display:'flex', marginRight:'15px'}}>
                       <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 12.000 جنيه  </p>
                      
                   </div>
         </Card.Body>
       </Card>
       </div>

       <div class="col mb-3">
     
     <Card style={{ width: '100%', height:'100%' }}>
     <div style={{display:'flex'}}>
                   <img src={offer} alt='' style={{marginRight:'10px'}} />
                 </div>
   
                 <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                 <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "30px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                 </div>
                 
     <Card.Body>
     <img src={prod1} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
          
           <Card.Text>موبايل سامسونج جالاكسي بشريحتين اتصال
           </Card.Text>
           <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
           <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                       
                       <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                   </div>
                   <div style={{display:'flex', marginRight:'15px'}}>
                       <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 12.000 جنيه  </p>
                      
                   </div>
         </Card.Body>
       </Card>
       </div>

       <div class="col mb-3">
     
     <Card style={{ width: '100%', height:'100%' }}>
     <div style={{display:'flex'}}>
                   <img src={offer} alt='' style={{marginRight:'10px'}} />
                 </div>
   
                 <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                 <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "30px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                 </div>
                 
     <Card.Body>
     <img src={prod3} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
          
           <Card.Text>موبايل سامسونج جالاكسي بشريحتين اتصال
           </Card.Text>
           <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
           <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                       
                       <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                   </div>
                   <div style={{display:'flex', marginRight:'15px'}}>
                       <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 12.000 جنيه  </p>
                      
                   </div>
         </Card.Body>
       </Card>
       </div>
       
       <div class="col mb-3">
     
     <Card style={{ width: '100%', height:'100%' }}>
     <div style={{display:'flex'}}>
                   <img src={offer} alt='' style={{marginRight:'10px'}} />
                 </div>
   
                 <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                 <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "30px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                 </div>
                 
     <Card.Body>
     <img src={prod2} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
          
           <Card.Text>موبايل سامسونج جالاكسي بشريحتين اتصال
           </Card.Text>
           <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
           <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                       
                       <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                   </div>
                   <div style={{display:'flex', marginRight:'15px'}}>
                       <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 12.000 جنيه  </p>
                      
                   </div>
         </Card.Body>
       </Card>
       </div>

       <div class="col mb-3">
     
     <Card style={{ width: '100%', height:'100%' }}>
     <div style={{display:'flex'}}>
                   <img src={offer} alt='' style={{marginRight:'10px'}} />
                 </div>
   
                 <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                 <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "30px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                 </div>
                 
     <Card.Body>
     <img src={prod1} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
          
           <Card.Text>موبايل سامسونج جالاكسي بشريحتين اتصال
           </Card.Text>
           <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
           <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                       
                       <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                   </div>
                   <div style={{display:'flex', marginRight:'15px'}}>
                       <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 12.000 جنيه  </p>
                      
                   </div>
         </Card.Body>
       </Card>
       </div>

       <div class="col mb-3">
     
     <Card style={{ width: '100%', height:'100%' }}>
     <div style={{display:'flex'}}>
                   <img src={offer} alt='' style={{marginRight:'10px'}} />
                 </div>
   
                 <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                 <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "30px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                 </div>
                 
     <Card.Body>
     <img src={prod3} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
          
           <Card.Text>موبايل سامسونج جالاكسي بشريحتين اتصال
           </Card.Text>
           <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
           <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                       
                       <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                   </div>
                   <div style={{display:'flex', marginRight:'15px'}}>
                       <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 12.000 جنيه  </p>
                      
                   </div>
         </Card.Body>
       </Card>
       </div>

       <div class="col mb-3">
     
     <Card style={{ width: '100%', height:'100%' }}>
     <div style={{display:'flex'}}>
                   <img src={offer} alt='' style={{marginRight:'10px'}} />
                 </div>
   
                 <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                 <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "30px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                 </div>
                 
     <Card.Body>
     <img src={prod2} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
          
           <Card.Text>موبايل سامسونج جالاكسي بشريحتين اتصال
           </Card.Text>
           <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
           <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                       
                       <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                   </div>
                   <div style={{display:'flex', marginRight:'15px'}}>
                       <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 12.000 جنيه  </p>
                      
                   </div>
         </Card.Body>
       </Card>
       </div>

       <div class="col mb-3">
     
     <Card style={{ width: '100%', height:'100%' }}>
     <div style={{display:'flex'}}>
                   <img src={offer} alt='' style={{marginRight:'10px'}} />
                 </div>
   
                 <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                 <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "30px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                 </div>
                 
     <Card.Body>
     <img src={prod1} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
          
           <Card.Text>موبايل سامسونج جالاكسي بشريحتين اتصال
           </Card.Text>
           <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
           <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                       
                       <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                   </div>
                   <div style={{display:'flex', marginRight:'15px'}}>
                       <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 12.000 جنيه  </p>
                      
                   </div>
         </Card.Body>
       </Card>
       </div>




      </div>
    
     <Pagination />
            
                </Col>
    
      
            </Row>
            </Container>
    
    
        </>;
}



export default ProductPageDetails;