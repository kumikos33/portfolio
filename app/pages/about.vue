<script setup lang="ts">
const { data: page } = await useAsyncData('about', () =>
  queryCollection('about').first()
);
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<template>
  <!-- Render the blog post as Prose & Vue components -->
   <article class="prose dark:prose-invert prose-h1:text 2xl">
    <ContentRenderer
    v-if="page"
    :value="page" />
  </article>
</template>

