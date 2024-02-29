import Discover from "@/content/Home/discover/Discover";
import RecentRelease from "@/content/Home/recentRelease/RecentRelease";
import SlidingBanner from "@/content/Home/slidingBanner/SlidingBanner";

export default function Home() {
  return <>
    <div className="container">
      <SlidingBanner />
      <Discover />
      <RecentRelease />
    </div>
  </>;
}
