import { useState, useRef, useLayoutEffect, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useSpring, useReducedMotion } from "framer-motion";

// Fix issue with useLayoutEffect on first render
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// The component should be centered in its container when
// we have scrolled its container to the middle of the screen,
// but offset by a given amount of pixels when scrolled in either direction

/** A Wrapper for Elements to Add Parallax Effect.
 * @param {Int} offset  The strength of the parallax effect. The bigger the value, the more noticeable the effect.
 */
export default function Parallax({ children, offset = 50, stiffness = 400, damping = 90 }) {
    const [elementTop, setElementTop] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);

    // Hooks:
    // - Reference to the container
    // - Get the scrollY value
    // - Accessibility
    const containerRef = useRef();
    const { scrollY } = useViewportScroll();
    const prefersReducedMotion = useReducedMotion();

    // Start animating the element when it gets in the viewport,
    // and end animating when it has been scrolled by the given offset prop's amount
    const initial = elementTop - clientHeight;
    const final = elementTop + offset;

    // Get the transform value for the container's y-position:
    const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
    
    // Apply spring to ease the transform
    const y = useSpring(yRange, { stiffness, damping});

    // Set the values for elementTop and clientHeight on mount and on resize
    useIsomorphicLayoutEffect(() => {
        const element = containerRef.current;
        const onResize = () => {
            // Use getBoundingClientRect in order to get the offset relative to the viewport
            setElementTop(element.getBoundingClientRect().top + window.scrollY || window.pageYOffset);
            setClientHeight(window.innerHeight);
        }
        // Set the values on mount
        onResize();

        // Add resize eventlistener to set the values on resize as well
        window.addEventListener('resize', onResize);

        // Cleanup: remove eventlistener
        return () => window.removeEventListener('resize', onResize)
    }, [containerRef]);

    // Accessibility: if the user has enabled reduced motion on their device, do not use the parallax effect
    if (prefersReducedMotion) return <>{children}</>

    return (
        <motion.div ref={containerRef} style={{ y }}>
            {children}
        </motion.div>
    )
}