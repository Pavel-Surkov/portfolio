import { format } from 'date-fns';

export default function Time() {
  return (
    <p className="mb-4 text-center text-sm tracking-wider">
      Novosibirsk, {format(new Date(), 'p OOOO')}
    </p>
  );
}
