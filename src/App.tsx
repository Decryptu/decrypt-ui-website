import type React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { componentsList } from "./utils/constants"; // Make sure to import the componentsList
import Header from "./components/Header";
import Landing from "./pages/Landing";
import ComponentPage from "./pages/ComponentPage";

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
