import styled from "styled-components";
import { motion, useAnimation } from "framer-motion"

const StyledBurger = styled(motion.div)`
    position: relative;
    margin-right: 1rem;
    z-index: 101;
    height: 48px;
    width: 48px;
    padding: 6px 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    .line {
        width: 100%;
        height: 6px;
        transform-origin: 3px;
        border-radius: 1rem;
        background: black;
    }

    @media screen and (min-width: 1024px) {
        //display: none;
    }
`
export default function Burger({ burgerOpen, setBurgerOpen }) {
    // Animation controls
    const burgerControls = useAnimation();

    // Transition settings
    const transition = {
        duration: .3, 
        ease: "easeInOut"
    }

    // Variants
    const variants = {
        burger: {
            open: {},
            close: {}
        },
        burgerLine1: {
            open: { rotate: 45, x: 6, transition: transition },
            close: { rotate: 0, x: 0, transition: transition }
        },
        burgerLine2: {
            open: { rotate: 45, x: 6, y: -15, transition: transition },
            close: { rotate: 0, x: 0, y: 0, transition: transition }
        },
        burgerLine3: {
            open: { rotate: -45, x: 6, transition: transition },
            close: { rotate: 0, x: 0, transition: transition }
        }
    };

    const handleBurgerClick = () => {
        // Start correct Hamburger menu animation and set correct state
        burgerOpen ? burgerControls.start("close") : burgerControls.start("open");
        setBurgerOpen(!burgerOpen);
    }
    
    return (
        <StyledBurger className="burger" initial="close" animate={burgerControls} variants={variants.burger} onClick={handleBurgerClick}>
            <motion.div className="line" variants={variants.burgerLine1}></motion.div>
            <motion.div className="line" variants={variants.burgerLine2}></motion.div>
            <motion.div className="line" variants={variants.burgerLine3}></motion.div>
        </StyledBurger>
    );
}