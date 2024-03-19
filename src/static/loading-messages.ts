const MESSAGES = [
  'Drawing stars',
  'Calculating Light Years',
  'Generating Gravity Waves',
  'Absorbing Light',
  'Plunging into the Abyss',
  'Experiencing Time Dilation',
  'Spiraling Through Spacetime',
  'Entering Hyperspace',
  'Stealing Lightsabers',
  'Navigating Asteroid Fields',
  'Exploring Dark Matter Mysteries',
  'Studying Pulsar Timing',
  'Simulating Stellar Fusion',
  'Measuring Solar Magnetic Fields',
] as const;

export default function getRandomMessage() {
  return MESSAGES[Math.round(Math.random() * MESSAGES.length)];
}
