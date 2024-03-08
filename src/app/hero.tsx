import StarsCanvas from '@/components/canvas/Stars';

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <StarsCanvas />
      <h1 className="to-violet from-mint transparent-text bg-gradient-to-b text-[144px] font-semibold">
        <div className="flex gap-6 pl-[122px] pr-28">
          <span className="transparent-text inline-block bg-white">I'm</span>
          <span className="inline-block">Pavel</span>
        </div>
        <div className="flex gap-6">
          <span className="transparent-text inline-block bg-white">A</span>
          <span className="inline-block">Frontend</span>
          <span className="transparent-text inline-block bg-white">
            Developer
          </span>
        </div>
        <div className="flex justify-end gap-6 pr-[230px]">
          <span className="transparent-text inline-block bg-white">for</span>
          <span className="inline-block">you</span>
        </div>
      </h1>
    </section>
  );
}
