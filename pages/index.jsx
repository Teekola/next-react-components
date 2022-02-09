import Link from "next/link";
import styled from "styled-components";
import Layout from "../components/layout/layout";

const StyledHome = styled.div`
`

export default function Home() {
	return (
		<Layout>
			<StyledHome>
				<h1>Home</h1>
				<Link href="/navbar"><a>Navbar</a></Link>
				<Link href="/animateInView"><a>Animate In View</a></Link>
			</StyledHome>
		</Layout>
	)
}