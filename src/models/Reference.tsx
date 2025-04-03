export class Reference {
  constructor(
    public authors: string,
    public title: string,
    public publisher: string,
    public link: string
  ) {}
}

export const referenceList: Reference[] = [
  new Reference(
    "Eli Pariser, TedEd",
    'Beware online "filter bubbles"',
    "YouTube",
    "https://www.youtube.com/watch?v=B8ofWFx525s"
  ),
  new Reference(
    "Ross Arguedas, A., Robertson, C. T., Fletcher, R., & Nielsen, R. K.",
    "Echo chambers, filter bubbles, and polarisation: A literature review",
    "Reuters Institute",
    "https://reutersinstitute.politics.ox.ac.uk/echo-chambers-filter-bubbles-and-polarisation-literature-review"
  ),
  new Reference(
    "Wang, W., Feng, F., Nie, L., & Chua, T.-S.",
    "User-controllable recommendation against filter bubbles",
    "ACM SIGIR '22",
    "https://doi.org/10.1145/3477495.3532075"
  ),
];
