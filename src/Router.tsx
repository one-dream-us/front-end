import { Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
    </Routes>
  );
};

export default AppRoutes;
