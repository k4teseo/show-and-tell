import styled from "styled-components";

import { useTypewriter, Cursor } from "react-simple-typewriter";

const StyledDiv = styled.div`
    margin: auto;
    text-align: center;
`;

const StyledHeader = styled.h1`
    font-family: "American Typewriter", serif;
    font-weight: 400;
`;

const StyledSpan = styled.span`
    color: green;
    font-weight: bold;
`;

export default function App() {
    const [text] = useTypewriter({
        words: ['CS 411', 'HI 250', 'CS 330', 'EN 340'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 60,
        delaySpeed: 2000,
    });

    return (
        <StyledDiv>
            <StyledHeader>I am a Boston University Student.</StyledHeader>
            <StyledHeader>
                Next semester I'm taking: {' '}
                <StyledSpan>
                    {text}
                    <Cursor/>
                </StyledSpan>
            </StyledHeader>
        </StyledDiv>
    );
}