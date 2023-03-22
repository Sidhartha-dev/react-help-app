import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Posts from "../components/Posts";
import AuthContext from "../context/AuthContext";

const Home = () => {
	let { user, handleLogout } = useContext(AuthContext);
	return (
		<div>
			{user ? (
				<p onClick={handleLogout}>Logout</p>
			) : (
				<Link to="login">Login</Link>
			)}
			{user && <p>Hello, {user.name}</p>}
			<p>stupid</p>
			<div>
				<Posts />
			</div>
		</div>
	);
};

export default Home;
