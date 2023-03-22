import axios from "axios";
// import jwt_decode from "jwt-decode";
// import dayjs from "dayjs";

const baseURL = "http://127.0.0.1:8000/";

// const authTokens = localStorage.getItem("authTokens")
// 	? JSON.parse(localStorage.getItem("authTokens"))
// 	: null;

const baseUrl = axios.create({
	baseURL,
	// headers: { Authorization: `Bearer ${authTokens?.access}` },
});

// baseUrl.interceptors.request.use(async (req) => {
// 	if (!authTokens) {
// 		const authTokens = localStorage.getItem("authTokens")
// 			? JSON.parse(localStorage.getItem("authTokens"))
// 			: null;
// 		req.headers.Authorization = `Bearer ${authTokens?.access}`;
// 		console.log("run instance");
// 	}
// 	const user = jwt_decode(authTokens.access);
// 	const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
// 	if (!isExpired) {
// 		return req;
// 	}
// 	const res = await axios.post(`${baseURL}/api/token/refresh/`, {
// 		refresh: authTokens.refresh,
// 	});

// 	localStorage.setItem("authTokens", JSON.stringify(res?.data));
// 	req.headers.Authorization = `Bearer ${res?.data?.access}`;

// 	return req;
// });

export default baseUrl;
