import Infographic from "@/src/components/sections/Infographic";
import CommentSection from "@/src/components/sections/Comment";
import TextParallax from "@/src/components/features/SlideInText";
import TextParallax2 from "@/src/components/features/SlideInText2";
import FAQ from "@/src/components/sections/FAQ";
import CryptoInfographic from "@/src/components/charts/Infographic";
import Zeitreise from "@/src/components/sections/Zeitreise";
import BlogSection from "@/src/components/sections/Blog";
import CommunityStats from "@/src/components/sections/CommunityStats";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <main data-theme="light">
      <Zeitreise />
      <Infographic />
      <CryptoInfographic />
      <BlogSection />
      <FAQ />
      <CommunityStats />
      <TextParallax />
      <CommentSection />
    </main>
  );
}
