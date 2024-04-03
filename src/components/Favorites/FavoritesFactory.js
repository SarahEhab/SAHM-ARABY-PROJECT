import React from 'react';
import './Favorites.css'
import NavBarBlue from '../NavBar/NavBarBlue';
import { Card, Col, Container, Form, FormControl, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import locat from '../../images/location.png'
import logo from '../../images/logo.png'
import search from '../../images/search.png'
import offer from '../../images/off.png'
import fav from '../../images/redIcon.svg'
import prod2 from '../../images/prod2.png'
import star from '../../images/star.png'
import profileFac from '../../images/ProfileFa2.png'
import profileF2 from '../../images/profileF2.png'
import { Link } from 'react-router-dom';
import NavbarLogin from '../NavBar/NavbarLogin';
const FavoritesFactory = () => {
    return <> 
    <NavBarBlue />

    <NavbarLogin />

    <Container>
    <Row>
    <Col>
    <div style={{marginTop:'15px'}}>
      <h3 style={{color: 'rgba(255, 255, 255, 1)' , fontWeight:'500' , paddingBottom :'20px', paddingTop:'10px' , borderRadius:'25px'}} className=" background-image">
      المفضله</h3>
      </div>
    </Col>
    </Row>
    </Container>

    <Container>
    <Row className='mt-2'>
        <Col  >
           <div className='d-flex justify-content-between mb-4 bar-section'>
        
        <div style={{display:'flex', gap:'5px', justifyContent:'center'}} >

        <Link to='/favorites-products' style={{textDecoration:'none'}}>
          <div style={{border :'2px solid rgba(232, 232, 232, 1)' , borderRadius:'23px' , width:'145px' , height:'33.74px' , 
          background:'linear-gradient(0deg, #E8E8E8, #E8E8E8),linear-gradient(0deg, #F5F5F5, #F5F5F5)', display:'flex', justifyContent:'center'
        , alignItems:'center', gap:'10px' }}>
        <div>
    
        </div>

        <h6 style={{color:'#636270' , paddingTop:'4px', fontSize:'15px'}}>المنتجات </h6>
          </div>
      </Link>

      <Link to='/favorites-stores' style={{textDecoration:'none'}}>
          <div style={{border :'2px solid rgba(232, 232, 232, 1)' , borderRadius:'23px' , width:'145px' , height:'33.74px' , 
          background:'linear-gradient(0deg, #E8E8E8, #E8E8E8),linear-gradient(0deg, #F5F5F5, #F5F5F5)', display:'flex', justifyContent:'center'
        , alignItems:'center', gap:'10px' }}>
          <div>
        </div>

        <h6 style={{  color:'#636270' , fontSize:'15px', marginTop:'5px'}}>المتاجر  </h6>
        
          
        </div>
    </Link>
          <div style={{border :'none' , borderRadius:'15px' , width:'145px' , height:'33.74px' , 
                background:'linear-gradient(89.51deg, #02E4D8 -0.41%, #019AED 97.31%)', display:'flex', justifyContent:'center'
                , alignItems:'center', gap:'10px'}}>
          <div>
        </div>

        <h6 style={{  color:'#FFFFFF' , fontSize:'15px', marginTop:'5px'}}>المصانع  </h6>
        
          
        </div>
        </div>
              

            <div style={{display:'flex' , gap:'10px', justifyContent:'center'}}>

          

            <Form >
                <FormControl
                    type="search"
                    placeholder='ابحث باسم المصنع...'
                    className=" w-100  "
                    aria-label="Search"
                  
                    />
                    <img src={search} alt='' width='20px' height="20px" style={{position:'absolute' , marginTop:'-30px' , marginRight:'70px'}}/>
                </Form>


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

    <Container>
        <Row style={{justifyContent:'center', marginTop:'25px'}}>
        <Col xs="12" md="5" lg="5" className='mb-3'   >
          
            <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>


                        <div>

                          <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginRight:'15px'}}>
                            <div><img src={profileF2}/></div>
                            <div style={{marginRight:'10px', marginTop:'10px'}}>
                              <h6 style={{color:'#220E5F', fontWeight:'bold', textAlign:'start'}} >مصنع تبارك </h6>
                              <p style={{color:'#A4ACAD', marginTop:'-5px'}}>عدد المنتجات: 125</p>
                            </div>
                          </div>

                        </div>

                        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                          <div><img src={fav} style={{marginLeft:'20px'}} /></div>
                      </div>
                
          </div>
          
        </Col>
        <Col xs="12" md="5" lg="5" className='mb-3'   >
            

            <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>


                        <div>

                          <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginRight:'15px'}}>
                            <div><img src={profileFac}/></div>
                            <div style={{marginRight:'10px', marginTop:'10px'}}>
                              <h6 style={{color:'#220E5F', fontWeight:'bold', textAlign:'start'}} >  مصنع النور  </h6>
                              <p style={{color:'#A4ACAD', marginTop:'-5px'}}>عدد المنتجات: 125</p>
                            </div>
                          </div>

                        </div>

                        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                          <div><img src={fav} style={{marginLeft:'20px'}} /></div>
                      </div>
                
          </div>
          
        </Col>
        <Col xs="12" md="5" lg="5" className='mb-3'   >
            

            <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>


                        <div>

                          <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginRight:'15px'}}>
                            <div><img src={profileFac}/></div>
                            <div style={{marginRight:'10px', marginTop:'10px'}}>
                              <h6 style={{color:'#220E5F', fontWeight:'bold', textAlign:'start'}} >  مصنع النور  </h6>
                              <p style={{color:'#A4ACAD', marginTop:'-5px'}}>عدد المنتجات: 125</p>
                            </div>
                          </div>

                        </div>

                        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                          <div><img src={fav} style={{marginLeft:'20px'}} /></div>
                      </div>
                
          </div>
          
        </Col>
        <Col xs="12" md="5" lg="5" className='mb-3'   >
            

            <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>


                        <div>

                          <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginRight:'15px'}}>
                            <div><img src={profileF2}/></div>
                            <div style={{marginRight:'10px', marginTop:'10px'}}>
                              <h6 style={{color:'#220E5F', fontWeight:'bold', textAlign:'start'}} >  مصنع تبارك  </h6>
                              <p style={{color:'#A4ACAD', marginTop:'-5px'}}>عدد المنتجات: 125</p>
                            </div>
                          </div>

                        </div>

                        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                          <div><img src={fav} style={{marginLeft:'20px'}} /></div>
                      </div>
                
          </div>
          
        </Col>
        <Col xs="12" md="5" lg="5" className='mb-3'   >
            

            <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>


                        <div>

                          <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginRight:'15px'}}>
                            <div><img src={profileF2}/></div>
                            <div style={{marginRight:'10px', marginTop:'10px'}}>
                              <h6 style={{color:'#220E5F', fontWeight:'bold', textAlign:'start'}} >  مصنع تبارك  </h6>
                              <p style={{color:'#A4ACAD', marginTop:'-5px'}}>عدد المنتجات: 125</p>
                            </div>
                          </div>

                        </div>

                        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                          <div><img src={fav} style={{marginLeft:'20px'}} /></div>
                      </div>
                
          </div>
          
        </Col>
        <Col xs="12" md="5" lg="5" className='mb-3'   >
            

            <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>


                        <div>

                          <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginRight:'15px'}}>
                            <div><img src={profileFac}/></div>
                            <div style={{marginRight:'10px', marginTop:'10px'}}>
                              <h6 style={{color:'#220E5F', fontWeight:'bold', textAlign:'start'}} >مصنع النور </h6>
                              <p style={{color:'#A4ACAD', marginTop:'-5px'}}>عدد المنتجات: 125</p>
                            </div>
                          </div>

                        </div>

                        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                          <div><img src={fav} style={{marginLeft:'20px'}} /></div>
                      </div>
                
          </div>
          
        </Col>
        
        <Col xs="12" md="5" lg="5" className='mb-3'   >
            

            <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>


                        <div>

                          <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginRight:'15px'}}>
                            <div><img src={profileFac}/></div>
                            <div style={{marginRight:'10px', marginTop:'10px'}}>
                              <h6 style={{color:'#220E5F', fontWeight:'bold', textAlign:'start'}} > مصنع النور  </h6>
                              <p style={{color:'#A4ACAD', marginTop:'-5px'}}>عدد المنتجات: 125</p>
                            </div>
                          </div>

                        </div>

                        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                          <div><img src={fav} style={{marginLeft:'20px'}} /></div>
                      </div>
                
          </div>
          
        </Col>
        <Col xs="12" md="5" lg="5" className='mb-3'   >
            

            <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>


                        <div>

                          <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginRight:'15px'}}>
                            <div><img src={profileF2}/></div>
                            <div style={{marginRight:'10px', marginTop:'10px'}}>
                              <h6 style={{color:'#220E5F', fontWeight:'bold', textAlign:'start'}} > مصنع تبارك </h6>
                              <p style={{color:'#A4ACAD', marginTop:'-5px'}}>عدد المنتجات: 125</p>
                            </div>
                          </div>

                        </div>

                        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                          <div><img src={fav} style={{marginLeft:'20px'}} /></div>
                      </div>
                
          </div>
          
        </Col>
        </Row>
    </Container>
    </>;
}



export default FavoritesFactory;