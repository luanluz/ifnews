<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'LoadingComponent',
    props: {
        isLoading: {
            type: Boolean,
            default: false
        }
    }
})
</script>

<template>
  <!-- source: https://loading.io/css/ -->
    <div v-if="isLoading" class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<style scoped lang="scss">
.lds-ring {
  display: block;
  position: relative;
  width: 80px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid $la-salle-green;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: $la-salle-green transparent transparent transparent;
  }

  div:nth-child(1) {
    animation-delay: -0.45s;
  }

  div:nth-child(2) {
    animation-delay: -0.3s;
  }

  div:nth-child(3) {
    animation-delay: -0.15s;
  }
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>