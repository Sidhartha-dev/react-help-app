// import { useState, createContext } from "react";
// import baseUrl from "../env/BaseUrl";
// import jwt_decode from "jwt-decode";
// // import { useNavigate } from "react-router-dom";
// // import * as ROUTER from "../router/routes";
// // import AuthContext from "../context/AuthContext";

// const AuthContext = createContext();
// export default AuthContext;

// export const AuthProvider = ({ children }) => {
// 	// const navigate = useNavigate();
// 	const [authTokens, setAuthTokens] = useState("");
// 	const [user, setUser] = useState("");
// 	const loginUser = async (e) => {
// 		e.preventDefault();
// 		let res = await baseUrl.post("chat/api/token/", {
// 			username: e.target.username.value,
// 			password: e.target.password.value,
// 		});
// 		let data = await res.json();
// 		if (res.status === 200) {
// 			setAuthTokens(data);
// 			setUser(jwt_decode(data.access));
// 			localStorage.setItem("authTokens", JSON.stringify(data));
// 			// navigate(ROUTER.HOME);
// 		} else {
// 			alert("Something went wrong");
// 		}
// 	};
// 	let contextDta = {
// 		user,
// 		loginUser,
// 		authTokens,
// 	};
// 	return (
// 		<AuthContext.Provider value={{ contextDta }}>
// 			{children}
// 		</AuthContext.Provider>
// 	);
// };
