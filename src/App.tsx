import { Outlet } from "react-router-dom";
import { MenuDrawer } from "./components/MenuDrawer";

function App() {
  return (
    <>
      <div className="flex">
        <MenuDrawer />
        <Outlet />
      </div>
    </>
  );
}

export default App;
