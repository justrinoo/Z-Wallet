import cookies from "next-cookies";

export function getDataCookie(context) {
	return new Promise((resolve) => {
		let storageCookie = cookies(context);
		if (storageCookie.token) {
			storageCookie.isLogin = true;
		} else {
			storageCookie.isLogin = false;
		}
		resolve(storageCookie);
	});
}
