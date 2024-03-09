import Hero from './hero';

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Hero />
      <section className="relative z-10 h-[200vh] bg-[#333]"></section>
    </main>
  );
}
