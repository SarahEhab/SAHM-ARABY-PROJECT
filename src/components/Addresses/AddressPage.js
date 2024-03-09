import React, { useState } from 'react';
import NavBarBlue from '../NavBar/NavBarBlue';
import {  Col, Container, Form, Modal, Row } from 'react-bootstrap';
import addPic from '../../images/addPic.png'
import mapPic from '../../images/mapp.png'
import homeLocation from '../../images/home-locate.png'
import './address.css'
import NavbarLogin from './../NavBar/NavbarLogin';
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
const AddressPage = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return <>
    <NavBarBlue />
    <NavbarLogin />

    <Container>
      <Row>
       <Col>
           <div style={{marginTop:'15px'}}>
        <h3 style={{color: 'rgba(255, 255, 255, 1)' , fontWeight:'500' , paddingBottom :'20px', paddingTop:'10px' , borderRadius:'25px'}} className=" background-image">
          العناوين</h3>
           </div>
       </Col>
      </Row>
    </Container>

    <Container>
      <Row>
        <Col  style={{ marginBottom: '15px', display:'flex', justifyContent:'center', alignItems:'center', marginTop:'10px' }}>
           <div style={{border :' 1.5px solid #7EA91A61' , borderRadius:'23px' , width:'300px' , height:'33.74px' , 
              background:'rgb(126 169 26 / 21%)', display:'flex', justifyContent:'center'
                , alignItems:'center', gap:'10px' }} onClick={handleShow}   >

            <div>
              <img src={addPic} style={{marginTop:'-5px'}} />
            </div>

              <h6 style={{  color:'#7EA91A' , fontSize:'15px', marginTop:'5px' , cursor:'pointer'}}  >اضافة عنوان جديد  </h6>
            </div>

          <Modal show={show} onHide={handleClose} >

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
        </Col>
      </Row>
    </Container>

    <Container>
      <Row>
          <Col>  <div style={{marginLeft:'-55px', borderBottom:'2px solid #EEEEEE ', width:'100%' }}></div></Col>
      </Row>
    </Container>

     <Container>
      <Row>
        <Col style={{display:'flex', justifyContent:'center'}} >
        <div style={{ padding:'20px', height:'490px', borderRadius:'20px', width:'45%'}} className='card-info'>
          
          <div style={{background:'#FFFFFF', borderRadius:'18px',border:'2px solid #ECECEC', marginRight:'12px'  }}>
                        
             <div style={{display:'flex', justifyContent:'space-between'}}>  
               <div>
    
                <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginRight:'15px'}}>
                     <ImLocation2 style={{color:'rgb(71 129 255)', fontSize:'30px'}} />
                    
                     <div style={{marginRight:'10px', marginTop:'10px'}}>
                         <h6 style={{color:'#220E5F', fontWeight:'bold', textAlign:'start'}} >المنزل  </h6>
                          <p style={{color:'#585858', marginTop:'-5px', textAlign:'start'}}>  18، شارع النصر، قسم المعادي</p>
                      </div>
                 </div>
                </div>
    
                <div style={{marginTop:'17px', marginLeft:'10px'}}>
                <AiOutlineEdit  style={{
                                  paddingLeft: "10px",
                                  fontSize: "35px",
                                  color:'#7EA91A',
                                  padding: "5px",
                                  border:'1.07px solid #E1E1E1',
                                  background:'#F1F1F1',
                                  borderRadius:'25px', marginLeft:'10px'
                                }}/>
                 </div>         
              </div>
           </div>

          <div style={{background:'#FFFFFF', borderRadius:'18px',border:'2px solid #ECECEC', marginRight:'12px', marginTop:'15px'  }}>                        
             <div style={{display:'flex', justifyContent:'space-between'}}>  
                <div>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginRight:'15px'}}>
                          <ImLocation2 style={{color:'rgb(71 129 255)', fontSize:'30px'}} />
                          <div style={{marginRight:'10px', marginTop:'10px'}}>
                               <h6 style={{color:'#220E5F', fontWeight:'bold', textAlign:'start'}} >العمل  </h6>
                                <p style={{color:'#585858', marginTop:'-5px', textAlign:'start'}}>  18، شارع النصر، قسم المعادي</p>
                           </div>
                     </div>
    
                 </div>
    
                 <div style={{marginTop:'17px', marginLeft:'10px', display:'flex'}}>
                             
                              <RiDeleteBin5Line
                                style={{
                                  paddingLeft: "10px",
                                  fontSize: "35px",
                                  color: "#7A808A",
                                  padding: "5px",
                                  border:'1.07px solid #E1E1E1',
                                  background:'#F1F1F1',
                                  borderRadius:'25px', marginLeft:'10px'
                                }}
                              />
                              <AiOutlineEdit  style={{
                                  paddingLeft: "10px",
                                  fontSize: "35px",
                                  color:'#7EA91A',
                                  padding: "5px",
                                  border:'1.07px solid #E1E1E1',
                                  background:'#F1F1F1',
                                  borderRadius:'25px', marginLeft:'10px'
                                }}/>
                            
                  </div>             
              </div>
    
    
          </div>

          <div style={{background:'#FFFFFF', borderRadius:'18px',border:'2px solid #ECECEC', marginRight:'12px', marginTop:'15px'  }}>                        
             <div style={{display:'flex', justifyContent:'space-between'}}>  
                <div>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginRight:'15px'}}>
                        <ImLocation2 style={{color:'rgb(71 129 255)', fontSize:'30px'}} />
                          <div style={{marginRight:'10px', marginTop:'10px'}}>
                               <h6 style={{color:'#220E5F', fontWeight:'bold', textAlign:'start'}} >العمل -2 </h6>
                                <p style={{color:'#585858', marginTop:'-5px', textAlign:'start'}}>  18، شارع النصر، قسم المعادي</p>
                           </div>
                     </div>
    
                 </div>
    
                 <div style={{marginTop:'17px', marginLeft:'10px', display:'flex'}}>
                           <RiDeleteBin5Line
                                style={{
                                  paddingLeft: "10px",
                                  fontSize: "35px",
                                  color: "gray",
                                  padding: "5px",
                                  border:'1.07px solid #E1E1E1',
                                  background:'#F1F1F1',
                                  borderRadius:'25px', marginLeft:'10px'
                                }}
                              />
                             <AiOutlineEdit  style={{
                                  paddingLeft: "10px",
                                  fontSize: "35px",
                                  color:'#7EA91A',
                                  padding: "5px",
                                  border:'1.07px solid #E1E1E1',
                                  background:'#F1F1F1',
                                  borderRadius:'25px', marginLeft:'10px'
                                }}/>
                  </div>             
              </div>
    
    
          </div>

          <div style={{background:'#FFFFFF', borderRadius:'18px',border:'2px solid #ECECEC', marginRight:'12px', marginTop:'15px'  }}>                        
             <div style={{display:'flex', justifyContent:'space-between'}}>  
                <div>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginRight:'15px'}}>
                         <ImLocation2 style={{color:'rgb(71 129 255)', fontSize:'30px'}} />
                          <div style={{marginRight:'10px', marginTop:'10px'}}>
                               <h6 style={{color:'#220E5F', fontWeight:'bold', textAlign:'start'}} >العمل -3 </h6>
                                <p style={{color:'#585858', marginTop:'-5px', textAlign:'start'}}>  18، شارع النصر، قسم المعادي</p>
                           </div>
                     </div>
    
                 </div>
    
                 <div style={{marginTop:'17px', marginLeft:'10px', display:'flex'}}>
                              <RiDeleteBin5Line
                                style={{
                                  paddingLeft: "10px",
                                  fontSize: "35px",
                                  color: "gray",
                                  padding: "5px",
                                  border:'1.07px solid #E1E1E1',
                                  background:'#F1F1F1',
                                  borderRadius:'25px', marginLeft:'10px'
                                }}
                              />
                             <AiOutlineEdit  style={{
                                  paddingLeft: "10px",
                                  fontSize: "35px",
                                  color:'#7EA91A',
                                  padding: "5px",
                                  border:'1.07px solid #E1E1E1',
                                  background:'#F1F1F1',
                                  borderRadius:'25px', marginLeft:'10px'
                                }}/>
                  </div>             
              </div>
    
    
          </div>
        
       
        
      </div>
        </Col>
      </Row>
    </Container>

    </>;
}
export default AddressPage;