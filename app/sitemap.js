const BASE_URL = "https://hvacthermal.com";

const calculatorPaths = [
  "/calculator/btu-calculator",
  "/calculator/boiler-size-calculator",
  "/calculator/heat-pump-size-calculator",
];

const guidePaths = [
  "/guides/what-size-boiler-do-i-need",
  "/guides/how-many-btu-do-i-need",
  "/guides/what-size-heat-pump-do-i-need",
  "/guides/what-size-air-conditioner-do-i-need",
  "/guides/combi-boiler-vs-system-boiler",
  "/guides/heat-pump-vs-gas-boiler",
  "/guides/heat-pump-cost-uk",
  "/guides/what-is-seer-rating",
  "/guides/how-to-reduce-heating-bills",
  "/guides/what-size-radiators-do-i-need",
  "/guides/how-long-does-a-boiler-last",
  "/guides/new-boiler-cost-uk",
  "/guides/how-to-repressurise-a-boiler",
  "/guides/what-temperature-should-my-boiler-be-set-to",
];

export default function sitemap() {
  const homepage = {
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  };

  const guidesIndex = {
    url: `${BASE_URL}/guides`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  };

  const calculators = calculatorPaths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const guides = guidePaths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [homepage, guidesIndex, ...calculators, ...guides];
}
