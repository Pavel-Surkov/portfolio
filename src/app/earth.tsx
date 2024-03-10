'use client';
import EarthCanvas from '@/components/canvas/Earth';

export default function Earth() {
  // Sticky component moves inside relative element on scroll
  // Here gsap timeline created and set to ref.current
  // This timeline is provided to EarthCanvas and can be used inside

  return (
    <section className="relative h-[300vh]">
      <div className="sticky top-0 h-screen">
        <EarthCanvas />
      </div>
    </section>
  );
}
