import React from 'react';
import NavBarBlue from '../NavBar/NavBarBlue';
import { Button, Card, Col, Container, Form, FormControl, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import locat from '../../images/location.png'
import logo from '../../images/logo.png'
import FacWhite from '../../images/FacWhite.png'
import StoresColor from '../../images/storesColor.png'
import { Link } from 'react-router-dom';
import search from '../../images/search.png'
import numberImg from '../../images/number.png'
import storeColor from '../../images/storecolor.png'
import star from '../../images/star.png'
import offer from '../../images/off.png'
import fav from '../../images/fav.png'
import prod2 from '../../images/prod2.png'
import prod3 from '../../images/prod3.png'
import prod8 from '../../images/prod8.png'
import prod1 from '../../images/prod1.png'
import prod5 from '../../images/prod5.png'
import prod4 from '../../images/prod4.png'
import icon from '../../images/icon.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import black from '../../images/black.png'
import favo from '../../images/favo.png'
import closeImg from '../../images/close.png'
import deleteIcon from '../../images/deleteIcon.png'
import img1 from '../../images/addIcon.png'
import img2 from '../../images/minusIcon.png'
import profileFac from '../../images/profileFac.png'
import profileStore from '../../images/ProfileStore.png' 
import NavbarLogin from '../NavBar/NavbarLogin';
import ProductCard from '../Products/ProductCard';
const CurrentOrderDetailsStore = () => {
    return <>  
    <NavBarBlue />

    <NavbarLogin />


    <Container>

<Row style={{marginBottom:'80px'}} >
<p style={{display:'flex', fontSize:'25px', fontWeight:'bold', color:'#220E5F', marginTop:'15px'}}>  تفاصيل الطلب </p>

    <Col sm={12} xs={12} md={7}  style={{marginTop:'10px'}} >


    <div style={{background:'#F4F5F7' , borderRadius:'20px', padding:'20px'}}>
     

    <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto', background:'#FFFFFF'}}>


<div style={{display:'flex' , justifyContent:'center' }}  >

 

  <img src={profileFac} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px'}} />


<div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'8px' }} >
  <p style={{fontSize:'19px', color:'#220E5F', textAlign:'start', fontWeight:'bold'}}>  المتجر</p>
  <p style={{fontSize:'17px', color:'#636270', textAlign:'start', marginTop:'-15px'}}>  بلاك اوت للملابس</p>

</div>


</div>

<div style={{display:'flex',margin:'10px 15px', textAlign:'center', alignItems:'center', justifyContent:'center'}}> 
<div style={{border: "1.85px solid #D0D0D0", borderRadius:'15px', padding:'5px 20px 8px 20px', color:'#7A808A', fontWeight:'bold'}}> انتظار الموافقه </div>
</div>


   
   </div>












     <div style={{display:'flex'}}> <div style={{color:'#7A808A', fontSize:'18px', margin:'10px 2px'}}> عدد المنتجات: 2</div> </div>

     <div >
    

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

   <div style={{color:'#585858', display:'flex', marginTop:'-15px', fontWeight:'500'}}> الحجم: 128 جيجا </div>
   <div style={{color:'#585858', display:'flex', fontWeight:'500'}}> الكمية: 1 قطعة</div>

 


     
     </div>


     </div>


    <div style={{display:'flex', flexDirection:'column'}}>
    <div><img src={offer} style={{marginLeft:'20px', width:'34px'}} /></div>

    <div style={{display:'flex', gap:'15px'}}>  
        <div style={{display:'flex', flexDirection:'column', marginTop:'55px', marginLeft:'14px'}}>

<div style={{display:'flex', justifyContent:'center', gap:'10px', marginTop:'8px'}}> 
<div><img src={deleteIcon}/></div>
</div>
    

        </div>
         


         
         </div>

    </div>


   </div>







   <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto', background:'#FFFFFF', marginTop:'15px'}}>


<div style={{display:'flex' , justifyContent:'center' }}  >

 

  <img src={prod3} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px', width:'79px', height:'90px'}} />


<div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
  <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>  مولفيكس حفاضات اطفال بانتس عبوة ميجا</p>

<div style={{display:'flex'}}>
 <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px', width:'70px'}}> 300 جنيه  </p>

</div>



<div style={{color:'#585858', display:'flex', fontWeight:'500', marginTop:'15px'}}> الكمية: 1 كرتونة</div>





</div>


</div>


<div style={{display:'flex', flexDirection:'column'}}>


<div style={{display:'flex', gap:'15px'}}>  
  <div style={{display:'flex', flexDirection:'column', marginTop:'55px', marginLeft:'14px'}}>

<div style={{display:'flex', justifyContent:'center', gap:'10px', marginTop:'8px'}}> 
<div><img src={deleteIcon}/></div>
</div>


  </div>
   


   
   </div>

</div>


</div>







   
</div>


    </div>



    <div style={{background:'#F4F5F7' , borderRadius:'20px', padding:'20px'}}>
     

     <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto', background:'#FFFFFF'}}>
 
 
 <div style={{display:'flex' , justifyContent:'center' }}  >
 
  
 
   <img src={profileStore} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px'}} />
 
 
 <div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'8px' }} >
   <p style={{fontSize:'19px', color:'#220E5F', textAlign:'start', fontWeight:'bold'}}>  المتجر</p>
   <p style={{fontSize:'17px', color:'#636270', textAlign:'start', marginTop:'-15px'}}>  الهدى للملابس  </p>
 
 </div>
 
 
 </div>
 
 <div style={{display:'flex',margin:'10px 15px', textAlign:'center', alignItems:'center', justifyContent:'center'}}> 
 <div style={{border: " 1.85px solid #74C9F5", borderRadius:'15px', padding:'5px 20px 8px 20px', color:'#039CED', 
 fontWeight:'bold', background:'rgb(3 156 237 / 10%)'}}>
 جاري التجهيز </div>
 </div>
 
 
    
    </div>
 
 
 
 
 
 
 
 
 
 
 
 
      <div style={{display:'flex'}}> <div style={{color:'#7A808A', fontSize:'18px', margin:'10px 2px'}}> عدد المنتجات: 2</div> </div>
 
      <div >
     
 
     <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto', background:'#FFFFFF'}}>
 
 
       <div style={{display:'flex' , justifyContent:'center' }}  >
     
        
       
         <img src={prod8} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px', width:'79px', height:'90px'}} />
 
 
       <div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
         <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   سويت شيرت بغطاء للرأس
وسوستة مزين برسومات</p>
       
    <div style={{display:'flex'}}>
        <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px', width:'70px'}}> 500 جنيه  </p>
       
    </div>
    
    <div style={{display:'flex', marginTop:'10px'}}>
     <p> اللون :</p>
     <div><img src={black} /></div>
    </div>
 
    <div style={{color:'#585858', display:'flex', marginTop:'-15px', fontWeight:'500'}}> المقاس: M</div>
    <div style={{color:'#585858', display:'flex', fontWeight:'500'}}> الكمية: 1 شوال</div>
 
  
 
 
      
      </div>
 
 
      </div>
 
 

    
 
     <div style={{display:'flex', gap:'15px'}}>  
         <div style={{display:'flex', flexDirection:'column', marginTop:'55px', marginLeft:'14px'}}>
 
 <div style={{display:'flex', marginTop:'20px'}}> 
 <div><img src={deleteIcon}/></div>
 </div>
     
 
  
          
 
 
          
          </div>
 
     </div>
 
 
    </div>
 
 
 
 
 
 
 
   
    
 </div>
 
 
     </div>

    
   
    </Col>

    <Col sm={12} xs={12} md={5}  style={{marginTop:'10px'}} >


    <div style={{background:'#F4F5F7' , borderRadius:'20px', padding:'8px 20px 20px 20px', marginBottom:'15px'}}>
    <div style={{display:'flex', justifyContent:'space-between'}}>
     <p style={{color:'#220E5F', fontWeight:'bold'}}>  رقم الطلب: 1541569876</p>
     <p style={{color:'#7A808A', fontWeight:'500'}}>  22/01/2023 - 09:30 AM   </p>
 
  </div>

  <div style={{display:'flex', justifyContent:'space-between'}}>

  <div>
    <div style={{display:'flex', gap:'8px'}}> 
    <div><img src={numberImg} /></div>
    <p style={{fontSize:'18px', color:'#585858'}}> عدد المنتجات: 3</p>
    </div>

    <div style={{display:'flex', gap:'8px', marginTop:'-10px'}}> 
    <div><img src={storeColor} /></div>
    <p style={{fontSize:'18px', color:'#585858'}} > عدد المتاجر: 2</p>
    </div>

  </div>

  <div style={{display:'flex',margin:'10px 15px', textAlign:'center', alignItems:'center', justifyContent:'center'}}> 
 <div style={{border: " 1.23px solid #E5193726", borderRadius:'20px', padding:'5px 20px 8px 20px', color:'#E51937', 
 fontWeight:'bold', background:'rgb(229 25 55 / 9%)', display:'flex'}}> <div> <img src={closeImg} style={{paddingLeft:'5px'}}  /> </div> 
 الغاء الطلب</div>
 </div>
  </div>




  <div style={{display:'flex', justifyContent:'center'}}>
        <div style={{ marginLeft:'220px', marginTop:'15px', position:'absolute'}}>
        <img src={locat} width='25px' height='25px'/>
        </div>


        <div  className='textLocat'  style={{marginLeft:'-10px', marginTop:'15px'}}>
            <p style={{border:' 2px solid #7EA91A61', width:'245px', borderRadius:'20px', background:'#7EA91A33', padding:'2px 10px', fontSize:'13px'}} >  

    توصيل الي <span style={{color:'#7EA91A'}} >22، ميدان الجزائر، المعادي</span>       </p>
            </div>


  </div>



    
    </div>




    <div style={{background:'#F4F5F7' , borderRadius:'20px', padding:'8px 20px 20px 20px', marginBottom:'15px'}}>
   
    <p style={{color:'#220E5F' , display:'flex', textAlign:'start', fontWeight:'bold', fontSize:'18px'}}> طريقه الدفع </p>
     
     <div style={{background:'#FFFFFF' , borderRadius:'10px',padding:'8px 20px 2px 20px'}}>

     <div style={{display:'flex', justifyContent:'space-between'}}>
     <p style={{color:'#1B273A', fontSize:'18px'}}>  عند الاستلام</p>
        <div><img src={icon3}/></div>
     </div>

     </div>


    
    </div>


    <div style={{background:'#F4F5F7' , borderRadius:'20px', padding:'8px 20px'}}>



<div>
<div style={{display:'flex', justifyContent:'space-between'}} >
    <p style={{color:'#220E5F', fontSize:'18px'}}>  قيمة المنتجات</p>
    <p style={{color:'#717171', fontSize:'18px'}} > 12.800 جنيه</p>
</div>

<div style={{display:'flex', justifyContent:'space-between', marginTop:'-10px'}} >
    <p style={{color:'#220E5F', fontSize:'18px'}} >  قيمة التوصيل</p>
    <p style={{color:'#717171', fontSize:'18px'}}> 50 جنيه</p>
</div>

<div style={{display:'flex', justifyContent:'space-between', marginTop:'-10px'}} >
    <p style={{color:'#220E5F', fontSize:'18px'}} >  الضربيه المضافه</p>
    <p style={{color:'#717171', fontSize:'18px'}} > 50 جنيه</p>
</div>

<div style={{display:'flex', justifyContent:'space-between', marginTop:'-10px'}} >
    <p style={{color:'#220E5F', fontSize:'18px'}}>  قيمه الخصم</p>
    <p style={{color:'#717171', fontSize:'18px'}}> -100 جنيه</p>
</div>

<div style={{display:'flex', justifyContent:'space-between', marginTop:'-10px'}} >
    <p style={{color:'#220E5F', fontSize:'18px'}}>  الإجمالي</p>
    <p style={{color:'#E51937', fontSize:'18px'}}> 12.800 جنيه</p>
</div>

</div>



    
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



export default CurrentOrderDetailsStore;