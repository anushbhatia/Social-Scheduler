import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
//icons
import instagramLogo from './assets/images/instagram.svg';
import whatsappLogo from './assets/images/whatsapp.svg';
import githubLogo from './assets/images/github.svg';

import aboutSvg from './assets/images/about.svg';

import { device } from '../utils/screenSizes';

import { Jumbotron, Container, Card, Button, Row, Col } from 'react-bootstrap';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BackgroundImage = styled.img`
  @media ${device.mobileS} {
    align-self: center;
    max-width: 70%;
    flex-direction: column;
    postion: relative;
  }
  @media ${device.laptop} {
    max-width: 30%;
    flex-direction: row;
    margin-right: 2em;
  }
`;

const Content = styled.div`
  background-image: url(https://www.xmple.com/wallpaper/linear-white-gradient-highlight-blue-1920x1080-c2-ffffff-e0ffff-l-50-a-300-f-21.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  display: flex;
  width: 100%;
  margin: 0px;
  // box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  padding: 4em;
  @media ${device.mobileS} {
    flex-direction: column;
    margin: 0px;
    padding: 2em 20px;
    text-align: left;
  }
  @media ${device.laptop} {
    flex-direction: row;
    padding: 50px;
    margin: 0px;
  }
`;

const Text = styled.div`
  margin-right: 1em;
  font-family: 'Montserrat', sans-serif;
  font-weight: light;
  @media ${device.mobileS} {
    flex-direction: column;
    font-size: 15px;
  }
  @media ${device.laptop} {
    width: 60%;
    flex-direction: row;
    font-size: 18px;
  }
`;
const Logos = styled.div`
  display: flex;
  margin: 0px;
  justify-content: stretch;
  align-self: center;
  border-top: 1px solid rgba(0, 0, 0, 0.3);

  padding: 1em;
  /* height: 50em; */
`;
const Heading = styled.div`
  font-weight: bold;
  color: #15669c !important
  text-align: center;
  margin-right: 1em;
  font-family: 'Poppins', sans-serif; 
  padding-bottom:20px;
  @media ${device.mobileS} {
    flex-direction: column;
    text-align: left;
    font-size: 30px;
  }
  @media ${device.laptop} {
    width: 80%;
    flex-direction: row;
    font-size: 40px;
  }
`;
const HeaderMain = styled.div`
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
  color: white;
  text-shadow: 1px 1px rgb(25, 51, 82);
  @media ${device.mobileS} {
    flex-direction: column;
    text-align: center;
    font-size: 35px;
  }
  @media ${device.laptop} {
    font-size: 55px;
    flex-direction: row;
  }
`;
const Icon = styled.div`
  width: 50px;
  height: auto;
  margin: 0 2em;
`;

const Contact = styled.div`
  align-self: center;
  margin-top: 30px;
`;
const jumbotron = {
  backgroundImage:
    'url(https://image.freepik.com/free-vector/blue-social-media-background_1017-7008.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  margin: '0px',
};
function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Jumbotron style={jumbotron}>
        <Container>
          <HeaderMain>
            Lorem Ipsum is simply dummy text of the printing .
          </HeaderMain>
          <p style={{ color: 'grey', fontSize: '20px', margin: '50px' }}>
            We automatically send invite to all of your social media like
            LinkedIn, Facebook, email, WhatsApp, Instagram as soon as he
            finishes filling the form.
          </p>
        </Container>
      </Jumbotron>

      <Content data-aos="fade-up">
        {/* <BackgroundImage src={aboutSvg} /> */}
        <Text>
          <Heading>Who are we ?</Heading>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type men book.
          </p>
          <p>
            It has survived not only five centuries Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type men book. It has survived not only five centuries
          </p>
        </Text>
      </Content>
      <Content data-aos="fade-up">
        {/* <BackgroundImage src={aboutSvg} /> */}
        <Text>
          <Heading>What we do ?</Heading>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type men book.
          </p>
          <p>
            It has survived not only five centuries Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type men book. It has survived not only five centuries
          </p>
        </Text>
      </Content>

      <Content data-aos="fade-up">
        {/* <BackgroundImage src={aboutSvg} /> */}
        <Text>
          <Heading> Our Objective</Heading>
          <ul>
            <li> Regular Updates</li>
            <li> Fast and reliable</li>
            <li> Prior information to Deadline</li>
          </ul>
        </Text>
      </Content>
      <br></br>

      <Contact>
        <Heading
          style={{ margin: '0px', fontSize: '20px', textAlign: 'center' }}
        >
          Connect with us
        </Heading>
        <Logos>
          <Icon>
            <img src={instagramLogo} alt="Instagram Logo" />
          </Icon>
          <Icon>
            <img src={whatsappLogo} alt="WhatsApp Logo" />
          </Icon>
          <Icon>
            <img src={githubLogo} alt="GitHub Logo" />
          </Icon>
        </Logos>
      </Contact>
    </Wrapper>
  );
}

export default About;
