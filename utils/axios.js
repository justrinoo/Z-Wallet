import axios from "axios";

const axiosInterceptors = axios.create({
	baseURL: process.env.BASE_URL_DEV,
});

axiosInterceptors.interceptors.request.use(
	function (config) {
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

axiosInterceptors.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default axiosInterceptors;
