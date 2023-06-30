import React from 'react';
import { Fragment } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../photo/img1.jpg';
import img2 from "../photo/img2.jpg";
import img3 from "../photo/img3.jpg";
import About from './About';
function Home() {
  return (
    <Fragment>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            style={{ width: "100%", height: "75vh" }}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            style={{ width: "100%", height: "75vh" }}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            style={{ width: "100%", height: "75vh" }}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <About/>
    </Fragment>
  );
}

export default Home