import { Routes, Route } from "react-router-dom";
import ItemPage from "../pages/ItemPage/ItemPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ItemPage />}></Route>
    </Routes>
  );
};

export default Router;
