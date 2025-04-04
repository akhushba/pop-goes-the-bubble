import CharacterSelector from "./CharacterSelector";
import { useState } from "react";
import ForYouPage from "./ForYouPage";
import ExplorePage from "./ExplorePage";
import ProfilePage from "./ProfilePage";

export default function Simulation() {
  const [currentCharacter, setCurrentCharacter] = useState(-1);
  const [page, setPage] = useState(0);

  return (
    <div className="max-w-3xl w-2/3 mx-auto p-6">
      {currentCharacter === -1 && (
        <CharacterSelector setCurrentCharacter={setCurrentCharacter} />
      )}
      {currentCharacter !== -1 && page === 0 && (
        <ForYouPage
          currentCharacter={currentCharacter}
          setCurrentCharacter={setCurrentCharacter}
          setPage={setPage}
        />
      )}
      {currentCharacter !== -1 && page === 1 && (
        <ExplorePage
          currentCharacter={currentCharacter}
          setCurrentCharacter={setCurrentCharacter}
          setPage={setPage}
        />
      )}
      {currentCharacter !== -1 && page === 2 && (
        <ProfilePage
          currentCharacter={currentCharacter}
          setCurrentCharacter={setCurrentCharacter}
          setPage={setPage}
        />
      )}
    </div>
  );
}
