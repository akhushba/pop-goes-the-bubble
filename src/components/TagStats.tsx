import { allTags, characters } from "@/models/Session";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { useEffect, useState } from "react";

type TagStatsProps = {
  currentCharacter: number;
};

type TagStat = {
  name: string;
  interactions: number;
};

export function TagStats({ currentCharacter }: TagStatsProps) {
  const [tags, setTags] = useState<TagStat[]>([]);

  useEffect(() => {
    const interactedTagsMap = new Map(
      characters[currentCharacter].interactedTags.map((t) => [
        t.tag,
        t.interactions,
      ])
    );

    const mergedTags = allTags.map((tag) => ({
      name: tag,
      interactions: interactedTagsMap.get(tag) || 0,
    }));

    const sortedTags = mergedTags.sort((a, b) => {
      if (b.interactions !== a.interactions) {
        return b.interactions - a.interactions;
      }
      return a.name.localeCompare(b.name);
    });

    setTags(sortedTags);
  }, [currentCharacter, allTags]);

  return (
    <Card className="">
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Interactions</h2>
        {tags.length > 0 ? (
          <div className="overflow-y-auto" style={{ maxHeight: "60vh" }}>
            <table className="w-full">
              <thead className="sticky top-0 bg-background">
                <tr className="border-b">
                  <th className="text-left py-2 px-4">Tag</th>
                  <th className="text-right py-2 px-4">Interactions</th>
                </tr>
              </thead>
              <tbody>
                {tags.map((tag) => (
                  <tr key={tag.name} className="border-b">
                    <td className="py-2 px-4">{tag.name}</td>
                    <td className="text-right py-2 px-4">{tag.interactions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            The algorithm hasn't seen enough user interactions to determine user
            preference yet.
          </div>
        )}
        <Separator className="my-4" />
        <p className="pt-2">
          Interactions with the tag are measured by various actions a user has
          taken on content with the associated tag.
        </p>
      </CardContent>
    </Card>
  );
}
