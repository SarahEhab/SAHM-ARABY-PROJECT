import React, { useState } from 'react';
import './product.css'
import NavBarBlue from '../NavBar/NavBarBlue';
import { Button, Card, Col, Container, Form, Modal, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import logo from '../../images/logo.png'
import ground from '../../images/ground.png'
import ground2 from '../../images/ground2.png'
import locat from '../../images/location.png'
import infoIcon from '../../images/infoIcon.png'
import offer from '../../images/off.png'
import fav from '../../images/fav.png'
import prod1 from '../../images/prod1.png'
import prod2 from '../../images/prod2.png'
import prod3 from '../../images/prod3.png'
import prod4 from '../../images/prod4.png'
import prod5 from '../../images/prod5.png'
import star from '../../images/star.png'
import stars from '../../images/stars.png'
import userImg from '../../images/userImg.png'
import infoIcon2 from '../../images/infoIcon2.png'
import profileFac from '../../images/profileFac.png'
import cart from '../../images/cart.png'
import countt from '../../images/count.png'
import img1 from '../../images/addIcon.png'
import img2 from '../../images/minusIcon.png'
import mobile from '../../images/imgMobile.png'
import mobile1 from '../../images/mobile1.png'
import mobile2 from '../../images/mobile2.png'
import colors from '../../images/colors.png'
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from "react-image-gallery";
import { Link } from 'react-router-dom';
import NavbarLogin from '../NavBar/NavbarLogin';
import { FaStar } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import favIcon from '../../images/favIcon.svg'

const StoreProduct = () => {

  const images = [
    {
      original: `${mobile}`,
      thumbnail: `${mobile1}`,
    },
    {
      original: `${mobile}`,
      thumbnail: `${mobile2}`,
    },
    {
      original: `${mobile}`,
      thumbnail: `${mobile1}`,
    },
    {
      original: `${mobile}`,
      thumbnail: `${mobile1}`,
    },
    {
      original: `${mobile}`,
      thumbnail: `${mobile2}`,
    },
  ];


    return <>

 

    <NavBarBlue />

    <NavbarLogin />

    <Container >
      <Row style={{ marginTop:'25px'}}>
        <Col xs={12} md={6} xl={4}>
       
       

          <div>
          
            <div style={{border:'1px solid #ECECEC', height:'500px' , margin:'10px', borderRadius:'10px'}}> 
                
                <div style={{display:'flex', justifyContent:'space-between'}}>
                   <div><img src={fav} style={{margin:'10px'}}/></div>
                   <div><img src={offer}  /></div>
                
                </div>


             <ImageGallery 
             items={images} 
              showFullscreenButton={false}
             showPlayButton={false} />
            </div>

          </div> 
              


      
        </Col>
       
         <Col xs={12} md={6} xl={4}>

          <div>   

          <p style={{color:'#220E5F' , fontWeight:'bold', fontSize:'24px', width:'261px', textAlign:'start'}}> موبايل سامسونج جالاكسي بشريحتين اتصال</p>
            
            <div style={{display:'flex'}}>
              <div><img src={star}/></div>
              <p style={{color:'#7A808A', fontSize:'18px', marginRight:'5px', marginBottom:'5px'}}>4.5</p>
            </div>

            <div style={{display:'flex'}}>
            
              <p style={{color:'#E51937', fontSize:'26px', fontWeight:'bold'}}>12.000 جنيه</p>
              <p style={{color:'#7A808A', fontSize:'22px', paddingTop:'7px',marginRight:'10px'}}>  <del> 12.500 جنيه </del> </p>
            </div>

            <div><p style={{textAlign:'start', color:'#585858'}}>
            موبايل سامسونج جالاكسي A54 ثنائي شرائح الاتصال وبنظام اندرويد وذاكرة رام 8 جيجابايت وذاكرتخزين داخلية 128 جيجابايت، لون ليموني رائع، ضمان لمدة عام من الشركة المصنعة
            </p></div>

            <div style={{display:'flex'}}>
            
             <div  style={{display:'flex'}} >
              <div><img style={{ background:'#039CED1A', borderRadius:'5px', padding:'7px'}} src={cart} /></div>
              <p style={{color:'#039CED', marginRight:'10px'}}>  عدد الشراء: 35 </p>
             </div>

           <div style={{border:'1.5px solid #D7D7D7' , height:'25px', marginRight:'7px'}}></div>

             <div style={{display:'flex', marginRight:'10px'}}>
              <div><img  style={{ background:'#039CED1A', borderRadius:'5px', padding:'7px'}}  src={countt} /></div>
              <p style={{color:'#039CED', marginRight:'10px'}}>  الكمية: بالقطعة</p>
             </div>
          </div>

          <div style={{marginTop:'10px'}}>
            <p style={{color:'#220E5F', fontSize:'18px', fontWeight:'bold', textAlign:'start'}}>اللون</p>
            {/* <div><img src={colors}/></div> */}
            <div style={{display:'flex', gap:'15px'}}>
              <div style={{ borderRadius:'13px', padding:'7px 12px', background:'red', width:'13%', height:'35px'}}>  </div>
              <div style={{borderRadius:'13px', padding:'7px 12px', background:'red', width:'13%', height:'35px', background:'green'}}>  </div>
              <div style={{borderRadius:'13px', padding:'7px 12px', background:'red', width:'13%', height:'35px', background:'black'}}>  </div>
              <div style={{borderRadius:'13px', padding:'7px 12px', background:'red', width:'13%', height:'35px',background:'blue'}}>  </div>
             
            </div>
          </div>

         

          <div style={{marginTop:'10px'}}>
            <p style={{color:'#220E5F', fontSize:'18px', fontWeight:'bold', textAlign:'start'}}>الحجم</p>

            <div style={{display:'flex', gap:'15px'}}>
              <div style={{border:'1.5px solid #ECECEC', borderRadius:'10PX', padding:'7px 12px'}}>   64 جيجا</div>
              <div style={{border:'1.5px solid #ECECEC', borderRadius:'10PX' , padding:'7px 12px' }}>   64 جيجا</div>
              <div style={{border:'1.5px solid #ECECEC', borderRadius:'10PX', padding:'7px 12px'}}>   64 جيجا</div>
            </div>

          </div>

      
          <div style={{marginTop:'15px'}} >
             <div style={{border:'1px solid #ECECEC', borderRadius:' 0px, 10.86px, 10.86px, 0px', display:'flex', gap:'15px', justifyContent:'center', alignItems:'center'}}>  
              
              <div><img src={img1} /></div>
              <h4> 1 </h4>

              <div><img src={img2} /></div>

              <div  className='d-flex justify-content-center align-items-center   ' style={{borderRadius:'30px' }} >
           <button style={{ color:' rgba(255, 255, 255, 1)' , fontWeight:'700' , fontSize :'25px' , border:'none' , paddingTop:'5px', display:'flex', justifyContent:'center'}} 
           className='profileButton' >اضف الي العربه </button>
    </div>
             
             </div>
          </div>
   


         </div> 
      
        </Col>

     


        <Col xs={12} md={6} xl={4}>

          <div style={{background:'#F4F5F7', borderRadius:'22px', height:'140px', width:'350px'}} className='box-product'>
              <div style={{display:'flex', marginRight:'15px', paddingTop:'10px'}}>
                 <div><img src={infoIcon2} /></div>
                 <p style={{color:'#039CED', fontWeight:'bold', fontSize:'17px', paddingRight:'8px'}}>  التاجر</p>
              </div>


           
            
                  <div style={{background:'#FFFFFF', borderRadius:'18px', width:'320px',border:'2px solid #ECECEC', marginRight:'12px'  }}>
                     
                    <div style={{display:'flex', justifyContent:'space-between'}}>  
                        <div>

                          <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginRight:'15px'}}>
                             <div><img src={profileFac}/></div>
                             <div style={{marginRight:'10px', marginTop:'10px'}}>
                               <h6 style={{color:'#220E5F', fontWeight:'bold'}} >بلاك اوت للملابس</h6>
                               <p style={{color:'#A4ACAD', marginTop:'-5px'}}>عدد المنتجات: 125</p>
                             </div>
                          </div>

                        </div>
<Link to='/store-detailes' style={{textDecoration:'none'}}>

                        <div style={{marginTop:'17px', marginLeft:'10px'}}>
                          <p style={{background:'linear-gradient(266.85deg, #7EA91A 2.11%, #AEDC44 98.8%)', color:'#FFFFFF'
                          , borderRadius:'15px', padding:'2px 15px'}}>  عرض</p>
                        </div>
  </Link>
                    </div>
                  </div>
              
          </div>

          <div  style={{background:'#F4F5F7', borderRadius:'22px', height:'482px', width:'350px', marginTop:'10px'}} >

          <div style={{display:'flex', marginRight:'15px', paddingTop:'15px'}}>
           <h4 style={{fontSize:'41px', color:'#F2CD49', marginTop:'-15px'}}> 4.5</h4>
     
            <div><img src={stars} style={{marginRight:'15px'}} /></div>

          
          </div>
        
           <div style={{display:'flex', marginTop:'-15px', marginRight:'17px', color:'#7A808A', fontSize:'15px', marginBottom:'10px'}}>بناءً على 12 من التقييمات</div>

           <div style={{border:'1.42px solid #E7E7E7', margin:'5px 20px'}}></div>



           <div style={{display:'flex', justifyContent:'space-between'}}>  
                        <div>

                          <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginRight:'15px'}}>
                             <div><img src={userImg}/></div>
                             <div style={{marginRight:'10px', marginTop:'10px'}}>
                               <h6 style={{color:'#220E5F', fontWeight:'bold', fontSize:'15px'}} > Ahmed Khaled </h6>
                               <div style={{ marginTop:'-5px'}}><img src={stars} /> </div>
                             </div>
                          </div>

                        </div>

                        <div style={{marginTop:'17px', marginLeft:'10px'}}>
                          <p style={{ color:'#7A808A', fontSize:'13px'}}>  منذ 3 ساعات</p>
                        </div>
                       
            </div>
            <div>
              <p style={{color:'#585858', marginRight:'20px', textAlign:'start', marginTop:'5px', fontSize:'15px'}}> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص. </p>
            </div>
           

            <div style={{border:'1.42px solid #E7E7E7', margin:'5px 20px'}}></div>


            <div style={{display:'flex', justifyContent:'space-between'}}>  
                        <div>

                          <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginRight:'15px'}}>
                             <div><img src={userImg}/></div>
                             <div style={{marginRight:'10px', marginTop:'10px'}}>
                               <h6 style={{color:'#220E5F', fontWeight:'bold', fontSize:'15px'}} > Ahmed Khaled </h6>
                               <div style={{ marginTop:'-5px'}}><img src={stars} /> </div>
                             </div>
                          </div>

                        </div>

                        <div style={{marginTop:'17px', marginLeft:'10px'}}>
                          <p style={{ color:'#7A808A', fontSize:'13px'}}>  منذ 3 ساعات</p>
                        </div>
                       
            </div>
            <div>
              <p style={{color:'#585858', marginRight:'20px', textAlign:'start', marginTop:'5px', fontSize:'15px'}}> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص. </p>
            </div>
           
            <div style={{border:'1.42px solid #E7E7E7', margin:'5px 20px'}}></div>

            <div style={{display:'flex', justifyContent:'space-between'}}>  
                        <div>

                          <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginRight:'15px'}}>
                             <div><img src={userImg}/></div>
                             <div style={{marginRight:'10px', marginTop:'10px'}}>
                               <h6 style={{color:'#220E5F', fontWeight:'bold', fontSize:'15px'}} > Ahmed Khaled </h6>
                               <div style={{ marginTop:'-5px'}}><img src={stars} /> </div>
                             </div>
                          </div>

                        </div>

                        <div style={{marginTop:'17px', marginLeft:'10px'}}>
                          <p style={{ color:'#7A808A', fontSize:'13px'}}>  منذ 3 ساعات</p>
                        </div>
                       
            </div>
            <div>
              <p style={{color:'#585858', marginRight:'20px', textAlign:'start', marginTop:'5px', fontSize:'15px'}}> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص. </p>
            </div>
           


          </div>
      
        </Col>
      </Row>
  </Container> 

  <Container>
    <Row>
        <Col>
            <div  >
               <div style={{display:'flex'}}>
                 <div><img src={infoIcon} style={{marginTop:'5px'}} /></div> 
                   <p style={{color:'#7EA91A', fontSize:'20px', fontWeight:'bold', marginRight:'10px'}} >الوصف</p>
               </div>

                <div style={{display:'flex'}} >
                <ul>
                <li style={{color:'#585858', marginBottom:'5px',textAlign:'start'}} >أبعاد الهيكل: 158.2 × 76.7 × 8.2 ملم</li>
                <li style={{color:'#585858', marginBottom:'5px',textAlign:'start'}} >  نوع العرض: سوبر اموليد، 120 هرتز،BM   </li>
                <li style={{color:'#585858', marginBottom:'5px',textAlign:'start'}} >  نظام تشغيل المنصة: اندرويد   </li>
                <li style={{color:'#585858', marginBottom:'5px',textAlign:'start'}} >  كاميرا رئيسية ثلاثية: 50 ميجابكسل  </li>
                <li style={{color:'#585858', marginBottom:'5px',textAlign:'start'}} >  نوع البطارية: Li-Po 5000 mAh، غير قابلة للإزالة </li>
             
               </ul>
                </div>
              
            </div>
        </Col>
    </Row>
  </Container>


  <div class="container text-center mt-4">
  <div class="row row-cols-1 row-cols-lg-3 g-2 ">
    <div class="col">
      <div class="d-flex">  <img src={ground} style={{width:'100%'}} /></div>
    </div>
    <div class="col">
      <div class="d-flex">  <img src={ground2} style={{width:'100%'}}/></div>
    </div>

  </div>
</div>


    <div class="container text-center mb-5 p-5">
    <h5 style={{display:'flex', fontWeight:'bold'}}>منتجات مقترحة لك</h5>
    
    <div class="  row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 ">
    <div class="col">   
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
    

    <div class="col">   
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
    

    <div class="col">   
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
    

    <div class="col">   
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
    
    
    <div class="col">   
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

 

</div>
   
  
    </>;
}



export default StoreProduct;


