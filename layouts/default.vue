<template>
  <div class="min-h-100vh h-full bg-white dark:bg-[--bg-dark] flex flex-col items-center justify-start">
    <Header />
    <div class=" w-full md:w-4/5 lg:w-3/5 lg:max-w-[1200px] xl:w-3/5 xl:max-w-[900px]">
      <slot />
    </div>
  </div>
</template>
