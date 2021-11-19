import { Button } from "components";
import { useRouter } from "next/router";
import Image from "next/image";

export default function SuccessPin() {
	const router = useRouter();
	const goToHome = () => {
		router.push("/home/dashboard");
	};
	return (
		<>
			<section className="auth_pin-success-main">
				<Image
					src="/icons/success.svg"
					width={70}
					height={70}
					alt="Success Create Pin"
				/>
				<h3 className="auth_pin-success-title">
					Your PIN Was Successfully Created
				</h3>
				<p className="auth_pin-success-paragraph">
					Your PIN was successfully created and you can now access all the
					features in Zwallet. And now you can exploring Zwallet!
				</p>
				<div style={{ width: "63%" }}>
					<Button disabled={false} handleClick={goToHome}>
						Continue Home
					</Button>
				</div>
			</section>
		</>
	);
}
