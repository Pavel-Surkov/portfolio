import z from 'zod';

export const projectSchema = z.object({
  title: z.string(),
  image: z.string().startsWith('/'),
  link: z.string().url(),
  type: z.union([z.literal('poster'), z.literal('screen')]),
});

export const projectsSchema = z.object({
  projects: z.array(projectSchema),
});
