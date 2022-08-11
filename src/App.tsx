import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { Layout } from "./components/Layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
