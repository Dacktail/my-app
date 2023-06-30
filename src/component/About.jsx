import React from "react";
import { Button, Card, Container, Image,Col } from "react-bootstrap";
import "./About.css";
import img4 from "../photo/img4.jpg";

function About() {
  return (
    <div className="cards">
      <Container xs={6} md={4} >
        <div className="container-xl">
          <Card className="card-about ">
            <Col xs={6} md={4} lg={12}>
              <Image
                src={img4}
                style={{ width: "100%", height: "75vh" }}
                thumbnail
              />
            </Col>

            <Card.Body>
              <Card.Title>
                <h1>WHO I AM</h1>
              </Card.Title>
              <Card.Text>
                I am a Full Stack Web Developer with a passion for creating
                websites and applications. I have a background in web
                development and a passion for learning new technologies. I have
                a background in web development and a passion for learning new
                technologies.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="container">
          <div className="container row col-12 card1 mt-5">
            <Card style={{ width: "25rem" }}>
              <Card.Img
                variant="top"
                src="https://images.vexels.com/media/users/3/204038/raw/32171678949026310a36e6aa73536f45-web-developer-logo-design.jpg"
              />
              <Card.Body>
                <Card.Title>Web Developer</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className=" row col-12 mt-5 card2">
            <Card style={{ width: "25rem" }}>
              <Card.Img
                variant="top"
                src="https://minervainfotech.com/blog/wp-content/uploads/2019/09/Untitled-6-1920x1280.jpg"
                style={{ height: "230px" }}
              />
              <Card.Body>
                <Card.Title>UI | UX Developer</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className="container row col-12 card1 mt-5">
            <Card style={{ width: "25rem" }}>
              <Card.Img
                variant="top"
                src="https://morpho.nu/wp-content/uploads/2019/08/99710.jpg"
              />
              <Card.Body>
                <Card.Title>Java Developer</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>

          <div className=" row col-12 mt-5 card2">
            <Card style={{ width: "25rem" }}>
              <Card.Img
                variant="top"
                src="https://miro.medium.com/v2/resize:fit:3960/1*taf9WHc3BPmhbxyKEu2jIg.png"
              />
              <Card.Body>
                <Card.Title>Python Developer</Card.Title>
                <Card.Text>
                  A Python developer is a programmer who specializes in writing
                  applications and software using the Python programming
                  language. Python is a versatile and popular language known for
                  its simplicity, readability, and vast ecosystem of libraries
                  and frameworks.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
