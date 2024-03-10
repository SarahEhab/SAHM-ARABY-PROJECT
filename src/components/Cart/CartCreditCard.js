import React from 'react';
import '../../components/Partners/partners.css'
import NavBarBlue from '../NavBar/NavBarBlue';
import { Button, Card, Col, Container, Form, FormControl, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import locat from '../../images/location.png'
import logo from '../../images/logo.png'
import star from '../../images/star.png'
import offer from '../../images/off.png'
import fav from '../../images/fav.png'
import prod2 from '../../images/prod2.png'
import prod3 from '../../images/prod3.png'
import prod8 from '../../images/prod8.png'
import prod1 from '../../images/prod1.png'
import prod5 from '../../images/prod5.png'
import prod4 from '../../images/prod4.png'
import black from '../../images/black.png'
import favo from '../../images/favo.png'
import sale from '../../images/sale.png'
import deleteIcon from '../../images/deleteIcon.png'
import img1 from '../../images/addIcon.png'
import img2 from '../../images/minusIcon.png'
import { Link } from 'react-router-dom';
import icon from '../../images/icon.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import check from '../../images/check.png'
import NavbarLogin from '../NavBar/NavbarLogin';
import ProductCard from '../Products/ProductCard';
import { IoCheckmarkCircleOutline, IoHeartCircleSharp } from 'react-icons/io5';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { CgTrash } from "react-icons/cg";
const CartCreditCard = () => {
    return <>
    <NavBarBlue />
    <NavbarLogin />
    
    <Container>
      <Row>
        <Col>
        <div style={{marginTop:'15px'}}>
          <h3 style={{color: 'rgba(255, 255, 255, 1)' , fontWeight:'500' , paddingBottom :'20px', paddingTop:'10px' , borderRadius:'25px'}} className=" background-image">
            عربه التسوق</h3>
          </div>
        </Col>
      </Row>
    </Container>
    
    <Container>
        <Row style={{marginBottom:'80px'}} >
            <Col sm={12} xs={12} md={7}  style={{marginTop:'25px'}} >
    
            <div style={{background:'#F4F5F7' , borderRadius:'20px', padding:'8px 20px'}}>
             <div style={{display:'flex', justifyContent:'space-between'}}>
    
                 <div style={{color:'#220E5F', fontWeight:'bold', fontSize:'18px'}}> المنتجات: 3 </div>
                 <div style={{display:'flex', gap:'12px'}}>
                    <p style={{color:'#7EA91A',fontSize:'15px'}}> تحديد الكل</p>
                    <p style={{color:'#7A808A',fontSize:'15px'}}>  حذف الكل</p>
                 </div>
             </div>
    
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
      
            <div style={{color:'#585858', display:'flex', marginTop:'-15px'}}> الحجم: 128 جيجا </div>
      
            <div style={{display:'flex', justifyContent:'space-between', marginTop:'25px'}} >
                <div style={{display:'flex', marginRight:'-70px', gap:'8px'}}>
               <div> <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "34px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    /></div>
   <CgTrash
                  style={{
                    paddingLeft: "10px",
                    fontSize: "34px",
                    color: "gray",
                    padding: "3px",
                    border:'1px solid #8080800d',
                    background:'rgb(166 166 166 / 22%)',
                    borderRadius:'25px', marginLeft:'10px'
                  }}
                />
                  
                </div>
            </div>
              </div>
              </div>
      
              <div style={{display:'flex', flexDirection:'column'}}>
              <div><img src={offer} style={{marginLeft:'20px', width:'34px'}} /></div>
      
              <div style={{display:'flex', gap:'15px'}}>  
                  <div style={{display:'flex', flexDirection:'column', marginTop:'55px', marginLeft:'14px'}}>
               <div style={{color:'#7A808A'}}>الكميه : بالقطعه</div>
                   <div style={{display:'flex', justifyContent:'center', gap:'10px', marginTop:'8px'}}> 
                          <div><img src={img1} /></div>
                          <h4> 1 </h4>
                          <div><img src={img2} /></div>
                    </div>
                  </div>
   
               </div> 
              </div>
            </div>
    
           <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , 
           width:'auto', background:'#FFFFFF', marginTop:'15px'}}>
    
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
          <div style={{display:'flex', marginRight:'-70px', gap:'8px'}}>
          <div> <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "34px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    /></div>
   <CgTrash
                  style={{
                    paddingLeft: "10px",
                    fontSize: "34px",
                    color: "gray",
                    padding: "3px",
                    border:'1px solid #8080800d',
                    background:'rgb(166 166 166 / 22%)',
                    borderRadius:'25px', marginLeft:'10px'
                  }}
                />
                  
          
          </div>
          </div>
          
          </div>
          
          
          </div>
    
    
    <div style={{display:'flex', flexDirection:'column'}}>
    <div><img src={offer} style={{marginLeft:'20px', width:'34px'}} /></div>
    
    <div style={{display:'flex', gap:'15px'}}>  
      <div style={{display:'flex', flexDirection:'column', marginTop:'55px', marginLeft:'14px'}}>
    <div style={{color:'#7A808A'}}>الكميه : بالشوال</div>
    <div style={{display:'flex', justifyContent:'center', gap:'10px', marginTop:'8px'}}> 
    <div><img src={img1} /></div>
        <h4> 1 </h4>
    
        <div><img src={img2} /></div>
    </div>
    
    
      </div>
       
    
    
       
       </div>
    
    </div>
    
    
            </div>
    
  
            <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' ,
              width:'auto', background:'#FFFFFF', marginTop:'15px', marginBottom:'30px'}}>
            
            <div style={{display:'flex' , justifyContent:'center' }}  >
            
              <img src={prod3} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px', width:'79px', height:'90px'}} />
            <div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
              <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>  مولفيكس حفاضات اطفال بانتس عبوة ميجا</p>
            
            <div style={{display:'flex'}}>
            <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px', width:'70px'}}> 300 جنيه  </p>
            
            </div>
            
            <div style={{display:'flex', justifyContent:'space-between', marginTop:'25px'}} >
                <div style={{display:'flex', marginRight:'-70px', gap:'8px', marginTop:'40px'}}>
                <div> <IoHeartCircleSharp
                      style={{
                        color: "rgb(166 166 166 / 82%)",
                        fontSize: "34px",
                        marginRight: "-30px",
                        cursor:'pointer'
                      }}
                    
                    /></div>
   <CgTrash
                  style={{
                    paddingLeft: "10px",
                    fontSize: "34px",
                    color: "gray",
                    padding: "3px",
                    border:'1px solid #8080800d',
                    background:'rgb(166 166 166 / 22%)',
                    borderRadius:'25px', marginLeft:'10px'
                  }}
                />
                  
                
                </div>
    
            </div>
            
            </div>
            
            
            </div>
            
            
            <div style={{display:'flex', flexDirection:'column'}}>
            
            
            <div style={{display:'flex', gap:'15px'}}>  
              <div style={{display:'flex', flexDirection:'column', marginTop:'55px', marginLeft:'14px'}}>
            <div style={{color:'#7A808A'}}>الكميه : بالكرتونه</div>
            <div style={{display:'flex', justifyContent:'center', gap:'10px', marginTop:'8px'}}> 
            <div><img src={img1} /></div>
                <h4> 1 </h4>
            
                <div><img src={img2} /></div>
            </div>
            
            
              </div>
              
            
            
              
              </div>
            
            </div>
            
            
            </div>
           
             </div>
            </div>
            </Col>
    
            <Col sm={12} xs={12} md={4}  style={{marginTop:'25px'}} >
              <div style={{background:'#F4F5F7' , borderRadius:'20px', padding:'8px 20px'}}>
      
              <div style={{display:'flex', justifyContent:'center'}}>
                  <div style={{position:'relative', marginLeft:'-40px', marginTop:'6px'}}>
                  <img src={locat}/>
                  </div>
                
              
                  <div style={{marginLeft:'-10px', marginTop:'10px'}}>
                  <p style={{border:' 2px solid #7EA91A61', width:'330px', borderRadius:'20px', background:'#7EA91A33', padding:'2px 10px'}} >  
              
                  توصيل الي <span style={{color:'#7EA91A'}} >22، ميدان الجزائر، المعادي</span>       </p>
                  </div>
              </div>
      
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label style={{padding:'3px 30px', display:'flex',
                position:'absolute',fontSize:'15px',color:'#585858', display:'flex' }}>
                <div> <img src={sale} style={{width:'30px', marginTop:'10px', paddingLeft:'5px', marginRight:'-20px'}} />  </div>
                كود الخصم
                </Form.Label>
                  <div>

                    <Button style={{position:'absolute', margin:'13px 60px 13px 13px' , borderRadius:'15px' 
                    , background:'linear-gradient(266.85deg, #7EA91A 2.11%, #AEDC44 98.8%)' , border:'none', padding:'3px 20px',
                    color:'#FFFFFF'}}   >تفعيل</Button>
                </div>
    
                  <Form.Control type="text" placeholder=" اكتب الكود هنا" style={{ borderRadius: '10px'
                      , padding:'25px 35px 15px 15px' , marginBottom:'10px' }}  />
                      
              </Form.Group>
  
         <div style={{fontWeight:'bold', fontSize:'20px', color:'#220E5F', marginBottom:'8px'}}> اختر طريقة الدفع  </div>
      
              <div style={{display:'flex', gap:'10px', justifyContent:'center'}}>
      
              <Link to='/cart-checkout' style={{textDecoration:'none', color:'#220E5F'}}>
              <div style={{ borderRadius:'15px' , width:'100px' ,
          border:'2px solid #ECECEC' , borderRadius:'15px', background:'#FFFFFF'}}>
          
          <div style={{marginTop:'15px', padding:'1px 15px'}}>
              <img src={icon3} />
              <p  style={{fontSize:'13px', color:'#220E5F', fontWeight:'bold', marginTop:'5px'}}>  عند الاستلام</p>
          </div>
              
          </div>
      </Link>
          <div style={{border:'2px solid #02E4D8' , borderRadius:'15px', background:'#FFFFFF',
          background:'linear-gradient(89.51deg, rgb(2 228 216 / 0%) -0.41%, rgb(1 154 237 / 0%) 97.31%), linear-gradient(0deg, rgba(3, 156, 237, 0.05), rgba(3, 156, 237, 0.05))'
          }}>
          <div style={{marginTop:'15px', padding:'1px 10px'}}>
              <img src={icon} />
              <p style={{fontSize:'13px', color:'#220E5F', fontWeight:'bold', marginTop:'5px'}} >    البطاقات الائتمانية </p>
          </div>
          </div>
      
      
      
          <Link to='/cart-electronic-wallet' style={{textDecoration:'none', color:'#220E5F'}}>
          <div style={{ border:'2px solid #ECECEC' , borderRadius:'15px', background:'#FFFFFF'}}>
      
      <div style={{marginTop:'15px', padding:'1px 10px'}}>
        <img src={icon2} />
              <p style={{fontSize:'13px', color:'#220E5F', fontWeight:'bold', marginTop:'5px'}}>     المحافظ الإلكترونية </p>
          </div>
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

            <div class="row g-2  mt-1">
        
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


          <div style={{marginTop:'15px'}}>
              <div style={{display:'flex', justifyContent:'space-between'}} >
                  <p style={{color:'#220E5F'}}>  قيمة المنتجات</p>
                  <p style={{color:'#717171'}} > 12.800 جنيه</p>
              </div>
          
              <div style={{display:'flex', justifyContent:'space-between', marginTop:'-10px'}} >
                  <p style={{color:'#220E5F'}} >  قيمة التوصيل</p>
                  <p style={{color:'#717171'}}> 50 جنيه</p>
              </div>
          
              <div style={{display:'flex', justifyContent:'space-between', marginTop:'-10px'}} >
                  <p style={{color:'#220E5F'}} >  الضربيه المضافه</p>
                  <p style={{color:'#717171'}} > 50 جنيه</p>
              </div>
          
              <div style={{display:'flex', justifyContent:'space-between', marginTop:'-10px'}} >
                  <p style={{color:'#220E5F'}}>  قيمه الخصم</p>
                  <p style={{color:'#717171'}}> -100 جنيه</p>
              </div>
          </div>
      

          <div style={{background:'#FFFFFF', border: "1.83px solid #ECECEC", borderRadius:'15px'}}>
            
            <div style={{display:'flex',justifyContent:"space-between"}}>
                <div style={{margin:'10px'}}>
                  <p style={{color:'#220E5F', fontWeight:'bold'}} >  الاجمالي</p>
                  <p style={{color:'#E51937', fontWeight:'bold', marginTop:'-15px'}}>   12.800 جنيه</p>
                </div>
          
                <div  className='d-flex mt-3  ' style={{borderRadius:'30px', justifyContent:'center' }} >
                    <div style={{ color:' rgba(255, 255, 255, 1)' , fontWeight:'700' , fontSize :'20px' , border:'none'
                      , paddingTop:'10px', display:'flex', justifyContent:'center' }} 
                    className='profileButton2' > 
                    
                    تاكيد الطلب    <div><IoCheckmarkCircleOutline style={{paddingRight:'5px', fontSize:'30px'}} />   </div>   </div>  
              </div>
            </div>
          </div>   
           </div>
            </Col>
        </Row>
     </Container>  
    
        <Container>
          <Row>
              <Col>  <div style={{marginLeft:'-55px', borderBottom:'2px solid #EEEEEE ', width:'100%' }}></div></Col>
          </Row>
      </Container>
    
        <div class="container text-center mb-5 p-3">
            <h5 style={{display:'flex', fontWeight:'bold', marginBottom:'15px'}}>منتجات  اخري</h5>
            
          <ProductCard />
        </div>
        </>;
}
export default CartCreditCard;