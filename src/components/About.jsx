import React from 'react'
import styled from 'styled-components';

//icons
import instagramLogo from './assets/images/instagram.svg'
import whatsappLogo from './assets/images/whatsapp.svg'
import githubLogo from './assets/images/github.svg'

import aboutSvg from './assets/images/about.svg'

const Wrapper =  styled.div`

    display:flex;
    flex-direction:column;
`;

const BackgroundImage = styled.div`
    z-index: -100;
    position: fixed;
    opacity: 0.4;
`;

const Content = styled.div`
    width: 50em;
    align-self: center;
    display:flex;
    margin-top: 5em;
`;

const Text = styled.div`
    font-size: 20px;
    margin-right: 1em;
`;
const Logos = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    align-self: stretch;
    border-left: 1px solid rgba(0,0,0,0.3);
    width: 10em;
   
    padding: 2em;
    /* height: 50em; */
`;

const Icon = styled.div`
    width: 50px;
    height: auto;
`;
function About() {
    return (
        <Wrapper>
            <BackgroundImage><img src={aboutSvg}/></BackgroundImage>
            <h1 className="text-center">About</h1>
            <Content>
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
                <Logos>
                    <Icon><img src={instagramLogo} /></Icon>
                    <Icon><img src={whatsappLogo} /></Icon>
                    <Icon><img src={githubLogo} /></Icon>
                </Logos>
            </Content>
        </Wrapper>
    )
}

export default About
