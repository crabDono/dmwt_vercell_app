import Hero from "../components/sections/Hero";
import Infographic from "../components/sections/Infographic";

import Navbar from "../components/UI/Navbar";
import CommentSection from "../components/sections/Comment";

export default function Page() {
  return (
    <main>
      <Hero />
      <Infographic />
      <CommentSection />
    </main>
  );
}
