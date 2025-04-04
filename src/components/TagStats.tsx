import { characters } from "@/models/Session";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { useEffect, useState } from "react";

type TagStatsProps = {
  currentCharacter: number;
};

type TagStat = {
  name: string;
  colour: string;
  percentage: string;
};

const rainbowColours = [
  "hsl(0, 90%, 80%)",
  "hsl(30, 90%, 80%)",
  "hsl(60, 90%, 80%)",
  "hsl(90, 90%, 80%)",
  "hsl(120, 90%, 80%)",
  "hsl(150, 90%, 80%)",
  "hsl(180, 90%, 80%)",
  "hsl(210, 90%, 80%)",
  "hsl(240, 90%, 80%)",
  "hsl(270, 90%, 80%)",
  "hsl(300, 90%, 80%)",
];

export function TagStats({ currentCharacter }: TagStatsProps) {
  const [tags, setTags] = useState<TagStat[]>([]);

  useEffect(() => {
    const interactionCount = characters[currentCharacter].interactedTags.reduce(
      (total, tag) => total + tag.interactions,
      0
    );

    setTags(
      characters[currentCharacter].interactedTags.map((t, i) => {
        const percent = ((t.interactions / interactionCount) * 100).toFixed(2);
        return {
          name: t.tag,
          colour:
            i < rainbowColours.length
              ? rainbowColours[i]
              : "hsl(270, 1.20%, 68.60%)",
          percentage: percent,
        } as TagStat;
      })
    );
  }, [currentCharacter]);

  return (
    <Card className="">
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Interest Scores</h2>
        {tags.length > 0 ? (
          <div className="wrapper">
            <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden border-2">
              <div className="flex h-full">
                {tags.map((lang) => (
                  <div
                    key={lang.name}
                    className="h-full"
                    style={{
                      width: `${lang.percentage}%`,
                      backgroundColor: lang.colour,
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {tags.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center px-2 py-1 rounded text-xs font-semibold"
                  style={{ backgroundColor: `${lang.colour}40` }}
                >
                  <div
                    className="mr-1 w-3 h-3 rounded-full border border-gray-300"
                    style={{ backgroundColor: lang.colour }}
                  />
                  <span className="mr-1">{lang.name}</span>
                  <span>{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            The algorithm hasn't seen enough user interactions to determine user
            preference yet.
          </div>
        )}
        <Separator className="my-6" />
        <p className="pt-2">
          Interest is based off of the user interactions each tag has seen and
          is tracked by the actions a user has taken on posts they've showed
          interest in.
        </p>
      </CardContent>
    </Card>
  );
}
