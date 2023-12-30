import Header from "./Header";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Header />} /> */}
          <Route index element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
