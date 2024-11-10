<template>
  <main class="mt-10">
    <ContentDoc>
      <template v-slot="{ doc }">
        <article class="violet-prose">
          <h1>{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </article>
      </template>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
  </main>
</template>
