import { useState } from "react";
import Burger from "./burger";

export default function Navbar() {
    // State
    const [burgerOpen, setBurgerOpen] = useState(false);
    
    return (
        <Burger burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen}/>
    )
}