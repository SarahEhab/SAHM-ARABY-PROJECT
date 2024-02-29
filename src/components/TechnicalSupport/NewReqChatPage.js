import React from 'react';
import './support.css'
import NavBarBlue from '../NavBar/NavBarBlue';
import { Button, Card, Col, Container, Form, FormControl, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import locat from '../../images/location.png'
import logo from '../../images/logo.png'
import suportIcon from '../../images/t-suport.png'
import ArrSupport from '../../images/arr-suport.png'
import { Link } from 'react-router-dom';
import IconChat from '../../images/iconchat1.png'
import IconChat2 from '../../images/iconchat2.png'
import sendImg from '../../images/sendImg.png'
import whiteSuport from '../../images/whiteSuport.png'
import NavbarLogin from '../NavBar/NavbarLogin';
const NewReqChatPage = () => {

    return <>
    <NavBarBlue />
    <NavbarLogin />

    <Container>
      <Row>
        <Col>
           <div style={{marginTop:'15px'}}>
          <h3 style={{color: 'rgba(255, 255, 255, 1)' , fontWeight:'500' , paddingBottom :'20px', paddingTop:'10px' , borderRadius:'25px'}} className=" background-image">
        الدعم الفني</h3>
          </div>
        </Col>
      </Row>
     </Container>

    <Container className='d-flex justify-content-center align-items-center' >
      <Row className="m-3">
        <Col xs="6" md="6" lg="6" style={{ textAlign: 'center', marginBottom: '10px' }}>
         <div style={{border :'none' , borderRadius:'12px' , width:'170px' , height:'33.74px' , 
            background:'linear-gradient(89.51deg, #02E4D8 -0.41%, #019AED 97.31%)' }}>
            <h6 style={{color:'#FFFFFF' , paddingTop:'4px'}}>طلب جديد </h6>
          </div>
        </Col>

        <Col xs="6" md="6" lg="6" style={{ textAlign: 'center', marginBottom: '10px' }}>

        <Link to='/previous-request-technical-support' style={{textDecoration:'none'}}>
        <div style={{border :'2px solid rgba(232, 232, 232, 1)' , borderRadius:'12px' , width:'170px' , height:'33.74px' , 
               background:'linear-gradient(0deg, #E8E8E8, #E8E8E8),linear-gradient(0deg, #F5F5F5, #F5F5F5)' }}>
                <h6 style={{  color:'rgba(5, 20, 39, 1)' , fontSize:'15px', marginTop:'5px'}}>السابقه  </h6>
            </div>
          
            <div style={{display:'flex', justifyContent:'flex-end'}}><p style={{marginTop:'-40px', position:'absolute', borderRadius:'50px',
            padding:'1px 7px' , fontSize:'13px', color:'#FFFFFF', background:'linear-gradient(0deg, #E51937, #E51937),linear-gradient(0deg, #FFFFFF, #FFFFFF)'}}>2</p></div>
        </Link>
       
        </Col>
      </Row>
     </Container>

    <Container>
        <Row>
            <Col>  <div style={{marginLeft:'-55px', marginBottom: '15px', borderBottom:'2px solid #EEEEEE ', width:'100%' }}></div></Col>
        </Row>
    </Container>

    <Container >
      <Row >
           <Col xs={12} md={5} >
           <div style={{marginBottom:'100px', marginTop:'10px'}}>

           <Link to='/new-request-technical-support' style={{textDecoration:'none'}}>
            <div className='d-flex justify-content-center align-items-center'>

            <div className='card-suport' style={{border:'2px solid #ECECEC', width:'100%',  background:'linear-gradient(89.51deg, #02E4D8 -0.41%, #019AED 97.31%)'
            ,borderRadius:'11px', padding:'12px 12px 1px 12px'}}>
                    <div style={{display:'flex', justifyContent:'space-between'}}>

                      <div style={{display:'flex',}}> 
                      <div><img src={whiteSuport} /></div>
                      <p style={{color:'#FFFFFF', fontSize:'17px', fontWeight:'500', paddingRight:'8px'}}> كيف يمكنني تتبع طلبي؟ </p>
                      </div>

                      <div><img src={ArrSupport} /></div>
                    </div>
                </div>
            </div>
          </Link>

          <div className='d-flex justify-content-center align-items-center mt-3'>

          <div className='card-suport' style={{border:'2px solid #ECECEC', width:'100%', borderRadius:'11px', padding:'12px 12px 1px 12px'}}>
          <div style={{display:'flex', justifyContent:'space-between'}}>

          <div style={{display:'flex',}}> 
          <div><img src={suportIcon} /></div>
          <p style={{color:'#220E5F', fontSize:'17px', fontWeight:'500', paddingRight:'8px'}}> كيف يمكنني الغاء طلبي؟</p>
          </div>

          <div><img src={ArrSupport} /></div>
          </div>
          </div>
          </div>

          <div className='d-flex justify-content-center align-items-center mt-3'>

          <div className='card-suport' style={{border:'2px solid #ECECEC', width:'100%', borderRadius:'11px', padding:'12px 12px 1px 12px'}}>
          <div style={{display:'flex', justifyContent:'space-between'}}>

          <div style={{display:'flex',}}> 
          <div><img src={suportIcon} /></div>
          <p style={{color:'#220E5F', fontSize:'17px', fontWeight:'500', paddingRight:'8px'}}> كيف يمكنني الدفع؟</p>
          </div>

          <div><img src={ArrSupport} /></div>
          </div>
          </div>
          </div>

          <div className='d-flex justify-content-center align-items-center mt-3'>

          <div className='card-suport' style={{border:'2px solid #ECECEC', width:'100%', borderRadius:'11px', padding:'12px 12px 1px 12px'}}>
          <div style={{display:'flex', justifyContent:'space-between'}}>

          <div style={{display:'flex',}}> 
          <div><img src={suportIcon} /></div>
          <p style={{color:'#220E5F', fontSize:'17px', fontWeight:'500', paddingRight:'8px'}}>كيف يمكنني اضافة عنوان جديد</p>
          </div>

          <div><img src={ArrSupport} /></div>
          </div>
          </div>
          </div>

          <div className='d-flex justify-content-center align-items-center mt-3'>

          <div className='card-suport' style={{border:'2px solid #ECECEC', width:'100%', borderRadius:'11px', padding:'12px 12px 1px 12px'}}>
                  <div style={{display:'flex', justifyContent:'space-between'}}>

                  <div style={{display:'flex',}}> 
                  <div><img src={suportIcon} /></div>
                  <p style={{color:'#220E5F', fontSize:'17px', fontWeight:'500', paddingRight:'8px'}}> كيف يمكنني تتبع طلبي؟ </p>
                  </div>

                  <div><img src={ArrSupport} /></div>
                  </div>
              </div>
          </div>
          <div className='d-flex justify-content-center align-items-center mt-3'>

          <div className='card-suport' style={{border:'2px solid #ECECEC', width:'100%', borderRadius:'11px', padding:'12px 12px 1px 12px'}}>
          <div style={{display:'flex', justifyContent:'space-between'}}>

          <div style={{display:'flex',}}> 
          <div><img src={suportIcon} /></div>
          <p style={{color:'#220E5F', fontSize:'17px', fontWeight:'500', paddingRight:'8px'}}> كيف يمكنني الغاء طلبي؟</p>
          </div>

          <div><img src={ArrSupport} /></div>
          </div>
          </div>
          </div>

          <div className='d-flex justify-content-center align-items-center mt-3'>

          <div className='card-suport' style={{border:'2px solid #ECECEC', width:'100%', borderRadius:'11px', padding:'12px 12px 1px 12px'}}>
          <div style={{display:'flex', justifyContent:'space-between'}}>

          <div style={{display:'flex',}}> 
          <div><img src={suportIcon} /></div>
          <p style={{color:'#220E5F', fontSize:'17px', fontWeight:'500', paddingRight:'8px'}}> كيف يمكنني الدفع؟</p>
          </div>

          <div><img src={ArrSupport} /></div>
          </div>
          </div>
          </div>

           </div>
           </Col>

           <Col xs={12} md={7} >

           <div style={{ padding:'30px', background:'#F4F5F7', borderRadius:'20px 20px 0px 0px', height:'80%'}}>
           <div style={{display:'flex', justifyContent:'center'}}><p style={{color:'#888888', fontWeight:'bold', marginTop:'-15px'}}> اليوم</p></div>
           <div>
             <div style={{display:'flex', justifyContent:'flex-end'}}>
                <p style={{width:'50%', background:'#7EA91A',
                boxShadow:' 0px 5px 7.800000190734863px 4px #7EA91A24', color:'#FFFFFF', 
                borderRadius:'10px 10px 10px 0px', fontSize:'14px', textAlign:'start', padding:'10px' }}> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص.</p>
             </div>
           </div>


           <div>
             <div style={{display:'flex', justifyContent:'flex-start'}}>
                <p style={{width:'50%', background:'#FFFFFF',border:'1px solid #DBDBDB'
               , boxShadow:'0px 5px 7.800000190734863px 4px #7EA91A24', color:'#1A232B', 
                borderRadius:'10px 10px 10px 0px', fontSize:'14px', textAlign:'start', padding:'10px' }}> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص.  </p>
             </div>
           </div>
             
           <div>
             <div style={{display:'flex', justifyContent:'flex-end'}}>
                <p style={{width:'50%', background:'#7EA91A',
                boxShadow:' 0px 5px 7.800000190734863px 4px #7EA91A24', color:'#FFFFFF', 
                borderRadius:'10px 10px 10px 0px', fontSize:'14px', textAlign:'start', padding:'10px' }}> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص.</p>
             </div>
           </div>
          

           </div>

           <div  style={{ padding:'30px', background:'#FFFFFF', borderRadius:'0px 0px 20px 20px', boxShadow:' 0px -4px 14px 0px #00000014',
              borderBottom:'1px solid #D1D1D1' }}>

            <div style={{display:'flex'}}>

            <Col sm={10}>
            <div>
                 <input type="search" placeholder='اكتب رسالتك ..' aria-label="Search"
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
           
           </Col>
    </Row>
    </Container>
    </>;
}
export default NewReqChatPage;