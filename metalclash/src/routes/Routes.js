import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";

export const PrivateRoutes = (props) => {
  const isAuthenthicated = true;

  return isAuthenthicated ? props.children : <Navigate to={"/login"} />;
};

export default function RoutesPage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path="/login" />
      </Routes>
    </BrowserRouter>
  );
}
