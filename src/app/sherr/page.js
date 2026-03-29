import BusinessCardClient from "./BusinessCardClient";

export const metadata = {
  title: "Susan Essien | Edan & Sherr Limited",
  description: "Digital business card for Susan Essien, C.E.O. of Edan & Sherr Limited.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BusinessCardPage() {
  return <BusinessCardClient />;
}
