<script setup lang="ts">
</script>

<template>
  <main>

    <ContentList path="/blog" v-slot="{ list }">
      <ul>
        <li v-for="article in list" :key="article._path">
          <a :href="article._path">{{ article._path }} | {{ article.title }}</a>
        </li>
      </ul>
    </ContentList>
    <hr />

    <ContentDoc />
  </main>
</template>
