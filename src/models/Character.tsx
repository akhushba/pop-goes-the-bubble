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
    // console.log(contentList);
    // console.log(
    //   contentList.filter((content) =>
    //     content.tags.some((tag) => this.tags.includes(tag.tag))
    //   )
    // );
    return contentList.filter((content) =>
      content.tags.some((tag) => this.tags.includes(tag))
    );
  }
}
