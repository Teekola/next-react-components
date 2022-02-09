import styled from "styled-components";

const StyledLayout = styled.div`
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background};
`

const StyledMain = styled.main`
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 1rem;
`



export default function Layout({ children }) {
    return (
        <StyledLayout>
            <StyledMain>
                {children}
            </StyledMain>
        </StyledLayout>
    )
}