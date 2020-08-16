import React from 'react'
import styled from 'styled-components';
import useContri from '../lib/contributers'

function LandingPage() {
    let [data, err] = useContri()
    console.log(data) 
    return (
        <>
            <Wrapper>
                <h1 className="text-center">
                    Social Scheduler
                </h1>
            </Wrapper>
        </>
    )
}

const Wrapper =  styled.div`
`;

export default LandingPage
