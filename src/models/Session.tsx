// setup for simulation

import { Character } from "./Character";
import { Content, Tweet, Tag, Video } from "./Content";

export let characters = [
  new Character("Alice", "A loving mother."),
  new Character("Bob", "A social justice warrior."),
  new Character("Charlie", "An owner of a tech startup."),
  new Character("David", "A small artist."),
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
characters[2].addInteraction("AI", 15);
characters[2].addInteraction("Google", 5);
characters[2].addInteraction("Elon Musk", 6);
characters[2].addInteraction("Tesla", 8);
characters[2].addInteraction("Technology", 10);
characters[2].addInteraction("Cryptocurrency", 8);
characters[2].addInteraction("Tech Startup", 3);
characters[2].addInteraction("Bitcoin", 5);
characters[3].addInteraction("Anti-AI", 4);
characters[3].addInteraction("Art", 27);
characters[3].addInteraction("Art Tutorial", 11);
characters[3].addInteraction("Glaze", 5);
characters[3].addInteraction("Nightshade", 5);
characters[3].addInteraction("WIP", 16);
characters[3].addInteraction("Speedpaint", 10);
characters[3].addInteraction("Comission", 6);
characters[4].addInteraction("Health Care", 1);
characters[4].addInteraction("Environmental Impact", 1);
characters[4].addInteraction("Big Corporations", 1);
characters[4].addInteraction("Technology", 1);
characters[4].addInteraction("Tips", 1);

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
    ["Liberal", "Tips"],
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
    ["Liberal", "Anti-Trump", "Tariff", "Tips"],
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
    ["Trump", "Tariff", "Tips"],
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
    ["Pierre Poilievre", "Conservative", "Tips"],
    15
  ),

  //techbro

  new Video(
    "Googles AI Innovations",
    "OpenAI Agents & More AI Use Cases",
    "https://www.youtube.com/watch?v=4kCz1rzHFeQ&ab_channel=TheAIAdvantage",
    ["AI", "Google", "Technology"],
    37
  ),

  new Tweet(
    "Wall Street’s performance in 2025 under Trump’s chaos and failed economic policies:",
    "Dow down 2.3%, S&P 500 down, 5.2% Nasdaq down 10.3%, Russell 2000 down 9.3%, Bitcoin down 11.8%. This is what “business genius” looks like?",
    ["Anti-Trump", "Bitcoin", "Cryptocurrency"],
    23
  ),

  new Video(
    "How AI causes serious environmental problems",
    "(but might also provide solutions)",
    "https://www.youtube.com/watch?v=9aBNIekp4qY&ab_channel=DWNews",
    ["AI", "Climate Action", "Climate Change", "Environmental Impact"],
    24
  ),

  new Video(
    "You're Not Behind",
    "Become AI-Native in 2025",
    "https://www.youtube.com/watch?v=j63bBK_ct-M&ab_channel=JeffSu",
    ["AI", "Technology"],
    16
  ),

  new Video(
    "AI the new farmers",
    "Artificial intelligence comes to farming in India",
    "https://www.youtube.com/watch?v=JeU_EYFH1Jk&ab_channel=BBCNews",
    ["AI", "Technology", "Environmental Impact"],
    12
  ),

  new Video(
    "New Tech Trends",
    "Top 20 New Technology Trends That Will Define the Future",
    "https://www.youtube.com/watch?v=KvN3JXICzdM&ab_channel=AIUncovered",
    ["AI", "Technology"],
    29
  ),

  new Video(
    "Documenting Bitcoin",
    "Popular financial educator with 1.6 million followers on TikTok, Dean has changed his opinion about Bitcoin",
    "https://x.com/DocumentingBTC/status/1906483144674386250",
    ["Bitcoin", "Cryptocurrency"],
    18
  ),

  new Video(
    "News from Tesla",
    "How The Tesla Bot Will Break Reality",
    "https://www.youtube.com/watch?v=yGD3I5thTS8&ab_channel=TheTeslaSpace",
    ["Tesla", "Technology", "Elon Musk"],
    34
  ),

  new Video(
    "Why Is MIT Making Robot Insects?",
    "What happens when you shrink robots down to the size of insects? Let’s explore the mind-bending physics behind their superpowers!",
    "https://www.youtube.com/watch?v=H6q6pYZ9Fho&ab_channel=Veritasium",
    ["Technology"],
    26
  ),

  new Video(
    "Tech Tips!",
    "If you are a startup founder and want to never run out of cash, save these 8 lead generation pillars and 24 tools",
    "https://x.com/natiakourdadze/status/1905122798126735556",
    ["SaaS", "Tech Startup", "Technology"],
    26
  ),

  new Video(
    "It's been 24 hours since OpenAI unexpectedly shook the AI image world with 4o image generation.",
    "Here are the 14 most mindblowing examples so far (100% AI-generated): 1. Studio ghibli style memes",
    "https://x.com/heyBarsee/status/1904891940522647662",
    ["AI", "AI Art", "OpenAI"],
    54
  ),

  new Video(
    "CRYPTO NEWS",
    "BREAKING: Trump just signs an executive order, ZERO tax in crypto trading. This is huge!",
    "https://x.com/naiivememe/status/1907082205274472731",
    ["Trump", "Bitcoin", "Cryptocurrency"],
    22
  ),

  new Video(
    "Coolest New Technologies of 2025",
    "This year’s tech unveils are redefining what’s possible, blending creativity and innovation to transform the way we live, work, and play. Get ready to explore gadgets that feel like they’ve stepped straight out of the future.",
    "https://www.youtube.com/watch?v=T-F-vVNVQ50&ab_channel=YouFactTech",
    ["AI", "Technology"],
    19
  ),

  new Tweet(
    "OpenAI Academy just launched",
    "Learn AI for free at: http://academy.openai.com",
    ["AI", "OpenAI", "Technology", "Tips"],
    39
  ),

  new Video(
    "The World of Software as a Service (SaaS)",
    "All you need to know in a single infographic.",
    "https://x.com/YourCFOGuy/status/1906775616168276127",
    ["SaaS", "Tech Startup", "Technology", "Tips"],
    32
  ),

  new Video(
    "Why Oman’s $5B Smart Cities Are Different",
    "Saudi Arabia, UAE and Qatar have developed rapidly, driven by immense oil wealth and ambitious megaprojects. But what is neighboring Oman doing? Do they have their own megaprojects?",
    "https://www.youtube.com/watch?v=WYo4oqMri_k&ab_channel=MegaBuilds",
    ["Technology", "Environmental Impact"],
    12
  ),

  new Video(
    "Google AI Studio in 26 Minutes",
    "Improve your AI skills with the FREE Prompting QuickStart Guide I made in collaboration with Hubspot",
    "https://www.youtube.com/watch?v=13EPujO40iE&ab_channel=TinaHuang",
    ["AI", "Technology", "Google"],
    17
  ),

  new Video(
    "What's Next for Crypto?",
    "Donald Trump Just Crashed Bitcoin Due To THIS",
    "https://www.youtube.com/watch?v=Vm7HWhGzvlU&ab_channel=AltcoinDaily",
    ["Anti-Trump", "Bitcoin", "Cryptocurrency"],
    44
  ),

  new Tweet(
    "Amazon new owner of Tiktok?",
    "Amazon has submitted a bid to buy TikTok ahead of the U.S. ownership-ban deadline this Saturday.",
    ["Tiktok", "Technology", "Amazon"],
    27
  ),

  new Video(
    "People think learning AI is expensive. It’s not.",
    "I found 10 free websites so you don’t have to: These resources can change your life.",
    "https://x.com/JafarNajafov/status/1905542327072178576",
    ["AI", "Technology"],
    15
  ),

  new Video(
    "Elon Musk",
    "Accurate actuators accelerate automation",
    "https://x.com/elonmusk/status/1907317741763084507",
    ["Tesla", "Technology", "Elon Musk"],
    28
  ),

  new Video(
    "How Cryptocurrency ACTUALLY works.",
    "Bitcoin, Dogecoin, Ethereum, NFT's, all explained in one simple guide!",
    "https://www.youtube.com/watch?v=rYQgy8QDEBI&ab_channel=Mrwhosetheboss",
    ["Bitcoin", "Cryptocurrency"],
    25
  ),

  new Video(
    "I made these 10 SaaS (and earned $237,631)",
    "I'll show you my SaaS, the revenue, how to get customers, and how to find startup ideas.",
    "https://www.youtube.com/watch?v=D1BjJB-n9lg&ab_channel=MarcLou",
    ["SaaS", "Tech Startup"],
    32
  ),

  new Tweet(
    "Tesla",
    "Tesla Model Y is #1 in China",
    ["Tesla", "Technology", "Elon Musk"],
    11
  ),

  new Video(
    "I Asked AI To Make Me As Much Money As Possible",
    "Thank you Hubspot for sponsoring this video! Get my hand picked custom tech stack to optimize you business.",
    "https://www.youtube.com/watch?v=3B8Zy_jq3MA&ab_channel=CodieSanchez",
    ["AI", "Technology"],
    12
  ),

  new Video(
    "The Underdog: From His Parent’s Basement to $25M",
    "This is the story of how David Park went from a broke kid in his parent's basement to building a company now worth over $25M.",
    "https://www.youtube.com/watch?v=Gv2fzC96Z40&ab_channel=StarterStory",
    ["SaaS", "Tech Startup"],
    41
  ),

  //artist

  new Video(
    "The BEST tools for digital art",
    "Finding the right digital art tool for you can be very overwhelming, so I try to give some recommendations for which ones I think are best.",
    "https://www.youtube.com/watch?v=1QcREmOe4gM",
    ["Art", "Technology"],
    33
  ),

  new Video(
    "˖°𓇼 draw w/me !! 🪸155K DTIYS ✦",
    "iPad sketching asmr || paperlike screen protector",
    "https://www.youtube.com/watch?v=IiEMK_2rWxY",
    ["Art", "Speedpaint"],
    21
  ),

  new Video(
    "How Learning From Rella Fixed My Boring Lighting",
    "Rella is an anime-style illustrator well-known for her VOCALOID illustrations and iconic lighting techniques. I tried studying 6 of Rella's lighting scenarios to better understand her techniques and to use it to fix my lighting problems.",
    "https://www.youtube.com/watch?v=tCgSRtDRR-8",
    ["Art", "Art Tutorial", "Tips"],
    45
  ),

  new Video(
    "jumping on the trend",
    "studio ghibli art without ai 🎐",
    "https://x.com/aworkofkart/status/1906723752110682385",
    ["Art", "Anti-AI"],
    33
  ),

  new Video(
    "How I Color My Anime Art",
    "✦ Digital Drawing Tutorial [Clip Studio Paint]",
    "https://www.youtube.com/watch?v=r9c2O_6UoUg",
    ["Art", "Speedpaint", "Art Tutorial"],
    23
  ),

  new Tweet(
    "Friendly reminder for Artists, to Nightshade first, then Glaze to protect your work before uploading anywhere.",
    "http://glaze.cs.uchicago.edu For those who can’t run desktop Glaze. Any artwork uploaded is protected with Glaze through the Cara App: http://cara.app",
    ["Anti-AI", "Glaze", "Nightshade", "Tips"],
    18
  ),

  new Video(
    "WIP",
    "#timebomb #arcane",
    "https://x.com/IwachansArm/status/1907445349154783716",
    ["Art", "WIP", "Fanart"],
    28
  ),

  new Video(
    "this new AI trend has anime fans furious",
    "hayao miyazaki and studio ghibli are not happy... 😓💀",
    "https://www.youtube.com/watch?v=9kEOLezui0s",
    ["Anti-AI", "Art"],
    13
  ),

  new Video(
    "apothecary diaries photocard holder wip!!!!",
    "so excited to finish this 🥺",
    "https://x.com/0waff537/status/1906282819514741214",
    ["Art", "WIP"],
    48
  ),

  new Tweet(
    "even when humans didn't have paper, pencil, or a decent sized cerebellum, they were painting cave walls and creating art.",
    "ai bros have less creativity and skill than neanderthals",
    ["Anti-AI"],
    42
  ),

  new Video(
    "WIP",
    "Test animation",
    "https://x.com/msb_888/status/1907005146145661186",
    ["Art", "Animation", "WIP"],
    28
  ),

  new Video(
    "commissions are open! 💗 ",
    "if interested, please answer to this google forms with more information about the process:",
    "https://x.com/gittanart/status/1900568559232708946",
    ["Art", "Commission"],
    20
  ),

  new Video(
    "Draw with me",
    "🍋Miku ice Lemonade // Photoshop speedpaint",
    "https://www.youtube.com/watch?v=jah-DrKsD6I",
    ["Art", "Speedpaint"],
    38
  ),

  new Video(
    "SPILLED INKTOBER: FINAL WEEK",
    "Watch us complete our last set of inktober prompts!",
    "https://www.youtube.com/watch?v=aoymqaaPESw",
    ["Art", "Inktober"],
    15
  ),

  new Tweet(
    "To AI 'artists'",
    "Instead of using AI slop, how about you learn to draw instead. Fuckin loser",
    ["Anti-AI"],
    57
  ),

  new Video(
    "Sephiroth",
    "#commission",
    "https://x.com/_rexpo/status/1905698655820198133",
    ["Art", "Commission"],
    39
  ),

  new Tweet(
    "Guys, Pinterest just updated their terms and they're going to use all of the image you saved to train their AI!",
    "Go to Settings > Privacy and data > disable GenAI. But if someone saved your art to Pinterest, and you didn’t Glaze or Nightshade it 🥲 No where is safe 😭",
    ["Anti-AI", "Glaze", "Nightshade"],
    25
  ),

  new Video(
    "The problem with AI-generated art | Steven Zapata | TEDxBerkeley",
    "Steven Zapata tackles the rise of AI-generated art and the consequences and questions this technology poses for artists and broader society.",
    "https://www.youtube.com/watch?v=exuogrLHyxQ",
    ["Anti-AI", "Technology"],
    36
  ),

  new Video(
    "whoops!",
    "spilled coffee on a page and drew what i saw",
    "https://x.com/wingsseni/status/1905743720517177824",
    ["Art"],
    34
  ),

  new Video(
    "I’m back ！😭😭😭",
    "#timebomb #jinx  #ekko  #Arcane",
    "https://x.com/Axian427/status/1906055966073962947",
    ["Art", "Fanart"],
    31
  ),

  new Video(
    "Every Artist NEEDS to know about this!【Protect your Art from AI】",
    "Let me tell you how you can protect your art from being stolen by generative AI AND what you can do to attack back! I explain how to download and use Glaze and Nightshade.",
    "https://www.youtube.com/watch?v=rtoD0LOnygo&t=165s",
    ["Anti-AI", "Technology", "Glaze", "Nightshade"],
    31
  ),

  new Video(
    "new art",
    "#rkgk #illustration",
    "https://x.com/yuuuas1208/status/1905894557272989967",
    ["Art", "WIP"],
    38
  ),

  new Video(
    "study",
    "#GACHIAKUTA #GachiArt #rkgk",
    "https://x.com/mallicct/status/1905026664503050639",
    ["Art", "Animation", "WIP"],
    28
  ),

  new Video(
    "AI can Never Replace Ghibli",
    "Chat GPT has added an image generator and to promote it they rolled out a Ghibli image maker that can turn your photos into Ghiblized cartoons. And while I've seen a lot of images that look like Ghibli I haven't seen anything that feels like Ghibli.",
    "https://www.youtube.com/watch?v=N4qIEULexAw",
    ["Anti-AI", "Art"],
    36
  ),

  new Video(
    "speedpaint",
    "here’s my fav speedpaint no special effects just a reference  and dogging one layer",
    "https://x.com/Fai_Ryy/status/1905635456194162727",
    ["Art", "Speedpaint"],
    17
  ),

  new Tweet(
    "new term",
    "we should stop calling it 'ai art' and start calling it computer-rendered artificial pictures (C.R.A.P.)",
    ["Anti-AI", "Art"],
    20
  ),

  new Video(
    "HOW I PAINT SKIN/LIGHT",
    "This video is a basic tutorial of how I personally paint the skin and at the same time share how I study and improve at painting it, hope you enjoy and find it helpful!",
    "https://www.youtube.com/watch?v=dZNz3WlB-7M",
    ["Art", "Art Tutorial", "Speedpaint", "Tips"],
    22
  ),

  new Video(
    "'AI art Ghibli trend'",
    "but it's Miyazaki's reaction and actually art",
    "https://x.com/ren_nolasco/status/1907520144672436715",
    ["Art", "Anti-AI"],
    47
  ),

  //neutral?

  new Tweet(
    "NEW: Oil lobbyists are trying to get Congress and Trump to give them legal immunity against climate lawsuits.",
    "They know they're responsible for billions of dollars in damage and countless lives lost — so they are buy themselves out of liability.",
    ["Environmental Impact", "Climate Action"],
    16
  ),

  new Video(
    "Can 1 Woke Teen Survive 20 Trump Supporters?",
    "Will Dean Withers hold his ground or will Trump supporters dominate?",
    "https://www.youtube.com/watch?v=68aej2qmCtw&ab_channel=Jubilee",
    ["Liberal", "Trump"],
    50
  ),

  new Video(
    "A new study is turning the energy debate on its head, showing the massive benefits of transitioning to renewable energy sources such as solar, wind, and hydro",
    "Much better for planet as well as more financially rewarding for investors and the economy.",
    "https://x.com/mzjacobson/status/1903597638144176269",
    ["Environmental Impact", "Technology"],
    29
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

  new Tweet(
    "Need reasons to hate AI?",
    "AI's projected water usage could hit 6.6 billion m³ by 2027. it relies on Black slave labor to be trained. it’s already been used to further the surveillance police state (Clearview). it produces so much carbon emissions that Google rescinded its promise of carbon neutrality.",
    ["Environmental Impact", "Anti-AI", "Google"],
    31
  ),

  new Video(
    "Free Luigi Rally",
    "Crowd gathers to demand for the release of Luigi Mangione, the United Healthcare CEO shooter",
    "https://www.youtube.com/watch?v=iFAKkquGTxs&ab_channel=Channel5withAndrewCallaghan",
    ["Luigi Mangione", "Health Care", "Social Justice"],
    34
  ),

  new Video(
    "12 Cheap & Easy Tips for Reducing Your Waste",
    "We're sharing a dozen cheap and easy tips to help beginners reduce their garbage output and transition to a low waste, or zero waste lifestyle.",
    "https://www.youtube.com/watch?v=K9ojpJBSTw8",
    ["Zero Waste", "Tips"],
    32
  ),

  new Video(
    "Oil giant's leaked data reveals 'awful' pollution | BBC News",
    "Colombian energy giant Ecopetrol has polluted hundreds of sites with oil, including water sources and biodiverse wetlands, BBC Eye has found.",
    "https://www.youtube.com/watch?v=ogdMLaTZG3c",
    ["Big Corporations", "News"],
    25
  ),

  new Video(
    "Can clean energy handle the AI boom?",
    "How our digital lives are impacting our climate goals.",
    "https://www.youtube.com/watch?v=YGfJeH5HRDQ",
    ["Environmental Impact", "AI", "Technology", "Climate Action"],
    17
  ),
];

export const allTags = Array.from(
  new Set(contentList.flatMap((content) => content.tags || []))
).sort();

export const tagCategories = [
  // Technology & AI
  { tag: "AI", category: "Technology & AI" },
  { tag: "AI Art", category: "Technology & AI" },
  { tag: "Glaze", category: "Technology & AI" },
  { tag: "Nightshade", category: "Technology & AI" },
  { tag: "OpenAI", category: "Technology & AI" },
  { tag: "Technology", category: "Technology & AI" },
  { tag: "Tech Startup", category: "Technology & AI" },
  { tag: "SaaS", category: "Technology & AI" },
  { tag: "Anti-AI", category: "Technology & AI" },
  { tag: "Amazon", category: "Technology & AI" },
  { tag: "Bitcoin", category: "Technology & AI" },
  { tag: "Cryptocurrency", category: "Technology & AI" },
  { tag: "Tiktok", category: "Technology & AI" },
  { tag: "Google", category: "Technology & AI" },

  // Art & Creativity
  { tag: "Art", category: "Art & Creativity" },
  { tag: "Animation", category: "Art & Creativity" },
  { tag: "Art Tutorial", category: "Art & Creativity" },
  { tag: "Commission", category: "Art & Creativity" },
  { tag: "Fanart", category: "Art & Creativity" },
  { tag: "Inktober", category: "Art & Creativity" },
  { tag: "Speedpaint", category: "Art & Creativity" },
  { tag: "WIP", category: "Art & Creativity" },

  // --  BREAK DOWN
  // Politics & Ideology
  { tag: "Anti-Liberal", category: "Politics & Ideology" },
  { tag: "Anti-Trump", category: "Politics & Ideology" },
  { tag: "Anti-Woke", category: "Politics & Ideology" },
  { tag: "Conservative", category: "Politics & Ideology" },
  { tag: "Liberal", category: "Politics & Ideology" },
  { tag: "MAGA", category: "Politics & Ideology" },
  { tag: "Project 2025", category: "Politics & Ideology" },
  { tag: "Trump", category: "Politics & Ideology" },
  { tag: "Fox News", category: "Politics & Ideology" },
  // Social Issues
  { tag: "Equality", category: "Social Issues" },
  { tag: "LGBTQ+ Rights", category: "Social Issues" },
  { tag: "MeToo", category: "Social Issues" },
  { tag: "Pro-Choice", category: "Social Issues" },
  { tag: "Pro-Life", category: "Social Issues" },
  { tag: "Social Justice", category: "Social Issues" },
  { tag: "Elon Musk", category: "People" },
  { tag: "Mark Carney", category: "People" },
  { tag: "Pierre Poilievre", category: "People" },

  // Environment
  { tag: "Climate Action", category: "Environment" },
  { tag: "Climate Change", category: "Environment" },
  { tag: "Environmental Impact", category: "Environment" },
  { tag: "Zero Waste", category: "Environment" },

  // Media & Content
  { tag: "Comedy", category: "Media & Content" },
  { tag: "News", category: "Media & Content" },
  { tag: "Reaction", category: "Media & Content" },
  { tag: "Tips", category: "Media & Content" },
  { tag: "Tesla", category: "Media & Content" },
  { tag: "Big Corporations", category: "Media & Content" },
  { tag: "Tariff", category: "Media & Content" },
  { tag: "Luigi Mangione", category: "Media & Content" },
  { tag: "Health Care", category: "Media & Content" },
];

export const extremeTags = ["Anti-Woke"];
