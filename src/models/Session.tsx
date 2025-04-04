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
characters[0].addInteraction("Trump", 12);
characters[0].addInteraction("Elon Musk", 2);
characters[0].addInteraction("MAGA", 4);
characters[0].addInteraction("Pierre Poilievre", 3);
characters[0].addInteraction("Fox News", 8);
characters[0].addInteraction("Anti-Woke", 11);
characters[0].addInteraction("Anti-Liberal", 3);
characters[1].addInteraction("Liberal", 8);
characters[1].addInteraction("Anti-Musk", 9);
characters[1].addInteraction("LGBTQ+ Rights", 7);
characters[1].addInteraction("Mark Carney", 2);
characters[1].addInteraction("Social Justice", 9);
characters[1].addInteraction("Anti-Trump", 9);
characters[2].addInteraction("AI", 6);
characters[2].addInteraction("Cryptocurrency", 8);
characters[3].addInteraction("Anti-AI", 4);
characters[3].addInteraction("Art", 90);
characters[4].addInteraction("Music", 7);
characters[4].addInteraction("Sports", 2);
characters[4].addInteraction("Movies", 4);

export const contentList: Content[] = [
  //liberals
  new Tweet(
    "Justice for Cwecwe",
    "Justice for every child who is still too young to say #MeToo - yet whose innocence was stolen.",
    ["MeToo", "Social Justice"],
    14
  ),

  new Video(
    "Pokemon Art!",
    "To change is to grow and to grow is to evolve 💙💖🤍  Happy #transdayofvisibility to those on their own journey !",
    "https://x.com/starsalts/status/1906793490106994788",
    ["LGBTQ+ Rights", "Equality", "Art"],
    76
  ),

  new Video(
    "Who is Mark Carney",
    "What you need to know about Canada's new unelected prime minister.",
    "https://www.youtube.com/watch?v=4PT1922ye1w&ab_channel=J.J.McCullough",
    ["Liberal", "Anti-Trump", "Mark Carney"],
    56
  ),

  new Tweet(
    "Equal Pay Day",
    "It’s #EqualPayDay, y’all… and in 2025, the wage gap just got WORSE — widening for the first time in 20 years. Women still aren’t paid equally, and women of color are hit hardest. Equal work deserves equal pay.",
    ["Social Justice", "Equality"],
    25
  ),


  new Tweet(
    "Message from Liberal Party",
    "We cancelled the consumer carbon tax. This week, Canadians are starting to see that change at the gas pump.",
    ["Liberal"],
    10
  ),

  new Video(
    "Tariffs!",
    "Clearing up the Canada Tariff misinformation.",
    "https://www.youtube.com/watch?v=9ZvDhayPHxs&ab_channel=ThePlainBagel ",
    ["Liberal", "Tariff"],
    26
  ),

  new Tweet(
    "#TransDayOfVisibility",
    "If trans people bother you more than nazis, you need to re-evaluate your life.",
    ["LGBTQ+ Rights", "Equality"],
    45
  ),

  new Tweet(
    "Report",
    "Liberal MP Sean Casey warns that Pierre Poilievre 'doesn’t just want to cut the CBC—he wants to wipe it out.'",
    ["Liberal", "Pierre Poilievre"],
    10
  ),

  new Tweet(
    "#TransDayOfVisibility",
    "Remembering #BriannaGhey today. Hate will never win.",
    ["LGBTQ+ Rights", "Equality"],
    25
  ),

  new Tweet(
    "Elon Musk is baddddd",
    "ELON MUSK IS A PRIVATE CITIZEN WHO JUST OPENLY TRIED TO PURCHASE AN ELECTION.  WHY THE FUCK HAVEN'T STATE OFFICIALS ARRESTED HIS ASS?  HE HAS NO IMMUNITY FROM ANYTHING!  TRUMP CAN'T PARDON HIM FOR STATE CRIMES!  WHY IS EVERYONE SO FUCKING COWARDLY??????",
    ["Anti-Musk", "Anti-Trump", "Social Justice"],
    67
  ),

  new Video(
    "Tariff Wars",
    "Does Trump actually know what he's doing?",
    "https://www.youtube.com/watch?v=lHoZUxtsVW0&ab_channel=CBCNews ",
    ["Liberal", "Anti-Trump", "Tariff"],
    13
  ),

  new Tweet(
    "Fuck Elon Musk",
    "I’m in total disbelief that a privileged fucking Nazi from South Africa is parading around the U.S. like he owns the place - tearing shit down with his army of bootlicking tech nerds - and no one’s stopping him. How the fuck is this even happening?",
    ["Anti-Musk", "Social Justice"],
    33
  ),

  new Tweet(
    "Jagmeet Singh a devastating quote on Poilievre today lmfao",
    "'I don’t think any woman wants to hear Pierre Poilievre talking about their body. Period.'💀🤭",
    ["Pierre Poilievre", "Liberal"],
    45
  ),

  new Tweet(
    "#TransDayOfVisibility",
    "I am a trans man who transitioned in 1975, 50 yrs ago. Best thing I ever did",
    ["LGBTQ+ Rights", "Equality"],
    32
  ),

  new Tweet(
    "Down with Trump",
    "His policies made it so a woman in Georgia who took abortion pills and experienced health complications can't even get the care she needs. Wow, what a hero.",
    ["Anti-Trump", "Pro-Choice"],
    21
  ),

  new Video(
    "Trump gets NIGHTMARE news from Canada's new leader",
    "Canada's new leader Mark Carney has something to tell Trump.",
    "https://www.youtube.com/watch?v=yCGo6qzGYhw&ab_channel=BrianTylerCohen",
    ["Liberal", "Anti-Trump", "Mark Carney"],
    76
  ),

  new Tweet(
    "Elon Musk is pathetic",
    "The richest man on Earth is sentencing kids in poor countries to death from preventable diseases, delighting in mass firings, destroying the program that keeps elderly from eating cat food and he thinks we should feel bad for him that his stock holdings are down.",
    ["Anti-Musk", "Social Justice"],
    44
  ),
 



  

  //conservatives
  new Tweet(
    "Hypocrites",
    "Pro-choicers say stuff like 'women are not baby vending machines' but then turn around and support surrogacy for rich couples and gay men.",
    ["Anti-Woke", "Pro-Life"],
    6
  ),

  new Video(
    "TRUMP THE CHAMP",
    "President gets champion wrestler treatment",
    "https://www.youtube.com/watch?v=nar8EbRq28Q&ab_channel=FoxNews",
    ["Trump", "Fox News"],
    50
  ),

  new Video(
    "'I HAVE HAD ENOUGH'",
    "Elon Musk reaches final straw with Democrats",
    "https://www.youtube.com/watch?v=tH1YfBcGMCo&ab_channel=FoxNews",
    ["Elon Musk", "Fox News", "Anti-Liberal"],
    42
  ),

  new Video(
    "LOL",
    "When Delusional Woke People Get OWNED #13",
    "https://www.youtube.com/watch?v=QO6sqqwjZIY&ab_channel=ARAKOTV",
    ["Anti-Woke", "Comedy", "Reaction"],
    9
  ),

  new Video(
    "'When I Say They Should Be A State, I Mean That'",
    "Trump Makes The Case For Bringing Canada Into U.S.",
    "https://www.youtube.com/watch?v=JyIa2_tZt5o&ab_channel=ForbesBreakingNews",
    ["Trump", "Conservative"],
    32
  ),

  
  new Video(
    "Go Woke Go Broke",
    "The fall of mighty brands to the woke agenda",
    "https://www.youtube.com/watch?v=qildxk9Z7AM&ab_channel=SkyNewsAustralia",
    ["Anti-Woke", "Big Corporations"],
    43
  ),

  new Tweet(
    "Palestine Protest Video",
    "Who has had enough of this? The Liberals did this to Canada with their mass immigration! Why would you ever vote Liberal??",
    ["Anti-Liberal", "Anti-Woke"],
    7
  ),

  new Video(
    "To pro-choicers",
    "You shouldn’t treat your children like garbage.",
    "https://x.com/Prolife_Texan__/status/1907151943933571129",
    ["Pro-Life", "Anti-Woke", "Conservative"],
    23
  ),

  new Tweet(
    "Liberal grandma",
    "A liberal grandma was seen keying a Tesla..  let's show her she's not too old to go to jail",
    ["Elon Musk", "Anti-Woke", "Tesla"],
    33
  ),

  new Video(
    "Trump Rally",
    "FULL Trump rally speech in DC",
    "https://www.youtube.com/watch?v=R--1IfIPcc0&ab_channel=FOX5WashingtonDC",
    ["Trump", "Fox News"],
    50
  ),

  new Tweet( 
    "GOD IS GOOD", 
    "HOLY SH*T 🚨 The BLM Mural Painted is officially gone. The DC Mayor caved and Trump won big 🔥 THIS IS WHAT I VOTED FOR", 
    ["Anti-Woke", "MAGA", "Conservative"], 
    32
  ),

  new Video(
    "Thank God",
    "And the lord sent a plague of prolife ravens to stop the abortionists and their wicked acts...",
    "https://x.com/MarchandSurgery/status/1907286194527797399",
    ["Pro-Life", "Anti-Woke", "Conservative"],
    6
  ),

  new Video(
    "Father of five detained by ICE",
    "Should’ve became a citizen before starting a family. Now five kids are paying for his choices.",
    "https://x.com/ClownWorld_/status/1906208695723454641",
    ["Anti-Woke", "MAGA", "Conservative"],
    6
  ),

  new Tweet(
    "BANNED",
    "Violators will receive a hefty fine for displaying any flag other than the American flag, the state flag, military flags, or a handful of others approved by lawmakers. The move is met with pushback as opponents argue it undercuts free speech and takes authority away from local communities.",
    ["Anti-Woke", "Fox News"],
    44
  ),

  new Video(
    "TARIFFS",
    "Before the media spin this as Trump punishing the EU, let me explain the real issues.",
    "https://x.com/Artemisfornow/status/1906963667045777441",
    ["Trump", "Tariff"],
    18
  ),

  new Tweet( 
    "About Time", 
    "BLM Plaza is officially gone 🥳", 
    ["Anti-Woke", "MAGA"], 
    45 
  ),

  new Tweet(
    "Rejoice",
    "IT'S LIBERATION DAY IN AMERICA",
    ["Trump", "MAGA", "Conservative"],
    56
  ),

  new Video(
    "Canada is doomed",
    "There is no way Canada is a serious country and liberal Canadians are this vapid",
    "https://x.com/TruthSeek01011/status/1907582271852523620",
    ["Anti-Woke", "Liberal", "Comedy"],
    12
  ),

  new Tweet(
    "Liberal 'logic'",
    "Tesla investor calls for Elon Musk to step down because he shouldn’t be scared to drive his cyber truck. He is blaming Elon NOT the domestic t$rr$rists. ",
    ["Elon Musk", "Tesla", "Anti-Woke"],
    22
  ),

  new Video(
    "This looks like 'game over'",
    "Bill Maher warns Democrats",
    "https://www.youtube.com/watch?v=BDHXfHEJmI8&ab_channel=FoxNews",
    ["Fox News", "Anti-Liberal"],
    13
  ),

  new Tweet(
    "Conservative Support",
    "HUGE crowd for Pierre Poilievre in Liberal Kingston! WOW. Don't believe the polls!",
    ["Pierre Poilievre", "Conservative"],
    7
  ),

  new Video(
    "Trump and Musk",
    "TRUMP ends Cabinet meeting with a TOUCHING TRIBUTE to ELON MUSK",
    "https://www.youtube.com/watch?v=8B_yLoKI5H8&ab_channel=DiarioAS",
    ["Trump", "Elon Musk"],
    43
  ),

  new Video(
    "WTH IS WRONG WITH PEOPLE ?",
    "61-year-old female Tesla driver assaulted inside her own car after being chased down.",
    "https://x.com/CRRJA5/status/1906429179052093536",
    ["Elon Musk", "Tesla", "Anti-Woke"],
    22
  ),

  new Tweet( 
    "Shut Up!", 
    "So STOP it with the 'my body, my choice' garbage! 😐 It's simply NOT TRUE!", 
    ["Anti-Woke", "Pro-Life", "Conservative"], 
    16
  ),

  new Tweet(
    "Vote Conservative",
    "If you're ready to: Axe the sales tax on new homes, Cut income tax by 15%, Pay no capital gains tax when you reinvest in, Train 350000 trade workers to build, Break our dependence on the U.S. with a National Energy Corridor. Vote for change on April 28. Vote Conservative.",
    ["Pierre Poilievre", "Conservative"],
    28
  ),

  new Video(
    "What a joke",
    "Woke People Making FOOLS Of Themselves...",
    "https://www.youtube.com/watch?v=d_bjHSNqyp0&ab_channel=AlphaCentral",
    ["Anti-Woke", "Comedy", "Reaction"],
    17
  ),


  new Tweet( 
    "Diversity is a holding us back", 
    "Back in 1955, Walt Disney didn't care about DEI. He gave an ex-SS Officer from Nazi Germany a platform to educate White America about space exploration. 14 years later, two white men walked on the moon. Imagine what we can do once diversity, inclusion & equity is buried for good.", 
    ["Anti-Woke", "Conservative", "MAGA"], 
    32
  ),
  
  new Tweet(
    "Vote Conservative",
    "With or without the Americans, we will rebuild Canada's economy after the Lost Liberal Decade to become a strong, sovereign, and united country that stands on our own two feet. That can only happen if you vote for change. Vote to put Canada First. Vote Conservative.",
    ["Pierre Poilievre", "Conservative"],
    15
  ),


 //neutral?
 new Video(
  "Can 1 Woke Teen Survive 20 Trump Supporters?",
  "Will Dean Withers hold his ground or will Trump supporters dominate?",
  "https://www.youtube.com/watch?v=68aej2qmCtw&ab_channel=Jubilee",
  ["Liberal", "Trump"],
  50
),

new Video(
  "Luigi Mangione",
  "United Healthcare CEO Shot In Public, But Nation Wants Killer Freed: EVERYTHING We Know So Far",
  "https://www.youtube.com/watch?v=qMicOCInhLI&ab_channel=RottenMango",
  ["Luigi Mangione", "Health Care", "Social Justice"],
  34
),

new Video(
  "Project 2025",
  "How Trump’s Policies Align With Project 2025: A Comparison | WSJ",
  "https://www.youtube.com/watch?v=8qaEDlu2NQg&ab_channel=TheWallStreetJournal ",
  ["Trump", "Anti-Trump", "Project 2025", "Conservative", "Liberal"],
  61
),

new Video(
  "Free Luigi Rally",
  "Crowd gathers to demand for the release of Luigi Mangione, the United Healthcare CEO shooter",
  "https://www.youtube.com/watch?v=iFAKkquGTxs&ab_channel=Channel5withAndrewCallaghan",
  ["Luigi Mangione", "Health Care", "Social Justice"],
  34
),

  
];

export const allTags = Array.from(
  new Set(contentList.flatMap((content) => content.tags || []))
).sort();
