module.exports = {
	reactStrictMode: true,
	env: {
		BASE_URL_PROD: "https://zwalet.herokuapp.com",
		BASE_URL_DEV: "http://localhost:3001",
	},
	async rewrites() {
		return [
			{
				source: "/auth/resetpassword",
				destination: "/auth/reset-password",
			},
		];
	},
};
