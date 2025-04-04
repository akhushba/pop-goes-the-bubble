import { Card, CardContent } from "./ui/card";
import { Content, Tweet, Video } from "@/models/Content";

type FeedProps = {
  contentList: Content[];
};

export default function Feed({ contentList }: FeedProps) {
  return (
    <div className="grid gap-4 mt-4">
      {contentList.map((item, index) => (
        <Card key={index} className="p-4">
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
                >
                  Click to see more!
                </a>
              </>
            ) : null}
            <div className="mt-2 text-sm text-gray-500">
              Tags: {item.tags.map((tag) => tag).join(", ")}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
