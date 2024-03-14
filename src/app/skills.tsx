import Ticker from '@/components/Ticker';

export default function Skills() {
  return (
    <section className="relative flex min-h-[calc(100vh-160px)] flex-col overflow-hidden bg-black py-32">
      <div className="container">
        <h2 className="text-right text-[14dvh] font-black uppercase tracking-wide">
          Skills
        </h2>
      </div>
      <div className="flex flex-grow flex-col justify-center">
        <Ticker
          items={['html', 'typescript', 'react', 'next.js', 'javascript']}
        />
        <Ticker
          direction="right"
          items={['gsap', 'three.js', 'prisma', 'auth.js', 'tailwind', 'vite']}
        />
        <Ticker
          items={['css', 'zod', 'svelte', 'postgresql', 'react-query', 'git']}
        />
      </div>
    </section>
  );
}
