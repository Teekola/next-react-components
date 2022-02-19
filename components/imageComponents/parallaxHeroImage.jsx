import Image from "next/image";
import Parallax from "../parallax";

export default function ParallaxHeroImage({ src, alt, offset = 20 }) {
    const heightOffset = Math.abs(offset);
    return (
        <Parallax offset={offset}>
            <div style={{ position: "relative", width: "100%", height: `calc(100% + ${heightOffset / 2}px)` }}>
                <Image src={src} alt={alt} layout="fill" objectFit="cover" objectPosition="center center" priority draggable="false" />
            </div>
        </Parallax>
    )
}