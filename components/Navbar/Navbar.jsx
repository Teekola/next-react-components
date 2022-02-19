import { useState } from "react";
import Link from "next/link";
import Burger from "./burger";

const Navlink = ({ href, text }) => (
    <Link href={href}>
        <a>{text}</a>
    </Link>
)

function Navlinks() {
    return (
        <>
            <Navlink href="/" text="Home" />
            <Navlink href="/" text="Home2" />
            <Navlink href="/" text="Home3" />
        </>
    )
}

export default function Navbar() {
    // State
    const [burgerOpen, setBurgerOpen] = useState(false);

    return (
        <>
            <Burger burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
            <Navlinks />
        </>
    )
}