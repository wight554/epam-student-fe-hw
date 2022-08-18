import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { Task1 } from "./components/Task1";
import { FileList } from "./components/FileList";
import { FileItem } from "./components/FileItem";
import { CreateFileForm } from "./components/CreateFileForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/task1" element={<Task1 />}>
          <Route index element={<FileList />} />
          <Route path=":filename" element={<FileItem />} />
        </Route>
        <Route path="create" element={<CreateFileForm />} />
      </Route>
    </Routes>
  );
};

export default App;
