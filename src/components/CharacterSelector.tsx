import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "./ui/card";
import { characters } from "@/models/Character";

type CharacterSelectorProps = {
  setCurrentCharacter: (character: number) => void;
};

export default function CharacterSelector({
  setCurrentCharacter,
}: CharacterSelectorProps) {
  return (
    <div className="select-character">
      <h1 className="text-3xl font-bold">Pick a character</h1>
      <Separator className="my-4" />
      <div className="grid grid-cols-2 gap-4">
        {characters.map((character, index) => (
          <Card
            key={index}
            className="aspect-square p-4 transition-all bg-pink-100 hover:bg-pink-200 h-full hover:scale-95 cursor-pointer"
            onClick={() => setCurrentCharacter(index)}
          >
            <CardContent className="p-4 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold">{character.name}</h2>
                <p className="text-sm text-gray-600">{character.description}</p>
              </div>
              <div className="mt-2">
                <h3 className="text-sm font-semibold">Tags:</h3>
                <ul className="text-xs text-gray-500">
                  {character.interactedTags
                    .sort((a, b) => b.interactions - a.interactions)
                    .map((tag, i) => (
                      <li key={i}>
                        {tag.tag} ({tag.interactions})
                      </li>
                    ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
