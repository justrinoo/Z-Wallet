const initialState = {
	users: {},
	message: "",
	loading: false,
	error: false,
};

export default function auth(state = initialState, action) {
	switch (action.type) {
		case "AUTH_LOGIN_PENDING": {
			return {
				...state,
				message: "",
				loading: false,
				error: false,
			};
		}
		case "AUTH_LOGIN_FULFILLED": {
			return {
				...state,
				message: "",
				loading: false,
				error: false,
			};
		}
		case "AUTH_LOGIN_REJECTED": {
			return {
				...state,
				message: action.payload.response.data.msg,
				loading: true,
				error: true,
			};
		}
		case "AUTH_REGISTER_PENDING": {
			return {
				...state,
				message: "",
				loading: false,
				error: false,
			};
		}
		case "AUTH_REGISTER_FULFILLED": {
			return {
				...state,
				message: "",
				loading: false,
				error: false,
			};
		}
		case "AUTH_REGISTER_REJECTED": {
			return {
				...state,
				message: action.payload.response.data.msg,
				loading: true,
				error: true,
			};
		}
		case "AUTH_FORGOTPASSWORD_PENDING": {
			return {
				...state,
				message: "",
				loading: false,
				error: false,
			};
		}
		case "AUTH_FORGOTPASSWORD_FULFILLED": {
			return {
				...state,
				message: "",
				loading: false,
				error: false,
			};
		}
		case "AUTH_FORGOTPASSWORD_REJECTED": {
			return {
				...state,
				message: action.payload.response.data.msg,
				loading: true,
				error: true,
			};
		}
		case "AUTH_RESETPASSWORD_PENDING": {
			return {
				...state,
				message: "",
				loading: false,
				error: false,
			};
		}
		case "AUTH_RESETPASSWORD_FULFILLED": {
			return {
				...state,
				message: "",
				loading: false,
				error: false,
			};
		}
		case "AUTH_RESETPASSWORD_REJECTED": {
			return {
				...state,
				message: action.payload.response.data.msg,
				loading: true,
				error: true,
			};
		}

		default: {
			return {
				...state,
			};
		}
	}
}
