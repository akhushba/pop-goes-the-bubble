import { Separator } from "@/components/ui/separator";
import { characters } from "@/models/Session";
import { Button } from "./ui/button";

type ProfilePageProps = {
  currentCharacter: number;
  setCurrentCharacter: (charID: number) => void;
  setPage: (pageId: number) => void;
};

export default function ProfilePage({
  currentCharacter,
  setCurrentCharacter,
  setPage,
}: ProfilePageProps) {
  return (
    <div className="select-character">
      <div className="heading flex justify-between">
        <div className="flex gap-2">
          <Button
            className="profile rounded-full w-10 h-10 p-0 flex items-center justify-center bg-pink-200 hover:bg-pink-100"
            variant="outline"
            onClick={() => setPage(2)}
          >
            <span className="sr-only">Profile</span>
          </Button>
          <h1 className="text-3xl font-bold">{`${characters[currentCharacter].name}'s Profile`}</h1>
        </div>
        <div className="flex gap-2">
          <Button
            className="search-bar p-2 text-center"
            variant="outline"
            onClick={() => setPage(1)}
          >
            Explore
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
    </div>
  );
}
