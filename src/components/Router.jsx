import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Header />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
