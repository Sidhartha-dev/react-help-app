import React, { useEffect, useState } from "react";
// import AuthContext from "../context/AuthContext";
// import baseUrl from "../env/BaseUrl";
import useAxios from "../env/useAxios";

const Posts = () => {
	// const { handleLogout } = useContext(AuthContext);
	const api = useAxios();
	const [posts, setPosts] = useState([]);
	const getPosts = async () => {
		let res = await api.get("chat/userposts/");
		const data = res.data;
		console.log(data);
		if (res.status === 200) {
			setPosts(res.data);
		}
		// else if (res.statusText === "Unauthorized") {
		// 	handleLogout();
		// }
		// setPosts(data);
	};
	useEffect(() => {
		getPosts();
	}, []);

	// , {
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 		Authorization: "Bearer " + String(authTokens.access),
	// 	},
	// }

	return (
		<div>
			<div>
				{posts.map((post) => (
					<div key={post.id}>
						<h3>{post.title}</h3>
						<img src={post.photo} alt={post.photo} className="img-size" />
					</div>
					// <img src={post.photo}/>
				))}
			</div>
		</div>
	);
};

export default Posts;
