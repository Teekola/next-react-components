import styled from "styled-components";
import Parallax from "../components/parallax";
import ParallaxBackgroundPiece from "../components/parallaxBackgroundPiece";
import heroParallax1 from "../public/images/hero-parallax-1.png";
import heroParallax2 from "../public/images/hero-parallax-2.png";
import heroParallax3 from "../public/images/hero-parallax-3.png";
import heroParallax4 from "../public/images/hero-parallax-4.png";
import heroParallax5 from "../public/images/hero-parallax-5.png";
import heroParallax6 from "../public/images/hero-parallax-6.png";

const StyledHero = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: none;

    .h1 {
        pointer-events: auto !important;
        text-align: center;
        position: absolute;
        top: 45vh;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-size: clamp(3rem, 10vw, 7rem);
        line-height: 1;
        text-shadow: 0px 30px 40px rgba(0,0,0,0.1);
    }

    @media screen and (min-width: 2000px) {
        .h1 {
            top: 35vh;
        }
    }
`

const StyledMain = styled.main`
    position: absolute;
    width: 100%;
    height: 300vh;
    background: black;
    top: calc(100vh + 10 * 1vh);
    z-index: -300;

    @media screen and (min-width: 600px) and (max-height: 600px) {
        top: calc(100vh + 40 * 1vw);
    }
`



export default function ParallaxDemo() {
    return (
        <>
            <StyledHero>
                <ParallaxBackgroundPiece imageSrc={heroParallax1} offset={0} y={0} zIndex={-500} />
                <ParallaxBackgroundPiece imageSrc={heroParallax2} offset={-20} y={200} zIndex={-400} />
                <ParallaxBackgroundPiece imageSrc={heroParallax3} offset={40} y={300} zIndex={-300} />
                <ParallaxBackgroundPiece imageSrc={heroParallax4} offset={90} y={400} zIndex={-200} />
                <ParallaxBackgroundPiece imageSrc={heroParallax5} offset={140} y={500} zIndex={-100} />
                <ParallaxBackgroundPiece imageSrc={heroParallax6} offset={200} y={600} zIndex={-50} />
                <Parallax offset={-100} zIndex={-300}><h1 className="h1">Parallax on siistiä!</h1></Parallax>
            </StyledHero>

            <StyledMain>
            </StyledMain>
        </>
    )
}