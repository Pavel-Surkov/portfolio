import { promises as fs } from 'fs';
import Hero from './hero';
import Projects from './projects';
import { projectsSchema } from '@/schemas/project-schema';
import Earth from './earth';

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + '/src/static/projects.json',
    'utf8'
  );
  const data = projectsSchema.parse(JSON.parse(file));

  return (
    <main className="text-white">
      {/* <Hero /> */}
      <Earth />
      {/* <Projects data={data} /> */}
    </main>
  );
}
