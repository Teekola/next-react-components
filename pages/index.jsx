import Link from "next/link";
import styled from "styled-components";
import Layout from "../components/layout/layout";

const StyledHome = styled.div`
	ul {
		display: grid;
		gap: .5rem;
	}
`

export default function Home() {
	return (
		<Layout>
			<StyledHome>
				<h1>Home</h1>
				<ul>
					<Link href="/navbar"><a>Navbar</a></Link>
					<Link href="/animateInView"><a>Animate In View</a></Link>
				</ul>
			</StyledHome>
		</Layout>
	)
}