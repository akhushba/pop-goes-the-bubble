import { characters, tagCategories } from "@/models/Session";
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
    const categoryInteractionCount: Record<string, number> = {};

    // look up category for a tag
    const getCategory = (tag: string) =>
      tagCategories.find((entry) => entry.tag === tag)?.category || "neutral";

    // aggregate interactions by category
    characters[currentCharacter].interactedTags.forEach(
      ({ tag, interactions }) => {
        const category = getCategory(tag);
        if (!categoryInteractionCount[category]) {
          categoryInteractionCount[category] = 0;
        }
        categoryInteractionCount[category] += interactions;
      }
    );

    const totalInteractions = Object.values(categoryInteractionCount).reduce(
      (sum, val) => sum + val,
      0
    );

    if (totalInteractions === 0) {
      setDiversityIndex("N/A");
      setDiversityIndexColour("bg-gray-200");
      return;
    }

    // calculate balance and coverage
    const maxCount = Math.max(...Object.values(categoryInteractionCount));
    const balance = 1 - maxCount / totalInteractions;

    const charCategoryCount = Object.keys(categoryInteractionCount).length;
    const totalCategoryCount = new Set(tagCategories.map((t) => t.category))
      .size;
    const coverage = charCategoryCount / totalCategoryCount;
    const rawDiversity = balance * 0.5 + coverage * 0.5;

    // Convert to 1–10 scale
    const diversityScore = Math.min(
      10,
      Math.max(1, Math.round(rawDiversity * 9 + 1))
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
  }, [currentCharacter, characters[currentCharacter].interactedTags]);

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
          different variety of posts on the platform, and if their preferences
          are high skewed to one end of the platform.
        </p>
      </CardContent>
    </Card>
  );
}
