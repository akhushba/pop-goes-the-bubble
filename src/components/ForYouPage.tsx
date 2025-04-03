import { Separator } from "@/components/ui/separator";
import { characters } from "@/models/Session";
import { useEffect, useState } from "react";
import { Content } from "@/models/Content";
import { Button } from "./ui/button";
import Feed from "./Feed";

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
      <div className="heading flex justify-between">
        <h1 className="text-3xl font-bold">{`${characters[currentCharacter].name}'s FYP`}</h1>
        <div className="flex gap-2">
          <Button
            className="search-bar p-2 text-center"
            variant="outline"
            onClick={() => setPage(1)}
          >
            Explore
          </Button>
          <Button
            onClick={() => {
              setPage(0);
              setCurrentCharacter(-1);
            }}
            variant="outline"
          >
            Switch Character
          </Button>
        </div>
      </div>
      <Separator className="my-4" />
      <h2 className="text-xl font-semibold">
        Curated feed for {characters[currentCharacter].name}
      </h2>
      <Feed contentList={currentFeed} />
    </div>
  );
}
