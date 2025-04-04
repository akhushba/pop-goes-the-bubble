import { characters } from "@/models/Session";
import { Card, CardContent } from "./ui/card";

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
  "hsl(120, 90%, 80%)",
  "hsl(180, 90%, 80%)",
  "hsl(300, 90%, 80%)",
  "hsl(240, 90%, 80%)",
  "hsl(270, 90%, 80%)",
];

export function TagStats({ currentCharacter }: TagStatsProps) {
  const interactionCount = characters[currentCharacter].interactedTags.reduce(
    (total, tag) => total + tag.interactions,
    0
  );

  const tags =
    interactionCount < 5
      ? []
      : characters[currentCharacter].interactedTags.map((t, i) => {
          const percent = ((t.interactions / interactionCount) * 100).toFixed(
            2
          );
          return {
            name: t.tag,
            colour: rainbowColours[i],
            percentage: percent,
          } as TagStat;
        });

  return (
    <Card className="">
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Content Preferences</h2>
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
            <div className="flex justify-center items-center text-xs font-semibold h-9 pb-1 rounded mt-3">
              {tags.map((lang) => (
                <span key={lang.name} className="px-1 relative inline-block">
                  {lang.name} {lang.percentage}%
                  <span
                    className="absolute left-1 right-1 h-2 border-2 border-gray-300"
                    style={{
                      backgroundColor: lang.colour,
                      bottom: "-0.5rem",
                    }}
                  />
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div>
            The algorithm hasn't seen enough user interactions to determine user
            preference yet.
          </div>
        )}
        <p className="pt-2">
          Content preferences based off of the user interactions each tag has
          seen and is tracked by the actions a user has taken on pots they've
          showed interest in.
        </p>
      </CardContent>
    </Card>
  );
}
