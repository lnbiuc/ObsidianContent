<script setup lang="ts">
const { data } = await useAsyncData('navigation', () => fetchContentNavigation())


const navs = computed(() => data.value ? data.value.sort((a, b) => {
  if (a.title < b.title) return -1;
  if (a.title > b.title) return 1;
  return 0;
}) : [])
</script>

<template>
  <Toolbar class="rounded-none w-full">
    <template #center>
      <Button class="mx-2" v-for="nav in navs" :key="nav._path" :label="nav.title" text plain @click="$router.push(nav._path)"/>
    </template>
  </Toolbar>
</template>
