import { useState, createContext, useEffect } from "react";
import baseUrl from "../env/BaseUrl";
import jwt_decode from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";
// import AuthContext from "../context/AuthContext";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";
	const [authTokens, setAuthTokens] = useState(() =>
		localStorage.getItem("authTokens")
			? JSON.parse(localStorage.getItem("authTokens"))
			: null
	);
	const [user, setUser] = useState(() =>
		localStorage.getItem("authTokens")
			? JSON.parse(localStorage.getItem("authTokens"))
			: null
	);
	const loginUser = async (e) => {
		e.preventDefault();
		console.log("form submitted");
		let res = await baseUrl.post("chat/api/token/", {
			username: e.target.username.value,
			password: e.target.password.value,
		});
		let data = await res.data;
		console.log(data);
		if (res.status === 200) {
			setAuthTokens(data);
			setUser(jwt_decode(data.access));
			console.log(data.access);
			localStorage.setItem("authTokens", JSON.stringify(data));
			navigate(from, { replace: true });
		} else {
			alert("Something went wrong");
		}
	};

	const handleLogout = () => {
		setAuthTokens(null);
		setUser(null);
		localStorage.removeItem("authTokens");
		// localStorage.removeItem("posts");
		navigate("/login");
	};

	let contextDta = {
		user: user,
		loginUser: loginUser,
		authTokens: authTokens,
		handleLogout: handleLogout,
	};

	useEffect(() => {
		if (authTokens) {
			setUser(jwt_decode(authTokens?.access));
		}
		setLoading(false);
	}, [authTokens, loading]);

	return (
		<AuthContext.Provider value={contextDta}>
			{loading ? null : children}
		</AuthContext.Provider>
	);
};
