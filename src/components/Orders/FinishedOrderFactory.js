import React from 'react';
import NavBarBlue from '../NavBar/NavBarBlue';
import { Button, Card, Col, Container, Form, FormControl, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import locat from '../../images/location.png'
import logo from '../../images/logo.png'
import factory from '../../images/Factory.png'
import StoresColor from '../../images/storesColor.png'
import { Link } from 'react-router-dom';
import search from '../../images/search.png'
import numberImg from '../../images/number.png'
import storeWhite from '../../images/storeWhite.png'
import star from '../../images/star.png'
import offer from '../../images/off.png'
import fav from '../../images/fav.png'
import prod2 from '../../images/prod2.png'
import prod3 from '../../images/prod3.png'
import prod8 from '../../images/prod8.png'
import prod1 from '../../images/prod1.png'
import prod5 from '../../images/prod5.png'
import prod4 from '../../images/prod4.png'
import storeColor from '../../images/storecolor.png'
import iconFactory from '../../images/iconFactory.png'
import dif from '../../images/dif.png'
import reorderImg from '../../images/reorderImg.png'
import NavbarLogin from '../NavBar/NavbarLogin';
import ProductCard from '../Products/ProductCard';
import { MdFactory } from 'react-icons/md';
import { IoStorefrontOutline } from 'react-icons/io5';
import { TbShoppingBag } from 'react-icons/tb';
const FinishedOrderFactory = () => {
    return <>

    <NavBarBlue />
    
    <NavbarLogin />
    
    <Container>
    <Row>
    <Col>
    <div style={{marginTop:'15px'}}>
      <h3 style={{color: 'rgba(255, 255, 255, 1)' , fontWeight:'500' , paddingBottom :'20px', paddingTop:'10px' , borderRadius:'25px'}} className=" background-image">
      طلباتي </h3>
      </div>
    </Col>
    </Row>
    </Container>
    
    <Container>
            <Row className='mt-2'>
                <Col  >
                <div className='d-flex justify-content-between mb-4 bar-section'>
                 
                <div style={{display:'flex', gap:'8px', justifyContent:'center'}} >

   <Link to='/current-order-factory' style={{textDecoration:'none'}}>    
                 <div style={{border :'2px solid rgba(232, 232, 232, 1)' , borderRadius:'15px' , width:'145px' , height:'33.74px' , 
             background:'linear-gradient(0deg, #E8E8E8, #E8E8E8),linear-gradient(0deg, #F5F5F5, #F5F5F5)', display:'flex', justifyContent:'center'
          , alignItems:'center', gap:'10px'}}>
              <div>
           
              </div>
          
              <h6 style={{color:'#636270' , paddingTop:'4px'}}>طلباتي الحاليه </h6>
                 </div>
  </Link>
              
                 <div style={{border :'none' , borderRadius:'15px' , width:'145px' , height:'33.74px' , 
               background:'linear-gradient(89.51deg, #02E4D8 -0.41%, #019AED 97.31%)', display:'flex', justifyContent:'center'
              , alignItems:'center', gap:'10px' }}>
                 <div>
              </div>
          
               <h6 style={{  color:'#FFFFFF' , fontSize:'15px', marginTop:'5px'}}>طلباتي المنتهيه  </h6>
              
                 
              </div>

          
               </div>
                      
        
                    <div style={{display:'flex' , gap:'10px', justifyContent:'center'}}>
        
                   
        
                     <Form >
                        <FormControl
                            type="search"
                            placeholder='رقم الطلب  ...'
                            className=" w-100  "
                            aria-label="Search"
                          
                            />
                            <img src={search} alt='' width='20px' height="20px" style={{position:'absolute' , marginTop:'-30px' , marginRight:'70px'}}/>
                        </Form>
 <Link to='/finished-order-store' style={{textDecoration:'none'}}> 
        <div style={{marginTop:'-5px'}}>
        <IoStorefrontOutline  style={{color:'#7EA91A', fontSize:'35px', borderRadius:'25px',padding:'5px',
    background:'#FFFFFF', border:'1px solid #7EA91A4D'}}/>
                   <p style={{color:'#585858', fontSize:'15px', fontWeight:'500', marginTop:'3px'}}> المتاجر</p>
        </div>
       </Link>            
    
    
    <div  style={{display:'flex', flexDirection:'column'}}> 
    <MdFactory  style={{color:'#FFFFFF', fontSize:'30px', borderRadius:'25px',padding:'5px',
    background:'linear-gradient(266.85deg, #7EA91A 2.11%, #AEDC44 98.8%)'}}/>
     
                    <p style={{color:'#7EA91A', fontSize:'15px', fontWeight:'500'}}> المصانع</p>
                    </div>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    
        <Container style={{marginTop:'-18px'}}>
            <Row>
                <Col>  <div style={{marginLeft:'-55px', borderBottom:'2px solid #EEEEEE ', width:'100%'}}></div></Col>
            </Row>
          </Container>
    
    
    <Container>
        <Row>
        <Col sm={12} xs={12} md={6}  style={{marginTop:'25px', marginBottom:'30px'}} >
    
    <div style={{background:'#F4F5F7' , borderRadius:'20px', padding:'8px 20px'}}>
    
  <Link to='/finished-order-details-factory'  style={{textDecoration:'none'}}>
    <div style={{ border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto', background:'#FFFFFF', margin:'10px 5px', 
    padding:'10px 20px'}}>
      
      <div style={{display:'flex', justifyContent:'space-between'}}>
         <p style={{color:'#220E5F', fontWeight:'bold'}}>  رقم الطلب: 1541569876</p>
         <p style={{color:'#7A808A', fontWeight:'500'}}>  22/01/2023 - 09:30 AM   </p>
     
      </div>
    
      <div>
        <div style={{display:'flex', gap:'8px'}}> 
        <TbShoppingBag style={{color:'#7EA91A', fontSize:'25px' , marginRight:'-3px'}}/>
        <p style={{fontSize:'18px', color:'#585858'}}> عدد المنتجات: 3</p>
        </div>
    
        <div style={{display:'flex', gap:'8px', marginTop:'-10px'}}> 
        <MdFactory    style={{color:'#7EA91A', fontSize:'20px'}}/>
        <p style={{fontSize:'18px', color:'#585858'}} > عدد المصانع: 2</p>
        </div>
    
        <div style={{display:'flex', justifyContent:'space-between'}}>

<div style={{display:'flex', fontSize:'20px', marginTop:'-10px'}}>
    <p style={{color:'#2B2B2B', fontWeight:'bold'}}>  الإجمالي: 12.800 جنيه</p>
</div>

<div style={{display:'flex',marginTop:'-25px', textAlign:'center', alignItems:'center', justifyContent:'center'}}> 
<div style={{border: "2px solid #039CED61", borderRadius:'20px', padding:'2px 10px', color:'#220E5F', 
fontWeight:'bold',  display:'flex'}}> <div> <img src={reorderImg} style={{paddingLeft:'5px'}}  /> </div> 
اعاده الطلب</div>
</div>


</div>
      </div>
    
    
    
    
    </div>
    </Link>   
    
    <Link to='/finished-order-details-factory'  style={{textDecoration:'none'}}>
    <div style={{ border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto', background:'#FFFFFF', margin:'12px 5px', 
    padding:'10px 20px'}}>
      
      <div style={{display:'flex', justifyContent:'space-between'}}>
         <p style={{color:'#220E5F', fontWeight:'bold'}}>  رقم الطلب: 1541569876</p>
         <p style={{color:'#7A808A', fontWeight:'500'}}>  22/01/2023 - 09:30 AM   </p>
     
      </div>
    
      <div>
        <div style={{display:'flex', gap:'8px'}}> 
        <TbShoppingBag style={{color:'#7EA91A', fontSize:'25px' , marginRight:'-3px'}}/>
        <p style={{fontSize:'18px', color:'#585858'}}> عدد المنتجات: 3</p>
        </div>
    
        <div style={{display:'flex', gap:'8px', marginTop:'-10px'}}> 
        <MdFactory    style={{color:'#7EA91A', fontSize:'20px'}}/>
        <p style={{fontSize:'18px', color:'#585858'}} > عدد المصانع: 2</p>
        </div>
    
        <div style={{display:'flex', justifyContent:'space-between'}}>

<div style={{display:'flex', fontSize:'20px', marginTop:'-10px'}}>
    <p style={{color:'#2B2B2B', fontWeight:'bold'}}>  الإجمالي: 12.800 جنيه</p>
</div>

<div style={{display:'flex',marginTop:'-25px', textAlign:'center', alignItems:'center', justifyContent:'center'}}> 
<div style={{border: "2px solid #039CED61", borderRadius:'20px', padding:'2px 10px', color:'#220E5F', 
fontWeight:'bold',  display:'flex'}}> <div> <img src={reorderImg} style={{paddingLeft:'5px'}}  /> </div> 
اعاده الطلب</div>
</div>


</div>
      </div>
    
    
    
    
    </div>
</Link>


<Link to='/finished-order-details-factory-different'  style={{textDecoration:'none'}}>
    <div style={{ border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto', background:'#FFFFFF', margin:'12px 5px', 
    padding:'10px 20px'}}>
      
      <div style={{display:'flex', justifyContent:'space-between'}}>
         <p style={{color:'#220E5F', fontWeight:'bold'}}>  رقم الطلب: 1541569876</p>
         <p style={{color:'#7A808A', fontWeight:'500'}}>  22/01/2023 - 09:30 AM   </p>
     
      </div>
    
      <div>
        <div style={{display:'flex', gap:'8px'}}> 
        <TbShoppingBag style={{color:'#7EA91A', fontSize:'25px' , marginRight:'-3px'}}/>
        <p style={{fontSize:'18px', color:'#585858'}}> عدد المنتجات: 3</p>
        </div>
    
        <div style={{display:'flex', gap:'8px', marginTop:'-10px'}}> 
        <MdFactory    style={{color:'#7EA91A', fontSize:'20px'}}/>
        <p style={{fontSize:'18px', color:'#585858'}} > عدد المصانع: 2</p>
        </div>
    
    
    <div style={{display:'flex', justifyContent:'space-between'}}>
    
    <div style={{display:'flex', fontSize:'20px', marginTop:'-10px'}}>
            <p style={{color:'#2B2B2B', fontWeight:'bold'}}>  الإجمالي: 12.800 جنيه</p>
        </div>
    
        <div style={{display:'flex', fontSize:'20px', marginTop:'-10px'}}>
        <div><img src={dif} style={{paddingLeft:'2px'}} /></div>
            <p style={{color:'#7EA91A'}}>  عينات مختلفة</p>
        </div>
    </div>
       
      </div>
    
    
    
    
    </div>

</Link>
    </div>
    
    
    
    </Col>
        </Row>
    </Container>
    
    <Container>
            <Row>
                <Col>  <div style={{marginLeft:'-55px', borderBottom:'2px solid #EEEEEE ', width:'100%' , marginBottom:'25px'}}></div></Col>
            </Row>
          </Container>
    
          <div class="container text-center mb-5 p-3">
        <h5 style={{display:'flex', fontWeight:'bold', marginBottom:'15px'}}>منتجات  اخري</h5>
        
     <ProductCard />
    
     
    
    </div>
        </>;
}


export default FinishedOrderFactory;