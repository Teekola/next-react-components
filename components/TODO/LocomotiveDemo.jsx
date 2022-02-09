import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import LocomotivePage from "./LocomotivePage";
import "./locomotive.css";


// Required packages: locomotive-scroll, react-locomotive-scroll
// More information: https://github.com/locomotivemtl/locomotive-scroll
export default function LocomotiveDemo() {
    const containerRef = useRef(null);

    // Options:
    // el: elements to add scrolling to, select all elements with attribute 'data-scroll-container'
    // smooth: enable smooth scroll
    // multiplier: scrolling speed multiplier
    // lerp: smoothness off scroll (default 0.1, the smaller the smoother)
    // Tablet: breakpoint 0, smooth: true: enables smooth scroll for smaller devices (not recommended for performance)
    // More options: https://github.com/locomotivemtl/locomotive-scroll
    const locomotiveOptions = {
        smooth: true,
        multiplier: 1,
        lerp: 0.09,
        tablet: {
            breakpoint: 0,
            smooth: true
        }
    }

    const locomotiveWatch = [];


    return (
        <LocomotiveScrollProvider
            options={locomotiveOptions}
            watch={locomotiveWatch}
            containerRef={containerRef}
        >
            <div className="App" data-scroll-container ref={containerRef}>
                <LocomotivePage />
            </div>
        </LocomotiveScrollProvider>
    )
}