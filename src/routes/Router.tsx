import { Routes, Route } from "react-router-dom";
import ItemScreen from "../screens/ItemScreen/itemScreen";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ItemScreen />}></Route>
    </Routes>
  );
};

export default Router;
