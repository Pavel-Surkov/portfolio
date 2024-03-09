import Image from 'next/image';
import project from '@public/images/tradevibe.jpeg';
import Link from 'next/link';

export default function Project() {
  return (
    <article className="bg-gradient-peach overflow-hidden rounded-xl text-black">
      <Link
        href="https://dev.tradevibe.com"
        rel="noopener noreferrer"
        target="_blank"
        className="flex flex-col p-8 pb-0"
      >
        <h2 className="text-dark mb-4 text-xl font-medium uppercase">
          TradeVibe
        </h2>
        <Image className="h-auto w-[25vw] rounded-lg" src={project} alt="" />
      </Link>
    </article>
  );
}
