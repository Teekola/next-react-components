import Image from "next/image";

export default function ResponsiveImage ({ src, alt }) {
    return <Image src={src} alt={alt} layout="responsive" draggable="false" />;
}