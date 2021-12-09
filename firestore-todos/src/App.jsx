import React from "react";
import { Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { Container } from "react-bootstrap";
import  AuthContextProvider from "./contexts/AuthContext";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import SignupPage from "./pages/SignupPage";
import Navigation from "./pages/partials/Navigation";
import PageNotFound from "./pages/PageNotFound";
import TodoPage from "./pages/TodoPage";
import TodosPage from "./pages/TodosPage";

function App() {
	return (
		<>
			<AuthContextProvider>
				<Navigation />

				<Container id="App" className="py-3">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/logout" element={<LogoutPage />} />
						<Route path="/signup" element={<SignupPage />} />
						<Route path="/todos" element={<TodosPage />} />
						<Route path="/todos/:id" element={<TodoPage />} />
						<Route element={<PageNotFound />} />
					</Routes>
				</Container>

				<ReactQueryDevtools
					initialIsOpen={false}
					position="bottom-right"
				/>
			</AuthContextProvider>
		</>
	);
}

export default App;
