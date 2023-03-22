import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
	return (
		<div className="root-layout app">
			<header>
				<nav>
					<h1>Text Book</h1>
					<NavLink to="/">Home</NavLink>
					<NavLink to="login">Login</NavLink>
					<NavLink to="signup">Signup</NavLink>
				</nav>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default RootLayout;
