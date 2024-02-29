import React from 'react';
import { Link } from 'react-router-dom';
import offer from '../../images/off.png'
import fav from '../../images/fav.png'
import prod1 from '../../images/prod1.png'
import prod2 from '../../images/prod2.png'
import prod3 from '../../images/prod3.png'
import prod4 from '../../images/prod4.png'
import prod5 from '../../images/prod5.png'
import star from '../../images/star.png'
import { Card } from 'react-bootstrap';
const ProductCard = () => {
    return <>
        <div class="  row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 ">
  <div class="col mb-3">
 
<Link to='/store-product'  style={{textDecoration:'none'}}>

  <Card style={{ width: '100%' , height:'100%'}}>
  <div style={{display:'flex'}}>
                <img src={offer} alt='' style={{marginRight:'10px'}} />
              </div>

              <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                <img src={fav} alt='' style={{}} />
              </div>
              
  <Card.Body>
  <img src={prod2} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
       
        <Card.Text>
       موبايل سامسونج جالاكسي بشريحتين اتصال   
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
</Link>

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
  <img src={prod1} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
       
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
    <div class="col mb-3">
 
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

    <div class="col mb-3">
 
  <Card style={{ width: '100%', height:'100%' }}>
  <div style={{display:'flex'}}>
                <img src={offer} alt='' style={{marginRight:'10px'}} />
              </div>

              <div style={{display:'flex', justifyContent:'flex-end', marginLeft:'10px', marginTop:'-25px'}}>
                <img src={fav} alt='' style={{}} />
              </div>
              
  <Card.Body>
  <img src={prod5} style={{maxWidth:'100%', maxHeight:'100px', marginTop:'-15px'}} />
       
        <Card.Text>      نعم اقمشة فلورا سوفت من كومفورت 3 لتر
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

   <div class="col mb-3">
 
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
    
    <div class="col mb-3">
 
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
    </>;
}



export default ProductCard;