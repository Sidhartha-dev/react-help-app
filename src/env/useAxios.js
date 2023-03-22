import React, { useContext } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import AuthContext from "../context/AuthContext";
// import baseUrl from "./BaseUrl";

const baseURL = "http://127.0.0.1:8000/";
const useAxios = () => {
	const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);
	const baseUrl = axios.create({
		baseURL,
		headers: { Authorization: `Bearer ${authTokens?.access}` },
	});

	baseUrl.interceptors.request.use(async (req) => {
		const user = jwt_decode(authTokens?.access);
		const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
		if (!isExpired) {
			return req;
		}
		const res = await axios.post(`${baseURL}chat/api/token/refresh/`, {
			refresh: authTokens.refresh,
		});

		localStorage.setItem("authTokens", JSON.stringify(res?.data));
		console.log(res?.data);
		// setAuthTokens(res?.data?.access);
		// setUser(jwt_decode(res?.data?.access));
		req.headers.Authorization = `Bearer ${res?.data?.access}`;

		return req;
	});
	return baseUrl;
};

export default useAxios;
