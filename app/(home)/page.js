import AtoZalphabet from "@/components/ui/AtoZalphabet/AtoZalphabet";
import Discover from "@/content/HomePage/Home/discover/Discover";
import RecentRelease from "@/content/HomePage/Home/recentRelease/RecentRelease";
import SlidingBanner from "@/content/HomePage/Home/slidingBanner/SlidingBanner";

export default function Home() {
  return <>
    <div className="container">
      <SlidingBanner />
      <Discover />
      <RecentRelease />
      <AtoZalphabet />
    </div>
  </>;
}
