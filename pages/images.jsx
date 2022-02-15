import styled from "styled-components";
import Image from "next/image";
import boatLandscape from "../public/images/images-demo/boat-landscape.jpg";
import Parallax from "../components/parallax";

const StyledPage = styled.div`
    min-height: 700vh;
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

function ParallaxHeroImage({ src, alt, offset = 20 }) {
    const heightOffset = Math.abs(offset);
    return (
        <Parallax offset={offset}>
            <div style={{ position: "relative", width: "100%", height: `calc(100% + ${heightOffset}px)` }}>
                <Image src={src} alt={alt} layout="fill" objectFit="cover" objectPosition="center center" priority draggable="false" />
            </div>
        </Parallax>
    )
}

const ResponsiveImage = ({ src, alt }) => (
    <Image src={src} alt={alt} layout="responsive" draggable="false" />
)


const GridImage = ({ src, alt, gridArea, objectPosition = "center center" }) => (
    <div style={{ position: "relative", gridArea: gridArea }}>
        <Image className="image" src={src} alt={alt} layout="fill" objectFit="cover" objectPosition={objectPosition} draggable="false" />
    </div>
)


function ParallaxGridImage({ src, alt, gridArea, objectPosition = "center center", offset = 50 }) {
    const heightOffset = Math.abs(offset);
    return (
        <div style={{ gridArea: gridArea, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
            <Parallax offset={offset}>
                <div style={{ position: "relative", width: "100%", height: `calc(100% + ${heightOffset}px)` }}>
                    <Image className="image" src={src} alt={alt} layout="fill" objectFit="cover" objectPosition={objectPosition} draggable="false" />
                </div>
            </Parallax>
        </div>
    )
}


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

            <section className="grid">
                <ParallaxGridImage src={boatLandscape} alt="boat" gridArea={"first"} />
                <ParallaxGridImage src={boatLandscape} alt="boat" gridArea={"second"} />
                <ParallaxGridImage src={boatLandscape} alt="boat" gridArea={"third"} />
                <ParallaxGridImage src={boatLandscape} alt="boat" gridArea={"fourth"} />
                <ParallaxGridImage src={boatLandscape} alt="boat" gridArea={"fifth"} />
                <ParallaxGridImage src={boatLandscape} alt="boat" gridArea={"sixth"} />
            </section>
        </StyledPage>
    )
}