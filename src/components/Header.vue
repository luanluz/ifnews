<script setup lang="ts">

</script>

<template>
  <header>
      <h1>
          <img src="@/assets/logo/logo.svg" alt="IFNews">
      </h1>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: $padding-default-xy;
  border-bottom: 1px solid $outer-space;
  background: $white;
  width: 100%;

  h1 {
    img {
      display: block;
      height: 45px;
      width: auto;
      max-width: 100%;
    }
  }
}
</style>