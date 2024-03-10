import { promises as fs } from 'fs';
import Hero from './hero';
import Projects from './projects';
import { projectsSchema } from '@/schemas/project-schema';

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + '/src/static/projects.json',
    'utf8'
  );
  const data = projectsSchema.parse(JSON.parse(file));

  return (
    <main className="min-h-screen text-white">
      <Hero />
      <Projects data={data} />
      <section className="relative z-10 h-screen bg-black"></section>
    </main>
  );
}
