import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronUp } from "lucide-react";

const sections = [
  {
    title: "Pop Goes the Bubble Algorithm Explained",
    content: (
      <>
        <p>
          The algorithm’s scoring and narrowing behaviour is modelled by both
          our hands-on experiment and academic research findings.
        </p>
        <p className="mt-6 mb-2 font-semibold">
          Here's how our simulator works:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>
            You begin by selecting a character with specific interests (we
            include a “neutral” character as well) to explore what their
            personalized feed might look like.
          </li>
          <li>
            You may interact with the feed through actions like hovering,
            clicking, liking, or watching videos, and the algorithm adjusts feed
            content based on these behaviours.
          </li>
          <li>
            The more you interact with similar content, the more your feed
            narrows, which deepens the filter bubble for your character.
          </li>
          <li>
            You can attempt to “break out” of the filter bubble by searching for
            or interacting with diverse or opposing content, but you will be
            able to see that it actually takes deliberate effort to rebalance
            the feed.
          </li>
        </ul>

        <p className="mt-6 mb-2 font-semibold">
          More details about our algorithm:
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
          <li>
            <span className="font-medium">How we measure interest:</span>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Hover over content for more than 5 seconds: + 1 point</li>
              <li>Click: + 2 points</li>
              <li>Like: + 3 points</li>
              <li>Watch to completion: + 5 points</li>
            </ul>
            <p className="mt-1">
              These interactions are tracked on your "For You" page and from
              search results (Explore).
            </p>
          </li>

          <li>
            <span className="font-medium">What we track and show you:</span>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>
                Interest score: how strongly you're drawn to specific
                tags/topics.
              </li>
              <li>
                {/* TODO! */}
                Diversity score: how broad or varied your engagement is across
                different content types. Calculated by: ...
              </li>
              <li>
                {/* TODO! */}
                Bias index: a combination of interest + diversity that reflects
                how “narrow” or one-sided your content exposure has become.
                Calculated by: ...
              </li>
            </ul>
            <p className="mt-1">
              These metrics are displayed in the Status section (you can
              navigate to by selecting the user profile) and update live based
              on your actions.
            </p>
          </li>

          <li>
            <span className="font-medium">How we choose content:</span>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>
                Each post is tagged with one or more categories (e.g., fitness,
                politics, feminism).
              </li>
              <li>
                The algorithm prioritizes posts with high tag scores based on
                your engagement history.
              </li>
              <li>
                Posts with opposing or low-interest tags are shown less
                frequently.
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Hands-on Experiment Findings",
    content: (
      <>
        <h3 className="text-lg font-semibold mt-4 mb-2">Goal</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>
            To observe how algorithmic filter bubbles form and narrow content
            exposure based on user interactions, and whether it is possible to
            break out of the bubble, and if so, how difficult that process can
            be.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2">Setup</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>Platform used: TikTok (web version)</li>
          <li>Content focus: Manosphere / Red Pill</li>
          <li>
            <span className="font-medium">Method:</span>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Used an incognito window and created a new account.</li>
              <li>
                First scrolled through 10 videos (watching each fully) to
                confirm the starting “For You” Page (FYP) was neutral.
              </li>
              <li>
                Then searched for and liked manosphere related content (e.g.,
                gym motivation, bulking tips, alpha male mindset, masculine
                energy, female hypergamy, Andrew Tate, Fresh and Fit).
              </li>
              <li>
                Later attempted to break out by searching for and liking
                opposing content (e.g., feminism, toxic masculinity, body
                positivity, feminist literature, Bell Hooks) and marked
                manosphere videos as “Not Interested”.
              </li>
            </ul>
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">What We Observed:</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>
            After only two likes, the FYP already began to shift, gym content
            and manosphere themes began surfacing on the feed (none of which
            appeared in the neutral baseline).
          </li>
          <li>
            With more interactions the FYP adapted to reinforce the theme which
            created an increasingly narrow and homogenous feed.
          </li>
          <li>
            Attempts to diversify the feed (by interacting with opposing content
            and using "Not Interested") were not as effective.
          </li>
          <li>
            Surprisingly, even searches for opposing viewpoints like “feminism”
            or “toxic masculinity” returned anti-feminist or manosphere-aligned
            critiques, suggesting the algorithm was reframing search intent
            through prior behaviour.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mt-6 mb-2">Key Takeaways:</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700">
          <li>
            The algorithm is very responsive to interactions with presented
            content shifting quickly after just a few interactions.
          </li>
          <li>
            The algorithm does not just form a bubble, but it even reinforces
            existing bias by presenting new searches through the lens of past
            actions.
          </li>
          <li>
            <span className="font-medium">Overall, I found that:</span>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>
                Algorithms quickly and deeply personalize content which can
                reinforce confirmation bias and make it harder to encounter
                genuinely diverse perspectives.
              </li>
              <li>
                Algorithms may radicalize or misinform, even when users attempt
                to seek balance.
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "What Are Filter Bubbles?",
    content: (
      <>
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">
          “The filter bubble is your own personal universe of information… and
          you don’t decide what gets in.” — Eli Pariser (2011)
        </blockquote>

        <p className="mb-4">
          Modern social media algorithms curate a personalized feed for its
          users, usually sporting a “For You” page that takes away the hassle of
          users having to search for what they’d like to watch and instead
          providing it for them. On platforms like TikTok, users don’t get to
          see different options on what they’re watching, they simply swipe to
          the next one provided. These algorithms are incentivized to keep user
          retention for monetary gain.
        </p>

        <p className="mb-4">
          As Eli Pariser noted in his TED Talk, this leads to what’s known as a{" "}
          <strong>filter bubble</strong>: a personalized digital environments
          where users are consistently exposed to similar content. They arise
          when algorithms prioritize content based on what a platform thinks
          you'll click on and exclude information that might challenge or
          broaden your perspective (Pariser, 2011).
        </p>
        <p>
          Over time, this curation leads to very one-sided feeds, where
          searching for opposing views becomes a chore, as those sources and
          thoughts aren’t readily available to users.
        </p>
      </>
    ),
  },
  {
    title: "What Is the Echo Chamber Effect?",
    content: (
      <>
        <p className="mb-4">
          Echo chambers are formed environments where shared beliefs are
          continually reinforced, and opposing views are underrepresented or
          entirely absent. They often form when people primarily interact with
          like-minded individuals or content. Like filter bubbles, social media
          is especially susceptible to the echo chamber effect, driven by
          homophily (the tendency to connect with similar people) and bias in
          information diffusion (Cinelli et al., 2021).
        </p>
        <p className="mb-4">
          In a large-scale study analyzing over 100 million pieces of content,
          researchers found that Facebook showed very high ideological
          segregation due to its algorithmic feed design and interaction model
          (Cinelli et al., 2021). Moreover, the study found that users’
          preference for like-minded content intensified over time. This trend
          results from a combination of user behaviour (e.g., homophily and
          confirmation bias) and algorithmic personalization, which increasingly
          reinforces exposure to ideologically aligned content.
        </p>
      </>
    ),
  },
  {
    title: "Do Algorithms Drive Radicalization?",
    content: (
      <>
        <p className="mb-4">
          Some scholars argue that recommendation systems don't just reinforce
          existing preferences, but they can also amplify and accelerate
          exposure to extreme content. Ribeiro et al. (2021) conducted a
          large-scale audit of over 72 million YouTube comments and found that
          users systematically migrated from moderate channels (e.g.,
          Intellectual Dark Web) to more extreme ones (e.g., Alt-right). Most
          importantly, this pattern surfaced even without personalization,
          suggesting that YouTube’s default recommendations alone created a
          clear progression toward more radical content, a phenomenon sometimes
          referred to as a “radicalization pipeline” (Ribeiro et al., 2021).
        </p>
        <p className="mb-4">
          A study of Twitter’s algorithm similarly found that even users who did
          not follow right-leaning accounts were still excessively shown
          right-wing political content (Huszár et al., 2022). Regardless of
          prior behaviour, the algorithm actively pushed users toward more
          polarizing viewpoints.
        </p>
        <p className="mb-4">
          Furthermore, research by Hosseinmardi et al. (2019) shared that small
          biases in recommendations can accumulate over time, gradually shifting
          users toward more extreme or partisan content even when they start
          from a neutral stance. These algorithmic shifts are subtle but indeed
          powerful, often leading users deeper into filter bubbles and echo
          chambers.
        </p>
        <p className="mb-4">
          Together, these findings suggest that algorithms do more than reflect
          what users want. They shape what users see, think, and eventually
          believe. What begins as a single click can evolve into a highly
          curated ideological environment with real risks of polarization and
          radicalization.
        </p>
      </>
    ),
  },
  {
    title: "Not Just an Algorithmic Problem",
    content: (
      <>
        <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-4">
          “Echo chambers and filter bubbles exist, but their scale and effect
          may not be as dramatic or uniform as popular narratives claim.” — Ross
          Argueda et al., (2022)
        </blockquote>
        <p className="mb-4">
          While several studies express the dangers of algorithmically-driven
          filter bubbles, some research provides a differing perspective. A
          literature review by the Reuters Institute (Ross Argueda et al., 2022)
          suggests that the scale and effect of filter bubbles may be less
          dramatic or uniform than commonly believed.
        </p>
        <p>Key findings from the review include:</p>
        <ul className="mb-4 list-disc pl-6 mt-1 space-y-1">
          <li>
            Exposure to opposing views is not entirely impossible on most
            platforms. In fact, users may still come across differing
            perspectives.
          </li>
          <li>
            User behaviour plays a significant role: passivity, self-selection,
            and intentional avoidance often contribute more to echo chambers
            than the algorithms themselves.
          </li>
          <li>
            Platform design, political context, and methodology all influence
            the extent to which filter bubbles are created.
          </li>
        </ul>
        <p className="mb-4">
          This research doesn’t dismiss the existence of filter bubbles, but
          reminds us that algorithms don’t act in isolation. They respond to our
          clicks, likes, and habits. The digital spaces we live in are shaped as
          much by us as by the systems we engage with.
        </p>
      </>
    ),
  },
  {
    title: "Can We Break the Bubble?",
    content: (
      <>
        <p className="mb-4">
          We can't completely avoid algorithmic filter bubbles, but there are
          several strategies that can help mitigate its effects and encourage
          healthier digital consumption.
        </p>
        <p>Algorithmic-Level Solutions:</p>
        <ul className="mb-4 list-disc pl-6 mt-1 space-y-1">
          <li>
            Transparency in Algorithms: Platforms should disclose how
            recommendations are generated and what data is being used (Huszár et
            al., 2021).
          </li>
          <li>
            Diversity Boosting Mechanisms: Modifying recommendation algorithms
            to deliberately increase exposure to diverse content (Helberger et
            al., 2019).
          </li>
          <li>
            User Control Tools: Features like “Why am I seeing this?”, "Not
            Interested", or adjustable feed preferences can help users take back
            some control (Pariser, 2011; Cinelli et al., 2021).
          </li>
        </ul>

        <p>Individual-Level Strategies:</p>
        <ul className="mb-4 list-disc pl-6 mt-1 space-y-1">
          <li>
            Engage with diverse Content: Actively seek out opposing or
            unfamiliar perspectives/ Even if they don’t align with your views.
          </li>
          <li>
            Use the “Not Interested” Button Thoughtfully: It's not always
            effective, but giving feedback to the algorithm can sometimes help
            reset biases.
          </li>
          <li>
            Be Aware of Passive Browsing: Filter bubbles and echo chambers are
            stronger when users consume passively. Try to reflect on why content
            is being shown to you.
          </li>
        </ul>
        <p>What We Hope to Show in Our Project:</p>
        <ul className="mb-4 list-disc pl-6 mt-1 space-y-1">
          <li>
            Our simulator makes it so that you can test for yourself how hard it
            is to break out once a bubble forms, and why proactive interactions
            are necessary. Filter bubbles are not just a technical problem,
            they're a human one too.
          </li>
        </ul>
      </>
    ),
  },
];

export default function Guide() {
  const [openCards, setOpenCards] = useState<boolean[]>(
    sections.map(() => false)
  );

  const openCard = (index: number) => {
    const updated = [...openCards];
    updated[index] = !updated[index];
    setOpenCards(updated);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Pop Goes The Bubble Info Guide</h1>
      <Separator className="my-4" />
      {sections.map((section, index) => (
        <Card key={index} className="mt-4" onClick={() => openCard(index)}>
          <CardContent className="p-6 text-gray-700">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{section.title}</h2>
              {openCards[index] ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </div>
            {openCards[index] && (
              <div className="mt-4 leading-relaxed">{section.content}</div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
