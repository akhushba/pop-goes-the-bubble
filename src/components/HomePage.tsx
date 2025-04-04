import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">🫧 Pop Goes The Bubble! 🫧</h1>
      <Separator className="my-4" />
      <Card className="mb-4 border border-gray-200 bg-gray-50 shadow-sm">
        <CardContent className="p-6 text-gray-700">
          <h2 className="mb-4 text-xl font-semibold">Welcome!</h2>
          <p className="mb-4">
            Our project was created to spread awareness and educate people about
            the existence and impact of filter bubbles, especially those shaped
            by social media. Filter bubbles are a part of many of our daily
            lives, and we are all susceptible to easily falling into them
            without realizing. Social media algorithms and other algorithmic
            content systems often curate what we see, reinforcing certain views
            while hiding others. We wanted to create a space where you can
            explore how these bubbles form, understand just how much they
            influence what we consume, and reflect on the potential harms they
            pose, such as polarization or limiting personal growth. We also hope
            to suggest small but meaningful steps that can help you mindfully
            navigate and challenge these digital barriers.
          </p>
          <p>Our project has two components:</p>
          <ol className="mb-4 list-decimal pl-5 text-gray-700">
            <li>
              An educational info guide to provide academic insight and
              real-world context on filter bubbles and their effects.
            </li>
            <li>
              An interactive simulator that mimics a social media feed shaped by
              your behavior and shows how difficult it is to break out of a
              bubble once formed.
            </li>
          </ol>
          <p className="mb-4">
            Filter bubbles are experiential phenomenons, not just theoretical
            concepts. That’s why we designed a simulator that lets you feel
            firsthand how subtle choices can drastically alter your feed. You’ll
            also see just how hard it can be to “break out” once the algorithm
            narrows your view.
          </p>
          <p>
            For more about how our algorithm works, check out the{" "}
            <i>Pop Goes the Bubble Algorithm Explained</i> section in our info
            guide!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
