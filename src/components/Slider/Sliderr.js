import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import slider1 from '../../images/slider1.png';
import slider2 from '../../images/slider2.png';
import slider3 from '../../images/slider3.png';
import slider4 from '../../images/slider4.png';

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex); }
    return (
    
    <Container className='mb-4 mt-3'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item  interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                    style={{backgroundSize:'cover', maxWidth:'100%'}}
                       src={slider1} alt="First slide"
                    />
                </div>
            </Carousel.Item>

            <Carousel.Item  interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img style={{backgroundSize:'cover', maxWidth:'100%'}} src={slider2} alt="First slide"/>
                </div>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                    style={{backgroundSize:'cover', maxWidth:'100%'}} src={slider3} alt="First slide" />
                </div>
            </Carousel.Item>

            <Carousel.Item  interval={2000}>
                <div >
                    <img style={{backgroundSize:'cover', maxWidth:'100%'}} src={slider4} alt="First slide"  />
                </div>
            </Carousel.Item>
     </Carousel>
    </Container>     
      );
}
export default Slider;