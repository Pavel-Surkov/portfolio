import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black pb-10 pt-10">
      <div className="container">
        <div className="flex justify-center">
          <div>
            <div className="bg-gradient-line mb-8 h-px w-full" />
            <nav className="flex gap-10 font-light">
              <Link href="#" className="link tracking-wider text-gray">
                Email
              </Link>
              <Link href="#" className="link tracking-wide text-gray">
                Telegram
              </Link>
              <Link href="#" className="link tracking-wide text-gray">
                Github
              </Link>
              <Link href="#" className="link tracking-wide text-gray">
                Resume
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
