import React, { useEffect, useState } from "react";
import baseUrl from "../env/BaseUrl";

const Dashboard = () => {
	const [userposts, setUserposts] = useState([]);
	const getUserPosts = async () => {
		const res = await baseUrl.get("chat/posts/");
		const data = res.data;
		setUserposts(data);
	};
	useEffect(() => {
		getUserPosts();
	}, []);

	return (
		<div>
			<div>
				{userposts.map((post) => (
					<div key={post.id}>
						<h3>{post.title}</h3>
						<img src={post.photo} />
					</div>
					// <img src={post.photo}/>
				))}
			</div>
		</div>
	);
};

export default Dashboard;
