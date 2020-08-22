import React from 'react';
import styled from 'styled-components';

//icons
import instagramLogo from './assets/images/instagram.svg';
import whatsappLogo from './assets/images/whatsapp.svg';
import githubLogo from './assets/images/github.svg';

import aboutSvg from './assets/images/about.svg';

import { device } from '../utils/screenSizes';

import { Jumbotron, Container, Card, Button } from 'react-bootstrap';
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
  align-self: center;
  display: flex;

  width: 90%;
  margin: 30px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  padding: 2em;
  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.laptop} {
    flex-direction: row;
  }
`;

const Text = styled.div`
  font-size: 20px;
  margin-right: 1em;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  @media ${device.mobileS} {
    flex-direction: column;
  }
  @media ${device.laptop} {
    width: 60%;
    flex-direction: row;
  }
`;
const Logos = styled.div`
  display: flex;

  justify-content: stretch;
  align-self: center;
  border-top: 1px solid rgba(0, 0, 0, 0.3);

  padding: 2em;
  /* height: 50em; */
`;
const Heading = styled.div`
  font-weight: bold;
  color: #15669c !important
  text-align: center;
  margin-right: 1em;
  font-family: Georgia, 'Times New Roman', serif !important;
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
  font-weight: 900;
  color: black;
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
const jumbotron = {
  backgroundImage:
    'url(https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-031.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
};
function About() {
  return (
    <Wrapper>
      <Jumbotron style={jumbotron}>
        <Container>
          <HeaderMain>
            Lorem Ipsum is simply dummy text of the printing .
          </HeaderMain>
          <p style={{ color: 'grey', fontSize: '20px', margin: '40px' }}>
            We automatically send invite to all of your social media like
            LinkedIn, Facebook, email, WhatsApp, Instagram as soon as he
            finishes filling the form.
          </p>
        </Container>
      </Jumbotron>
      <Content>
        <BackgroundImage src={aboutSvg} />
        <Text>
          <Heading>Who are we ?</Heading>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type men book. It has survived not only five
          centuries Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type men book. It has survived not
          only five centuries
        </Text>
      </Content>
      <Content>
        <Text>
          <Heading>What we do ?</Heading>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type men book. It has survived not only five
          centuries Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type men book. It has survived not
          only five centuries
        </Text>
        <BackgroundImage src={aboutSvg} />
      </Content>
      <Content>
        <BackgroundImage src={aboutSvg} />
        <Text>
          <Heading> Our Objective</Heading>
          <ul>
            <li>
              {' '}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </li>
            <li>
              {' '}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </li>
            <li>
              {' '}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </li>
            <li>
              {' '}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </li>
          </ul>
        </Text>
      </Content>
      <br></br>

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
    </Wrapper>
  );
}

export default About;
