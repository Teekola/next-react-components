import Image from "next/image";

export default function GridImage({ src, alt, gridArea, objectPosition = "center center" }) {
    return (
        <div style={{ position: "relative", gridArea: gridArea }}>
            <Image className="image" src={src} alt={alt} layout="fill" objectFit="cover" objectPosition={objectPosition} draggable="false" />
        </div>
    )
}