const initialState = {
	users: [],
	message: "",
	loading: false,
	error: false,
};

export default function auth(state = initialState, action) {
	switch (action.type) {
		case "GETUSERBYID_PENDING": {
			return {
				...state,
				message: "",
				loading: false,
				error: false,
			};
		}
		case "GETUSERBYID_FULFILLED": {
			return {
				...state,
				message: action.payload.data.msg,
				users: action.payload.data.data,
				loading: false,
				error: false,
			};
		}
		case "GETUSERBYID_REJECTED": {
			return {
				...state,
				message: action.payload.response.msg,
				loading: false,
				error: false,
			};
		}

		default: {
			return state;
		}
	}
}
