import Infographic from "@/src/components/sections/Infographic";
import CommentSection from "@/src/components/sections/Comment";
import TextParallax from "@/src/components/features/SlideInText";

export default function Page() {
  return (
    <main>
      <Infographic />
      <TextParallax />
      <CommentSection />
    </main>
  );
}
