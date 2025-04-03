import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "./ui/card";
import { allTags, characters, contentList } from "@/models/Session";
import { useEffect, useState, useRef } from "react";
import { Content } from "@/models/Content";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import Feed from "./Feed";

type ExplorePageProps = {
  currentCharacter: number;
  setCurrentCharacter: (charID: number) => void;
  setPage: (pageId: number) => void;
};

export default function ExplorePage({
  currentCharacter,
  setCurrentCharacter,
  setPage,
}: ExplorePageProps) {
  const [currentFeed, setCurrentFeed] = useState<Content[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestedTags, setSuggestedTags] = useState<string[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setCurrentFeed([]);
      setSuggestedTags([]);
      return;
    }

    // Filter tags that match the search query
    const matchedTags = allTags.filter((tag) =>
      tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSuggestedTags(matchedTags);

    // Filter content that has tags matching the search query
    const matchedContent = contentList.filter((content) =>
      content.tags?.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setCurrentFeed(matchedContent);
  }, [searchQuery]);

  // Handle clicks outside the search bar to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
    // Focus remains on input after clicking a tag
    document.getElementById("search-input")?.focus();
  };

  return (
    <div className="select-character">
      <div className="heading flex justify-between">
        <h1 className="text-3xl font-bold">{`${characters[currentCharacter].name}'s Explore Page`}</h1>
        <div className="flex gap-2">
          <Button
            className="search-bar p-2 text-center"
            variant="outline"
            onClick={() => setPage(0)}
          >
            FYP
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

      <div className="search-bar relative mb-4" ref={searchRef}>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="search-input"
            placeholder="Search by tags..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
          />
        </div>

        {isSearchFocused && suggestedTags.length > 0 && (
          <Card className="absolute z-10 mt-1 w-full">
            <CardContent className="p-2">
              <div className="flex flex-wrap gap-2">
                {suggestedTags.map((tag) => (
                  <Button
                    key={tag}
                    variant="outline"
                    size="sm"
                    onClick={() => handleTagClick(tag)}
                    className="rounded-full"
                  >
                    #{tag}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="search-feed">
        {currentFeed.length > 0 ? (
          <Feed contentList={currentFeed} />
        ) : searchQuery ? (
          <div className="text-center text-muted-foreground py-8">
            No results found for "{searchQuery}"
          </div>
        ) : (
          <div className="text-center text-muted-foreground py-8">
            Please search to get started
          </div>
        )}
      </div>
    </div>
  );
}
