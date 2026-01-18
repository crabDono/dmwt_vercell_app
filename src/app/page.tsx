import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";

export const dynamic = "force-dynamic";
export default function Page() {
  return (
    <main>
      <Hero />
      <Stats/>
    </main>
  );
}
