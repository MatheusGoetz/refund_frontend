import { BrowserRouter } from "react-router";

import { useAuth } from "../hooks/useAuth";

import { AuthRoutes } from "./AuthRoutes";
import { ManagerRoutes } from "./ManagerRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";

import { Loading } from "../components/Loading";

const isLoading = false;
//const session = undefined;

const session = {
	user: {
		role: "",
	},
};

export function Routes() {
	const { context } = useAuth();

	function Route() {
		switch (session?.user.role) {
			case "employee":
				return <EmployeeRoutes />;
			case "manager":
				return <ManagerRoutes />;
			default:
				return <AuthRoutes />;
		}
	}

	if (isLoading) {
		return <Loading />;
	}
	return (
		<BrowserRouter>
			<Route />
		</BrowserRouter>
	);
}
