import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Mail from "./pages/Mail/Mail";
import News from "./pages/News/News";
import Group from "./pages/Group/Group";
import Settings from "./pages/Settings/Settings";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/news" element={<News />} />
          <Route path="/group" element={<Group />} />
          <Route path="/setting" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
