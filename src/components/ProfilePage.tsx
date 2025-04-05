import { characters } from "@/models/Session";
import { TagStats } from "./TagStats";
import { CharacterNav } from "./CharacterNav";
import { DiversityIndex } from "./DiversityIndex";
import { BiasIndex } from "./BiasIndex";
import { InterestScores } from "./InterestScores";

type ProfilePageProps = {
  currentCharacter: number;
  setCurrentCharacter: (charID: number) => void;
  setPage: (pageId: number) => void;
};

export default function ProfilePage({
  currentCharacter,
  setCurrentCharacter,
  setPage,
}: ProfilePageProps) {
  return (
    <div className=" select-character">
      <CharacterNav
        characterName={characters[currentCharacter].name}
        pageName={"Profile"}
        setCurrentCharacter={setCurrentCharacter}
        setPage={setPage}
      />
      <div className="content-wrapper flex flex-col gap-4">
        <InterestScores currentCharacter={currentCharacter} />
        <DiversityIndex currentCharacter={currentCharacter} />
        <TagStats currentCharacter={currentCharacter} />
      </div>
    </div>
  );
}
