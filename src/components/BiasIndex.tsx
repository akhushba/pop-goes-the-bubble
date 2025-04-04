import { allTags, characters, extremeTags } from "@/models/Session";
import { Card, CardContent } from "./ui/card";
import { useEffect, useState } from "react";
import { Separator } from "./ui/separator";

type BiasIndexProps = {
  currentCharacter: number;
};

export function BiasIndex({ currentCharacter }: BiasIndexProps) {
  const [biasIndex, setBiasIndex] = useState<string>();
  const [biasIndexColor, setBiasIndexColor] = useState("bg-gray-200");
  const [extremeContentInteractions, setExtremeContentInteractions] = useState<
    string[]
  >([]);

  useEffect(() => {
    const sortedPreferences = [
      ...characters[currentCharacter].interactedTags,
    ].sort((a, b) => b.interactions - a.interactions);

    // Calculate total interactions
    const totalInteractions = sortedPreferences.reduce(
      (total, tag) => total + tag.interactions,
      0
    );

    // Calculate metrics
    const percentageSeen = (sortedPreferences.length / allTags.length) * 100;
    const topTagDominance =
      sortedPreferences[0]?.interactions / totalInteractions || 0;

    //find extreme content
    const extremeContent = sortedPreferences.filter((tag) =>
      extremeTags.includes(tag.tag)
    );

    // Calculate extreme content ratio
    const extremeInteractions = extremeContent.reduce(
      (sum, tag) => sum + tag.interactions,
      0
    );
    const extremeRatio = extremeInteractions / totalInteractions;

    // Calculate bias components
    const concentrationScore = topTagDominance; // Higher when one tag dominates
    const coverageScore = 1 - percentageSeen / 100; // Higher when few tags seen
    const extremismScore = extremeRatio; // Higher when more extreme content

    // Combined score (adjust weights as needed)
    const rawBiasScore =
      concentrationScore * 0.2 + coverageScore * 0.5 + extremismScore * 0.3;

    // Convert to 1-10 scale (higher = more biased)
    const biasScore = Math.min(
      10,
      Math.max(1, Math.round(rawBiasScore * 9 + 1))
    );

    // Set color based on bias level
    if (biasScore <= 3) {
      setBiasIndexColor("bg-green-200");
    } else if (biasScore <= 6) {
      setBiasIndexColor("bg-yellow-200");
    } else if (biasScore <= 8) {
      setBiasIndexColor("bg-orange-200");
    } else if (biasScore <= 10) {
      setBiasIndexColor("bg-red-200");
    }

    setExtremeContentInteractions(extremeContent.map((t) => t.tag));
    setBiasIndex(biasScore.toString());
  }, [currentCharacter]);

  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Bias Index</h2>
        {characters[currentCharacter].interactedTags.length > 0 ? (
          <div className="space-y-4">
            <div>
              Bias Index:{" "}
              <span className={`${biasIndexColor} px-2 py-1 rounded`}>
                {biasIndex}
              </span>
            </div>
            {extremeContentInteractions.length > 0 ? (
              <div>
                You've engaged with the following extreme content:
                {extremeContentInteractions.map((content) => (
                  <p className="pl-4">• {content} content</p>
                ))}
              </div>
            ) : (
              <div>You've not currently engaged with any extreme content.</div>
            )}
          </div>
        ) : (
          <div>Not enough data to determine bias yet.</div>
        )}
        <Separator className="my-4" />
        <div className="space-y-2 text-sm">
          <p>• Higher scores indicate stronger content bias</p>
          <p>• Scores increase when you focus on few content types</p>
          <p>• Scores decrease when you explore diverse content</p>
          <p>• Extreme content interactions increase bias score</p>
        </div>
      </CardContent>
    </Card>
  );
}
