// setup for simulation

import { Character } from "./Character";
import { Content, Tweet, Tag, Video } from "./Content";

export let characters = [
  new Character("Alice", "A curious adventurer."),
  new Character("Bob", "A skilled mechanic."),
  new Character("Charlie", "A mysterious stranger."),
  new Character("Delta", "A pokemon master."),
];

characters[0].addInteraction("Culture", 9);
characters[0].addInteraction("Science", 5);
characters[1].addInteraction("Technology", 8);
characters[1].addInteraction("Automobile", 7);
characters[2].addInteraction("Stealth", 6);
characters[2].addInteraction("Cybersecurity", 8);
characters[3].addInteraction("Sports", 4);
characters[3].addInteraction("Cringe", 90);

export const contentList: Content[] = [
  new Tweet(
    "Breaking: Market Hits Record Highs",
    "Stock markets soar to new heights amid economic optimism.",
    [new Tag("Finance", 7), new Tag("Stocks", 9)]
  ),
  new Tweet(
    "Tech Giants Unveil New AI",
    "Leading tech companies showcase their latest advancements in AI.",
    [new Tag("Technology", 10), new Tag("AI", 8)]
  ),
  new Tweet(
    "Climate Change Impact on Cities",
    "Rising temperatures are reshaping urban environments.",
    [new Tag("Environment", 6), new Tag("Climate", 7)]
  ),
  new Tweet(
    "Space Exploration Update",
    "NASA announces new mission to explore distant planets.",
    [new Tag("Science", 9), new Tag("Space", 10)]
  ),
  new Tweet(
    "Sports Championship Results",
    "Highlights from the latest major sports event.",
    [new Tag("Sports", 8), new Tag("Championship", 7)]
  ),
  new Tweet(
    "New Breakthrough in Medicine",
    "Scientists discover a new treatment for chronic diseases.",
    [new Tag("Health", 9), new Tag("Medicine", 10)]
  ),
  new Tweet(
    "Global Politics Shifts",
    "Major political changes happening worldwide.",
    [new Tag("Politics", 7), new Tag("World Tweet", 8)]
  ),
  new Tweet(
    "Advancements in Renewable Energy",
    "New solar and wind technologies set to revolutionize the industry.",
    [new Tag("Environment", 8), new Tag("Energy", 9)]
  ),
  new Tweet(
    "Cybersecurity Threats Rising",
    "Experts warn about increasing cyber threats in 2025.",
    [new Tag("Technology", 7), new Tag("Cybersecurity", 10)]
  ),
  new Tweet(
    "Cultural Festival Highlights",
    "A look into the latest international cultural festivals.",
    [new Tag("Culture", 6), new Tag("Events", 7)]
  ),

  new Video(
    "How Quantum Computing Works",
    "A deep dive into the world of quantum computing.",
    "https://example.com/quantum",
    [new Tag("Technology", 9), new Tag("Science", 10)]
  ),
  new Video(
    "Top 10 Travel Destinations",
    "Explore the most breathtaking places to visit this year.",
    "https://example.com/travel",
    [new Tag("Travel", 8), new Tag("Adventure", 7)]
  ),
  new Video(
    "The Future of Electric Vehicles",
    "Experts discuss the latest trends in electric mobility.",
    "https://example.com/ev",
    [new Tag("Technology", 8), new Tag("Automobile", 7)]
  ),
  new Video(
    "SpaceX Launch Live",
    "Watch the latest SpaceX rocket launch live.",
    "https://example.com/spacex",
    [new Tag("Science", 9), new Tag("Space", 10)]
  ),
  new Video(
    "Healthy Eating Habits",
    "Tips on maintaining a nutritious diet.",
    "https://example.com/healthyeating",
    [new Tag("Health", 9), new Tag("Lifestyle", 8)]
  ),
  new Video(
    "Greatest Football Matches",
    "Reliving the most iconic football games in history.",
    "https://example.com/football",
    [new Tag("Sports", 9), new Tag("Football", 8)]
  ),
  new Video(
    "AI and the Future of Work",
    "How AI is transforming the job market.",
    "https://example.com/aiwork",
    [new Tag("Technology", 9), new Tag("AI", 10)]
  ),
  new Video(
    "Cooking Masterclass",
    "Learn gourmet cooking techniques from top chefs.",
    "https://example.com/cooking",
    [new Tag("Food", 8), new Tag("Cooking", 7)]
  ),
  new Video(
    "Best Hiking Trails",
    "Discover the most scenic hiking trails around the world.",
    "https://example.com/hiking",
    [new Tag("Travel", 7), new Tag("Adventure", 8)]
  ),
  new Video(
    "Behind the Scenes of Movie Making",
    "An exclusive look at how blockbuster movies are made.",
    "https://example.com/movies",
    [new Tag("Entertainment", 8), new Tag("Movies", 7)]
  ),
];
