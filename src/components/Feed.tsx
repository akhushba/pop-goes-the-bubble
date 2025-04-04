import { useEffect, useState, useRef } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Content, Tweet, Video } from "@/models/Content";
import { Character } from "@/models/Character";

type FeedProps = {
  contentGiven: Content[];
  character: Character;
};

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default function Feed({ contentGiven, character }: FeedProps) {
  const [currentLikes, setCurrentLiked] = useState<boolean[]>([]);
  const hoverTimers = useRef<number[]>([]);
  const [contentList, setContentList] = useState(contentGiven);

  useEffect(() => {
    setCurrentLiked(contentList.map(() => false));
    setContentList(shuffleArray(contentGiven));

    // Initialize hover timers array
    hoverTimers.current = contentList.map(() => 0);
    return () => {
      hoverTimers.current.forEach((timer) => timer && clearTimeout(timer));
    };
  }, [contentGiven]);

  const handleCardClick = (item: Content) => {
    item.tags.forEach((tag) => {
      character.addInteraction(tag, 2);
    });
  };

  const handleMouseEnter = (index: number, item: Content) => {
    hoverTimers.current[index] = window.setTimeout(() => {
      item.tags.forEach((tag) => {
        character.addInteraction(tag, 1);
      });
    }, 5000);
  };

  const handleMouseLeave = (index: number) => {
    if (hoverTimers.current[index]) {
      clearTimeout(hoverTimers.current[index]);
      hoverTimers.current[index] = 0;
    }
  };

  return (
    <div className="grid gap-4 mt-4">
      {contentList.map((item, index) => (
        <Card
          key={index}
          className="p-4 cursor-pointer"
          onClick={() => handleCardClick(item)}
          onMouseEnter={() => handleMouseEnter(index, item)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <CardContent>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            {item instanceof Tweet ? (
              <p className="text-gray-700">{item.content}</p>
            ) : item instanceof Video ? (
              <>
                <p className="text-gray-700">{item.caption}</p>
                <a
                  href={item.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                  onClick={(e) => {
                    e.stopPropagation();
                    item.tags.forEach((tag) => {
                      character.addInteraction(tag, 5);
                    });
                  }}
                >
                  Click to see more!
                </a>
              </>
            ) : null}
            <div className="mt-2 text-sm text-gray-500">
              Tags: {item.tags.map((tag) => tag).join(", ")}
            </div>
            <div className="interactions flex w-full justify-end gap-2">
              <Button
                variant="outline"
                className={`like-button ${
                  currentLikes[index] ? "bg-blue-200" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentLiked((prevLikes) => {
                    const newLikes = [...prevLikes];
                    newLikes[index] = !newLikes[index];
                    if (newLikes[index]) {
                      item.tags.forEach((tag) => {
                        character.addInteraction(tag, 2);
                      });
                    }
                    return newLikes;
                  });
                }}
              >
                <svg
                  fill={currentLikes[index] ? "#3b82f6" : "#000000"}
                  width="24px"
                  height="24px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M19.017 31.992c-9.088 0-9.158-0.377-10.284-1.224-0.597-0.449-1.723-0.76-5.838-1.028-0.298-0.020-0.583-0.134-0.773-0.365-0.087-0.107-2.143-3.105-2.143-7.907 0-4.732 1.472-6.89 1.534-6.99 0.182-0.293 0.503-0.47 0.847-0.47 3.378 0 8.062-4.313 11.21-11.841 0.544-1.302 0.657-2.159 2.657-2.159 1.137 0 2.413 0.815 3.042 1.86 1.291 2.135 0.636 6.721 0.029 9.171 2.063-0.017 5.796-0.045 7.572-0.045 2.471 0 4.107 1.473 4.156 3.627 0.017 0.711-0.077 1.619-0.282 2.089 0.544 0.543 1.245 1.36 1.276 2.414 0.038 1.36-0.852 2.395-1.421 2.989 0.131 0.395 0.391 0.92 0.366 1.547-0.063 1.542-1.253 2.535-1.994 3.054 0.061 0.422 0.11 1.218-0.026 1.834-0.535 2.457-4.137 3.443-9.928 3.443zM3.426 27.712c3.584 0.297 5.5 0.698 6.51 1.459 0.782 0.589 0.662 0.822 9.081 0.822 2.568 0 7.59-0.107 7.976-1.87 0.153-0.705-0.59-1.398-0.593-1.403-0.203-0.501 0.023-1.089 0.518-1.305 0.008-0.004 2.005-0.719 2.050-1.835 0.030-0.713-0.46-1.142-0.471-1.16-0.291-0.452-0.185-1.072 0.257-1.38 0.005-0.004 1.299-0.788 1.267-1.857-0.024-0.849-1.143-1.447-1.177-1.466-0.25-0.143-0.432-0.39-0.489-0.674-0.056-0.282 0.007-0.579 0.183-0.808 0 0 0.509-0.808 0.49-1.566-0.037-1.623-1.782-1.674-2.156-1.674-2.523 0-9.001 0.025-9.001 0.025-0.349 0.002-0.652-0.164-0.84-0.443s-0.201-0.627-0.092-0.944c0.977-2.813 1.523-7.228 0.616-8.736-0.267-0.445-0.328-0.889-1.328-0.889-0.139 0-0.468 0.11-0.812 0.929-3.341 7.995-8.332 12.62-12.421 13.037-0.353 0.804-1.016 2.47-1.016 5.493 0 3.085 0.977 5.473 1.447 6.245z"></path>
                  </g>
                </svg>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
