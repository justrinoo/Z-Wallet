import { Layout, Footer } from "components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "utils/axios";

export default function Home() {
	const token = Cookies.get("token");
	const router = useRouter();
	const user = useSelector((state) => state.user);
	const [dropdownMenu, setDropdownMenu] = useState(false);
	const image = `${user.users.image}`;
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	const testiUserDummy = [
		{
			photo: "/images/face1.png",
			name: "Sherina Chaw",
			role: "Software Engineering",
			feedback:
				"“I use this app since 2 years ago and this is the best app that I’ve ever use in my entire life”",
		},
		{
			photo: "/images/face2.png",
			name: "Jessica Mera",
			role: "Designer",
			feedback:
				"“I use Zwallet to manage all financial needs. It’s super easy to use and it’s 100% free app”",
		},
		{
			photo: "/images/face2.png",
			name: "Yuna Miko",
			role: "Software Engineering",
			feedback:
				"“This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”",
		},
	];

	const showDropdown = () => {
		if (dropdownMenu === true) {
			setDropdownMenu(false);
		} else {
			setDropdownMenu(true);
		}
	};

	const handleLogout = async () => {
		await axios.post("/auth/logout");
		setDropdownMenu(false);
		Cookies.remove("token");
		Cookies.remove("user_id");
		localStorage.clear();
		router.push("/");
	};

	return (
		<>
			<Layout pageTitle="Z-Wallet | Home">
				<main className="home-main">
					{/* Navbar */}
					<section className="home-rows container_main">
						<section className="home-column mt-4">
							<Link href="/" passHref>
								<span className="home-title-brand">Zwallet</span>
							</Link>
						</section>
						<section className="home-column home-column-mobile mt-4">
							{token ? (
								<div className="d-flex">
									<button
										className="home-auth-button-regist mx-3"
										onClick={() => router.push("/auth/login")}
									>
										Home
									</button>
									<img
										src={
											image === "null"
												? `https://inspektorat.kotawaringinbaratkab.go.id/public/uploads/user/default-user-imge.jpeg`
												: `${process.env.BASE_URL_PROD}/uploads/${image}`
										}
										width={52}
										style={{
											borderRadius: 14,
											objectFit: "cover",
											cursor: "pointer",
										}}
										height={52}
										onClick={showDropdown}
										alt="Profile"
									/>
								</div>
							) : (
								<>
									<button
										className="home-auth-button-logged"
										onClick={() => router.push("/auth/login")}
									>
										Login
									</button>
									<button
										className="home-auth-button-regist"
										onClick={() => router.push("/auth/registration")}
									>
										Sign Up
									</button>
								</>
							)}
						</section>
					</section>
					{/* Dropdown Menu */}
					{dropdownMenu ? (
						<div
							className="dropdown_menu_mobile bg-white position-absolute p-3 mt-4"
							style={{ right: 90, borderRadius: 8, width: "10%" }}
						>
							<Link passHref href="/home/dashboard">
								<span className="fw-bold text-primary d-block d-md-none text-decoration-none mb-3">
									Home
								</span>
							</Link>
							<button
								onClick={handleLogout}
								className="fw-bold text-primary"
								style={{
									border: "none",
									backgroundColor: "transparent",
									margin: "0px auto",
								}}
							>
								Logout
							</button>
						</div>
					) : null}
					{/* End Dropdown Menu */}
					{/* End Navbar */}
					{/* HERO */}
					<section className="hero-rows text-center">
						{/* <img
							src="/images/wave-landing.png"
							className="home-wave"
							alt="Wave Line"
						/> */}
						<h1 className="hero-title">Awesome App For Saving Time.</h1>
						<p className="hero-paragraph">
							We bring you a mobile app for banking problems that oftenly
							wasting much of your times.
						</p>
						<button
							className="home-auth-button-regist"
							onClick={() => router.push("/auth/login")}
						>
							Try it Free
						</button>
					</section>
					{/* ENd HERO */}
				</main>
				{/* WHY ZWALLET */}
				<section className="features-main">
					<section className="container_main text-center pt-5">
						<h1 className="features-title-brand-active">
							Why <span className="features-title-brand">Choose Zwallet?</span>
						</h1>

						<p className="features-description">
							We have some great features from the application and it’s totally
							free to use by all users around the world.
						</p>

						<div className="row mt-5">
							<div className="col-md-4 features-card">
								<Image
									src="/images/telp.png"
									width={60}
									height={60}
									alt="24/7 Support"
								/>
								<h4 className="features-title-primary">24/7 Support</h4>
								<p className="features-title-description-primary">
									We have 24/7 contact support so you can contact us whenever
									you want and we will respond it.
								</p>
							</div>
							<div className="col-md-4 features-card">
								<Image
									src="/images/lock.png"
									width={60}
									height={60}
									alt="Data Privacy"
								/>
								<h4 className="features-title-primary">Data Privacy</h4>
								<p className="features-title-description-primary">
									We make sure your data is safe in our database and we will
									encrypt any data you submitted to us.
								</p>
							</div>
							<div className="col-md-4 features-card">
								<Image
									src="/images/download.png"
									width={60}
									height={60}
									alt="Easy Download"
								/>
								<h4 className="features-title-primary">Easy Download</h4>
								<p className="features-title-description-primary">
									Zwallet is 100% totally free to use it’s now available on
									Google Play Store and App Store.
								</p>
							</div>
						</div>
					</section>
				</section>
				{/* END WHY ZWALLET */}
				{/* OUR SPONSORS */}
				<section className="container_main bg-light p-5">
					<div className="row mx-auto our_sponsors_main">
						<div className="col-md-2">
							<Image
								src="/images/airbnb.png"
								width={131}
								height={75}
								alt="Sponsor"
							/>
						</div>
						<div className="col-md-2">
							<Image
								src="/images/canon.png"
								width={131}
								height={75}
								alt="Sponsor"
							/>
						</div>
						<div className="col-md-2">
							<Image
								src="/images/dropbox.png"
								width={131}
								height={75}
								alt="Sponsor"
							/>
						</div>
						<div className="col-md-2">
							<Image
								src="/images/handm.png"
								width={131}
								height={75}
								alt="Sponsor"
							/>
						</div>
						<div className="col-md-2">
							<Image
								src="/images/microsoft.png"
								width={131}
								height={75}
								alt="Sponsor"
							/>
						</div>
						<div className="col-md-2">
							<Image
								src="/images/dell.png"
								width={131}
								height={75}
								alt="Sponsor"
							/>
						</div>
					</div>
				</section>
				{/* END OUR SPONSORS */}
				{/* TOTAL MONEY TRANSFER */}
				<section className="total_transfer-main container_main text-center mt-5">
					<h3 className="total_transfer-total-money">Rp. 390.736.500</h3>
					<h2 className="total_transfer-title">
						<spa className="total_transfer-title-active">Money</spa> has Been
						Transfered.
					</h2>
					<p className="total_transfer-description">
						That amount of money has been transfered from all users. We still
						counting and going strong!
					</p>
				</section>
				{/* END TOTAL MONEY TRANSFER */}
				{/* PRIMARY FEATURES */}
				<section className="primary-features">
					<section className="container_main">
						<div className="row primary-features-title-container">
							<div className="col mt-5 mb-5 ">
								<img
									src="/images/phone-features.png"
									className="phone-features"
									alt="Phone"
								/>
							</div>
							<div className="col mt-5 mb-5">
								<h1 className="primary-features-title">
									All The{" "}
									<span className="primary-features-title-active">Great</span>{" "}
									<br /> Zwallet Features.
								</h1>
								<div className="primary-features-list">
									<div className="primary-features-list-num">
										<span>1.</span>
										<p className="primary-features-list-title">Small Fee</p>
									</div>
									<p className="primary-featuers-list-desc">
										We only charge 5% of every success transaction done in
										Zwallet app.
									</p>
								</div>
								<div className="primary-features-list">
									<div className="primary-features-list-num">
										<span>2.</span>
										<p className="primary-features-list-title">Data Secured</p>
									</div>
									<p className="primary-featuers-list-desc">
										All your data is secured properly in our system and it’s
										encrypted.
									</p>
								</div>
								<div className="primary-features-list">
									<div className="primary-features-list-num">
										<span>3.</span>
										<p className="primary-features-list-title">User Friendly</p>
									</div>
									<p className="primary-featuers-list-desc">
										Zwallet come up with modern and sleek design and not
										complicated.
									</p>
								</div>
							</div>
						</div>
					</section>
				</section>
				{/* End PRIMARY FEATURES */}

				{/* Testimonials */}
				<section className="testimonial-main container_main text-center pt-5">
					<h1 className="testimonial-title">
						What Users are{" "}
						<span className="testimonial-title-active">Saying.</span>
					</h1>
					<p className="testimonial-description">
						We have some great features from the application and it’s totally
						free to use by all users around the world.
					</p>
					<Carousel responsive={responsive}>
						{testiUserDummy.map((user, idx) => (
							<div className="testimonial-card" key={idx}>
								<Image
									src={user.photo}
									width={120}
									height={120}
									alt="User Testimonial"
								/>
								<h4 className="testimonial-card-title-name">{user.name}</h4>
								<p className="testimonial-card-title-role">{user.role}</p>
								<p className="testimonial-card-title-feedback">
									{user.feedback}
								</p>
							</div>
						))}
					</Carousel>
				</section>
				{/* End Testimonials */}

				{/* Footer */}
				<Footer />
				{/* End Footer */}
			</Layout>
		</>
	);
}
