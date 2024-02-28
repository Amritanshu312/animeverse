import Discover from "@/content/Home/discover/Discover";
import SlidingBanner from "@/content/Home/slidingBanner/SlidingBanner";

export default function Home() {
  return <>
    <div className="container">
      <SlidingBanner />
      <Discover />
    </div>
  </>;
}
