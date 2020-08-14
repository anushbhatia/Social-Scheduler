import React from 'react'
import styled from 'styled-components';

//icons
import instagramLogo from './assets/images/instagram.svg'
import whatsappLogo from './assets/images/whatsapp.svg'
import githubLogo from './assets/images/github.svg'

import aboutSvg from './assets/images/about.svg'

import {device} from '../utils/screenSizes'

const Wrapper =  styled.div`
    
    display:flex;
    flex-direction: column;

`;

const BackgroundImage = styled.img`


   @media ${device.mobileS} {
       align-self:center;
       max-width: 70%;
    flex-direction: column;
}
  @media ${device.laptop} { 
      max-width: 30%;
    flex-direction: row;
    margin-right: 2em;
  }
`;

const Content = styled.div`

    align-self: center;
    display:flex;
    margin: 5em 0;
    width: 80%;

    margin: auto auto;
    box-shadow: 10px 20px 20px rgba(0,0,0,0.5);
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
    
    @media ${device.mobileS} {
        flex-direction: column;

      }
      @media ${device.laptop} { 
        width: 60%;
        flex-direction: row;
      }
`;
const Logos = styled.div`
    display:flex;
    
    justify-content: stretch;
    align-self: center;
    border-top: 1px solid rgba(0,0,0,0.3);
    
   
    padding: 2em;
    /* height: 50em; */
`;

const Icon = styled.div`
    width: 50px;
    height: auto;
    margin: 0 2em;
`;
function About() {
    return (
        <Wrapper>
           <h1 className="text-center">About</h1>
            <Content>
            <BackgroundImage  src={aboutSvg}/>
                <Text>
                    There are many variations of passages of Lorem Ipsum available, 
                    but the majority have suffered alteration in some form, by injected 
                    humour, or randomised words which don't look even slightly believable. 
                    If you are going to use a passage of Lorem Ipsum, you need to be sure there 
                    isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum
                    generators on the Internet tend to repeat predefined chunks as necessary, making 
                    this the first true generator on the Internet. It uses a dictionary of over 200
                    Latin words, combined with a handful of model sentence structures, to generate 
                    Lorem Ipsum which looks reasonable. The generated 
                    Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                </Text>
                
              
            </Content>
            <Logos>
                    <Icon><img src={instagramLogo} /></Icon>
                    <Icon><img src={whatsappLogo} /></Icon>
                    <Icon><img src={githubLogo} /></Icon>
            </Logos>
        </Wrapper>
    )
}

export default About
