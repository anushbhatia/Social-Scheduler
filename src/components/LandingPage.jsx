import React from 'react'
import "../../node_modules/video-react/dist/video-react.css"; // import css
// import "~video-react/styles/scss/video-react"; // or import scss
import { Player } from 'video-react';
import classes from './assets/css/LandingPage.module.css'
import styled from 'styled-components';

function LandingPage() {
    return (
        <>
            <Wrapper>
                <h1 className="text-center">
                    Social Scheduler
                </h1>
            </Wrapper>
            <div className={classes.Description}>
                <h2>Social Media is everywhere.<br/>Why not to use it for events management?</h2>
                <h3>Fill the from to get the updates (like deadlines, important announcments) on your Social Media.</h3>
                <div className={classes.Player}>
                    <Player
                        playsInline
                        autoPlay={true}
                        // fluid={false}
                        // width={'70%'}
                        poster="/assets/poster.png"
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                    />
                </div>
            </div>
        </>
    )
}

const Wrapper =  styled.div`
`;

export default LandingPage
