import React from 'react';
import { Link } from 'react-router-dom';
import offer from '../../images/off.png'
import fav from '../../images/fav.png'
import prod1 from '../../images/prod1.png'
import prod2 from '../../images/mob1.png'
import prod3 from '../../images/prod3.png'
import prod4 from '../../images/prod4.png'
import prod5 from '../../images/prod5.png'
import favIcon from '../../images/favIcon.svg'
import { Card } from 'react-bootstrap';
import { IoHeartCircleSharp, IoSearch } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
const ProductCard = () => {
    return <>
        <div style={{display:'flex', justifyContent:'center'}}  class="  row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 ">
  <div class="col mb-3"> 
 
<Link to='/store-product'  style={{textDecoration:'none'}}>

<Card style={{ width: '100%' , height:'100%'}}>
  <div style={{display:'flex'}}>
                <img src={offer} alt='' style={{marginRight:'10px'}} />
              </div>

              <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                    <img src={favIcon} />
              </div>
              
  <div>
  <img src={prod2} style={{width:'120px', height:'120px', marginTop:'-15px'}} />
       
        <Card.Text style={{marginTop:'5px'}}>
       موبايل سامسونج جالاكسي بشريحتين اتصال   
        </Card.Text>
        <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
        <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                    
                    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'18px'}}>4.5</p>
                </div>
                <div style={{display:'flex', marginRight:'15px'}}>
                    <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px'}}> 83 جنيه  </p>
                   
                </div>
      </div>
    </Card>
</Link>

    </div>


     <div class="col mb-3">
 
    <Card style={{ width: '100%' , height:'100%'}}>
  <div style={{display:'flex'}}>
                <img src={offer} alt='' style={{marginRight:'10px'}} />
              </div>

              <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                    <img src={favIcon} />
              </div>
              
  <div>
  <img src={prod2} style={{width:'120px', height:'120px', marginTop:'-15px'}} />
       
        <Card.Text style={{marginTop:'5px'}}>
       موبايل سامسونج جالاكسي بشريحتين اتصال   
        </Card.Text>
        <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
        <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                    
                    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'18px'}}>4.5</p>
                </div>
                <div style={{display:'flex', marginRight:'15px'}}>
                    <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px'}}> 83 جنيه  </p>
                   
                </div>
      </div>
    </Card>
    </div>

    <div class="col mb-3">
 
    <Card style={{ width: '100%' , height:'100%'}}>
  <div style={{display:'flex'}}>
                <img src={offer} alt='' style={{marginRight:'10px'}} />
              </div>

              <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                    <img src={favIcon} />
              </div>
              
  <Card.Body>
  <img src={prod2} style={{width:'120px', height:'120px', marginTop:'-15px'}} />
       
        <Card.Text style={{marginTop:'5px'}}>
       موبايل سامسونج جالاكسي بشريحتين اتصال   
        </Card.Text>
        <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
        <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                    
                    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'18px'}}>4.5</p>
                </div>
                <div style={{display:'flex', marginRight:'15px'}}>
                    <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px'}}> 83 جنيه  </p>
                   
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
                    <img src={favIcon} />
              </div>
              
  <Card.Body>
  <img src={prod2} style={{width:'120px', height:'120px', marginTop:'-15px'}} />
       
        <Card.Text style={{marginTop:'5px'}}>
       موبايل سامسونج جالاكسي بشريحتين اتصال   
        </Card.Text>
        <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
        <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                    
                    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'18px'}}>4.5</p>
                </div>
                <div style={{display:'flex', marginRight:'15px'}}>
                    <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px'}}> 83 جنيه  </p>
                   
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
                    <img src={favIcon} />
              </div>
              
  <Card.Body>
  <img src={prod2} style={{width:'120px', height:'120px', marginTop:'-15px'}} />
       
        <Card.Text style={{marginTop:'5px'}}>
       موبايل سامسونج جالاكسي بشريحتين اتصال   
        </Card.Text>
        <div style={{display:'flex', marginRight:'15px', marginTop:'-15px'}}>
        <FaStar style={{color:'#ffc300', fontSize:'23px', marginTop:'2px'}} />
                    
                    <p style={{color: "#7A808A", marginRight:'5px', fontSize:'18px'}}>4.5</p>
                </div>
                <div style={{display:'flex', marginRight:'15px'}}>
                    <p style={{color: "#E51937", fontSize:'18px', fontWeight:'bold', marginTop:'-15px'}}> 83 جنيه  </p>
                   
                </div>
      </Card.Body>
    </Card>
    </div>
    

  </div>
    </>;
}



export default ProductCard;