import Button from "../components/buttons/button";
import styled from "styled-components";

const StyledPage = styled.div`
    background: ${({ theme }) => theme.colors.background};
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    justify-content: center;
    align-items: center;
`

export default function ButtonsDemo() {
    return (
        <StyledPage>
            <Button>Button Text</Button>
            <Button>Button Text</Button>
            <Button>Button Text</Button>
        </StyledPage>
    )
}