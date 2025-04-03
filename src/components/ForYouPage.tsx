import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "./ui/card";
import { characters } from "@/models/Character";

type ForYouPageProps = {
  currentCharacter: number;
};

export default function ForYouPage({ currentCharacter }: ForYouPageProps) {
  return (
    <div className="select-character">
      <h1 className="text-3xl font-bold">For You Page</h1>
      <Separator className="my-4" />
      Hellooo, insert curated feed here for {characters[currentCharacter].name}
    </div>
  );
}
