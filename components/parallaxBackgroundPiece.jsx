import Parallax from "./parallax";
import Image from "next/image";
import styled from "styled-components";

const StyledParallaxBackgroundPiece = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    min-height: 1080px;
    pointer-events: none;

    .image-container {
        position: relative;
        width: 100%;
        height: 100%;
    }
`

/** A Piece of a Parallax Background
 * @param {anything that can be put in Next/Image src}  imageSrc    Source of the image.
 * @param {Int}                                         offset      The Parallax component's offset. The higher the amount, the stronger the effect.
 * @param {Int}                                         y           The y position adjustment in pixels.
 * @param {Int}                                         zIndex      The z-index of the element.
 */
export default function ParallaxBackgroundPiece({ imageSrc, offset, y, zIndex }) {
    return (
        <StyledParallaxBackgroundPiece style={{ transform: `translateY(${y}px)`, zIndex }}>
            <Parallax offset={offset}>
                <div className="image-container">
                    <Image className="image" src={imageSrc} alt="background image" priority layout="fill" objectFit="cover" objectPosition="center top" draggable="false" />
                </div>
            </Parallax>
        </StyledParallaxBackgroundPiece>
    )
}