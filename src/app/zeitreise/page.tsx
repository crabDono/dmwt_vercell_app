import Infographic from "@/src/components/sections/Infographic";
import CommentSection from "@/src/components/sections/Comment";
import TextParallax from "@/src/components/features/SlideInText";
import TextParallax2 from "@/src/components/features/SlideInText2";
import FAQ from "@/src/components/sections/FAQ";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <main data-theme="light">
      <Infographic />
      <FAQ />
      <TextParallax />
      <CommentSection />
    </main>
  );
}
