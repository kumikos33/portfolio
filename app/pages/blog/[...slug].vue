<!-- <script setup>
const route = useRoute();
console.log(route.params.slug);
</script>

<template> 
  <article class="prose">
    <ContentDoc />
  </article>
</template> -->

<!-- <script setup>
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})
</script>

<template>
  <ContentRenderer :value="post" />
</template> -->

<script setup lang="ts">

const route = useRoute();

const { data: blog } = await useAsyncData(route.path, () =>
  queryCollection('blogs').path(route.path).first());

if (!blog.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Job post not found",
    fatal: true,
  });
}
</script>

<template>
  <!-- Render the blog post as Prose & Vue components -->
   <article class="prose dark:prose-invert">
    <ContentRenderer 
    v-if="blog"
    :value="blog" />
  </article>
</template>