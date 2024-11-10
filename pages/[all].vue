<script setup lang="ts">
const { data } = await useAsyncData('navigation', () => fetchContentNavigation())

const route = useRoute()

const navigation = computed(() => {
  const currentRoute = data.value?.filter((item => item._path === route.path))
  return currentRoute ? currentRoute[0].children : []
})
</script>

<template>
  <div class="my-card mt-4 grid grid-cols-1 gap-4 w-full lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-3">
    <NuxtLink :to="d._path" v-for="d in navigation">
      <div
        class="backdrop-blur-sm blog-card-cover rounded-md z-50 hover:cursor-default flex flex-col h-full overflow-hidden justify-between shadow-sm border border-[#ddd] dark:border-[#333] transition-all ease-in-out  hover:border-violet  hover:dark:border-violet ring-inset hover:border-violet hover:ring-2 hover:ring-violet-500 bg-[--p-zinc-900]">
        <div>
          <div class="p-4 text-left">
            <div class="text-xl">
              {{ d.title }}
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
