import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Header />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
