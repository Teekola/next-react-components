import { motion } from "framer-motion";

/** Wrapper Component to Animate Components When They Enter the Viewport
 * @prop {boolean}                 once        If true, once the element has entered the viewport it will remain in the whileInView state. No further viewport callbacks will be triggered.
 * @prop {"some" | "all" | number} amount      The amount of the element that has to intersect with the viewport in order for it to be considered within view.
 * @prop {JSON}                    variants    Variants for the animation. Must contain JSON-objects "visible" and "hidden".
 */
export default function AnimateInView({ once, amount, variants }) {

    // Use props to set values for once, amount and variants
    // if they are given. Otherwise use default values
    const animateOnce = once ? once : true;
    const animationTreshold = amount ? amount : "all";
    const animationVariants = variants ? variants : {
        visible: { opacity: 1, x: 0, transition: { type: "spring", duration: 0.4, ease: "easeIn" } },
        hidden: { opacity: 0, x: -200, transition: { type: "spring", duration: 0.4, ease: "easeIn" } }
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible" viewport={{ once: animateOnce, amount: animationTreshold }}
            variants={animationVariants}
        >
            {props.children}
        </motion.div>
    )
}