import { Outlet } from "react-router-dom";
import { MenuDrawer } from "./components/MenuDrawer";

function App() {
  return (
    <>
      <MenuDrawer />
      <Outlet />
    </>
  );
}

export default App;
