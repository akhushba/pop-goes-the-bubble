export class Tag {
  tag: string;
  interactions: number = 0;

  constructor(tag: string, interactions: number = 0) {
    this.tag = tag;
    this.interactions = interactions;
  }
}

export abstract class Content {
  title: string;
  tags: string[];
  interactionCount: number;

  constructor(title: string, tags: string[], interactionCount:number = 0) {
    this.title = title;
    this.tags = tags;
    this.interactionCount = interactionCount;
  }
}

export class Tweet extends Content {
  content: string;

  constructor(title: string, content: string, tags: string[], interactionCount:number = 0) {
    super(title, tags, interactionCount);
    this.content = content;
  }
}

export class Video extends Content {
  caption: string;
  videoLink: string;

  constructor(
    title: string,
    caption: string,
    videoLink: string,
    tags: string[] = [],
    interactionCount:number = 0,
  ) {
    super(title, tags, interactionCount);
    this.caption = caption;
    this.videoLink = videoLink;
  }
}
