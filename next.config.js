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

	async redirects() {
		return [
			{
				source: "/",
				destination: "/auth/login",
				permanent: true,
			},
		];
	},
};
