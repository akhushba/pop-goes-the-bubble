import { Content, Tag } from "./Content";
import { contentList } from "./Session";

export class Character {
  name: string;
  description: string;
  interactedTags: Tag[];
  tags: string[];

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
    this.interactedTags = [];
    this.tags = [];
  }

  addInteraction(tag: string, interaction: number) {
    const existingTag = this.interactedTags.find((t) => t.tag === tag);
    if (existingTag) {
      existingTag.interactions += interaction;
    } else {
      this.interactedTags.push(new Tag(tag, interaction));
      this.tags.push(tag);
    }
  }

  getRelevantContent(): Content[] {
    // Create a map of tag to interaction count for quick lookup
    const tagInteractionMap = new Map<string, number>();
    this.interactedTags.forEach((tag) => {
      tagInteractionMap.set(tag.tag, tag.interactions);
    });

    return contentList
      .filter((content) => content.tags.some((tag) => this.tags.includes(tag)))
      .sort((a, b) => {
        const aScore = a.tags.reduce((sum, tag) => {
          return sum + (tagInteractionMap.get(tag) || 0);
        }, 0);

        const bScore = b.tags.reduce((sum, tag) => {
          return sum + (tagInteractionMap.get(tag) || 0);
        }, 0);

        return bScore - aScore;
      });
  }
}
