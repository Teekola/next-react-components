import styled from "styled-components";
import boatLandscape from "../public/images/images-demo/boat-landscape.jpg";
import ParallaxHeroImage from "../components/imageComponents/parallaxHeroImage";
import ResponsiveImage from "../components/imageComponents/responsiveImage";
import GridImage from "../components/imageComponents/gridImage";

const StyledPage = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 15rem;

    .grid {
        height: 100vh;
        width: 90vw;
        margin: 0 auto;
        display: grid;
        gap: 1em;
        grid-template-areas:
            "first first second"
            "third fourth second"
            "third fourth second"
            "fifth sixth sixth"
    }
`

export default function ImagesDemo() {
    return (
        <StyledPage>
            <header style={{ height: "100vh", width: "max-width" }}>
                <ParallaxHeroImage offset={200} src={boatLandscape} alt="boat landscape" />
            </header>
            <section>
                <div style={{ width: "50vw", height: "50vh" }}>
                    <ResponsiveImage src={boatLandscape} />
                </div>
            </section>

            <section className="grid">
                <GridImage src={boatLandscape} alt="boat" gridArea={"first"} />
                <GridImage src={boatLandscape} alt="boat" gridArea={"second"} objectPosition="-300px center" />
                <GridImage src={boatLandscape} alt="boat" gridArea={"third"} />
                <GridImage src={boatLandscape} alt="boat" gridArea={"fourth"} />
            </section>
        </StyledPage>
    )
}