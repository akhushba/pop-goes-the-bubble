import { allTags, characters } from "@/models/Session";
import { Card, CardContent } from "./ui/card";
import { useEffect, useState } from "react";
import { Separator } from "./ui/separator";

type DiversityIndexProps = {
  currentCharacter: number;
};

export function DiversityIndex({ currentCharacter }: DiversityIndexProps) {
  const [diversityIndex, setDiversityIndex] = useState<string>();
  const [diversityIndexColor, setDiversityIndexColour] =
    useState("bg-gray-200");

  useEffect(() => {
    const sortedPreferences = [
      ...characters[currentCharacter].interactedTags,
    ].sort((a, b) => b.interactions - a.interactions);

    // Calculate what percentage of all possible tags were interacted with
    const percentageSeen = (sortedPreferences.length / allTags.length) * 100;

    // Calculate the spread between most and least interacted tags
    const maxDiff = Math.max(1, sortedPreferences[0]?.interactions || 1); // Avoid division by zero
    const minDiff =
      sortedPreferences[sortedPreferences.length - 1]?.interactions || 0;
    const differenceRatio = (maxDiff - minDiff) / maxDiff;

    // Combine metrics into a diversity score (0-1 range)
    const spreadScore = 1 - differenceRatio; // Higher when differences are small
    const coverageScore = percentageSeen / 100; // Normalize to 0-1

    // Weighted combination (adjust weights as needed)
    const rawScore = spreadScore * 0.3 + coverageScore * 0.7;

    // Convert to 1-10 scale and round
    const diversityScore = Math.min(
      10,
      Math.max(1, Math.round(rawScore * 9 + 1))
    );

    if (diversityScore <= 3) {
      setDiversityIndexColour("bg-red-200");
    } else if (diversityScore <= 6) {
      setDiversityIndexColour("bg-orange-200");
    } else if (diversityScore <= 8) {
      setDiversityIndexColour("bg-yellow-200");
    } else if (diversityScore <= 10) {
      setDiversityIndexColour("bg-green-200");
    }

    setDiversityIndex(diversityScore.toString());
  }, [currentCharacter]);

  return (
    <Card className="">
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Diversity Index</h2>
        {characters[currentCharacter].interactedTags.length > 0 ? (
          <div>
            Diversity Index:{" "}
            <span className={`${diversityIndexColor} px-2 py-1 rounded`}>
              {diversityIndex}
            </span>
          </div>
        ) : (
          <div>
            The algorithm hasn't seen enough user interactions to determine the
            user's diversity yet.
          </div>
        )}
        <Separator className="my-4" />
        <p className="pt-2">
          The diversity index is how much the user has interacted with a
          different variety of posts on the platform, and if they're preferences
          are high skewed to one end of the platform.
        </p>
      </CardContent>
    </Card>
  );
}
