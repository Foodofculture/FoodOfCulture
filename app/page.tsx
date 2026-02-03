import { Carousel } from "components/carousel";
import { ThreeItemGrid } from "components/grid/three-items";
import Footer from "components/layout/footer";

export const metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <header style={{ textAlign: "center", padding: "2rem" }}>
        <h1>Food Of Culture</h1>
        <p>Traditional foods from different cultures. Easy to cook.</p>
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
