import React from 'react';
import './Favorites.css'
import NavBarBlue from '../NavBar/NavBarBlue';
import { Card, Col, Container, Form, FormControl, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import locat from '../../images/location.png'
import logo from '../../images/logo.png'
import group from "../../images/Group1.png";
import group1 from "../../images/Group2.png";
import search from '../../images/search.png'
import offer from '../../images/off.png'
import fav from '../../images/redIcon.svg'
import prod2 from '../../images/prod2.png'
import prod3 from '../../images/prod3.png'
import prod4 from '../../images/prod4.png'
import prod5 from '../../images/prod5.png'
import star from '../../images/star.png'
import { Link } from 'react-router-dom';
import NavbarLogin from '../NavBar/NavbarLogin';
const FavoritesSortProducts = () => {
    return <>
    <NavBarBlue />
    <NavbarLogin/>

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
          <div style={{border :'none' , borderRadius:'15px' , width:'145px' , height:'33.74px' , 
        background:'linear-gradient(89.51deg, #02E4D8 -0.41%, #019AED 97.31%)', display:'flex', justifyContent:'center'
        , alignItems:'center', gap:'10px' }}>
        <div>
    
        </div>

        <h6 style={{color:'#FFFFFF' , paddingTop:'4px'}}>المنتجات </h6>
          </div>

          <Link to='/favorites-stores' style={{textDecoration:'none'}}>
          <div style={{border :'2px solid rgba(232, 232, 232, 1)' , borderRadius:'23px' , width:'145px' , height:'33.74px' , 
          background:'linear-gradient(0deg, #E8E8E8, #E8E8E8),linear-gradient(0deg, #F5F5F5, #F5F5F5)', display:'flex', justifyContent:'center'
        , alignItems:'center', gap:'10px' }}>
          <div>
        </div>

        <h6 style={{  color:'#636270' , fontSize:'15px', marginTop:'5px'}}>المتاجر  </h6>
        
          
        </div>
    </Link>

        <Link to='/favorites-factory' style={{textDecoration:'none'}}>
          <div style={{border :'2px solid rgba(232, 232, 232, 1)' , borderRadius:'23px' , width:'145px' , height:'33.74px' , 
          background:'linear-gradient(0deg, #E8E8E8, #E8E8E8),linear-gradient(0deg, #F5F5F5, #F5F5F5)', display:'flex', justifyContent:'center'
        , alignItems:'center', gap:'10px' }}>
          <div>
        </div>

        <h6 style={{  color:'#636270' , fontSize:'15px', marginTop:'5px'}}>المصانع  </h6>
        
          
        </div>
    </Link>
        </div>
              

            <div style={{display:'flex' , gap:'10px', justifyContent:'center'}}>

          

            <Form >
                <FormControl
                    type="search"
                    placeholder='ابحث باسم المنتج...'
                    className=" w-100  "
                    aria-label="Search"
                  
                    />
                    <img src={search} alt='' width='20px' height="20px" style={{position:'absolute' , marginTop:'-30px' , marginRight:'70px'}}/>
                </Form>

    <Link to='/favorites-products' style={{textDcoretion :'none'}}>  <img 
              src={group1} 
              width='35px' 
              height='35px' 
              /> </Link>
          
            <img src={group} alt=''  width='35px' height="35px"  />
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
        <Col xs="12" md="12" lg="5" className='mb-3'   >
            

            <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>




              <div style={{display:'flex' , justifyContent:'center' }}  >
            
              <div><img src={fav} style={{position:'absolute', margin:'5px'}} /></div>
                <img src={prod2} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px'}} />


              <div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
                <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   موبايل سامسونج جالاكسي بشريحتين اتصال </p>
              

                <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
            <div><img src={star} alt=''  /></div>
              
              <p style={{color: "#7A808A", marginRight:'5px', fontSize:'17px'}}>4.5</p>
          </div>

          <div style={{display:'flex'}}>
              <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
              <p style={{color: "#7A808A", fontSize:'22px', marginTop:'-15px', marginBottom:'-25px', marginRight:'15px'}}> <del>83 جنيه </del> </p>
              
          </div>

            </div>


            </div>


    <div style={{display:'flex', flexDirection:'column'}}>
    <div><img src={offer} style={{marginLeft:'20px'}} /></div>



    </div>


          </div>
          
        </Col>
        <Col xs="12" md="12" lg="5" className='mb-3'   >
            

            <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>




              <div style={{display:'flex' , justifyContent:'center' }}  >
            
              <div><img src={fav} style={{position:'absolute', margin:'5px'}} /></div>
                <img src={prod2} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px'}} />


              <div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
                <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   موبايل سامسونج جالاكسي بشريحتين اتصال </p>
              

                <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
            <div><img src={star} alt=''  /></div>
              
              <p style={{color: "#7A808A", marginRight:'5px', fontSize:'17px'}}>4.5</p>
          </div>

          <div style={{display:'flex', marginRight:'15px'}}>
              <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
              <p style={{color: "#7A808A", fontSize:'22px', marginTop:'-15px', marginBottom:'-25px', marginRight:'15px'}}> <del>83 جنيه </del> </p>
              
          </div>

            </div>


            </div>


    <div style={{display:'flex', flexDirection:'column'}}>
    <div><img src={offer} style={{marginLeft:'20px'}} /></div>



    </div>


          </div>
          
        </Col>
        <Col xs="12" md="12" lg="5" className='mb-3'   >
            

            <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>




              <div style={{display:'flex' , justifyContent:'center' }}  >
            
              <div><img src={fav} style={{position:'absolute', margin:'5px'}} /></div>
                <img src={prod5} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px'}} />


              <div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
                <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   موبايل سامسونج جالاكسي بشريحتين اتصال </p>
              

                <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
            <div><img src={star} alt=''  /></div>
              
              <p style={{color: "#7A808A", marginRight:'5px', fontSize:'17px'}}>4.5</p>
          </div>

          <div style={{display:'flex'}}>
              <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
              <p style={{color: "#7A808A", fontSize:'22px', marginTop:'-15px', marginBottom:'-25px', marginRight:'15px'}}> <del>83 جنيه </del> </p>
              
          </div>

            </div>


            </div>


    <div style={{display:'flex', flexDirection:'column'}}>
    <div><img src={offer} style={{marginLeft:'20px'}} /></div>

    </div>


          </div>
          
        </Col>

        <Col xs="12" md="12" lg="5" className='mb-3'   >


    <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>




    <div style={{display:'flex' , justifyContent:'center' }}  >

    <div><img src={fav} style={{position:'absolute', margin:'5px'}} /></div>
    <img src={prod4} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px'}} />


    <div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
    <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   موبايل سامسونج جالاكسي بشريحتين اتصال </p>


    <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
    <div><img src={star} alt=''  /></div>

    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'17px'}}>4.5</p>
    </div>

    <div style={{display:'flex'}}>
    <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
    <p style={{color: "#7A808A", fontSize:'22px', marginTop:'-15px', marginBottom:'-25px', marginRight:'15px'}}> <del>83 جنيه </del> </p>

    </div>

    </div>


    </div>


    <div style={{display:'flex', flexDirection:'column'}}>
    <div><img src={offer} style={{marginLeft:'20px'}} /></div>

    </div>


    </div>

      </Col>
      <Col xs="12" md="12" lg="5" className='mb-3'   >
            

            <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>




              <div style={{display:'flex' , justifyContent:'center' }}  >
            
              <div><img src={fav} style={{position:'absolute', margin:'5px'}} /></div>
                <img src={prod3} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px'}} />


              <div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
                <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   موبايل سامسونج جالاكسي بشريحتين اتصال </p>
              

                <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
            <div><img src={star} alt=''  /></div>
              
              <p style={{color: "#7A808A", marginRight:'5px', fontSize:'17px'}}>4.5</p>
          </div>

          <div style={{display:'flex'}}>
              <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
              <p style={{color: "#7A808A", fontSize:'22px', marginTop:'-15px', marginBottom:'-25px', marginRight:'15px'}}> <del>83 جنيه </del> </p>
              
          </div>

            </div>


            </div>


    <div style={{display:'flex', flexDirection:'column'}}>
    <div><img src={offer} style={{marginLeft:'20px'}} /></div>


    </div>


          </div>
          
        </Col>
        <Col xs="12" md="12" lg="5" className='mb-3'   >
            

            <div style={{ display:'flex' , justifyContent:'space-between' , border:'2px solid rgba(236, 236, 236, 1)' , borderRadius:'15px' , width:'auto'}}>




              <div style={{display:'flex' , justifyContent:'center' }}  >
            
              <div><img src={fav} style={{position:'absolute', margin:'5px'}} /></div>
                <img src={prod2} alt='' style={{marginTop:'15px', marginBottom:'15px', marginRight:'20px'}} />


              <div style={{display:'flex' , justifyContent:'center',flexDirection:'column' , padding:'10px' }} >
                <p style={{fontSize:'17px', color:'#220E5F', textAlign:'start'}}>   موبايل سامسونج جالاكسي بشريحتين اتصال </p>
              

                <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
            <div><img src={star} alt=''  /></div>
              
              <p style={{color: "#7A808A", marginRight:'5px', fontSize:'17px'}}>4.5</p>
          </div>

          <div style={{display:'flex'}}>
              <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-25px'}}> 83 جنيه  </p>
              <p style={{color: "#7A808A", fontSize:'22px', marginTop:'-15px', marginBottom:'-25px', marginRight:'15px'}}> <del>83 جنيه </del> </p>
              
          </div>

            </div>


            </div>


    <div style={{display:'flex', flexDirection:'column'}}>
    <div><img src={offer} style={{marginLeft:'20px'}} /></div>



    </div>


          </div>
          
        </Col>
        </Row>
    </Container>
    </>;
}
export default FavoritesSortProducts;