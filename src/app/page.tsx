import { promises as fs } from 'fs';
import Hero from './hero';
import Projects from './projects';
import { projectsSchema } from '@/schemas/project-schema';
import EarthCanvas from '@/components/canvas/Earth';

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + '/src/static/projects.json',
    'utf8'
  );
  const data = projectsSchema.parse(JSON.parse(file));

  return (
    <main className="min-h-screen text-white">
      <Hero />
      <section className="relative z-10 h-screen">
        <EarthCanvas />
      </section>
      <Projects data={data} />
    </main>
  );
}
