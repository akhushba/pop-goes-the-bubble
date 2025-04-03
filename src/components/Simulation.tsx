import CharacterSelector from "./CharacterSelector";
import { useState } from "react";
import ForYouPage from "./ForYouPage";

export default function Simulation() {
  const [currentCharacter, setCurrentCharacter] = useState(-1);

  return (
    <div className="max-w-3xl mx-auto p-6">
      {currentCharacter === -1 && (
        <CharacterSelector setCurrentCharacter={setCurrentCharacter} />
      )}
      {currentCharacter !== -1 && (
        <ForYouPage
          currentCharacter={currentCharacter}
          setCurrentCharacter={setCurrentCharacter}
        />
      )}
    </div>
  );
}
