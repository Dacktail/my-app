import React from "react";
import "./About.css";
import { Carousel, Container } from "react-bootstrap";
import img5 from "../photo/img5.jpg";
import img6 from "../photo/img6.jpg";
import img7 from "../photo/img7.jpg";
import img8 from "../photo/img8.jpg";
import img9 from "../photo/img9.jpg";
import img10 from "../photo/img10.jpg";

function About() {
  return (
    <div className="cards">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img5}
            alt="First slide"
            style={{ width: "100%", height: "85vh" }}
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img6}
            style={{ width: "100%", height: "85vh" }}
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img7}
            style={{ width: "100%", height: "85vh" }}
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img8}
            style={{ width: "100%", height: "85vh" }}
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img9}
            style={{ width: "100%", height: "85vh" }}
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img10}
            style={{ width: "100%", height: "85vh" }}
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container xs={6} md={4}>
        <div className="container-xl">
          <h1>The Basics about Cryptocurrency</h1>
          <p>
            Cryptocurrency comes under many names. You have probably read about
            some of the most popular types of cryptocurrencies such as Bitcoin,
            Litecoin, and Ethereum. Cryptocurrencies are increasingly popular
            alternatives for online payments. Before converting real dollars,
            euros, pounds, or other traditional currencies into ₿ (the symbol
            for Bitcoin, the most popular cryptocurrency), you should understand
            what cryptocurrencies are, what the risks are in using
            cryptocurrencies, and how to protect your investment.
          </p>

          <p>
            What is cryptocurrency? A cryptocurrency is a digital currency,
            which is an alternative form of payment created using encryption
            algorithms. The use of encryption technologies means that
            cryptocurrencies function both as a currency and as a virtual
            accounting system. To use cryptocurrencies, you need a
            cryptocurrency wallet. These wallets can be software that is a
            cloud-based service or is stored on your computer or on your mobile
            device. The wallets are the tool through which you store your
            encryption keys that confirm your identity and link to your
            cryptocurrency.
          </p>

          <p>
            What are the risks to using cryptocurrency? Cryptocurrencies are
            still relatively new, and the market for these digital currencies is
            very volatile. Since cryptocurrencies don't need banks or any other
            third party to regulate them; they tend to be uninsured and are hard
            to convert into a form of tangible currency (such as US dollars or
            euros.) In addition, since cryptocurrencies are technology-based
            intangible assets, they can be hacked like any other intangible
            technology asset. Finally, since you store your cryptocurrencies in
            a digital wallet, if you lose your wallet (or access to it or to
            wallet backups), you have lost your entire cryptocurrency
            investment.
          </p>
          <br />

          <p>Follow these tips to protect your cryptocurrencies:</p>

          <li>
            Look before you leap! Before investing in a cryptocurrency, be sure
            you understand how it works, where it can be used, and how to
            exchange it. Read the webpages for the currency itself (such as
            Ethereum, Bitcoin or Litecoin) so that you fully understand how it
            works, and read independent articles on the cryptocurrencies you are
            considering as well.
          </li>
          <li>
            Use a trustworthy wallet. It is going to take some research on your
            part to choose the right wallet for your needs. If you choose to
            manage your cryptocurrency wallet with a local application on your
            computer or mobile device, then you will need to protect this wallet
            at a level consistent with your investment. Just like you wouldn't
            carry a million dollars around in a paper bag, don't choose an
            unknown or lesser-known wallet to protect your cryptocurrency. You
            want to make sure that you use a trustworthy wallet.
          </li>
          <li>
            Have a backup strategy. Think about what happens if your computer or
            mobile device (or wherever you store your wallet) is lost or stolen
            or if you don't otherwise have access to it. Without a backup
            strategy, you will have no way of getting your cryptocurrency back,
            and you could lose your investment.
          </li>
        </div>
      </Container>
    </div>
  );
}

export default About;
