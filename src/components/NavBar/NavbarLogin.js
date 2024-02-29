import React, { useState } from 'react';
import './NavBlue.css'
import locat from '../../images/location.png'
import logo from '../../images/logo.png'
import userIcon from '../../images/userIcon.png'
import notIcon from '../../images/notIcon.png'
import cartIcon from '../../images/cartIcon.png'
import orderIcon from '../../images/orderIcon.png'
import { Button, Card, Col, Container, Form, Modal, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import favo from '../../images/favo.png'
import sale from '../../images/sale.png'
import deleteIcon from '../../images/deleteIcon.png'
import img1 from '../../images/addIcon.png'
import img2 from '../../images/minusIcon.png'
import offer from '../../images/off.png'
import fav from '../../images/fav.png'
import prod2 from '../../images/prod2.png'
import prod3 from '../../images/prod3.png'
import prod8 from '../../images/prod8.png'
import prod1 from '../../images/prod1.png'
import prod5 from '../../images/prod5.png'
import prod4 from '../../images/prod4.png'
import black from '../../images/black.png'
import ArrowImg from '../../images/ARROW.png'
import profileIcon from '../../images/profileIcon.png'
import favIcon from '../../images/favIcon.png'
import outIcon from '../../images/outIcon.png'
import addressIcon from '../../images/addressIcon.png'

const NavbarLogin = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    return <>
    <div className="bg-body-tertiary">

        <Container   >
        <Row>
        <Col >
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
            <Navbar.Brand href="/">  <img src={logo} style={{width:'100px'}} />   </Navbar.Brand>
            <Navbar.Toggle  />
            <Navbar.Collapse >
            <Nav
                className="me-2 my-2 my-lg-0"
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
            
            
            <div  className='textLocat'  style={{marginLeft:'-10px', marginTop:'15px'}}>
            <p style={{border:' 2px solid #7EA91A61', width:'245px', borderRadius:'20px', background:'#7EA91A33', padding:'2px 10px', fontSize:'13px'}} >  

    توصيل الي <span style={{color:'#7EA91A'}} >22، ميدان الجزائر، المعادي</span>       </p>
            </div>
            
  <Link to='/home-page-factory' style={{textDecoration:'none'}}>

        <div className='factroyButton'  style={{marginTop:'9px', marginRight:'5px'}}>
        <button style={{border:'2px solid #FFFFFF', color:'#FFFFFF', background:'linear-gradient(266.85deg, #7EA91A 2.11%, #AEDC44 98.8%)', borderRadius:'50px',
        padding:'5px 20px', fontWeight:'bold'}}>   المصانع </button>
        </div>
    </Link>
 

      
        <div style={{marginTop:'10px', display:'flex', gap:'5px'}} className='icons'>

        <Link to='/current-order-store' style={{textDecoration:'none'}}>
          <div style={{borderRadius:'8px', background:'#FFFFFF', width:'40px', height:'40px'}}><img src={orderIcon} /></div>

          <div style={{display:'flex'}}><p style={{marginTop:'-45px', position:'absolute', borderRadius:'50px',marginRight:'-10px'
           , padding:'2px 7px' , fontSize:'10px', color:'#FFFFFF', background:'linear-gradient(180deg, #FF0000 0%, #F38118 100%)'}}>2</p></div>
       </Link>
         
        <div>
        <div  onClick={handleShow}
                style={{borderRadius:'8px', background:'#FFFFFF', width:'40px', height:'40px', cursor:'pointer'}}><img src={cartIcon} width="30px" height='30px' style={{marginTop:'5px'}}/></div>
            <div style={{display:'flex'}}><p style={{marginTop:'-45px', position:'absolute', borderRadius:'50px',marginRight:'-10px'
                , padding:'2px 7px' , fontSize:'10px', color:'#FFFFFF', background:'linear-gradient(180deg, #FF0000 0%, #F38118 100%)'}}>1</p></div>
        </div>
          
          

          <Link to='/notifications' style={{textDecoration:'none'}}>
          <div style={{borderRadius:'8px', background:'#FFFFFF', width:'40px', height:'40px'}}><img src={notIcon} width="30px" height='30px' /></div>
          <div style={{display:'flex'}}><p style={{marginTop:'-45px', position:'absolute', borderRadius:'50px',marginRight:'-10px'
           , padding:'2px 7px' , fontSize:'10px', color:'#FFFFFF', background:'linear-gradient(180deg, #FF0000 0%, #F38118 100%)'}}>2</p></div>
          </Link>

          <NavDropdown title={ <div style={{borderRadius:'8px', background:'#FFFFFF', width:'40px', height:'40px'}}><img src={userIcon} style={{marginTop:'5px'}} /></div>} className='pp'    >
            <NavDropdown.Item  style={{display:'flex', gap:'5px'}}  href='/personal-information'>  <div><img src={profileIcon}  /></div>  الملف الشخصي       </NavDropdown.Item>
            <NavDropdown.Item style={{display:'flex', gap:'5px'}}   href='/favorites-products' >  <div><img src={favIcon}  /></div> المفضله     </NavDropdown.Item>
            <NavDropdown.Item style={{display:'flex', gap:'5px'}}   href='/address' >  <div><img src={addressIcon}  /></div> العناوين     </NavDropdown.Item>
            <NavDropdown.Item style={{display:'flex', gap:'5px'}}   href='/' >  <div><img src={outIcon}  /></div> تسجيل الخروج     </NavDropdown.Item>
         
          </NavDropdown> 

          {/* <Link to='' style={{textDecoration:'none'}}>
          <div style={{borderRadius:'8px', background:'#FFFFFF', width:'40px', height:'40px'}}><img src={userIcon} style={{marginTop:'5px'}} /></div>
           </Link> */}
         
        </div>
    

        <Modal show={show} onHide={handleClose}>
       
        <Modal.Body>  <div style={{background:'#FFFFFF' , borderRadius:'20px', padding:'8px 20px'}}>
         
         <p style={{color:'#220E5F', fontWeight:'bold', fontSize:'25px'}}> عربه التسوق</p>
         <div style={{display:'flex', justifyContent:'space-between'}}>
             <div style={{color:'#220E5F', fontWeight:'bold', fontSize:'18px'}}> المنتجات: 3 </div>
             <div style={{display:'flex', gap:'12px'}}>
                <p style={{color:'#7EA91A',fontSize:'15px', fontWeight:'500'}}> تحديد الكل</p>
                <p style={{color:'#7A808A',fontSize:'15px', fontWeight:'500'}}>  حذف الكل</p>
             </div>
         </div>

         <div >
        

<div style={{display:'flex', gap:'5px'}}>
<Form.Check aria-label="option 1" style={{display:'flex'}} />

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
       <div style={{display:'flex', marginRight:'-70px', gap:'8px', marginTop:'-25px'}}>
       <div><img src={favo} style={{width:'34px'}}/></div>
         <div><img src={deleteIcon}/></div>
        
       </div>


  
   
      </div>
         
         </div>


         </div>


        <div style={{display:'flex', flexDirection:'column'}}>
        <div><img src={offer} style={{marginLeft:'20px', width:'34px'}} /></div>

        <div style={{display:'flex', gap:'15px'}}>  
            <div style={{display:'flex', flexDirection:'column', marginTop:'55px', marginLeft:'14px'}}>
<div style={{color:'#7A808A', fontSize:'13px'}}>الكميه : بالقطعه</div>
<div style={{display:'flex', justifyContent:'center', gap:'10px', marginTop:'8px'}}> 
<div><img src={img1} width='25px' /></div>
              <h4> 1 </h4>

              <div><img src={img2} width='25px' /></div>
</div>
        

            </div>
             

    
             
             </div>

        </div>


       </div>
</div>



<div style={{display:'flex'}}>


       <Form.Check aria-label="option 1" style={{display:'flex'}} />
       <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , 
       width:'auto', background:'#FFFFFF', marginTop:'15px', marginBottom:'10px'}}>




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
<div style={{display:'flex', marginRight:'-70px', gap:'8px', marginTop:'-25px'}}>
<div><img src={favo} style={{width:'34px'}}/></div>
<div><img src={deleteIcon}/></div>

</div>



</div>

</div>


</div>


<div style={{display:'flex', flexDirection:'column'}}>
<div><img src={offer} style={{marginLeft:'20px', width:'34px'}} /></div>

<div style={{display:'flex', gap:'15px'}}>  
  <div style={{display:'flex', flexDirection:'column', marginTop:'55px', marginLeft:'14px'}}>
<div style={{color:'#7A808A' , fontSize:'13px'}}>الكميه : بالشوال</div>
<div style={{display:'flex', justifyContent:'center', gap:'10px', marginTop:'8px'}}> 
<div><img src={img1} width='25px' /></div>
    <h4> 1 </h4>

    <div><img src={img2} width='25px' /></div>
</div>


  </div>
   


   </div>

</div>


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

<Link to='/cart-checkout' style={{textDecoration:'none'}}>
<div  className='d-flex mt-3  ' style={{borderRadius:'30px', justifyContent:'center' }} >
           <div style={{ color:' rgba(255, 255, 255, 1)' , fontWeight:'700' , fontSize :'20px' , border:'none'
            , paddingTop:'10px', display:'flex', justifyContent:'center', cursor:'pointer', position:'absolute', 
            marginTop:'-85px', marginRight:'95px', marginRight:'150px' }} 
           className='profileButton2'  > 
          
          الذهاب للدفع <div>  <img src={ArrowImg} style={{paddingRight:'5px'}}/>  </div> </div>
          
    </div>
</Link>




       
    </div>


        </div></Modal.Body>
      
      </Modal>


        </div>

        
            </Navbar.Collapse>
        </Container>
    </Navbar>

    
</Col>

</Row>

   
</Container>
</div>

    </>;
}



export default NavbarLogin;