import styled from "styled-components";
import Head from "next/head";

const StyledLayout = styled.div`
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background};
`

const StyledMain = styled.main`
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 1rem;
`


export const siteTitle = 'Next JS React Component Library';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{siteTitle}</title>
                <meta name="description" content="Components for Next JS projects." />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <StyledLayout>
                <StyledMain>
                    {children}
                </StyledMain>
            </StyledLayout>
        </>
    )
}