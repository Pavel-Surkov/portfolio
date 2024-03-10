import z from 'zod';

export const projectSchema = z.object({
  title: z.string(),
  image: z.string().startsWith('/'),
  link: z.string().url(),
});

export const projectsSchema = z.object({
  projects: z.array(projectSchema),
});
