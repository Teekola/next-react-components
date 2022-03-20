import styled from "styled-components";
import Button from "../components/buttons/button";
import Switch from "../components/buttons/switch";
import LinkButton from "../components/buttons/linkButton";


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
            <LinkButton href="/">Back to Home</LinkButton>
            <Switch />
        </StyledPage>
    )
}