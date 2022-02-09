import styled from "styled-components";
import AnimateInView from "../components/animateInView";
import Layout from "../components/layout/layout";

const StyledPage = styled.div`
    margin: 10rem 0rem;
    display: grid;
    place-items: center;
    gap: 20rem;

`

const StyledBlock = styled.div`
    width: 250px;
    height: 250px;
    background: tomato;
`

export default function AnimateInViewDemo() {
    return (
        <Layout>
            <StyledPage>
                <AnimateInView><StyledBlock /></AnimateInView>
                <AnimateInView once><StyledBlock /></AnimateInView>
                <AnimateInView amount="some"><StyledBlock /></AnimateInView>
                <AnimateInView variants={{ visible: { rotate: 45 }, hidden: { rotate: -45 } }}><StyledBlock /></AnimateInView>
            </StyledPage>
        </Layout>
    )
}