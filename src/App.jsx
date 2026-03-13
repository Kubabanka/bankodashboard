import { lazy, Suspense } from "react";
import "./App.css";
import Sidebar from "./components/layout/Sidebar";
import { useDarkMode } from "./hooks/useDarkMode";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import Settings from "./pages/Settings";

const Overview = lazy(() => import("./pages/Overview"));
const Products = lazy(() => import("./pages/Products"));
const Analytics = lazy(() => import("./pages/Analytics"));

function App() {
	const { darkMode } = useDarkMode();

	return (
		<div className={`app-shell ${darkMode ? "dark" : ""}`}>
			<Sidebar />
			<div className="main-content">
				<main className="page-content">
					<Suspense fallback={<LoadingSpinner />}>
						<Routes>
							<Route
								path="/"
								element={<Overview />}
							/>
							<Route
								path="/products"
								element={<Products />}
							/>
							<Route
								path="/analytics"
								element={<Analytics />}
							/>
							<Route
								path="/settings"
								element={<Settings />}
							/>
						</Routes>
					</Suspense>
				</main>
			</div>
		</div>
	);
}

export default App;
