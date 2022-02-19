import { useState } from "react";
import Link from "next/link";
import Burger from "./burger";

const Navlink = ({ href, text }) => (
    <Link href={href}>
        <a>{text}</a>
    </Link>
)

export default function Navbar() {
    // State
    const [burgerOpen, setBurgerOpen] = useState(false);

    return (
        <>
            <Burger burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
            <Navlink />
        </>
    )
}