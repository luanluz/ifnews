<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import NavigationBar from "@/components/NavigationBar.vue";
</script>

<template>
    <Header />

  <main class="container">
      <RouterView />
  </main>

  <NavigationBar />
</template>

<style scoped lang="scss">

</style>
