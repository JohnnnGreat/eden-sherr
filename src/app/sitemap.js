export default function sitemap() {
  const siteUrl = "https://www.edanandsherr.com";

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
