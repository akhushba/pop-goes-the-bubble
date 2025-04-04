import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Guide from "./components/Guide";
import Simulation from "./components/Simulation";
import ReferencePage from "./components/References";
import ExplorePage from "./components/ExplorePage";
import ForYouPage from "./components/ForYouPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Guide /> },
      { path: "simulation", element: <Simulation /> },
      { path: "references", element: <ReferencePage /> },
    ],
  },
]);
