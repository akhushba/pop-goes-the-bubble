import { Card, CardContent } from "./ui/card";
import { allTags, characters, contentList } from "@/models/Session";
import { useEffect, useState, useRef } from "react";
import { Content } from "@/models/Content";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import Feed from "./Feed";
import { CharacterNav } from "./CharacterNav";

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
  const inputRef = useRef<HTMLInputElement>(null);

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

    console.log(allTags);

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
    setIsSearchFocused(false);
    inputRef.current?.blur();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsSearchFocused(false);
      inputRef.current?.blur();
    }
  };

  return (
    <div className="select-character">
      <CharacterNav
        characterName={characters[currentCharacter].name}
        pageName={"Explore Page"}
        setCurrentCharacter={setCurrentCharacter}
        setPage={setPage}
      />

      <div className="search-bar relative mb-4" ref={searchRef}>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="search-input"
            ref={inputRef}
            placeholder="Search by tags..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            list="no-autocomplete"
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
          <Feed
            contentGiven={currentFeed}
            character={characters[currentCharacter]}
          />
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
