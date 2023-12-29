import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Header />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
