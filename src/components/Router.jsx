import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Pages/Signin";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Header />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
