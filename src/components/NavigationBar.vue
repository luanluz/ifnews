<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="navigation-bar">
        <div class="container">
            <RouterLink to="/" exact-active-class="active" class="bottom-tab" title="Ir para notícias">
                <i class="bi-newspaper"></i>
            </RouterLink>
            <RouterLink to="/editais-em-aberto" active-class="active" class="bottom-tab" title="Ir para editais abertos">
                <i class="bi-file-earmark-text"></i>
            </RouterLink>
            <RouterLink to="/editais-fechados" active-class="active" class="bottom-tab" title="Ir para editais fechados">
                <i class="bi-file-earmark-check"></i>
            </RouterLink>
            <RouterLink to="/sistemas" active-class="active" class="bottom-tab" title="Ir para sistemas do IFTO">
                <i class="bi-grid"></i>
            </RouterLink>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.navigation-bar {
  position: fixed;
  bottom: 0;
  padding: $padding-default-xy;
  border-top: 1px solid $outer-space;
  background-color: $white;
  width: 100%;

  .container {
    display: flex;
    justify-content: space-between;
    overflow: visible;
    padding-left: 0;
    padding-right: 0;

    a {
      position: relative;
      padding: 0.5rem 0.75rem;
      color: $chinese-black;

        &::after {
            content: '';
            width: 100%;
            height: 100%;
            border-radius: $border-radius;
            background-color: transparent;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            top: 0;
            z-index: -1;
            transition: background-color $short-transitions ease-in;
        }

      &.active::after {
        background-color: $tea-green;
      }

      i {
        font-size: 1.5rem;
      }
    }
  }
}
</style>