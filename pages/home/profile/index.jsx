import { Layout, Sidebar } from "components";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { getUserById } from "store/actions/user";
import axios from "utils/axios";
import { toast, ToastContainer } from "react-toastify";
export default function Profile() {
	const profileFile = useRef("");
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const id = `${user.users.id}`;
	const router = useRouter();
	const [formImage, setFormImage] = useState({
		image: "",
	});
	// FormDataImage.append("image", image);

	for (const test in formImage) {
		console.log(formImage[test]);
	}
	const profileMenuChangePage = (someText) => {
		if (someText === id) {
			router.push(`/home/profile/detail/${someText}`);
		} else {
			router.push(`/home/profile/${someText}`);
		}
	};

	const ShowFileInput = () => {
		profileFile.current.click();
	};

	const changeFileImage = async () => {
		try {
			const formData = new FormData();
			for (const data in formImage) {
				formData.append(data, formImage[data]);
			}
			const response = await axios.patch(`/user/image/${id}`, formData);
			dispatch(getUserById(response.data.data.id));
			toast.success(response.data.msg);
		} catch (error) {
			console.log("error =>", error.response);
		}
	};

	const fullName = `${user.users.firstName} ${user.users.lastName}`;
	const noTelp = `${user.users.noTelp === null ? "-" : user.users.noTelp}`;
	const imageProfile = `${user.users.image}`;

	useEffect(() => {
		formImage.image ? changeFileImage() : null;
	}, [formImage]);

	console.log(imageProfile);
	return (
		<>
			<Layout pageTitle="Profile" valueNav={true}>
				<main className="container_main">
					<section className="row">
						<Sidebar />
						<section className="col profile_main mt-4">
							<ToastContainer />
							<section className="profile_information">
								<img
									src={`${
										imageProfile === "null"
											? "/images/face1.png"
											: `http://localhost:3001/uploads/${imageProfile}`
									} `}
									width={80}
									height={80}
									style={{ borderRadius: "14px", objectFit: "cover" }}
									alt="Profile"
								/>
								<div
									className="profile_information-edit"
									onClick={ShowFileInput}
								>
									<Image
										src="/icons/edit.svg"
										width={11}
										height={11}
										alt="Edit Profile"
									/>
									<input
										type="file"
										ref={profileFile}
										onChange={(event) =>
											setFormImage({
												image: event.target.files[0],
											})
										}
										name="image"
										style={{ display: "none" }}
									/>
									<p className="profile_information-text-edit">Edit</p>
								</div>
								<h3 className="profile_information-edit-name">{fullName}</h3>
								<span className="profile_information-edit-telp">{noTelp}</span>
								<div
									className="profile_information-edit-menu"
									onClick={() => profileMenuChangePage(`${id}`)}
								>
									<span className="profile_information-edit-menu-text">
										Personal Information
									</span>
									<Image
										src="/icons/arrow-left.svg"
										width={28}
										height={28}
										alt="Link Menu"
									/>
								</div>
								<div
									className="profile_information-edit-menu"
									onClick={() => profileMenuChangePage("change-password")}
								>
									<span className="profile_information-edit-menu-text">
										Change Password
									</span>
									<Image
										src="/icons/arrow-left.svg"
										width={28}
										height={28}
										alt="Link Menu"
									/>
								</div>
								<div
									className="profile_information-edit-menu"
									onClick={() => profileMenuChangePage("change-pin")}
								>
									<span className="profile_information-edit-menu-text">
										Change Pin
									</span>
									<Image
										src="/icons/arrow-left.svg"
										width={28}
										height={28}
										alt="Link Menu"
									/>
								</div>
								<div className="profile_information-edit-menu">
									<span className="profile_information-edit-menu-text">
										Logout
									</span>
									<Image
										src="/icons/arrow-left.svg"
										width={28}
										height={28}
										alt="Link Menu"
									/>
								</div>
							</section>
						</section>
					</section>
				</main>
			</Layout>
		</>
	);
}
