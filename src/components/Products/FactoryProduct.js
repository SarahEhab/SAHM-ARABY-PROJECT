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
import profileFac from '../../images/ProfileFa2.png'
import cart from '../../images/cart.png'
import countt from '../../images/count.png'
import img1 from '../../images/addIcon.png'
import img2 from '../../images/minusIcon.png'
import wear from '../../images/wear.png'
import wear1 from '../../images/wear1.png'
import wear2 from '../../images/wear2.png'
import wear5 from '../../images/wear5.png'
import colors from '../../images/colors.png'
import 'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from "react-image-gallery";
import confirmImg from '../../images/confirmImg.png'
import { Link } from 'react-router-dom';
import prod8 from '../../images/prod8.png'
import black from '../../images/black.png'
import favo from '../../images/favo.png'
import sale from '../../images/sale.png'
import check from '../../images/check.png'
import ArrowImg from '../../images/ARROW.png'
import deleteIcon from '../../images/deleteIcon.png'
import icon from '../../images/icon.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import IconChat from '../../images/iconchat1.png'
import IconChat2 from '../../images/iconchat2.png'
import sendImg from '../../images/sendImg.png'
import codeIcon from '../../images/codeIcon.png'
import NavbarLogin from '../NavBar/NavbarLogin';
const FactoryProduct = () => {

  const [showPrice, setShowPrice] = useState(false);

  const handleClosePrice = () => setShowPrice(false);
  const handleShowPrice = () => setShowPrice(true);

  const [smShow, setSmShow] = useState(false);


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showw, setShoww] = useState(false);

  const handleClosee = () => setShoww(false);
  const handleShoww = () => setShoww(true);

  const [showww, setShowww] = useState(false);

  const handleCloseee = () => setShowww(false);
  const handleShowww = () => setShowww(true);

  const [showwww, setShowwww] = useState(false);

  const handleCloseeee = () => setShowwww(false);
  const handleShowwww = () => setShowwww(true);


  const [showChat, setShowChat] = useState(false);

  const handleCloseChat = () => setShowChat(false);
  const handleShowChat = () => setShowChat(true);


    const images = [
        {
          original: `${wear}`,
          thumbnail: `${wear1}`,
        },
        {
          original: `${wear}`,
          thumbnail: `${wear2}`,
        },
        {
          original: `${wear}`,
          thumbnail: `${wear5}`,
        },
        {
          original: `${wear}`,
          thumbnail: `${wear1}`,
        },
        
      ];

    return <>

<NavBarBlue />

<NavbarLogin />


<Container>
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

      <p style={{color:'#220E5F' , fontWeight:'bold', fontSize:'24px', width:'261px', textAlign:'start'}}>  سويت شيرت بغطاء للرأس وسوستة
مزين برسومات </p>
        
        <div style={{display:'flex'}}>
          <div><img src={star}/></div>
          <p style={{color:'#7A808A', fontSize:'18px', marginRight:'5px', marginBottom:'5px'}}>4.5</p>
        </div>

        <div style={{marginTop:'10px', display:'flex', gap:'15px'}}>
       

        <div style={{display:'flex'}}>
          <div style={{border:'1.5px solid #ECECEC', borderRadius:'10PX', padding:'0px 15px'}}> 
          <p> 3000 جنيه</p>  
          <p style={{marginTop:'-10px'}}>50-30 قطعة</p>
           </div>
         
        </div>

        <div style={{display:'flex'}}>
          <div style={{border:'1.5px solid #ECECEC', borderRadius:'10PX', padding:'0px 15px'}}> 
          <p> 3000 جنيه</p>  
          <p style={{marginTop:'-10px'}}>50-30 قطعة</p>
           </div>
         
        </div>

        <div style={{display:'flex'}}>
          <div style={{border:'1.5px solid #ECECEC', borderRadius:'10PX', padding:'0px 15px'}}> 
          <p> 3000 جنيه</p>  
          <p style={{marginTop:'-10px'}}>50-30 قطعة</p>
           </div>
         
        </div>

      </div>


     


        <div style={{display:'flex'}}>
        
          <p style={{color:'#E51937', fontSize:'26px', fontWeight:'bold'}}>500 جنيه</p>
          <p style={{color:'#7A808A', fontSize:'22px', paddingTop:'7px',marginRight:'10px'}}>  <del> 500 جنيه </del> </p>
          
          <div>
          <p  onClick={handleShowPrice} style={{background:'linear-gradient(269.61deg, #FF0000 1.05%, #F38118 99.03%)'
          , borderRadius:'15px', color:'#FFFFFF', fontSize:'15px', padding:'3px 10px', marginRight:'10px', marginTop:'10px', cursor:'pointer'}}> 
            التفاوض علي السعر   </p>
          </div>
         
        </div>

        <Modal show={showPrice} onHide={handleClosePrice}>
       
        <Modal.Body  style={{backgroundColor:' rgb(237, 234, 234)', borderRadius:'15px'}}>
    

  
        <div style={{ padding:'30px', background:'#F4F5F7', borderRadius:'20px 20px 0px 0px', height:'80%'}}>
      

        <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , 
       width:'auto', background:'#FFFFFF'}}>

  <div style={{display:'flex' , justifyContent:'center' }}  >
  <img src={prod8} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px', width:'79px', height:'90px'}} />


<div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'5px' }} >
  <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   سويت شيرت بغطاء للرأس
وسوستة مزين برسومات</p>

<div style={{display:'flex'}}>
<p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-15px', width:'70px'}}> 200 جنيه  </p>
<p style={{color:'#7A808A', fontSize:'18px',marginRight:'10px', marginTop:'-15px'}}>  <del> 500 جنيه </del> </p>
</div>

<div style={{border:'1.56px solid #E7E7E7', marginTop:'-15px'}}></div>

<div style={{}}>
<p onClick={handleShowChat} style={{fontSize:'13px', color:'#039CED',display:'flex', justifyContent:'center', fontWeight:'500', cursor:'pointer'}}> 
عند الموافقة على طلب التفاوض سيتم اظهار كود الخصم </p>
<div>

{/* <div style={{marginTop:'-12px', marginLeft:'10px', display:'flex', justifyContent:'center'}}>
<p style={{background:'rgb(3 156 237 / 13%)'
, color:'#039CED', borderRadius:'12px', padding:'2px 15px',border: "2px solid #039CED4D" }}> 
<img src={codeIcon} alt=''  style={{marginTop:'-3px',marginLeft:'3px'}}/>
              Mq15ytd    </p> 
</div> */}

</div>              
</div>
</div>


</div>


        </div>

       
        <Modal show={showChat} onHide={handleCloseChat}>
      
        <Modal.Body  style={{backgroundColor:' rgb(237, 234, 234)', borderRadius:'15px'}}>
    

  
        <div style={{ padding:'30px', background:'#F4F5F7', borderRadius:'20px 20px 0px 0px', height:'80%'}}>
      

        <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , 
       width:'auto', background:'#FFFFFF'}}>

  <div style={{display:'flex' , justifyContent:'center' }}  >
  <img src={prod8} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px', width:'79px', height:'90px'}} />


<div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'5px' }} >
  <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   سويت شيرت بغطاء للرأس
وسوستة مزين برسومات</p>

<div style={{display:'flex'}}>
<p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-15px', width:'70px'}}> 200 جنيه  </p>
<p style={{color:'#7A808A', fontSize:'18px',marginRight:'10px', marginTop:'-15px'}}>  <del> 500 جنيه </del> </p>
</div>

<div style={{border:'1.56px solid #E7E7E7', marginTop:'-15px'}}></div>

<div style={{}}>
<p style={{fontSize:'13px', color:'#039CED',display:'flex', justifyContent:'center', 
fontWeight:'500'}}> 
عند الموافقة على طلب التفاوض سيتم اظهار كود الخصم </p>
<div>

<div style={{marginTop:'-12px', marginLeft:'10px', display:'flex', justifyContent:'center'}}>
<p style={{background:'rgb(3 156 237 / 13%)'
, color:'#039CED', borderRadius:'12px', padding:'2px 15px',border: "2px solid #039CED4D" }}> 
<img src={codeIcon} alt=''  style={{marginTop:'-3px',marginLeft:'3px'}}/>
              Mq15ytd    </p> 
</div>

</div>              
</div>
</div>


</div>


        </div>
           <div style={{display:'flex', justifyContent:'center'}}><p style={{color:'#888888', fontWeight:'bold', marginTop:'15px'}}> اليوم</p></div>
           <div>
             <div style={{display:'flex', justifyContent:'flex-end'}}>
                <p style={{width:'50%', background:'#7EA91A',
                boxShadow:' 0px 5px 7.800000190734863px 4px #7EA91A24', color:'#FFFFFF', 
                borderRadius:'10px 10px 10px 0px', fontSize:'14px', textAlign:'start', padding:'10px' }}>يرجى تخفيض سعر المنتج لشراء كميه كبيرة</p>
             </div>
           </div>


           <div>
             <div style={{display:'flex', justifyContent:'flex-start'}}>
                <p style={{width:'50%', background:'#FFFFFF',border:'1px solid #DBDBDB'
               , boxShadow:'0px 5px 7.800000190734863px 4px #7EA91A24', color:'#1A232B', 
                borderRadius:'10px 10px 10px 0px', fontSize:'14px', textAlign:'start', padding:'10px' }}> تم الموافقة علي طلبك وتم إنشاء كود خصم يمكنك استخدامه عند شراء المنتج  </p>
             </div>
           </div>
             
           <div>
            
           </div>
          

           </div>

          
           <div  style={{ padding:'20px 30px 20px 30px', background:'#FFFFFF', borderRadius:'0px 0px 20px 20px', boxShadow:' 0px -4px 14px 0px #00000014',
          borderBottom:'1px solid #D1D1D1' }}>

            <div style={{display:'flex', gap:'7px'}}>

            <Col sm={10}>
            <div>
                                <input
                                    type="search"
                                    placeholder='اكتب رسالتك ..'
                                
                                    aria-label="Search"
                                    style={{width:'100%', border:'2px solid rgb(221 216 216)',padding:'10px 20px', borderRadius:'5px', outline:'none'
                                    , background:'linear-gradient(0deg, #E3E3E3, #E3E3E3),linear-gradient(0deg, #F5F5F5, #F5F5F5)'}}
                                  
                                    />
                                    <div style={{display:'flex', justifyContent:'flex-end', marginTop:'-40px', gap:'10px', paddingLeft:'15px'}}>
                                        <div style={{}}><img src={IconChat} alt=''  style={{}}/></div>
                                        <div style={{}} ><img src={IconChat2} alt=''  style={{}}/></div>
                                    </div>
                                    
                        </div>
            </Col>

            <Col sm={2}>
            <div><img src={sendImg} /></div>
            </Col>
                        

            </div>
          
           </div>
        </Modal.Body>
      
      </Modal>








           <div style={{display:'flex', justifyContent:'center'}}><p style={{color:'#888888', fontWeight:'bold', marginTop:'15px'}}> اليوم</p></div>
           <div>
             <div style={{display:'flex', justifyContent:'flex-end'}}>
                <p style={{width:'50%', background:'#7EA91A',
                boxShadow:' 0px 5px 7.800000190734863px 4px #7EA91A24', color:'#FFFFFF', 
                borderRadius:'10px 10px 10px 0px', fontSize:'14px', textAlign:'start', padding:'10px' }}>يرجى تخفيض سعر المنتج لشراء كميه كبيرة</p>
             </div>
           </div>


           <div>
             <div style={{display:'flex', justifyContent:'flex-start'}}>
                <p style={{width:'50%', background:'#FFFFFF',border:'1px solid #DBDBDB'
               , boxShadow:'0px 5px 7.800000190734863px 4px #7EA91A24', color:'#1A232B', 
                borderRadius:'10px 10px 10px 0px', fontSize:'14px', textAlign:'start', padding:'10px' }}> تم الموافقة علي طلبك وتم إنشاء كود خصم يمكنك استخدامه عند شراء المنتج  </p>
             </div>
           </div>
             
           <div>
            
           </div>
          

           </div>

          
           <div  style={{ padding:'20px 30px 20px 30px', background:'#FFFFFF', borderRadius:'0px 0px 20px 20px', boxShadow:' 0px -4px 14px 0px #00000014',
          borderBottom:'1px solid #D1D1D1' }}>

            <div style={{display:'flex', gap:'7px'}}>

            <Col sm={10}>
            <div>
                                <input
                                    type="search"
                                    placeholder='اكتب رسالتك ..'
                                
                                    aria-label="Search"
                                    style={{width:'100%', border:'2px solid rgb(221 216 216)',padding:'10px 20px', borderRadius:'5px', outline:'none'
                                    , background:'linear-gradient(0deg, #E3E3E3, #E3E3E3),linear-gradient(0deg, #F5F5F5, #F5F5F5)'}}
                                  
                                    />
                                    <div style={{display:'flex', justifyContent:'flex-end', marginTop:'-40px', gap:'10px', paddingLeft:'15px'}}>
                                        <div style={{}}><img src={IconChat} alt=''  style={{}}/></div>
                                        <div style={{}} ><img src={IconChat2} alt=''  style={{}}/></div>
                                    </div>
                                    
                        </div>
            </Col>

            <Col sm={2}>
            <div><img src={sendImg} /></div>
            </Col>
                        

            </div>
          
           </div>
        </Modal.Body>
       
      </Modal>





        <div><p style={{textAlign:'start', color:'#585858'}}>
        جاكيت قطن , سحاب وغطاء للرأس , للجنسين (للرجال والنساء) , الخامة: قطن ليكرا , المقاس: من S إلى 2XL
        </p></div>

        <div style={{display:'flex'}}>
        
         <div  style={{display:'flex'}} >
          <div><img style={{ background:'#039CED1A', borderRadius:'5px', padding:'3px'}} src={cart} /></div>
          <p style={{color:'#039CED', marginRight:'5px'}}>  عدد الشراء: 35 </p>
         </div>

       <div style={{border:'1.5px solid #D7D7D7' , height:'25px', marginRight:'7px'}}></div>

         <div style={{display:'flex', marginRight:'5px'}}>
          <div><img  style={{ background:'#039CED1A', borderRadius:'5px', padding:'3px'}}  src={countt} /></div>
          <p style={{color:'#039CED', marginRight:'5px'}}>  الكمية: بالشوال</p>
         </div>

         <div style={{marginTop:'-10px'}}>
          <p className='greenImg'
          style={{ color:'#FFFFFF', fontSize:'12px', marginRight:'10px', marginTop:'10px', padding:'2px 5px'}}>   الحد الادنى: 30 قطعة  </p>
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
        <p style={{color:'#220E5F', fontSize:'18px', fontWeight:'bold', textAlign:'start'}}>المقاس</p>

        <div style={{display:'flex', gap:'15px'}}>
          <div style={{border:'1.5px solid #ECECEC', borderRadius:'10PX', padding:'7px 12px'}}>  S</div>
          <div style={{border:'1.5px solid #ECECEC', borderRadius:'10PX' , padding:'7px 12px' }}>  M </div>
          <div style={{border:'1.5px solid #ECECEC', borderRadius:'10PX', padding:'7px 12px'}}>  L</div>
          <div style={{border:'1.5px solid #ECECEC', borderRadius:'10PX' , padding:'7px 12px' }}>  XL </div>
          <div style={{border:'1.5px solid #ECECEC', borderRadius:'10PX', padding:'7px 12px'}}>  XXL</div>
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

     <div style={{marginTop:'10px'}} onClick={handleShow} >
        <p style={{background:'linear-gradient(266.85deg, #7EA91A 2.11%, #AEDC44 98.8%),linear-gradient(0deg, rgba(126, 169, 26, 0.58), rgba(126, 169, 26, 0.58))', border:'1.5px solid #7EA91A94'
          , borderRadius:'10px', color:'#FFFFFF', fontSize:'17px', padding:'10px 10px', marginRight:'10px', marginTop:'10px',fontWeight:'bold', width:'70%', cursor:'pointer'}}  > 
           الحصول علي عينه الان  </p>
     </div>


     <Modal
       show={show} onHide={handleClose} >
        
      <Modal.Body  style={{backgroundColor:' rgb(237, 234, 234)', borderRadius:'15px'}}  >
        <div >
          <div style={{display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center' , margin:'15px'}}  >
            <p style={{color:'#220E5F', fontWeight:'bold', fontSize:'25px'}}> عينات مختلفه </p>
        
<div style={{display:'flex', marginTop:'-20px'}}>
<div style={{position:'relative', marginLeft:'-45px', marginTop:'6px'}}>
    <img  className='locatPic' src={locat} style={{marginLeft:'35px', width:'30px', marginTop:'5px'}}/>
    </div>
            <div  className='textLocat'  style={{marginLeft:'-10px', marginTop:'15px'}}>
            <p style={{border:' 2px solid #7EA91A61', width:'300px', borderRadius:'20px', background:'#7EA91A33', padding:'2px 10px', fontSize:'13px'}} >  

    توصيل الي <span style={{color:'#7EA91A'}} >22، ميدان الجزائر، المعادي</span>       </p>
            </div>

          

</div>
           

            
        </div>

<div style={{border:'1.64px solid rgb(255 255 255 / 47%)', marginTop:'-15px'}}></div>


        <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , 
       width:'auto', background:'#FFFFFF', marginTop:'15px'}}>

<div style={{display:'flex' , justifyContent:'center' }}  >
  <img src={prod8} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px', width:'79px', height:'90px'}} />


<div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
  <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   سويت شيرت بغطاء للرأس
وسوستة مزين برسومات</p>
<p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-15px', width:'70px'}}> 200 جنيه  </p>

<div style={{display:'flex', marginTop:'10px'}}>
<p> اللون :</p>
<div><img src={black} /></div>
</div>

<div style={{color:'#585858', display:'flex', marginTop:'-15px'}}> المقاس: M</div>

<div style={{display:'flex', justifyContent:'space-between', marginTop:'3px'}} >
<div style={{display:'flex', marginRight:'-70px', gap:'8px'}}>
<div><img src={favo} style={{width:'34px'}}/></div>
<div><img src={deleteIcon}/></div>

</div>
</div>

</div>


</div>


<div style={{display:'flex', flexDirection:'column'}}>


<div style={{display:'flex', gap:'15px'}}>  
  <div style={{display:'flex', flexDirection:'column', marginTop:'55px', marginLeft:'14px'}}>
<div style={{color:'#E51937', fontSize:'12px', fontWeight:'500'}}>الحد الاقصي : 3قطع </div>
<div style={{display:'flex', justifyContent:'center', gap:'10px', marginTop:'8px'}}> 
<div><img src={img1} /></div>
    <h4> 1 </h4>

    <div><img src={img2} /></div>
</div>


  </div>
   


   </div>

</div>


</div>

<div style={{marginTop:'25px', padding:'2px 15px'}}>
    <div style={{display:'flex', justifyContent:'space-between', fontWeight:'500'}} >
        <p style={{color:'#220E5F'}}>  قيمة المنتجات</p>
        <p style={{color:'#717171'}} > 12.800 جنيه</p>
    </div>

    <div style={{display:'flex', justifyContent:'space-between', marginTop:'-10px', fontWeight:'500'}} >
        <p style={{color:'#220E5F'}} >  قيمة التوصيل</p>
        <p style={{color:'#717171'}}> 50 جنيه</p>
    </div>

    <div style={{display:'flex', justifyContent:'space-between', marginTop:'-10px', fontWeight:'500'}} >
        <p style={{color:'#220E5F'}} >  الضربيه المضافه</p>
        <p style={{color:'#717171'}} > 50 جنيه</p>
    </div>

    
</div>

<div style={{background:'#FFFFFF', border: "1.83px solid #ECECEC", borderRadius:'15px', width:'78%', marginRight:'25px'}}>
  
  <div style={{display:'flex',justifyContent:"space-between"}}>
      <div style={{margin:'10px 10px 2px 10px'}}>
        <p style={{color:'#220E5F', fontWeight:'bold'}} >  الاجمالي</p>
        <p style={{color:'#E51937', fontWeight:'bold', marginTop:'-15px'}}>   12.800 جنيه</p>
      </div>
  </div>
</div>

<Modal show={showw} onHide={handleClosee}>

        <Modal.Body  style={{backgroundColor:' rgb(237, 234, 234)', borderRadius:'15px'}} >
      <div>
      <div style={{display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center' , margin:'15px'}}  >
            <p style={{color:'#220E5F', fontWeight:'bold', fontSize:'25px'}}> عينات مختلفه </p>
        
<div style={{display:'flex', marginTop:'-20px'}}>
<div style={{position:'relative', marginLeft:'-45px', marginTop:'6px'}}>
    <img  className='locatPic' src={locat} style={{marginLeft:'35px', width:'30px', marginTop:'5px'}}/>
    </div>
            <div  className='textLocat'  style={{marginLeft:'-10px', marginTop:'15px'}}>
            <p style={{border:' 2px solid #7EA91A61', width:'300px', borderRadius:'20px', background:'#7EA91A33', padding:'2px 10px', fontSize:'13px'}} >  

    توصيل الي <span style={{color:'#7EA91A'}} >22، ميدان الجزائر، المعادي</span>       </p>
            </div>

          

</div>
           

            
        </div>
        
        <div style={{border:'1.64px solid rgb(255 255 255 / 47%)', marginTop:'-15px'}}></div>

  <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , 
       width:'auto', background:'#FFFFFF', marginTop:'15px'}}>

  <div style={{display:'flex' , justifyContent:'center' }}  >
  <img src={prod8} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px', width:'79px', height:'90px'}} />


<div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
  <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   سويت شيرت بغطاء للرأس
وسوستة مزين برسومات</p>
<p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-15px', width:'70px'}}> 200 جنيه  </p>

<div style={{display:'flex', marginTop:'10px'}}>
<p> اللون :</p>
<div><img src={black} /></div>
</div>

<div style={{display:'flex', justifyContent:'space-between'}}>
  <div style={{color:'#585858', marginTop:'-15px'}}> المقاس: M</div>
  <div style={{marginTop:'-15px', color:'#585858'}}> الكميه : 2</div>

</div>

</div>


</div>


</div>

<div style={{fontWeight:'bold', fontSize:'17px', color:'#220E5F', marginBottom:'8px', display:'flex', justifyContent:'center'}}> اختر طريقة الدفع  </div>

<div style={{display:'flex', gap:'10px', justifyContent:'center'}}>

<div style={{border:'2px solid #02E4D8' , borderRadius:'15px' , width:'100px' ,
background:'linear-gradient(89.51deg, rgb(2 228 216 / 0%) -0.41%, rgb(1 154 237 / 0%) 97.31%), linear-gradient(0deg, rgba(3, 156, 237, 0.05), rgba(3, 156, 237, 0.05))'}}>

<div style={{marginTop:'15px', padding:'1px 15px'}}>
 <img src={icon3} />
<p  style={{fontSize:'13px', color:'#220E5F', fontWeight:'bold', marginTop:'5px'}}>  عند الاستلام</p>
</div>

</div>

<Link to='/cart-credit-card' style={{textDecoration:'none', color:'#220E5F'}}>
<div style={{border:'2px solid #ECECEC' , borderRadius:'15px', background:'#FFFFFF'
}}>
<div style={{marginTop:'15px', padding:'1px 10px'}}>
<img src={icon} />
<p style={{fontSize:'13px', color:'#220E5F', fontWeight:'bold', marginTop:'5px'}} >    البطاقات الائتمانية </p>
</div>
</div>
</Link>


<Link to='/cart-electronic-wallet' style={{textDecoration:'none', color:'#220E5F'}}>
<div style={{border:'2px solid #ECECEC' , borderRadius:'15px' , background:'#FFFFFF'
}}>

<div style={{marginTop:'15px', padding:'1px 10px'}}>
<img src={icon2} />
<p style={{fontSize:'13px', color:'#220E5F', fontWeight:'bold', marginTop:'5px'}}>     المحافظ الإلكترونية </p>
</div>
</div>
</Link>

</div>

<div style={{marginTop:'25px', padding:'2px 15px'}}>
    <div style={{display:'flex', justifyContent:'space-between', fontWeight:'500'}} >
        <p style={{color:'#220E5F'}}>  قيمة المنتجات</p>
        <p style={{color:'#717171'}} > 12.800 جنيه</p>
    </div>

    <div style={{display:'flex', justifyContent:'space-between', marginTop:'-10px', fontWeight:'500'}} >
        <p style={{color:'#220E5F'}} >  قيمة التوصيل</p>
        <p style={{color:'#717171'}}> 50 جنيه</p>
    </div>

    <div style={{display:'flex', justifyContent:'space-between', marginTop:'-10px', fontWeight:'500'}} >
        <p style={{color:'#220E5F'}} >  الضربيه المضافه</p>
        <p style={{color:'#717171'}} > 50 جنيه</p>
    </div>

    
</div>


<div style={{background:'#FFFFFF', border: "1.83px solid #ECECEC", borderRadius:'15px', width:'78%', marginRight:'25px'}}>
  
  <div style={{display:'flex',justifyContent:"space-between"}}>
      <div style={{margin:'10px 10px 2px 10px'}}>
        <p style={{color:'#220E5F', fontWeight:'bold'}} >  الاجمالي</p>
        <p style={{color:'#E51937', fontWeight:'bold', marginTop:'-15px'}}>   12.800 جنيه</p>
      </div>
  </div>
</div>



<Modal show={showww} onHide={handleCloseee}>
       <div>
       <Modal.Body style={{backgroundColor:' rgb(237, 234, 234)', borderRadius:'15px'}} > 
       <div style={{display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center' , margin:'15px'}}  >
            <p style={{color:'#220E5F', fontWeight:'bold', fontSize:'25px'}}> عينات مختلفه </p>
        
<div style={{display:'flex', marginTop:'-20px'}}>
<div style={{position:'relative', marginLeft:'-45px', marginTop:'6px'}}>
    <img  className='locatPic' src={locat} style={{marginLeft:'35px', width:'30px', marginTop:'5px'}}/>
    </div>
            <div  className='textLocat'  style={{marginLeft:'-10px', marginTop:'15px'}}>
            <p style={{border:' 2px solid #7EA91A61', width:'300px', borderRadius:'20px', background:'#7EA91A33', padding:'2px 10px', fontSize:'13px'}} >  

    توصيل الي <span style={{color:'#7EA91A'}} >22، ميدان الجزائر، المعادي</span>       </p>
            </div>

          

</div>
           

            
        </div>
        
        <div style={{border:'1.64px solid rgb(255 255 255 / 47%)', marginTop:'-15px'}}></div>

        <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , 
       width:'auto', background:'#FFFFFF', marginTop:'15px'}}>

  <div style={{display:'flex' , justifyContent:'center' }}  >
  <img src={prod8} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px', width:'79px', height:'90px'}} />


<div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
  <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   سويت شيرت بغطاء للرأس
وسوستة مزين برسومات</p>
<p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-15px', width:'70px'}}> 200 جنيه  </p>

<div style={{display:'flex', marginTop:'10px'}}>
<p> اللون :</p>
<div><img src={black} /></div>
</div>

<div style={{display:'flex', justifyContent:'space-between'}}>
  <div style={{color:'#585858', marginTop:'-15px'}}> المقاس: M</div>
  <div style={{marginTop:'-15px', color:'#585858'}}> الكميه : 2</div>

</div>

</div>


</div>


        </div>

<div style={{fontWeight:'bold', fontSize:'17px', color:'#220E5F', marginBottom:'8px', display:'flex', justifyContent:'center'}}> اختر طريقة الدفع  </div>

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
  
         <div style={{padding:'2px 15px'}}>
    <div style={{display:'flex', justifyContent:'space-between', fontWeight:'500'}} >
        <p style={{color:'#220E5F'}}>  قيمة المنتجات</p>
        <p style={{color:'#717171'}} > 12.800 جنيه</p>
    </div>

    <div style={{display:'flex', justifyContent:'space-between', marginTop:'-10px', fontWeight:'500'}} >
        <p style={{color:'#220E5F'}} >  قيمة التوصيل</p>
        <p style={{color:'#717171'}}> 50 جنيه</p>
    </div>

    <div style={{display:'flex', justifyContent:'space-between', marginTop:'-10px', fontWeight:'500'}} >
        <p style={{color:'#220E5F'}} >  الضربيه المضافه</p>
        <p style={{color:'#717171'}} > 50 جنيه</p>
    </div>

    
</div>


<div style={{background:'#FFFFFF', border: "1.83px solid #ECECEC", borderRadius:'15px', width:'78%', marginRight:'25px'}}>
  
  <div style={{display:'flex',justifyContent:"space-between"}}>
      <div style={{margin:'10px 10px 2px 10px'}}>
        <p style={{color:'#220E5F', fontWeight:'bold'}} >  الاجمالي</p>
        <p style={{color:'#E51937', fontWeight:'bold', marginTop:'-15px'}}>   12.800 جنيه</p>
      </div>
  </div>
</div>

<div  className='d-flex mt-3  ' style={{borderRadius:'30px', justifyContent:'center' }} >
           <div style={{ color:' rgba(255, 255, 255, 1)' , fontWeight:'700' , fontSize :'20px' , border:'none'
            , paddingTop:'10px', display:'flex', justifyContent:'center', cursor:'pointer', position:'absolute', 
            marginTop:'-85px', marginRight:'95px', marginRight:'150px' }} 
           className='profileButton2' onClick={handleShowwww}  > 
          
          تاكيد الطلب<div>  <img src={check} style={{paddingRight:'5px'}}/>  </div> </div>
          
    </div>

       </Modal.Body>
      
       </div>
       
      </Modal>



      <Modal show={showwww} onHide={handleCloseeee}>
       <div>
        <Modal.Body  style={{backgroundColor:' rgb(237, 234, 234)', borderRadius:'15px'}} >
        <div style={{display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center' , margin:'15px'}}  >
            <p style={{color:'#220E5F', fontWeight:'bold', fontSize:'25px'}}> عينات مختلفه </p>
        
<div style={{display:'flex', marginTop:'-20px'}}>
<div style={{position:'relative', marginLeft:'-45px', marginTop:'6px'}}>
    <img  className='locatPic' src={locat} style={{marginLeft:'35px', width:'30px', marginTop:'5px'}}/>
    </div>
            <div  className='textLocat'  style={{marginLeft:'-10px', marginTop:'15px'}}>
            <p style={{border:' 2px solid #7EA91A61', width:'300px', borderRadius:'20px', background:'#7EA91A33', padding:'2px 10px', fontSize:'13px'}} >  

    توصيل الي <span style={{color:'#7EA91A'}} >22، ميدان الجزائر، المعادي</span>       </p>
            </div>

          

</div>
           

            
        </div>
        
        <div style={{border:'1.64px solid rgb(255 255 255 / 47%)', marginTop:'-15px'}}></div>

        <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , 
       width:'auto', background:'#FFFFFF', marginTop:'15px'}}>

  <div style={{display:'flex' , justifyContent:'center' }}  >
  <img src={prod8} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px', width:'79px', height:'90px'}} />


<div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
  <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   سويت شيرت بغطاء للرأس
وسوستة مزين برسومات</p>
<p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-15px', width:'70px'}}> 200 جنيه  </p>

<div style={{display:'flex', marginTop:'10px'}}>
<p> اللون :</p>
<div><img src={black} /></div>
</div>

<div style={{display:'flex', justifyContent:'space-between'}}>
  <div style={{color:'#585858', marginTop:'-15px'}}> المقاس: M</div>
  <div style={{marginTop:'-15px', color:'#585858'}}> الكميه : 2</div>

</div>

</div>


</div>


        </div>

        <div style={{fontWeight:'bold', fontSize:'17px', color:'#220E5F', marginBottom:'8px', display:'flex', justifyContent:'center'}}> اختر طريقة الدفع  </div>


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

<Link to='/cart-credit-card' style={{textDecoration:'none', color:'#220E5F'}}>
<div style={{border:'2px solid #ECECEC' , borderRadius:'15px', background:'#FFFFFF'
}}>
<div style={{marginTop:'15px', padding:'1px 10px'}}>
    <img src={icon} />
    <p style={{fontSize:'13px', color:'#220E5F', fontWeight:'bold', marginTop:'5px'}} >    البطاقات الائتمانية </p>
</div>
</div>
</Link>



<div style={{border:'2px solid #02E4D8' , borderRadius:'15px'  ,
background:'linear-gradient(89.51deg, rgb(2 228 216 / 0%) -0.41%, rgb(1 154 237 / 0%) 97.31%), linear-gradient(0deg, rgba(3, 156, 237, 0.05), rgba(3, 156, 237, 0.05))'}}>

<div style={{marginTop:'15px', padding:'1px 10px'}}>
<img src={icon2} />
    <p style={{fontSize:'13px', color:'#220E5F', fontWeight:'bold', marginTop:'5px'}}>     المحافظ الإلكترونية </p>
</div>
</div>


</div>
 <form class="form-floating mt-3 mb-3">
          <input type="text" class="form-control" id="floatingInputValue" placeholder="رقم  التحويل" value=" 123 456 789" 
           style={{borderRadius:'15px', color: "#585858" , paddingRight:'20px',border: "1px solid #7EA91A4F", background:'#8080802e'
            }}/>
          <label for="floatingInputValue" style={{color:'#7EA91A', fontWeight:'bold'}} >  رقم التحويل</label>
        </form>

        <div style={{padding:'2px 15px'}}>
    <div style={{display:'flex', justifyContent:'space-between', fontWeight:'500'}} >
        <p style={{color:'#220E5F'}}>  قيمة المنتجات</p>
        <p style={{color:'#717171'}} > 12.800 جنيه</p>
    </div>

    <div style={{display:'flex', justifyContent:'space-between', marginTop:'-10px', fontWeight:'500'}} >
        <p style={{color:'#220E5F'}} >  قيمة التوصيل</p>
        <p style={{color:'#717171'}}> 50 جنيه</p>
    </div>

    <div style={{display:'flex', justifyContent:'space-between', marginTop:'-10px', fontWeight:'500'}} >
        <p style={{color:'#220E5F'}} >  الضربيه المضافه</p>
        <p style={{color:'#717171'}} > 50 جنيه</p>
    </div>

    
</div>
 

<div style={{background:'#FFFFFF', border: "1.83px solid #ECECEC", borderRadius:'15px', width:'78%', marginRight:'25px'}}>
  
  <div style={{display:'flex',justifyContent:"space-between"}}>
      <div style={{margin:'10px 10px 2px 10px'}}>
        <p style={{color:'#220E5F', fontWeight:'bold'}} >  الاجمالي</p>
        <p style={{color:'#E51937', fontWeight:'bold', marginTop:'-15px'}}>   12.800 جنيه</p>
      </div>
  </div>
</div>
لللللللللللللللللللللللللل
<div  className='d-flex mt-3  ' style={{borderRadius:'30px', justifyContent:'center' }} >
           <div style={{ color:' rgba(255, 255, 255, 1)' , fontWeight:'700' , fontSize :'20px' , border:'none'
            , paddingTop:'10px', display:'flex', justifyContent:'center', cursor:'pointer', position:'absolute', 
            marginTop:'-85px', marginRight:'95px', marginRight:'150px' }} 
           className='profileButton2'  onClick={() => setSmShow(true)} > 
          
      تاكيد الطلب   <div>  <img src={check} style={{paddingRight:'5px'}}/>  </div> </div>
          
    </div>


        </Modal.Body>
       </div>
     
       
      </Modal>

      <Modal
        size="sm" show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"  >
        
      <Modal.Body  style={{backgroundColor:' #FFFFFFF' , borderRadius:'15px'}}  >
        <div >
          <div style={{display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center' , margin:'15px'}}  >
            <div>  <img src={confirmImg} style={{paddingBottom:'5px'}}   alt=''/></div>
        
            <h5 style={{color:'#220E5F'}} > تم تأكيد طلبك بنجاج </h5>
            <p style={{color:'#A4ACAD' , fontSize:'16px' , textAlign:'center'}}>
            يمكنك تتبع حالة طلبك من صفحة طلباتي
           </p>
        </div>

<Link to='/current-order-store' style={{textDecoration:'none'}}>
     <div  className='d-flex justify-content-center align-items-center' style={{borderRadius:'30px' }} >
           <button style={{ color:' rgba(255, 255, 255, 1)' , fontWeight:'700' , fontSize :'20px' , paddingTop:'2px'
            , border:'none'}} className='profileButton' >طلباتي </button>
        </div>
</Link>
      


      </div>
        </Modal.Body>
      </Modal>



<div  className='d-flex mt-3  ' style={{borderRadius:'30px', justifyContent:'center' }} >
           <div style={{ color:' rgba(255, 255, 255, 1)' , fontWeight:'700' , fontSize :'20px' , border:'none'
            , paddingTop:'10px', display:'flex', justifyContent:'center', cursor:'pointer', position:'absolute', 
            marginTop:'-85px', marginRight:'95px', marginRight:'150px' }} 
           className='profileButton2' onClick={handleShowww}  > 
          
          تاكيد الطلب<div>  <img src={check} style={{paddingRight:'5px'}}/>  </div> </div>
          
    </div>
      </div>
       

        </Modal.Body>
       
      </Modal>


 <div  className='d-flex mt-3  ' style={{borderRadius:'30px', justifyContent:'center' }} >
           <div style={{ color:' rgba(255, 255, 255, 1)' , fontWeight:'700' , fontSize :'20px' , border:'none'
            , paddingTop:'10px', display:'flex', justifyContent:'center', cursor:'pointer', position:'absolute', 
            marginTop:'-85px', marginRight:'95px', marginRight:'150px' }} 
           className='profileButton2' onClick={handleShoww}  > 
          
          الذهاب للدفع <div>  <img src={ArrowImg} style={{paddingRight:'5px'}}/>  </div> </div>
          
    </div>

      </div>
        </Modal.Body>
      </Modal>

     </div>
  
    </Col>

 


    <Col xs={12} md={6} xl={4} style={{marginBottom:'20px'}}>

      <div style={{background:'#F4F5F7', borderRadius:'22px', height:'140px', width:'350px'}}>
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
                           <h6 style={{color:'#220E5F', fontWeight:'bold', textAlign:'start'}} > مصنع النور </h6>
                           <p style={{color:'#A4ACAD', marginTop:'-5px'}}>عدد المنتجات: 125</p>
                         </div>
                      </div>

                    </div>

  <Link to='/factory-detailes' style={{textDecoration:'none'}}>

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
<div style={{border:'1.5px solid #D7D7D7' , marginBottom:'15px' }}></div>
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
                <li style={{color:'#585858', marginBottom:'5px',textAlign:'start'}}> كيبة المواد: 80% قطن، 20% بوليستر</li>
                <li style={{color:'#585858', marginBottom:'5px',textAlign:'start'}} >  تعليمات العناية: غسيل بالغسالة   </li>
                <li style={{color:'#585858', marginBottom:'5px',textAlign:'start'}} > نوع السحّاب: بالسحب   </li>
              
             
               </ul>
                </div>
              
            </div>
        </Col>
    </Row>
  </Container>

 










  <Container>
<div style={{border:'1.5px solid #D7D7D7' , marginBottom:'10px' }}></div>
</Container>
   <div class="container text-center mb-5 p-5">
    <h5 style={{display:'flex', fontWeight:'bold'}}>منتجات  اخري</h5>
    
    <div class="  row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 ">
  <div class="col">
 
  <Card style={{ width: '100%' , height:'100%'}}>
  <div style={{display:'flex'}}>
                <img src={offer} alt='' style={{marginRight:'10px'}} />
              </div>

              <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                <img src={fav} alt='' style={{}} />
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
                  <div><img src={star} alt=''  /></div>
                    
                    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                </div>
                <div style={{display:'flex', marginRight:'15px'}}>
                    <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
                   
                </div>
      </Card.Body>
    </Card>
    </div>
    <div class="col">
 
  <Card style={{ width: '100%', height:'100%' }}>
  <div style={{display:'flex'}}>
                <img src={offer} alt='' style={{marginRight:'10px'}} />
              </div>

              <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                <img src={fav} alt='' style={{}} />
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
                  <div><img src={star} alt=''  /></div>
                    
                    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                </div>
                <div style={{display:'flex', marginRight:'15px'}}>
                    <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
                   
                </div>
      </Card.Body>
    </Card>
    </div>
    <div class="col">
 
  <Card style={{ width: '100%', height:'100%' }}>
  <div style={{display:'flex'}}>
                <img src={offer} alt='' style={{marginRight:'10px'}} />
              </div>

              <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                <img src={fav} alt='' style={{}} />
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
                  <div><img src={star} alt=''  /></div>
                    
                    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                </div>
                <div style={{display:'flex', marginRight:'15px'}}>
                    <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
                   
                </div>
      </Card.Body>
    </Card>
    </div>

    <div class="col">
 
  <Card style={{ width: '100%', height:'100%' }}>
  <div style={{display:'flex'}}>
                <img src={offer} alt='' style={{marginRight:'10px'}} />
              </div>

              <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                <img src={fav} alt='' style={{}} />
              </div>
              
  <Card.Body>
  <img src={prod2} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
       
        <Card.Text>موبايل سامسونج جالاكسي بشريحتين اتصال
        </Card.Text>
        <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
                  <div><img src={star} alt=''  /></div>
                    
                    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                </div>
                <div style={{display:'flex', marginRight:'15px'}}>
                    <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 12.000 جنيه  </p>
                   
                </div>
      </Card.Body>
    </Card>
    </div>

   <div class="col">
 
  <Card style={{ width: '100%', height:'100%' }}>
  <div style={{display:'flex'}}>
                <img src={offer} alt='' style={{marginRight:'10px'}} />
              </div>

              <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                <img src={fav} alt='' style={{}} />
              </div>
              
  <Card.Body>
  <img src={prod4} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
       
        <Card.Text>سويت شيرت للرجال من اندورا
        </Card.Text>
        <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
                  <div><img src={star} alt=''  /></div>
                    
                    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                </div>
                <div style={{display:'flex', marginRight:'15px'}}>
                    <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 500 جنيه  </p>
                   
                </div>
      </Card.Body>
    </Card>
    </div>
    
    <div class="col">
 
  <Card style={{ width: '100%', height:'100%' }}>
  <div style={{display:'flex'}}>
                <img src={offer} alt='' style={{marginRight:'10px'}} />
              </div>

              <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                <img src={fav} alt='' style={{}} />
              </div>
              
  <Card.Body>
  <img src={prod3} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
       
        <Card.Text>
        مولفيكس حفاضات اطفال
بانتس عبوة ميجا 
        </Card.Text>
        <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
                  <div><img src={star} alt=''  /></div>
                    
                    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                </div>
                <div style={{display:'flex', marginRight:'15px'}}>
                    <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
                   
                </div>
      </Card.Body>
    </Card>
    </div>
  </div>

 

   </div>
    </>;
}


export default FactoryProduct;