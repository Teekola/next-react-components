import styled from "styled-components";
import Parallax from "../components/parallax";
import Image from "next/image";
import heroLayer6 from "../public/images/hero-layer-6.png";
import heroLayer5 from "../public/images/hero-layer-5.png";
import heroLayer4 from "../public/images/hero-layer-4.png";
import heroLayer3 from "../public/images/hero-layer-3.png";
import heroLayer2 from "../public/images/hero-layer-2.png";
import heroLayer1 from "../public/images/hero-layer-1.png";

const StyledPage = styled.div`
    margin: 0 auto;
    min-height: 200vh;
    background: linear-gradient(0deg,rgb(0,0,0) 50%, rgb(255,255,255) 100%);
    
    .image-container {
        position: relative;
        height: 100vh;
    }

    .image-positioner {
        position: absolute;
        height: 100%;
        width: 100%;
    }
`

export default function ParallaxDemo() {
    return (
        <StyledPage>
            <div style={{ position: "relative", height: "100vh" }}>
                <Image src={heroLayer6} layout="fill" objectFit="cover" />
            </div>

            <div className="image-positioner" style={{ top: "10vh" }}>
                <Parallax offset={40}>
                    <div className="image-container">
                        <Image src={heroLayer5} priority layout="fill" objectFit="cover" />
                    </div>
                </Parallax>
            </div>
            <div className="image-positioner" style={{ top: "10vh" }}>
                <Parallax offset={80}>
                    <div className="image-container">
                        <Image src={heroLayer4} priority layout="fill" objectFit="cover" />
                    </div>
                </Parallax>
            </div>
            <div className="image-positioner" style={{ top: "10vh" }}>
                <Parallax offset={120}>
                    <div className="image-container">
                        <Image src={heroLayer3} priority layout="fill" objectFit="cover" />
                    </div>
                </Parallax>
            </div>
            <div className="image-positioner" style={{ top: "8vh" }}>
                <Parallax offset={160}>
                    <div className="image-container">
                        <Image src={heroLayer2} priority layout="fill" objectFit="cover" />
                    </div>
                </Parallax>
            </div>
            <div className="image-positioner" style={{ top: "53vh" }}>
                <Parallax offset={200}>
                    <div className="image-container">
                        <Image src={heroLayer1} priority layout="fill" objectFit="cover" />
                    </div>
                </Parallax>
            </div>

        </StyledPage>
    )
}