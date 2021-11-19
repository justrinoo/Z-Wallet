import axios from "utils/axios";

export const login = (data) => {
	return {
		type: "AUTH_LOGIN",
		payload: axios.post("/auth/login", data),
	};
};
export const register = (data) => {
	return {
		type: "AUTH_REGISTER",
		payload: axios.post("/auth/register", data),
	};
};
export const createPin = (data, userId) => {
	return {
		type: "AUTH_CREATEPIN",
		payload: axios.post(`/user/pin/${userId}`, data),
	};
};

export const forgotPassword = (data) => {
	return {
		type: "AUTH_FORGOTPASSWORD",
		payload: axios.post("/auth/forgot-password", data),
	};
};

export const resetPassword = (data) => {
	return {
		type: "AUTH_RESETPASSWORD",
		payload: axios.patch("/auth/reset-password", data),
	};
};
