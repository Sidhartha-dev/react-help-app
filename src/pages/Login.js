import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
const Login = () => {
	const { loginUser } = useContext(AuthContext);
	return (
		<div>
			<form onSubmit={loginUser}>
				<input type="text" name="username" placeholder="Enter Username..." />
				<input
					type="password"
					name="password"
					placeholder="Enter Password..."
				/>
				<button>Login</button>
			</form>
		</div>
	);
};

export default Login;
