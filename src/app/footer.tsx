import { format } from 'date-fns';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="h-40 bg-black pb-10 pt-10 text-gray">
      <div className="container">
        <div className="flex justify-center">
          <div>
            <p className="mb-4 text-center text-sm tracking-wider">
              Novosibirsk, {format(new Date(), 'p OOOO')}
            </p>
            <div className="mb-6 h-px w-full bg-gradient-line" />
            <nav className="flex gap-10 font-light">
              <Link
                href="mailto:surkovv.pavel@gmail.com"
                className="link tracking-wider text-gray"
              >
                Email
              </Link>
              <Link
                href="https://t.me/surkov0"
                rel="noopener noreferrer"
                target="_blank"
                className="link tracking-wide text-gray"
              >
                Telegram
              </Link>
              <Link
                href="https://github.com/Pavel-Surkov"
                rel="noopener noreferrer"
                target="_blank"
                className="link tracking-wide text-gray"
              >
                GitHub
              </Link>
              <Link
                href="https://docs.google.com/document/d/1x5LjscbzBXuVAfEa3wxlFJeDDiHcfN_D0-9tvCbBh1g/edit?usp=sharing"
                rel="noopener noreferrer"
                target="_blank"
                className="link tracking-wide text-gray"
              >
                Resume
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
