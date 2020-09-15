import React from 'react'
import styled from 'styled-components';
import SocialCards from "./SocialCard";

function LandingPage() {
    return (
        <>
            <Wrapper>
                <h1 className="text-center">
                    Social Scheduler
                </h1>
                
                <SocialCards />
                
            </Wrapper>
        </>
    )
}

const Wrapper =  styled.div`
`;

export default LandingPage
