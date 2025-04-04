export class Reference {
  constructor(
    public authors: string,
    public year: number,
    public title: string,
    public publisher: string,
    public link: string
  ) {}
}

export const referenceList: Reference[] = [
  new Reference(
    "Cinelli, M., De Francisci Morales, G., Galeazzi, A., Quattrociocchi, W., & Starnini, M.",
    2021,
    "The echo chamber effect on social media",
    "Proceedings of the National Academy of Sciences",
    "https://doi.org/10.1073/pnas.2023301118"
  ),
  new Reference(
    "Eli Pariser, TedEd",
    2011,
    'Beware online "filter bubbles"',
    "YouTube",
    "https://www.youtube.com/watch?v=B8ofWFx525s"
  ),
  new Reference(
    "Helberger, N., Karppinen, K., & D’Acunto, L.",
    2018,
    "Exposure diversity as a design principle for recommender systems",
    "Information, Communication & Society",
    "https://doi.org/10.1080/1369118X.2016.1271900"
  ),
  new Reference(
    "Hosseinmardi, H., Ghasemian, A., Clauset, A., Mobius, M., Rothschild, D. M., & Watts, D. J.",
    2022,
    "Examining the consumption of radical content on YouTube",
    "arXiv",
    "https://doi.org/10.48550/arXiv.2011.12843"
  ),
  new Reference(
    "Huszár, F., Ktena, S. I., O’Brien, C., Belli, L., Schlaikjer, A., & Hardt, M.",
    2022,
    "Algorithmic amplification of politics on Twitter",
    "Proceedings of the National Academy of Sciences",
    "https://doi.org/10.1073/pnas.2025334119"
  ),
  new Reference(
    "Ribeiro, M. H., Ottoni, R., West, R., Almeida, V. A. F., & Meira Jr., W.",
    2021,
    "Auditing radicalization pathways on YouTube",
    "arXiv",
    "https://doi.org/10.48550/arXiv.1908.08313"
  ),
  new Reference(
    "Ross Arguedas, A., Robertson, C. T., Fletcher, R., & Nielsen, R. K.",
    2022,
    "Echo chambers, filter bubbles, and polarisation: A literature review",
    "Reuters Institute",
    "https://reutersinstitute.politics.ox.ac.uk/echo-chambers-filter-bubbles-and-polarisation-literature-review"
  ),
  new Reference(
    "Wang, W., Feng, F., Nie, L., & Chua, T.-S.",
    2022,
    "User-controllable recommendation against filter bubbles",
    "ACM SIGIR '22",
    "https://doi.org/10.1145/3477495.3532075"
  ),
];
