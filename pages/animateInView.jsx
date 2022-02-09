import styled from "styled-components";
import AnimateInView from "../components/animateInView";

const StyledPage = styled.div`

`

const StyledBlock = styled.div`
    width: 50%;
    height: 50%;
`

export default function AnimateInViewDemo() {
    return (
        <StyledPage>
            <StyledBlock />
        </StyledPage>
    )
}