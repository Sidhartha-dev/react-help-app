import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseUrl from "../env/BaseUrl";

const Signup = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const [err, setErr] = useState("");
	const handleSignup = async (e) => {
		e.preventDefault();
		await baseUrl
			.post("auth/users/", { username, email, password })
			.then((res) => {
				console.log(res.data);
				navigate("/login");
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<div>
				<form onSubmit={handleSignup}>
					<input
						type="text"
						name="username"
						placeholder="Enter username..."
						value={username}
						onChange={({ target }) => setUsername(target.value)}
					/>
					<input
						type="email"
						name="email"
						placeholder="Enter email..."
						value={email}
						onChange={({ target }) => setEmail(target.value)}
					/>
					<input
						type="password"
						name="password"
						placeholder="Enter password..."
						value={password}
						onChange={({ target }) => setPassword(target.value)}
					/>
					<button>Signup</button>
				</form>
			</div>
		</div>
	);
};

export default Signup;
