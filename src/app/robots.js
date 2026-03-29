export default function robots() {
  const siteUrl = "https://www.edanandsherr.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/sherr", "/api/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
