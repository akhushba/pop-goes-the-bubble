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
  tags: Tag[];

  constructor(title: string, tags: Tag[] = []) {
    this.title = title;
    this.tags = tags;
  }
}

export class Tweet extends Content {
  content: string;

  constructor(title: string, content: string, tags: Tag[] = []) {
    super(title, tags);
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
    tags: Tag[] = []
  ) {
    super(title, tags);
    this.caption = caption;
    this.videoLink = videoLink;
  }
}
