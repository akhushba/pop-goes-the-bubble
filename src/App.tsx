import { useState } from "react";
import Guide from "./components/Guide";
import { MenuDrawer } from "./components/MenuDrawer";
import Simulation from "./components/Simulation";

function App() {
  const [guideIsActive, setGuideIsActive] = useState(true);
  const [simulationIsActive, setSimulationIsActive] = useState(false);

  return (
    <>
      <MenuDrawer
        setGuideIsActive={setGuideIsActive}
        setSimulationIsActive={setSimulationIsActive}
      />
      {guideIsActive && <Guide />}
      {simulationIsActive && <Simulation />}
    </>
  );
}

export default App;
