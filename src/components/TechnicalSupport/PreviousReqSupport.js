import React from 'react';
import './support.css'
import NavBarBlue from '../NavBar/NavBarBlue';
import { Col, Container, Form, FormControl, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import suportIcon from '../../images/t-suport.png'
import ArrSupport from '../../images/arr-suport.png'
import { Link } from 'react-router-dom';
import NavbarLogin from '../NavBar/NavbarLogin';

const PreviousReqSupport = () => {
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
        
          <Link to='/new-request-technical-support' style={{textDecoration:'none'}}>
            <div style={{border :'2px solid rgba(232, 232, 232, 1)' , borderRadius:'12px' , width:'170px' , height:'33.74px' , 
                background:'linear-gradient(0deg, #E8E8E8, #E8E8E8),linear-gradient(0deg, #F5F5F5, #F5F5F5)' }}>
                <h6 style={{color:'#636270' , paddingTop:'4px'}}>طلب جديد </h6>
              </div>
          </Link>
          </Col>
  
          <Col xs="6" md="6" lg="6" style={{ textAlign: 'center', marginBottom: '10px' }}>

          <div style={{border :'none' , borderRadius:'12px' , width:'170px' , height:'33.74px' , 
                background:'linear-gradient(89.51deg, #02E4D8 -0.41%, #019AED 97.31%)' }}>
                  <h6 style={{  color:'#FFFFFF' , fontSize:'15px', paddingTop:'4px'}}>السابقه  </h6>
              </div>
              <div style={{display:'flex', justifyContent:'flex-end'}}><p style={{marginTop:'-40px', position:'absolute', borderRadius:'50px',
              padding:'1px 7px' , fontSize:'13px', color:'#FFFFFF', background:'linear-gradient(0deg, #E51937, #E51937),linear-gradient(0deg, #FFFFFF, #FFFFFF)'}}>2</p></div>
          </Col>
        </Row> 
      </Container>

      <Container>
        <Row>
            <Col>  <div style={{marginLeft:'-55px', marginBottom: '15px', borderBottom:'2px solid #EEEEEE ', width:'100%' }}></div></Col>
        </Row>
      </Container>
   
    <Container>
        <Row>
            <Col >
            <div style={{marginBottom:'100px', marginTop:'10px'}}>

              <Link to='/previous-request-chat-page' style={{textDecoration:'none'}}>
                    <div className='d-flex justify-content-center align-items-center'>

                    <div className='card-suport' style={{border:'2px solid #ECECEC', width:'40%', borderRadius:'11px', padding:'12px 12px 1px 12px'}}>
                            <div style={{display:'flex', justifyContent:'space-between'}}>

                              <div style={{display:'flex',}}> 
                                <div><img src={suportIcon} /></div>
                                <p style={{color:'#220E5F', fontSize:'17px', fontWeight:'500', paddingRight:'8px'}}> كيف يمكنني تتبع طلبي؟ </p>
                                </div>

                                <div style={{display:'flex', justifyContent:'flex-end'}}><p style={{ position:'absolute', borderRadius:'50px',
                      padding:'1px 7px' , fontSize:'13px', color:'#FFFFFF', background:'linear-gradient(0deg, #E51937, #E51937),linear-gradient(0deg, #FFFFFF, #FFFFFF)'}}>2</p></div>
                            </div>

                            <div style={{display:'flex', flexDirection:'column', textAlign:'start'}}>
                              <p style={{color:'#7A808A', marginTop:'-10px'}} > 22/01/2023 - 09:30 PM</p>
                              <p style={{color:'#585858', fontSize:'17px', marginTop:'-17px'}}> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص...</p>

                            </div>

                            <div style={{display:'flex',  justifyContent:'flex-start'}}> 
              <div style={{border: " 1.66px solid #039CED4D", borderRadius:'12px', padding:'2px 10px', color:'#039CED', 
              fontWeight:'bold', background:'rgb(3 156 237 / 16%)', marginBottom:'15px'}}>جاري العمل عليها  </div>
              </div>
                          </div>
                    </div>
              </Link>             

              <div className='d-flex justify-content-center align-items-center mt-3'>
                <div className='card-suport' style={{border:'2px solid #ECECEC', width:'40%', borderRadius:'11px', padding:'12px 12px 1px 12px'}}>
                  <div style={{display:'flex', justifyContent:'space-between'}}>

                    <div style={{display:'flex',}}> 
                    <div><img src={suportIcon} /></div>
                    <p style={{color:'#220E5F', fontSize:'17px', fontWeight:'500', paddingRight:'8px'}}> كيف يمكنني الدفع؟</p>
                    </div>

                    
                  </div>

                  <div style={{display:'flex', flexDirection:'column', textAlign:'start'}}>
                    <p style={{color:'#7A808A', marginTop:'-10px'}} > 22/01/2023 - 09:30 PM</p>
                    <p style={{color:'#585858', fontSize:'17px', marginTop:'-17px'}}> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص...</p>

                  </div>

                   <div style={{display:'flex', justifyContent:'flex-start'}}> 
                    <div style={{border: "1.85px solid #7EA91A61", borderRadius:'12px', padding:'2px 10px', color:'#7EA91A', 
                    fontWeight:'bold', background:'rgb(126 169 26 / 12%)', marginBottom:'15px'}}>تم الانتهاء</div>
                  </div>
                </div>
              </div> 
             </div>
            </Col>  
        </Row>
    </Container>

    </>;
}
export default PreviousReqSupport;