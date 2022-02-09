import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";

const StyledSwitch = styled.div`
    width: 4em;
    height: 2em;
    border-radius: 1.5em;
    display: flex;
    align-items: center;
    padding: .25rem;
    cursor: pointer;
    background-color: ${({ theme, isOn }) => isOn ? theme.colors.accent1 : theme.colors.accent2};
    justify-content: ${({ isOn }) => isOn ? "flex-end" : "flex-start"};
    transition: background-color 300ms ease;
    box-shadow: ${({ theme }) => theme.shadows.default};

    .circle {
        display: block;
        width: 1.5em;
        height: 1.5em;
        background-color: white;
        border-radius: 50%;
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.02);
    }

    :focus-visible {
        outline: 2px solid blue;
    }
`

export default function Switch() {
    const [isOn, setIsOn] = useState(false);

    const switchButton = useRef();

    const transition = { type: "spring", stiffness: 700, damping: 40, duration: .3, ease: "easeInOut" };

    // Allow toggling with enter
    const handleEnterDown = (e) => {
        if (e.keyCode === 13) {
            switchButton.current.click();
        }
    }

    return (
        <StyledSwitch
            ref={switchButton}
            tabIndex="0"
            isOn={isOn}
            onClick={() => setIsOn(!isOn)}
            onKeyDown={(e) => handleEnterDown(e)}
        >
            <motion.div layout transition={transition} className="circle"></motion.div>
        </StyledSwitch>
    )
}