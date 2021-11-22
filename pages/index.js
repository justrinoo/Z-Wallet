import { Layout } from "components";

export default function Home() {
	return (
		<>
			<Layout pageTitle="Z-Wallet | Home">
				<main className="home-main">
					<div className="home-row">
						<section className="home-column">
							<h3 className="text-white">Zwallet</h3>
						</section>
						<section className="home-column">
							<button className="home-button-logged">Login</button>
							<button className="home-button-registration">Sign Up</button>
						</section>
					</div>
					<section className="home-column text-center">
						<h1
							style={{
								color: "#FFFFFF",
								fontWeight: 600,
								fontSize: "62px",
								width: "36%",
								margin: "0px auto",
								lineHeight: "4.5rem",
							}}
						>
							Awesome App For Saving Time.
						</h1>
						<p
							style={{
								color: "#FFFFFF",
								fontSize: "18px",
								width: "36%",
								margin: "40px auto",
							}}
						>
							We bring you a mobile app for banking problems that oftenly
							wasting much of your times.
						</p>
						<button className="home-try-free">Try It Free</button>
					</section>

					<section>
						<h1 className="home-title-choose-zwallet">Why Choose Zwallet?</h1>
					</section>
				</main>
			</Layout>
		</>
	);
}
