import styled from "styled-components";
import { motion } from "framer-motion";

const StyledButton = styled(motion.button)`
    --background: ${({ theme }) => theme.colors.cta};
    --backgroundHover: ${({ theme }) => theme.colors.ctaHover};
    --text: ${({ theme }) => theme.colors.ctaText};
    --textHover: ${({ theme }) => theme.colors.ctaTextHover};
    --shadow: ${({ theme }) => theme.shadows.default};

    padding: 1em 3em;
    border-radius: 1em;
    background: var(--background);
    color: var(--text);
    font-weight: bold;
    box-shadow: var(--shadow);

    :focus:not(:focus-visible) {
        outline: none;
    }

    :hover {
        background: var(--backgroundHover);
        color: var(--textHover);
    }
`

export default function Button({ children }) {
    const buttonVariants = {
        tap: {
            scale: .9,
            transition: { type: "spring", duration: .1, ease: "easeInOut" }
        },   
    }

    return (
        <StyledButton whileHover="hover" whileTap="tap" variants={buttonVariants}>
            {children}
        </StyledButton>
    )
}