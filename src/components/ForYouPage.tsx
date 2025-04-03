import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "./ui/card";
import { characters, contentList } from "@/models/Session";
import { useEffect, useState } from "react";
import { Content, Tweet, Video } from "@/models/Content";
import { Button } from "./ui/button";

type ForYouPageProps = {
  currentCharacter: number;
  setCurrentCharacter: (charID: number) => void;
};

export default function ForYouPage({
  currentCharacter,
  setCurrentCharacter,
}: ForYouPageProps) {
  const [currentFeed, setCurrentFeed] = useState<Content[]>([]);

  useEffect(() => {
    setCurrentFeed(characters[currentCharacter].getRelevantContent());
  }, [currentCharacter]);

  return (
    <div className="select-character">
      <div className="heading flex justify-between">
        <h1 className="text-3xl font-bold">For You Page</h1>
        <Button onClick={() => setCurrentCharacter(-1)} variant="outline">
          Switch Character
        </Button>
      </div>
      <Separator className="my-4" />
      <h2 className="text-xl font-semibold">
        Curated feed for {characters[currentCharacter].name}
      </h2>
      <div className="search-bar w-full bg-pink-200 p-2">Search</div>
      <div className="grid gap-4 mt-4">
        {currentFeed.map((item, index) => (
          <Card key={index} className="p-4">
            <CardContent>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              {item instanceof Tweet ? (
                <p className="text-gray-700">{item.content}</p>
              ) : item instanceof Video ? (
                <>
                  <p className="text-gray-700">{item.caption}</p>
                  <a
                    href={item.videoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Watch Video
                  </a>
                </>
              ) : null}
              <div className="mt-2 text-sm text-gray-500">
                Tags: {item.tags.map((tag) => tag).join(", ")}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
