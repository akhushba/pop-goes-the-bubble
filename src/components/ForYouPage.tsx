import { characters } from "@/models/Session";
import { useEffect, useState } from "react";
import { Content } from "@/models/Content";
import Feed from "./Feed";
import { CharacterNav } from "./CharacterNav";

type ForYouPageProps = {
  currentCharacter: number;
  setCurrentCharacter: (charID: number) => void;
  setPage: (pageId: number) => void;
};

export default function ForYouPage({
  currentCharacter,
  setCurrentCharacter,
  setPage,
}: ForYouPageProps) {
  const [currentFeed, setCurrentFeed] = useState<Content[]>([]);

  useEffect(() => {
    setCurrentFeed(characters[currentCharacter].getRelevantContent());
  }, [currentCharacter]);

  return (
    <div className="select-character">
      <CharacterNav
        characterName={characters[currentCharacter].name}
        pageName={"FYP"}
        setCurrentCharacter={setCurrentCharacter}
        setPage={setPage}
      />
      <Feed contentList={currentFeed} />
    </div>
  );
}
