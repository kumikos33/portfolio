<script setup>
const route = useRoute();
</script>

<template>
  <div>We are inside a blog!</div>
  <div>Post id is {{ route.params.id }}</div>
</template>
