'use client';
import { DateTime } from 'luxon';

export default function Time() {
  const date = DateTime.now()
    .setZone('Asia/Novosibirsk')
    .toLocaleString({
      hourCycle: 'h12',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZoneName: 'short',
      timeZone: 'Asia/Novosibirsk',
    })
    .toUpperCase();

  return (
    <p className="mb-4 text-center text-sm tracking-wider">
      Novosibirsk, {date}
    </p>
  );
}
