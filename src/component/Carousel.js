import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Container, Col, Button } from 'react-bootstrap'
import slider1 from './img/slider1.png'
import slider3 from './img/slider3.png'
import slider2 from './img/slider2.png'
import './style.css'


const Slider = () => {
  return (
    <div className='po'>
    <Container style={{ width: "80%" }}>

      <Carousel className='carousell' >

        <Carousel.Item className='carousell-item'>
          <Col ><img style={{ width: "100%" }} src={slider1} alt='' /></Col>
          <Col className='d-flex justify-content-center flex-column'>
            <h1 style={{ color: 'white', fontWeight: '900' }}>Diary & Journal</h1>
            <h1 style={{ color: 'white', fontWeight: '100' }}>-Private Writing</h1>
            <div className='home-btn'>
              <Button className='homebtn' variant="light" style={{ marginLeft: "10px" }} href='#Contact'>Learn More</Button>
              <Button className='homebtn' style={{ marginLeft: "10px" }} variant="outline-light" target="_blank" >Download</Button>
            </div>
          </Col>
        </Carousel.Item>

        <Carousel.Item className='carousell-item'>
          <Col ><img style={{ width: "100%" }} src={slider2} alt='' /></Col>
          <Col className='d-flex justify-content-center flex-column'>
            <h1 style={{ color: 'white', fontWeight: '900' }}>Write your own</h1>
            <h1 style={{ color: 'white', fontWeight: '100' }}>Private diary!</h1>
            <div >
              <Button className='homebtn' variant="light" style={{ marginLeft: "10px" }} >Learn More</Button>
              <Button className='homebtn' style={{ marginLeft: "10px" }} variant="outline-light" target="_blank" >Download</Button>
            </div>
          </Col>
        </Carousel.Item>

        <Carousel.Item className='carousell-item'>
          <Col ><img style={{ width: "100%" }} src={slider3} alt='' /></Col>
          <Col className='d-flex justify-content-center flex-column'>
            <h1 style={{ color: 'white', fontWeight: '900' }}>Personal notes on</h1>
            <h1 style={{ color: 'white', fontWeight: '100' }}>Web and Android!</h1>
            <div >
              <Button className='homebtn' variant="light" style={{ marginLeft: "10px" }} href='#Contact'>Learn More</Button>
              <Button className='homebtn' style={{ marginLeft: "10px" }} variant="outline-light" target="_blank" >Download</Button>
            </div>
          </Col>
        </Carousel.Item>
      </Carousel>

    </Container>

    </div>
  )
}

export default Slider

