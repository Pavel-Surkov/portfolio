import SkillsBlock from '@/components/SkillsBlock';

const SKILLS = [
  'HTML',
  'Typescript',
  'React',
  'Next.js',
  'Javascript',
  'Webpack',
  'GSAP',
  'Three.js',
  'Prisma',
  'Auth.js',
  'TailwindCSS',
  'Vite',
  'CSS',
  'Zod',
  'Svelte',
  'SCSS',
  'PostgreSQL',
  'React Query',
  'SvelteKit',
] as const;

export default function SkillsTitles() {
  return (
    <section className="relative min-h-screen">
      <h2 className="font-star stroke-text-yellow pt-[5vh] text-center text-[8vw]">
        Skills
      </h2>
      <div className="titles">
        <SkillsBlock>
          <div className="flex flex-wrap items-start justify-center gap-x-16 gap-y-10">
            {SKILLS.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <div className="flex flex-wrap items-start justify-center gap-x-16 gap-y-10">
            {SKILLS.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <div className="flex flex-wrap items-start justify-center gap-x-16 gap-y-10">
            {SKILLS.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </SkillsBlock>
        <SkillsBlock>
          <div className="flex flex-wrap items-start justify-center gap-x-16 gap-y-10">
            {SKILLS.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <div className="flex flex-wrap items-start justify-center gap-x-16 gap-y-10">
            {SKILLS.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
          <div className="flex flex-wrap items-start justify-center gap-x-16 gap-y-10">
            {SKILLS.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </SkillsBlock>
      </div>
    </section>
  );
}
