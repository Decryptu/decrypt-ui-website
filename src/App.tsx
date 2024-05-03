import type React from "react";
import {
	Navigate,
	Route,
	BrowserRouter as Router,
	Routes,
} from "react-router-dom";
import Header from "./components/Header";
import ComponentPage from "./pages/ComponentPage";
import Landing from "./pages/Landing";
import { componentsList } from "./utils/constants"; // Make sure to import the componentsList

const App: React.FC = () => {
	const firstComponentRoute = componentsList[0]?.route || "/"; // Fallback to the home page if no components are defined

	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/component/:name" element={<ComponentPage />} />
				<Route
					path="/component/"
					element={<Navigate to={firstComponentRoute} replace />}
				/>
			</Routes>
		</Router>
	);
};

export default App;
