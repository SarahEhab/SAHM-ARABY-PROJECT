import React, { useEffect } from 'react';
import './Favorites.css'
import NavBarBlue from '../NavBar/NavBarBlue';
import { Card, Col, Container, Form, FormControl, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';
import locat from '../../images/location.png'
import logo from '../../images/logo.png'
import group from "../../images/Group.png";
import group1 from "../../images/Group-1.png";
import search from '../../images/search.png'
import offer from '../../images/off.png'
import fav from '../../images/redIcon.svg'
import prod2 from '../../images/prod2.png'
import prod3 from '../../images/prod3.png'
import prod4 from '../../images/prod4.png'
import prod5 from '../../images/prod5.png'
import star from '../../images/star.png'
import { Link } from 'react-router-dom';
import closeImg from '../../images/close.png'
import NavbarLogin from '../NavBar/NavbarLogin';
import { getFavProducts } from '../../features/favorites/favoriteSlice';
import { useDispatch, useSelector } from "react-redux";

import Cookies from "js-cookie";
const FavoritesProducts = () => {

  const dispatch = useDispatch()
  const getfavPro = useSelector((state) => state.fav.favProduct);
  const isLoading = useSelector((state) => state.fav.isLoading);
  let token = Cookies.get("token");
  console.log(getfavPro)

  useEffect(() => {
    dispatch(getFavProducts(token));
  }, [dispatch,token]);

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
      
      
                <img 
                    src={group1} 
                    width='35px' 
                    height='35px' 
                    />

  <Link to='/favorites-sort-products' style={{textDcoretion :'none'}}> 
                  <img src={group} alt=''  width='35px' height="35px"  />
                  </Link>
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

    <Container className='p-5'>
    <div class="  row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5  justify-content-center">
  <div class="col mb-3">
 
  <Card style={{ width: '100%' , height:'100%'}}>
  <div style={{display:'flex'}}>
                <img src={offer} alt='' style={{marginRight:'10px'}} />
              </div>

              <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                <img src={fav} alt='' style={{}} />
              </div>
              
  <Card.Body>
  <img src={prod5} style={{width: '120px' , height:'120px', marginTop:'-50px'}} />

  <div style={{display:'flex', textAlign:'center', alignItems:'center', justifyContent:'center'}}> 
 <div style={{border: " 1.23px solid #E5193726", borderRadius:'20px', color:'#E51937', 
 fontWeight:'bold', background:'rgb(229 25 55 / 9%)', display:'flex', fontSize:'14px', padding:'3px'}}>
<div><img src={closeImg} style={{paddingLeft:'5px', width:'25px'}}  /> </div>المنتج غير متوفر حالياً  </div>  </div>



        <Card.Text>
        منعم اقمشة فلورا سوفت من كومفورت 3 لتر
        </Card.Text>
        <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
                  <div><img src={star} alt=''  /></div>
                    
                    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                </div>
                <div style={{display:'flex', marginRight:'15px'}}>
                    <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-5px'}}> 83 جنيه  </p>
                   
                </div>
      </Card.Body>
    </Card>
    </div>
    {
          !isLoading?(
            getfavPro && getfavPro.length > 0 ? (
            <>
              { (getfavPro).map((item, index) => (
                <div class="col mb-3">
 
 <Card style={{ width: '100%' , height:'100%'}}>
 <div style={{display:'flex'}}>
               <img src={offer} alt='' style={{marginRight:'10px'}} />
             </div>

             <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
               <img src={fav} alt='' style={{}} />
             </div>
             
 <Card.Body>
 <img src={prod5} style={{width: '120px' , height:'120px', marginTop:'-50px'}} />

 <div style={{display:'flex', textAlign:'center', alignItems:'center', justifyContent:'center'}}> 
<div style={{border: " 1.23px solid #E5193726", borderRadius:'20px', color:'#E51937', 
fontWeight:'bold', background:'rgb(229 25 55 / 9%)', display:'flex', fontSize:'14px', padding:'3px'}}>
<div><img src={closeImg} style={{paddingLeft:'5px', width:'25px'}}  /> </div>المنتج غير متوفر حالياً  </div>  </div>



       <Card.Text>
       منعم اقمشة فلورا سوفت من كومفورت 3 لتر
       </Card.Text>
       <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
                 <div><img src={star} alt=''  /></div>
                   
                   <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
               </div>
               <div style={{display:'flex', marginRight:'15px'}}>
                   <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-5px'}}> 83 جنيه  </p>
                  
               </div>
     </Card.Body>
   </Card>
   </div>
            
              ))}
            </>
          ) :   null
          ):(
            null
            )
        }

    {/* <div class="col  mb-3 ">
 
  <Card style={{ width: '100%', height:'100%' }}>
  <div style={{display:'flex'}}>
                <img src={offer} alt='' style={{marginRight:'10px'}} />
              </div>

              <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                <img src={fav} alt='' style={{}} />
              </div>
              
  <Card.Body>
  <img src={prod4} style={{width: '120px' , height:'120px', marginTop:'-50px'}} />
       
        <Card.Text>سويت شيرت للرجال من اندورا
        </Card.Text>
        <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
                  <div><img src={star} alt=''  /></div>
                    
                    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                </div>
                <div style={{display:'flex', marginRight:'15px'}}>
                    <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-5px'}}> 500 جنيه  </p>
                   
                </div>
      </Card.Body>
    </Card>
    </div>

    <div class="col mb-3">
 
  <Card style={{ width: '100%', height:'100%' }}>
  <div style={{display:'flex'}}>
                <img src={offer} alt='' style={{marginRight:'10px'}} />
              </div>

              <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                <img src={fav} alt='' style={{}} />
              </div>
              
  <Card.Body>
  <img src={prod3} style={{width: '120px' , height:'120px', marginTop:'-50px'}} />
       
        <Card.Text>
        مولفيكس حفاضات اطفال
بانتس عبوة ميجا 
        </Card.Text>
        <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
                  <div><img src={star} alt=''  /></div>
                    
                    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                </div>
                <div style={{display:'flex', marginRight:'15px'}}>
                    <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-5px'}}> 83 جنيه  </p>
                   
                </div>
      </Card.Body>
    </Card>
    </div>

    <div class="col mb-3">
 
  <Card style={{ width: '100%', height:'100%' }}>
  <div style={{display:'flex'}}>
                <img src={offer} alt='' style={{marginRight:'10px'}} />
              </div>

              <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                <img src={fav} alt='' style={{}} />
              </div>
              
  <Card.Body>
  <img src={prod2} style={{width: '120px' , height:'120px', marginTop:'-50px'}} />
       
        <Card.Text>موبايل سامسونج جالاكسي بشريحتين اتصال
        </Card.Text>
        <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
                  <div><img src={star} alt=''  /></div>
                    
                    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                </div>
                <div style={{display:'flex', marginRight:'15px'}}>
                    <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-5px'}}> 12.000 جنيه  </p>
                   
                </div>
      </Card.Body>
    </Card>
    </div>

   <div class="col mb-3">
 
  <Card style={{ width: '100%', height:'100%' }}>
  <div style={{display:'flex'}}>
                <img src={offer} alt='' style={{marginRight:'10px'}} />
              </div>

              <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                <img src={fav} alt='' style={{}} />
              </div>
              
  <Card.Body>
  <img src={prod4} style={{width: '120px' , height:'120px', marginTop:'-50px'}} />
       
        <Card.Text>سويت شيرت للرجال من اندورا
        </Card.Text>
        <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
                  <div><img src={star} alt=''  /></div>
                    
                    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
                </div>
                <div style={{display:'flex', marginRight:'15px'}}>
                    <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-5px'}}> 500 جنيه  </p>
                   
                </div>
      </Card.Body>
    </Card>
    </div>

    <div class="col mb-3">
 
 <Card style={{ width: '100%' , height:'100%'}}>
 <div style={{display:'flex'}}>
               <img src={offer} alt='' style={{marginRight:'10px'}} />
             </div>

             <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
               <img src={fav} alt='' style={{}} />
             </div>
             
 <Card.Body>
 <img src={prod5} style={{width: '120px' , height:'120px', marginTop:'-50px'}} />
      
       <Card.Text>
       منعم اقمشة فلورا سوفت من كومفورت 3 لتر
       </Card.Text>
       <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
                 <div><img src={star} alt=''  /></div>
                   
                   <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
               </div>
               <div style={{display:'flex', marginRight:'15px'}}>
                   <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-5px'}}> 83 جنيه  </p>
                  
               </div>
     </Card.Body>
   </Card>
   </div>
   <div class="col  mb-3 ">

 <Card style={{ width: '100%', height:'100%' }}>
 <div style={{display:'flex'}}>
               <img src={offer} alt='' style={{marginRight:'10px'}} />
             </div>

             <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
               <img src={fav} alt='' style={{}} />
             </div>
             
 <Card.Body>
 <img src={prod4} style={{width: '120px' , height:'120px', marginTop:'-50px'}} />
      
       <Card.Text>سويت شيرت للرجال من اندورا
       </Card.Text>
       <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
                 <div><img src={star} alt=''  /></div>
                   
                   <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
               </div>
               <div style={{display:'flex', marginRight:'15px'}}>
                   <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-5px'}}> 500 جنيه  </p>
                  
               </div>
     </Card.Body>
   </Card>
   </div>
   <div class="col mb-3">

 <Card style={{ width: '100%', height:'100%' }}>
 <div style={{display:'flex'}}>
               <img src={offer} alt='' style={{marginRight:'10px'}} />
             </div>

             <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
               <img src={fav} alt='' style={{}} />
             </div>
             
 <Card.Body>
 <img src={prod3} style={{width: '120px' , height:'120px', marginTop:'-50px'}} />
 
 <div style={{display:'flex', textAlign:'center', alignItems:'center', justifyContent:'center'}}> 
 <div style={{border: " 1.23px solid #E5193726", borderRadius:'20px', color:'#E51937', 
 fontWeight:'bold', background:'rgb(229 25 55 / 9%)', display:'flex', fontSize:'14px', padding:'3px'}}>
<div><img src={closeImg} style={{paddingLeft:'5px', width:'25px'}}  /> </div>المنتج غير متوفر حالياً  </div>  </div>
       <Card.Text>
       مولفيكس حفاضات اطفال
بانتس عبوة ميجا 
       </Card.Text>
       <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
                 <div><img src={star} alt=''  /></div>
                   
                   <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
               </div>
               <div style={{display:'flex', marginRight:'15px'}}>
                   <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-5px'}}> 83 جنيه  </p>
                  
               </div>
     </Card.Body>
   </Card>
   </div>

   <div class="col mb-3">

 <Card style={{ width: '100%', height:'100%' }}>
 <div style={{display:'flex'}}>
               <img src={offer} alt='' style={{marginRight:'10px'}} />
             </div>

             <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
               <img src={fav} alt='' style={{}} />
             </div>
             
 <Card.Body>
 <img src={prod2} style={{width: '120px' , height:'120px', marginTop:'-50px'}} />
      
       <Card.Text>موبايل سامسونج جالاكسي بشريحتين اتصال
       </Card.Text>
       <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
                 <div><img src={star} alt=''  /></div>
                   
                   <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
               </div>
               <div style={{display:'flex', marginRight:'15px'}}>
                   <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-5px'}}> 12.000 جنيه  </p>
                  
               </div>
     </Card.Body>
   </Card>
   </div>

  <div class="col mb-3">

 <Card style={{ width: '100%', height:'100%' }}>
 <div style={{display:'flex'}}>
               <img src={offer} alt='' style={{marginRight:'10px'}} />
             </div>

             <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
               <img src={fav} alt='' style={{}} />
             </div>
             
 <Card.Body>
 <img src={prod4} style={{width: '120px' , height:'120px', marginTop:'-50px'}} />
      
       <Card.Text>سويت شيرت للرجال من اندورا
       </Card.Text>
       <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
                 <div><img src={star} alt=''  /></div>
                   
                   <p style={{color: "#7A808A", marginRight:'5px', fontSize:'20px'}}>4.5</p>
               </div>
               <div style={{display:'flex', marginRight:'15px'}}>
                   <p style={{color: "#E51937", fontSize:'22px', fontWeight:'bold', marginTop:'-15px', marginBottom:'-5px'}}> 500 جنيه  </p>
                  
               </div>
     </Card.Body>
   </Card>
   </div> */}
   
  </div>
    </Container>
   
    </>;
}



export default FavoritesProducts;