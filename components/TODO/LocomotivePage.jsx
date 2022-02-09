import styled from "styled-components";

const StyledContainer = styled.div`
    background: #222;
    width: 100%;
    height: 100%;
    min-height: 100vh;

    .page {
        padding-top: 10rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .section {
        width: 100%;
        max-width: var(--page-max-width);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    h1 {
        font-size: 4rem;
        margin: 0;
        padding: 0;
        color: white;
    }

    .colored {
        background: #555;
        width: 100%;
        height: 100vh;
        align-items: center;
    }
`

export default function LocomotivePage() {
    return (
        <StyledContainer data-scroll-section>
            <div className="page">
                <section className="section hero">
                    <h1 >Hello, Locomotive Scroll!</h1>
                </section>

                <section data-scroll data-scroll-speed="0.5" className="section colored">
                    <h1 data-scroll data-scroll-speed="2" data-scroll-direction="vertical">Hello, here we have some parallax!</h1>
                </section>

                <section className="section colored">
                    <h1 data-scroll data-scroll-speed="1" data-scroll-direction="horizontal">Oh, and another one!</h1>
                </section>
            </div>
        </StyledContainer>
    )
}