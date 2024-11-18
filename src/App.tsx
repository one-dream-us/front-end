import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Router";
import "./index.css";

const App = (): JSX.Element => {
  return (
    <BrowserRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
