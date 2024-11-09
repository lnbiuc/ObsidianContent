<script setup lang="ts">
const { data } = await useAsyncData('navigation', () => fetchContentNavigation())

const order = [
  {
    path: '/',
    order: 1,
  },
  {
    path: '/',
    order: 1,
  },
]

const navs = computed(() => {
  
})
</script>

<template>
  <div class="flex flex-row justify-center items-start w-full bg-red-400 h-[60px]">
    <div v-for="levelOne in data" :key="levelOne._path"  class="text-center bg-black">
      <div class="h-[60px] w-[100px] flex flex-row items-center justify-center">
        <NuxtLink  :href="levelOne._path">{{ levelOne.title }}</NuxtLink>
      </div>
    </div>
  </div>

</template>
