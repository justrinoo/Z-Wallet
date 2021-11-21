import { Layout, Sidebar } from "components";
import Image from "next/image";
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "utils/axios";
export default function ManagePhone() {
	const router = useRouter();
	const user = useSelector((state) => state.user);
	const noTelp = `${user.users.noTelp}`;
	const id = `${user.users.id}`;
	const setData = null;
	const deletePhoneNumber = async () => {
		try {
			if (confirm("Are you sure delete this phone number ?")) {
				const response = await axios.patch(`/user/profile/${id}`, {
					noTelp: setData,
				});
				router.push(`/home/profile/detail/${response.data.data.id}`);
			} else {
				return true;
			}
		} catch (error) {
			console.log(error.response);
		}
	};

	useEffect(() => {
		if (noTelp === "null") {
			router.push("/home/profile");
		}
	}, []);
	return (
		<>
			<Layout pageTitle="Profile | Manage Phone" valueNav={true}>
				<main className="container_main">
					<section className="row">
						<Sidebar />
						<section className="col profile_managephone-main mt-4">
							<h6 className="profile_main-information-detail-title">
								Manage Phone Number
							</h6>
							<p className="profile_main-information-detail-description">
								You can only delete the phone number and then you must add
								another phone number.
							</p>

							<div className="profile_managephone-card-description-phone">
								<div>
									<p>Primary</p>
									<h5>{noTelp}</h5>
								</div>
								<div
									className="profile_managephone-card-description-phone-delete"
									onClick={deletePhoneNumber}
								>
									<Image
										src="/icons/trash.svg"
										width={28}
										height={28}
										alt="Delete Phone"
									/>
								</div>
							</div>
						</section>
					</section>
				</main>
			</Layout>
		</>
	);
}
