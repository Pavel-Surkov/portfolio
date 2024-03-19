import { promises as fs } from 'fs';
import Hero from './hero';
import Projects from './projects';
import { projectsSchema } from '@/schemas/project-schema';
import StarsCanvas from '@/components/canvas/StarsCanvas';
import Loader from './loader';
import dynamic from 'next/dynamic';

const Skills = dynamic(() => import('./skills'));
const Resume = dynamic(() => import('./resume'));

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + '/src/static/projects.json',
    'utf8'
  );
  const data = projectsSchema.parse(JSON.parse(file));

  return (
    <main className="text-white">
      <Loader />
      <StarsCanvas />
      <Hero />
      <Projects data={data} />
      <Skills />
      <Resume />
    </main>
  );
}
