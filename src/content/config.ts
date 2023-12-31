import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		draft: z.boolean().default(false),
		title: z.string(),
		description: z.string(),
		publishedDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string().optional()).optional(),
	}),
});

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		link: z.string().url(),
		publishedDate: z.coerce.date(),
		logo: z.string(),
		article: z.boolean(),
		source: z.string().url().optional(),
		tags: z.array(z.string().optional()).optional(),
	})
})

export const collections = { blog, projects };