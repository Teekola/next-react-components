import { useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

const StyledNavbar = styled.nav`
    /* NAVBAR CONTENTS */
    .nav-container {
        max-width: var(--page-max-width);
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }

    /* NAVIGATION LINKS */
    .navlinks {
        display: none;
        list-style: none;
        padding: 0;
        gap: 2rem;
    }

    .navlink {
        opacity: 1;
    }

    .mobile-navlinks {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        list-style: none;
        height: 100vh;
        width: 100vw;
        background: #25222ff9;
    }

    /* LOGO */
    .logo {
        position: relative;
        z-index: 101;
    }

    /* HAMBURGER MENU */
    .burger {
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
    }

    .burger div {
        width: 100%;
        height: 6px;
        transform-origin: 3px;
        border-radius: 1rem;
        background: var(--white);
    }

    @media screen and (min-width: 1024px) {
        .burger {
            display: none;
        }

        .mobile-navlinks {
            display: none;
        }

        .navlinks {
            display: flex;
        }
    }
`
const StyledBar = styled(motion.div)`
    position: "fixed";            /* Fixed positioning makes the navbar stay in view when scrolling*/
    left: 0;                      /* Position to the left */
    top: 0;                       /* Position to the top */
    width: "100%";                /* Navbar background full screen width */
    z-index: 100;                 /* Must be set to higher value than any other element to appear always on top */
    background: #25222ff9;      /* Background color with alpha value to make it transparent */
    padding: "1rem";
`

export default function Navbar() {
    // State
    const [burgerOpen, setBurgerOpen] = useState(false);

    // Animation controls for motion components
    const burgerControls = useAnimation();

    // Transition values for variants
    const transitions = {
        burger: { duration: .3, ease: "easeInOut" },

        navlinksOpen: { duration: .2, ease: "easeInOut", when: "beforeChildren", staggerChildren: .05 },
        navlinksClose: { duration: .2, ease: "easeInOut", when: "afterChildren", staggerChildren: .05, staggerDirection: -1 },
        navlinkOpen: { duration: .2, ease: "easeInOut" },
        navlinkClose: { duration: .15, ease: "easeInOut" }
    }

    // Variants for motion components
    const variants = {
        // Burger
        burger: {
            open: {},
            close: {}
        },
        burgerLine1: {
            open: { rotate: 45, x: 6, transition: transitions.burger },
            close: { rotate: 0, x: 0, transition: transitions.burger }
        },
        burgerLine2: {
            open: { rotate: 45, x: 6, y: -15, transition: transitions.burger },
            close: { rotate: 0, x: 0, y: 0, transition: transitions.burger }
        },
        burgerLine3: {
            open: { rotate: -45, x: 6, transition: transitions.burger },
            close: { rotate: 0, x: 0, transition: transitions.burger }
        },

        // Navlinks
        navlinks: {
            open: { height: "100vh", y: 0, transition: transitions.navlinksOpen },
            close: { height: "auto", y: -150, transition: transitions.navlinksClose },
        },
        navlink: {
            open: { opacity: 1, x: 0, transition: transitions.navlinkOpen },
            close: { opacity: 0, x: 200, transition: transitions.navlinkClose }
        }
    }

    const handleBurgerClick = () => {
        // Start correct Hamburger menu animation and set correct state
        burgerOpen ? burgerControls.start("close") : burgerControls.start("open");
        setBurgerOpen(!burgerOpen);
    }

    const handleMobileNavlinkClick = () => {
        burgerControls.start("close");
        setBurgerOpen(false);
    }

    return (
        <StyledBar className="navbar-motion">
            <StyledNavbar>
                <div className="nav-container">
                    <h3 className="logo">
                        LOGO
                    </h3>

                    <motion.ul className="navlinks">
                        <motion.li className="navlink">Home</motion.li>
                        <motion.li className="navlink">Products</motion.li>
                        <motion.li className="navlink">About</motion.li>
                    </motion.ul>

                    <motion.div className="burger" initial="close" animate={burgerControls} variants={variants.burger} onClick={() => handleBurgerClick()}>
                        <motion.div className="burger-line1" variants={variants.burgerLine1}></motion.div>
                        <motion.div className="burger-line2" variants={variants.burgerLine2}></motion.div>
                        <motion.div className="burger-line3" variants={variants.burgerLine3}></motion.div>
                    </motion.div>
                </div>
            </StyledNavbar>
        </StyledBar>

    )
}