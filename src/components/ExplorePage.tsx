import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "./ui/card";
import { characters } from "@/models/Session";
import { useEffect, useState } from "react";
import { Content, Tweet, Video } from "@/models/Content";
import { Button } from "./ui/button";

type ExplorePageProps = {
  currentCharacter: number;
  setCurrentCharacter: (charID: number) => void;
  setPage: (pageId: number) => void;
};

export default function ExplorePage({
  currentCharacter,
  setCurrentCharacter,
  setPage,
}: ExplorePageProps) {
  const [currentFeed, setCurrentFeed] = useState<Content[]>([]);

  useEffect(() => {
    setCurrentFeed(characters[currentCharacter].getRelevantContent());
  }, [currentCharacter]);

  return (
    <div className="select-character">
      <div className="heading flex justify-between">
        <h1 className="text-3xl font-bold">{`${characters[currentCharacter].name}'s Explore Page`}</h1>
        <div className="flex gap-2">
          <Button
            className="search-bar p-2 text-center"
            variant="outline"
            onClick={() => setPage(0)}
          >
            FYP
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
      <div className="search-feed">
        {currentFeed.length > 0 ? (
          <div>Hello World</div>
        ) : (
          <div>please search to get started</div>
        )}
      </div>
    </div>
  );
}
