import React from 'react';
import { Col, Container, FloatingLabel, Form, Nav, Navbar, Row } from 'react-bootstrap';
import './partners.css'
import { Link } from 'react-router-dom'
import iconStore from '../../images/iconStore.png'
import iconFactory from '../../images/iconFactory.png'
import imgAdd from '../../images/Add.png'
import add1 from '../../images/add1.png'
import icon from '../../images/icon.png'
import icon2 from '../../images/icon2.png'
import locat from '../../images/location.png'
import iconOne from '../../images/icon-1.png'
import iconFour from '../../images/icon-4.png'
import iconThree from '../../images/icon-3.png'
import iconTwo from '../../images/icon-2.png'
import play from '../../images/play.png'
import apple from '../../images/apple2.png'
import logo from '../../images/logo.png'
import iconCountry from '../../images/iconCountry.png'
import NavbarLogin from '../NavBar/NavbarLogin';

const StorePartner = () => {
    return <>


<div style={{background:'linear-gradient(89.51deg, #02E4D8 -0.41%, #019AED 97.31%)'}}  >
  <Container>
    <Row>
    <div className='navbarBlue' style={{display:'flex',  justifyContent :'space-around', gap:'40px'}}>

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

<NavbarLogin />





    <Container>
    <Row>
        <Col>
        <div style={{marginTop:'15px'}}>
          <h3 style={{color: 'rgba(255, 255, 255, 1)' , fontWeight:'500' , paddingBottom :'20px', paddingTop:'10px' , borderRadius:'25px'}} className=" background-image">
            كن شريك  </h3>
          </div>
        </Col>
    </Row>
    </Container>
    

    <Container className='d-flex justify-content-center align-items-center' >
      <Row className="m-3">
        <Col xs="6" md="6" lg="6" style={{ textAlign: 'center', marginBottom: '10px' }}>
        <Link to='/store-partner' style={{textDecoration:'none'}}>
         <div style={{border :'none' , borderRadius:'15px' , width:'178px' , height:'33.74px' , 
             background:'linear-gradient(89.51deg, #02E4D8 -0.41%, #019AED 97.31%)', display:'flex', justifyContent:'center'
            , alignItems:'center', gap:'10px' }}>
            <div>
            <img src={iconStore} />
            </div>
        
            <h6 style={{color:'#FFFFFF' , paddingTop:'4px'}}>متجر </h6>
          </div>
          </Link>
        </Col>

        <Col xs="6" md="6" lg="6" style={{ textAlign: 'center', marginBottom: '10px' }}>

        <Link to='/factory-partner' style={{textDecoration:'none'}}>
        <div style={{border :'2px solid rgba(232, 232, 232, 1)' , borderRadius:'23px' , width:'178px' , height:'33.74px' , 
               background:'linear-gradient(0deg, #E8E8E8, #E8E8E8),linear-gradient(0deg, #F5F5F5, #F5F5F5)', display:'flex', justifyContent:'center'
            , alignItems:'center', gap:'10px' }}>
               <div>
            <img src={iconFactory} style={{marginTop:'-5px'}} />
            </div>
    

        
             <h6 style={{  color:'#636270' , fontSize:'15px', marginTop:'5px'}}>مصنع  </h6>
            
               
            </div>
       </Link>
       
        </Col>

      </Row>
      
      </Container>

   

      <Container>
        <Row>
            <Col>  <div style={{marginLeft:'-55px', marginBottom: '15px', borderBottom:'1.5px solid #EEEEEE ', width:'100%' }}></div></Col>
        </Row>
      </Container>

      <Container>
        <Row>
            <Col>
                <div   >
                <img src={imgAdd}  />
                    <p  style={{color:'#220E5F', marginTop:'10px'}}>  اضافة صورة الشعار </p>
                </div>
            </Col>
        </Row>
      </Container>

    <Container>
      <Row>
        <Col xs={12} md={4}>
       
        <form class="form-floating ">
          <input type="email" class="form-control" id="floatingInputValue" placeholder="اسم المتجر" value="متجر النور" 
           style={{borderRadius:'15px', color: "#585858" , paddingRight:'20px'}}/>
          <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} >  اسم المتجر</label>
        </form>


        <div class="form-floating mb-2">
        <select class="form-select" style={{borderRadius:'15px', marginTop:'10px'}} >
            <option selected>  <div><img src={locat}/></div> مصر  </option>
            
          
            <option value="2">Two <img src={locat}/>  </option>
            <option value="3">Three</option>
        </select>
        <label  style={{borderRadius:'15px', color: "#585858" , paddingRight:'20px', fontWeight:'bold'}}  for="floatingSelect">  البلد</label>
        </div>




        <div class="row g-2  mb-2">
        <div class="col-md">
    <div class="form-floating">
      <select class="form-select" id="floatingSelectGrid">
        <option selected>   القاهره</option>
        <option value="1">الجيزه</option>
        <option value="2">الاسكندريه</option>
        <option value="3">بورسعيد</option>
        <option value="2">طنطا</option>
        <option value="3">القليوبيه</option>
      </select>
      <label for="floatingSelectGrid">  المحافظه</label>
    </div>
    </div>
  <div class="col-md">
    <div class="form-floating">
      <select class="form-select" id="floatingSelectGrid">
        <option selected>   المعادي</option>
        <option value="1">حلوان</option>
        <option value="2">الهضبه الوسطي</option>
        <option value="3">مدينه نصر</option>
        <option value="2">دار السلام </option>
        <option value="3"> اكتوبر</option>
      </select>
      <label for="floatingSelectGrid">المنطقه  </label>
    </div>
  </div>
       </div>


        <form class="form-floating mb-2">
          <input type="text" class="form-control" id="floatingInputValue" placeholder="  العنوان" value=" 22، ميدان الجزائر، المعادي" 
           style={{borderRadius:'15px', color: "#585858" , paddingRight:'20px'}}/>
          <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} >   العنوان  </label>
        </form>

        <form class="form-floating mb-2">
          <input type="text" class="form-control" id="floatingInputValue" placeholder="رقم الموبايل" value=" 123 456 789" 
           style={{borderRadius:'15px', color: "#585858" , paddingRight:'20px'}}/>
          <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} >   رقم الموبايل</label>
        </form>

        <form class="form-floating ">
          <input type="text" class="form-control" id="floatingInputValue" placeholder="رقم الواتس اب" value=" 123 456 789" 
           style={{borderRadius:'15px', color: "#585858" , paddingRight:'20px'}}/>
          <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} >   رقم الواتس اب</label>
        </form>

   
        </Col>
       


         <Col xs={12} md={4}>
       
        <form class="form-floating ">
          <input type="text" class="form-control" id="floatingInputValue" placeholder="رابط المتجر" value="https//www.website.com " 
           style={{borderRadius:'15px', color: "#220E5F" , paddingRight:'20px'}}/>
          <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} >  رابط المتجر</label>
        </form>

        <form class="form-floating mt-2 ">
          <input type="text" class="form-control" id="floatingInputValue" placeholder="البريد الالكتروني " value="username@mail.com" 
           style={{borderRadius:'15px', color: "#220E5F" , paddingRight:'20px'}}/>
          <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} >   البريد الالكتروني</label>
        </form>


        <div class="form-floating mb-2">
        <select class="form-select" style={{borderRadius:'15px', marginTop:'10px'}} >
            <option selected>  اختر نطاقات العمل</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <label  style={{borderRadius:'15px', color: "#585858" , paddingRight:'20px', fontWeight:'bold'}}  for="floatingSelect">  نطاقات العمل</label>
        </div>
 
        <form class="form-floating mt-2 ">
          <textarea type="textarea" class="form-control" id="floatingInputValue" placeholder=" اكتب وصف هنا " value="اكتب هنا" 
           style={{borderRadius:'15px', color: "#220E5F" , paddingRight:'30px' , height:'116px'}}> </textarea>
          <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} >   اكتب وصف هنا </label>
        </form>


        <form class="form-floating mt-2 ">
       
          <input 
           type="text" class="form-control" id="floatingInputValue" placeholder="صوره البطاقه " value="صوره من الامام والخلف " 
           style={{borderRadius:'15px', color: "#220E5F" , paddingRight:'30px'}}     
           />
 
        <div style={{display:'flex', justifyContent:'end', marginLeft:'10px' , marginTop:'-45px', gap:'5px'}}>
        <img src={add1}/>
        <img src={add1}/>
        </div>
          <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} >  صوره البطاقه </label>
        
        </form>
        </Col>



        <Col xs={12} md={4}>
        <h5 style={{color: "#220E5F" , fontWeight:'bold' , display:'flex', marginTop:'-15px'}}>طريقة استلام المستحقات</h5>



<div style={{display:'flex', gap:'10px'}}>
    <div style={{border:'2px solid #02E4D8' , borderRadius:'15px', padding:'10px ' , 
    background:'linear-gradient(89.51deg, rgb(2 228 216 / 0%) -0.41%, rgb(1 154 237 / 0%) 97.31%), linear-gradient(0deg, rgba(3, 156, 237, 0.05), rgba(3, 156, 237, 0.05))'}}>
        <img src={icon} />
        <p>    البطاقات الائتمانية </p>
    </div>

    <Link to='/store-wallet' style={{textDecoration:'none', color:'#220E5F'}}>
    <div style={{border:'2px solid #ECECEC' , borderRadius:'15px', padding:'10px ' , 
    }}>
  
  

  <img src={icon2} />
        <p>     المحافظ الإلكترونية </p>
    </div>
</Link>
    
</div>


        <form class="form-floating mt-2 ">
          <input type="text" class="form-control" id="floatingInputValue" placeholder="الاسم " value="Mohamed " 
           style={{borderRadius:'15px', color: "#585858" , paddingRight:'20px'}}/>
          <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} > الاسم </label>
        </form>

        <form class="form-floating mt-2 ">
          <input type="text" class="form-control" id="floatingInputValue" placeholder="رقم البطاقه " value="0000 0000 0000 0000 " 
           style={{borderRadius:'15px', color: "#585858" , paddingRight:'20px'}}/>
          <label for="floatingInputValue" style={{color:'#585858', fontWeight:'bold'}} > رقم البطاقه </label>
        </form>

          <div class="row g-2  mt-2">
      
  <div class="col-md">
    <div class="form-floating">

       <input type="text" class="form-control" id="floatingInputValue" placeholder="cvv  " value=" 128 " 
           style={{borderRadius:'15px', color: "#585858" , paddingRight:'20px'}}/>
      <label for="floatingSelectGrid">CVV  </label>
    </div>
  </div>

  <div class="col-md">
    <div class="form-floating">

       <input type="Date" class="form-control" id="floatingInputValue" placeholder="MM/YY  " value=" 06/26 " 
           style={{borderRadius:'15px', color: "#585858" , paddingRight:'20px'}}/>
      <label for="floatingSelectGrid">MM/YY  </label>
    </div>
  </div>


         </div>

         <div  className='d-flex mt-3  ' style={{borderRadius:'30px' }} >
           <div style={{ color:' rgba(255, 255, 255, 1)' , fontWeight:'700' , fontSize :'25px' , border:'none'
            , paddingTop:'5px', display:'flex', justifyContent:'center' }} 
           className='profileButton2' > تاكيد</div>
    </div>

        </Col>
      </Row>
</Container>
      


    </>;
}


export default StorePartner;