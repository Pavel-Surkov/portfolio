import Hero from './hero';
import Portfolio from './portfolio';

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Hero />
      <Portfolio />
      <section className="relative z-10 h-screen bg-black"></section>
    </main>
  );
}
