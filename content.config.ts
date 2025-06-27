import { defineCollection, z } from '@nuxt/content'

// export default defineContentConfig({
//   collections: {
//     blogs: defineCollection({
//       type: 'page',
//       source: '**/*.md',
//       schema: z.object({
//         date: z.string()
//       })
//     })
//   }
// })

export const collections = {
 blogs: defineCollection({
    type: "page",
    source: "**/*.md",
    schema: z.object({        
   }),
  }),
}
