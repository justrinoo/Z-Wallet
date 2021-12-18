import { useRouter } from "next/router";
import { Layout, Sidebar, Input } from "components";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import axios from "utils/axios";
import { useEffect, useState } from "react";
import { getUserById } from "store/actions/user";
export default function DetailProfile() {
	const dispatch = useDispatch();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const router = useRouter();
	const { id } = router.query;
	console.log("id =>", id);
	const [statusChangeFirstName, setStatusChangeFirstName] = useState(false);
	const [statusChangeLastName, setStatusChangeLastName] = useState(false);
	const user = useSelector((state) => state.user);

	const data = user.users;

	const changeUpdateName = async (event) => {
		try {
			if (event.key === "Enter") {
				const response = await axios.patch(`/user/profile/${id}`, {
					firstName,
					lastName,
				});
				dispatch(getUserById(response.data.data.id));
				setStatusChangeFirstName(false);
				setStatusChangeLastName(false);
			}
		} catch (error) {
			new Error(error.response);
		}
	};

	useEffect(() => {
		dispatch(getUserById(id));
	}, []);

	const changeStatusFirstNameInput = () => {
		setStatusChangeFirstName(true);
		setStatusChangeLastName(false);
	};
	const changeStatusLastNameInput = () => {
		setStatusChangeLastName(true);
		setStatusChangeFirstName(false);
	};

	return (
		<>
			<Layout pageTitle="Profile | Detail Profile" valueNav={true}>
				<main className="container_main">
					<section className="row">
						<Sidebar />
						<section className="col mt-4">
							<section className="profile_main-information-detail">
								<h6 className="profile_main-information-detail-title">
									Personal Information
								</h6>
								<p className="profile_main-information-detail-description">
									We got your personal information from the sign up proccess. If
									you want to make changes on your information, contact our
									support.
								</p>
								<div
									className="profile_main-information-detail-list-description"
									onClick={changeStatusFirstNameInput}
								>
									<h6 className="profile_main-information-detail-list-description-title-field">
										First Name
									</h6>
									{!statusChangeFirstName ? (
										<h6 className="profile_main-information-detail-list-description-title-value">
											{data.firstName}
										</h6>
									) : (
										<Input
											type="text"
											name="firstName"
											onKeyPress={changeUpdateName}
											onChange={(e) => setFirstName(e.target.value)}
											placeholderChildren="Write your new first name."
										/>
									)}
								</div>

								<div
									className="profile_main-information-detail-list-description"
									onClick={changeStatusLastNameInput}
								>
									<h6 className="profile_main-information-detail-list-description-title-field">
										Last Name
									</h6>
									{!statusChangeLastName ? (
										<h6 className="profile_main-information-detail-list-description-title-value">
											{data.lastName}
										</h6>
									) : (
										<Input
											type="text"
											name="lastName"
											onKeyPress={changeUpdateName}
											onChange={(e) => setLastName(e.target.value)}
											placeholderChildren="Write your new last name."
										/>
									)}
								</div>
								<div className="profile_main-information-detail-list-description">
									<h6 className="profile_main-information-detail-list-description-title-field">
										Verified E-mail
									</h6>
									<h6 className="profile_main-information-detail-list-description-title-value-email">
										{data.email}
									</h6>
								</div>
								<div className="profile_main-information-detail-list-description ">
									<h6 className="profile_main-information-detail-list-description-title-field">
										Phone Number
									</h6>
									<div className="profile_main-information-detail-list-description-manage">
										<h6 className="profile_main-information-detail-list-description-title-value">
											{data.noTelp !== null ? `${data.noTelp}` : "-"}
										</h6>
										<Link
											href={`/home/profile/${
												data.noTelp !== null
													? "manage-phone"
													: "new-phone-number"
											}`}
										>
											<span className="profile_main-information-detail-list-description-title-link-manage">
												Manage
											</span>
										</Link>
									</div>
								</div>
							</section>
						</section>
					</section>
				</main>
			</Layout>
		</>
	);
}
