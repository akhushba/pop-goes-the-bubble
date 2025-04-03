class Tag {
  tag: string;
  interactions: number = 0;

  constructor(tag: string, interactions: number = 0) {
    this.tag = tag;
    this.interactions = interactions;
  }
}

class Character {
  name: string;
  description: string;
  interactedTags: Tag[];

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
    this.interactedTags = [];
  }

  addInteraction(tag: string, interaction: number) {
    const existingTag = this.interactedTags.find((t) => t.tag === tag);
    if (existingTag) {
      existingTag.interactions += interaction;
    } else {
      this.interactedTags.push(new Tag(tag, interaction));
    }
  }
}

export let characters = [
  new Character("Alice", "A curious adventurer."),
  new Character("Bob", "A skilled mechanic."),
  new Character("Charlie", "A mysterious stranger."),
  new Character("Delta", "A pokemon master."),
];

characters[0].addInteraction("Bravery", 5);
characters[1].addInteraction("Intelligence", 8);
characters[2].addInteraction("Stealth", 3);
characters[3].addInteraction("Cringe", 90);
