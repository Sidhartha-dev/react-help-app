import {
	// createBrowserRouter,
	// createRoutesFromElements,
	Route,
	// RouterProvider,
	Routes,
} from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import RootLayout from "./Layout/RootLayout";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PrivateRoute from "./router/PrivateRoute";
// import { AuthProvider } from "./provider/AuthProvider";
// const AuthProvider =
// const router = createBrowserRouter(
// 	createRoutesFromElements(
// 		<Route path="/" element={<RootLayout />}>
// 			<Route index element={<Home />} />
// 			<Route path="login" element={<Login />} />
// 			<Route path="signup" element={<Signup />} />
// 		</Route>
// 	)
// );

function App() {
	return (
		// <RouterProvider router={router}>
		// 	<AuthProvider value={AuthProvider}></AuthProvider>
		// </RouterProvider>
		<AuthProvider>
			<Routes>
				<Route path="/" element={<RootLayout />}>
					<Route element={<PrivateRoute />}>
						<Route path="/" element={<Home />}></Route>
					</Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/signup" element={<Signup />}></Route>
					{/* <Route path="dashboard" element={<Dashboard/>}></Route> */}
					<Route path="/dashboard" element={<Dashboard />}></Route>
				</Route>
			</Routes>
		</AuthProvider>
	);
}

export default App;
