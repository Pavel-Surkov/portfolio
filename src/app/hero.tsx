import StarsCanvas from '@/components/canvas/Stars';

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <StarsCanvas />
      <h1 className="to-violet from-mint transparent-text text-large grid grid-cols-[repeat(3,auto)] gap-x-2 bg-gradient-to-b font-bold lg:gap-x-6">
        <div className="col-span-2 col-start-2 flex gap-x-2 lg:gap-x-6">
          <span className="transparent-text inline-block bg-white">I'm</span>
          <span className="inline-block">Pavel</span>
        </div>
        <span className="transparent-text inline-block bg-white">A</span>
        <span className="inline-block">Frontend</span>
        <span className="transparent-text inline-block bg-white">
          Developer
        </span>
        <div className="col-start-3 flex gap-x-2 lg:gap-x-6">
          <span className="transparent-text inline-block bg-white">for</span>
          <span className="inline-block">you</span>
        </div>
      </h1>
    </section>
  );
}
