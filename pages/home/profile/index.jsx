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
		} catch (error) {}
	};

	const fullName = `${user.users.firstName} ${user.users.lastName}`;
	const noTelp = `${user.users.noTelp === null ? "-" : user.users.noTelp}`;
	const imageProfile = `${user.users.image}`;

	const showPopUpDelete = async () => {
		const question = confirm("Are you sure delete this image ?");
		if (question) {
			try {
				const response = await axios.delete(`/user/image/${id}`);
				dispatch(getUserById(response.data.data.id));
				toast.success(response.data.msg);
			} catch (error) {
				new Error(error.response);
			}
		} else {
			return false;
		}
	};

	useEffect(() => {
		formImage.image ? changeFileImage() : null;
	}, [formImage]);

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
											? "https://inspektorat.kotawaringinbaratkab.go.id/public/uploads/user/default-user-imge.jpeg"
											: `${process.env.BASE_URL_PROD}/uploads/${imageProfile}`
									} `}
									width={80}
									height={80}
									style={{ borderRadius: "14px", objectFit: "cover" }}
									alt="Profile"
								/>
								<div className="d-flex align-items-center justify-content-center">
									<div
										className="profile_information-edit mx-3"
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
									<div
										className="profile_information-edit"
										onClick={showPopUpDelete}
									>
										<Image
											src="/icons/trash.svg"
											width={11}
											height={11}
											alt="Trash"
										/>

										<p className="profile_information-text-edit">Delete</p>
									</div>
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
