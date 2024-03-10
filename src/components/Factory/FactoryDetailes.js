import React from 'react';
import './factory.css'
import NavBarBlue from '../NavBar/NavBarBlue';
import { Button, Card, Col, Container, Form, Nav, Navbar, Accordion,  FormControl, NavDropdown, Row} from 'react-bootstrap';
import logo from '../../images/logo.png'
import locat from '../../images/location.png'
import profileFac from '../../images/profileF.png'
import star from '../../images/star.png'
import fav from '../../images/fav.png'
import share from '../../images/share.png'
import search from '../../images/search.png'
import offer from '../../images/off.png'
import prod1 from '../../images/prod1.png'
import prod2 from '../../images/prod2.png'
import prod3 from '../../images/prod3.png'
import prod4 from '../../images/prod4.png'
import prod5 from '../../images/prod5.png'
import group from "../../images/Group.png";
import plate from "../../images/plate.png";
import group1 from "../../images/Group-1.png";
import sortIcon from "../../images/sort-icon.png";
import closeImg from '../../images/close.png'
import { Link } from 'react-router-dom';
import NavbarLogin from '../NavBar/NavbarLogin';
import Pagination from '../Pagination/Pagination';
import { IoHeartCircleSharp, IoSearch } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
const FactoryDetailes = () => {
    return <>

    <NavBarBlue />
    
    <NavbarLogin />
    
      <div  className="bg-section" >
        <Container>
            <Row>
                <Col>
                    <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}} >
                        <div style={{marginTop:'20px'}}><img src={profileFac} /></div>
                            <h6 style={{color:'#220E5F', fontWeight:'bold', marginTop:'7px'}} >  مصنع النور </h6>
                            <p style={{color:'#3A3A3A', marginTop:'-5px'}}>عدد المنتجات: 125</p>
    
                            <div style={{display:'flex', justifyContent:'center', gap:'8px', marginTop:'-15px'}} >
                             <div><img src={star} /></div>
                             <p style={{ color:'#7A808A', fontSize:'15px'}}> 4.5</p>
                            </div>
    
                            <div style={{display:'flex', justifyContent:'center', gap:'10px', marginTop:'-8px', marginBottom:'15px'}}>
                            <IoHeartCircleSharp
                      style={{
                        color: "#FFFFFF",
                        fontSize: "45px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                             <div><img src={share} /></div>
                            </div>
                    </div>
                </Col>
            </Row>
        </Container>
      </div>
    
    
        <Container>
          <div style={{border:'1.5px solid #EEEEEE' , marginBottom:'15px' , marginTop:'15px'}}></div>
       </Container>
    
       <Container>
            <Row>
           
              
                <Col sm='2' >
                 <div style={{background: "rgba(244, 245, 247, 1)" , height:'250px' , borderRadius:'15px'}}>
                    <div style={{display:'flex' , justifyContent:'space-around' , padding:'6px'}}>
                        <h4 style={{color: "rgba(4, 32, 48, 1)" , fontWeight:'bold', fontSize:'19px'}} >الفئات</h4>
                        <p style={{color: "rgba(122, 128, 138, 1)" , fontSize:'14px'}} >مسح الكل</p>
                    </div>
    
                 
                    <div style={{display:'flex' , flexDirection:'column', marginRight:'15px'}} >
                     
                     <label style={{margin:'3px'}} class="form-check-label d-flex" > <input style={{margin:'5px'}} type='checkbox' />الكل  </label>
                     <label style={{margin:'3px'}} class="form-check-label d-flex " > <input style={{margin:'5px'}} type='checkbox' />  الازياء الرجالي  </label> 
                     <label style={{margin:'3px'}} class="form-check-label d-flex" > <input style={{margin:'5px'}} type='checkbox' /> الازياء الحريمي  </label> 
                     <label style={{margin:'3px'}} class="form-check-label d-flex " > <input style={{margin:'5px'}} type='checkbox' />  الاجهزه المنزليه   </label> 
                     <label style={{margin:'3px'}} class="form-check-label d-flex" > <input style={{margin:'5px'}} type='checkbox' />  الحريمي  </label> 
                     <p style={{color:'#7EA91A' ,  display:'flex' }}>عرض المزيد</p>
             </div>
            
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
                     
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'15px', gap:'3px'}}>
                    <div style={{border:'1.5px solid #ECECEC', borderRadius:'10PX', padding:'7px 12px', background:'#FFFFFF'}}>  S</div>
                    <div style={{border:'1.5px solid #ECECEC', borderRadius:'10PX' , padding:'7px 12px' , background:'#FFFFFF'}}>  M </div>
                    <div style={{border:'1.5px solid #ECECEC', borderRadius:'10PX', padding:'7px 12px', background:'#FFFFFF'}}>  L</div>
                    <div style={{border:'1.5px solid #ECECEC', borderRadius:'10PX' , padding:'7px 12px', background:'#FFFFFF' }}>  XL </div>
                  
            </div>
                     <p style={{color:'#7EA91A' ,  display:'flex' }}>عرض المزيد</p>
             </div>
            
                 </div>
    
    
                 <div  className='d-flex justify-content-center align-items-center   ' style={{borderRadius:'30px' }} >
           <button style={{ color:' rgba(255, 255, 255, 1)' , fontWeight:'700' , fontSize :'18px' , border:'none' , paddingTop:'7px', display:'flex', justifyContent:'center'}} 
           className='profileButton' > تاكيد   </button>
                 </div>
                </Col>
    
                <Col sm='10'>
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
    
    
               <img 
                   src={group1} 
                   width='35px' 
                  height='35px' 
                   />

                   <Link to='/factory-sort-detailes'>
                   <img src={group} alt=''  width='35px' height="35px"  />
                   </Link>
               
                </div>
                </div>
    
                <div class="  row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 ">
      <div class="col mb-3">
     
      <Card style={{ width: '100%' , height:'100%'}}>
      <div style={{display:'flex'}}>
                    <img src={offer} alt='' style={{marginRight:'10px'}} />
                  </div>
    
                  <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                  <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "32px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                  </div>
                  
      <Card.Body>
      <img src={prod5} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
      <div style={{marginTop:'-10px'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', marginTop:'10px', padding:'2px 5px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
            <Card.Text>
            منعم اقمشة فلورا سوفت من كومفورت 3 لتر
            </Card.Text>
            <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
            <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                        
                        <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                    </div>
                    <div style={{display:'flex', marginRight:'15px'}}>
                        <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
                       
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
                        fontSize: "32px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                  </div>
                  
      <Card.Body>
      <img src={prod1} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
      <div style={{marginTop:'-10px'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', marginTop:'10px', padding:'2px 5px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
            <Card.Text>
            تروفال حلة طهي كلاسيكية مقاس 24 سم 
            </Card.Text>
            <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
            <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                        
                        <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                    </div>
                    <div style={{display:'flex', marginRight:'15px'}}>
                        <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
                       
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
                        fontSize: "32px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                  </div>
                  
      <Card.Body>
      <img src={prod3} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
      <div style={{marginTop:'-10px'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', marginTop:'10px', padding:'2px 5px'}}>   الحد الادنى: 30 قطعة  </p>
          </div> 
            <Card.Text>
            مولفيكس حفاضات اطفال
    بانتس عبوة ميجا 
            </Card.Text>
            <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
            <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                        
                        <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                    </div>
                    <div style={{display:'flex', marginRight:'15px'}}>
                        <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
                       
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
                        fontSize: "32px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                  </div>
                  
      <Card.Body>
      <img src={prod2} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
      <div style={{marginTop:'-10px'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', marginTop:'10px', padding:'2px 5px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
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
     <Link to='/factory-product' style={{textDecoration:'none'}}>

      <Card style={{ width: '100%', height:'100%' }}>
      <div style={{display:'flex'}}>
                    <img src={offer} alt='' style={{marginRight:'10px'}} />
                  </div>
    
                  <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                  <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "32px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                  </div>
                  
      <Card.Body>
      <img src={prod4} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
      
      <div style={{marginTop:'-10px'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', marginTop:'10px', padding:'2px 5px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
            <Card.Text>سويت شيرت للرجال من اندورا
            </Card.Text>
            <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
            <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                        
                        <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                    </div>
                    <div style={{display:'flex', marginRight:'15px'}}>
                        <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 500 جنيه  </p>
                       
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
                 <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "32px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                 </div>
                 
     <Card.Body>
     <img src={prod5} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
     <div style={{marginTop:'-10px'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', marginTop:'10px', padding:'2px 5px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
           <Card.Text>
           منعم اقمشة فلورا سوفت من كومفورت 3 لتر
           </Card.Text>
           <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
           <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                       
                       <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                   </div>
                   <div style={{display:'flex', marginRight:'15px'}}>
                       <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
                      
                   </div>
         </Card.Body>
       </Card>
       </div>
       <div class="col mb-3">
    
       <Link to='/factory-product-unavailable' style={{textDecoration:'none'}}>
     <Card style={{ width: '100%', height:'100%' }}>
     <div style={{display:'flex'}}>
                   <img src={offer} alt='' style={{marginRight:'10px'}} />
                 </div>
    
                 <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                 <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "32px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                 </div>
                 
     <Card.Body>
     <img src={prod1} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
     <div style={{display:'flex', textAlign:'center', alignItems:'center', justifyContent:'center'}}> 
 <div style={{border: " 1.23px solid #E5193726", borderRadius:'20px', color:'#E51937', 
 fontWeight:'bold', background:'rgb(229 25 55 / 9%)', display:'flex', fontSize:'14px', padding:'3px'}}>
<div><img src={closeImg} style={{paddingLeft:'5px', width:'25px'}}  /> </div>المنتج غير متوفر حالياً  </div>  </div>
     <div style={{marginTop:'-10px'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', marginTop:'10px', padding:'2px 5px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
           <Card.Text>
           تروفال حلة طهي كلاسيكية مقاس 24 سم 
           </Card.Text>
           <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
           <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                       
                       <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                   </div>
                   <div style={{display:'flex', marginRight:'15px'}}>
                       <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
                      
                   </div>
         </Card.Body>
       </Card>
</Link>

       </div>
       <div class="col mb-3 ">
    
     <Card style={{ width: '100%', height:'100%' }}>
     <div style={{display:'flex'}}>
                   <img src={offer} alt='' style={{marginRight:'10px'}} />
                 </div>
    
                 <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                 <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "32px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                 </div>
                 
     <Card.Body>
     <img src={prod3} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
     <div style={{marginTop:'-10px'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', marginTop:'10px', padding:'2px 5px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
           <Card.Text>
           مولفيكس حفاضات اطفال
    بانتس عبوة ميجا 
           </Card.Text>
           <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
           <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                       
                       <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                   </div>
                   <div style={{display:'flex', marginRight:'15px'}}>
                       <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
                      
                   </div>
         </Card.Body>
       </Card>
       </div>
    
       <div class="col mb-3 ">
       <Link to='/factory-product-unavailable' style={{textDecoration:'none'}}>
     <Card style={{ width: '100%', height:'100%' }}>
     <div style={{display:'flex'}}>
                   <img src={offer} alt='' style={{marginRight:'10px'}} />
                 </div>
    
                 <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                 <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "32px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                 </div>
                 
     <Card.Body>
     <img src={prod2} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />

     <div style={{display:'flex', textAlign:'center', alignItems:'center', justifyContent:'center'}}> 
 <div style={{border: " 1.23px solid #E5193726", borderRadius:'20px', color:'#E51937', 
 fontWeight:'bold', background:'rgb(229 25 55 / 9%)', display:'flex', fontSize:'14px', padding:'3px'}}>
<div><img src={closeImg} style={{paddingLeft:'5px', width:'25px'}}  /> </div>المنتج غير متوفر حالياً  </div>  </div>


     <div style={{marginTop:'-10px'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', marginTop:'10px', padding:'2px 5px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
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
    
      <div class="col mb-3 ">
      <Link to='/factory-product-unavailable' style={{textDecoration:'none'}}>
     <Card style={{ width: '100%', height:'100%' }}>
     <div style={{display:'flex'}}>
                   <img src={offer} alt='' style={{marginRight:'10px'}} />
                 </div>
    
                 <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                 <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "32px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                 </div>
                 
     <Card.Body>
     <img src={prod4} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />

     <div style={{display:'flex', textAlign:'center', alignItems:'center', justifyContent:'center'}}> 
 <div style={{border: " 1.23px solid #E5193726", borderRadius:'20px', color:'#E51937', 
 fontWeight:'bold', background:'rgb(229 25 55 / 9%)', display:'flex', fontSize:'14px', padding:'3px'}}>
<div><img src={closeImg} style={{paddingLeft:'5px', width:'25px'}}  /> </div>المنتج غير متوفر حالياً  </div>  </div>



     <div style={{marginTop:'-10px'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', marginTop:'10px', padding:'2px 5px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
           <Card.Text>سويت شيرت للرجال من اندورا
           </Card.Text>
           <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
           <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                       
                       <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                   </div>
                   <div style={{display:'flex', marginRight:'15px'}}>
                       <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 500 جنيه  </p>
                      
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
                 <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "32px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                 </div>
                 
     <Card.Body>
     <img src={prod5} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
     <div style={{marginTop:'-10px'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', marginTop:'10px', padding:'2px 5px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
           <Card.Text>
           منعم اقمشة فلورا سوفت من كومفورت 3 لتر
           </Card.Text>
           <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
           <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                       
                       <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                   </div>
                   <div style={{display:'flex', marginRight:'15px'}}>
                       <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
                      
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
                        fontSize: "32px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                 </div>
                 
     <Card.Body>
     <img src={prod1} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
     <div style={{marginTop:'-10px'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', marginTop:'10px', padding:'2px 5px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
           <Card.Text>
           تروفال حلة طهي كلاسيكية مقاس 24 سم 
           </Card.Text>
           <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
           <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                       <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                   </div>
                   <div style={{display:'flex', marginRight:'15px'}}>
                       <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
                      
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
                        fontSize: "32px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                 </div>
                 
     <Card.Body>
     <img src={prod3} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
     <div style={{marginTop:'-10px'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', marginTop:'10px', padding:'2px 5px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
           <Card.Text>
           مولفيكس حفاضات اطفال
    بانتس عبوة ميجا 
           </Card.Text>
           <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
           <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                       
                       <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                   </div>
                   <div style={{display:'flex', marginRight:'15px'}}>
                       <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
                      
                   </div>
         </Card.Body>
       </Card>
       </div>
    
       <div class="col mb-3 ">
    
     <Card style={{ width: '100%', height:'100%' }}>
     <div style={{display:'flex'}}>
                   <img src={offer} alt='' style={{marginRight:'10px'}} />
                 </div>
    
                 <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                   <img src={fav} alt='' style={{}} />
                 </div>
                 
     <Card.Body>
     <img src={prod4} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
     <div style={{marginTop:'-10px'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', marginTop:'10px', padding:'2px 5px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
           <Card.Text>سويت شيرت للرجال من اندورا
           </Card.Text>
           <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
           <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />     
                       <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                   </div>
                   <div style={{display:'flex', marginRight:'15px'}}>
                       <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 500 جنيه  </p>
                      
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
                        fontSize: "32px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    />
                 </div>
                 
     <Card.Body>
     <img src={prod4} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
     <div style={{marginTop:'-10px'}}>
          <p className='greenImg2'
          style={{ color:'#FFFFFF', fontSize:'12px', marginTop:'10px', padding:'2px 5px'}}>   الحد الادنى: 30 قطعة  </p>
          </div>
           <Card.Text>سويت شيرت للرجال من اندورا
           </Card.Text>
           <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
           <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                       
                       <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                   </div>
                   <div style={{display:'flex', marginRight:'15px'}}>
                       <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 500 جنيه  </p>
                      
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



export default FactoryDetailes;