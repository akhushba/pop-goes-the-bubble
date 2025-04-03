// setup for simulation

import { Character } from "./Character";
import { Content, Tweet, Tag, Video } from "./Content";

export let characters = [
  new Character("Alice", "A loving mother."),
  new Character("Bob", "A social justice warrior."),
  new Character("Charlie", "An owner of a tech startup."),
  new Character("Delta", "A small artist."),
  new Character("Erwin", "An explorer."),
];

characters[0].addInteraction("Conservative", 9);
characters[0].addInteraction("Trump", 5);
characters[0].addInteraction("Anti-Woke", 5);
characters[1].addInteraction("Liberal", 8);
characters[1].addInteraction("LGBTQ+ Rights", 7);
characters[2].addInteraction("AI", 6);
characters[2].addInteraction("Cryptocurrency", 8);
characters[3].addInteraction("Anti-AI", 4);
characters[3].addInteraction("Art", 90);
characters[4].addInteraction("Music", 7);
characters[4].addInteraction("Sports", 2);
characters[4].addInteraction("Movies", 4);



export const contentList: Content[] = [
  new Tweet(
    "Hypocrites",
    "Pro-choicers say stuff like 'women are not baby vending machines' but then turn around and support surrogacy for rich couples and gay men.",
    ["Anti-Woke", "Pro-Life"],
    6
  ),
  

  new Video(
    "Can 1 Woke Teen Survive 20 Trump Supporters?",
    "Watch Dean Withers debate with 20 Trump supporters.",
    "https://www.youtube.com/watch?v=68aej2qmCtw&ab_channel=Jubilee",
    ["Liberal", "Anti-Trump"],
    50
  ),
 
];
