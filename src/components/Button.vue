<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ButtonComponent',
    props: {
        label: {
            type: String,
            default: ''
        },
        icon: {
            type: String
        }
    }
})
</script>

<template>
    <button class="button">
        <i v-if="icon" :class="icon"></i>
        {{ label }}
    </button>
</template>

<style scoped lang="scss">
.button {
  cursor: pointer;
  color: $la-salle-green;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13.5px;
  gap: 10px;
  height: 100%;
  width: 100%;
  background: $white;
  border: 0.25px solid $gray-400;
  border-radius: $border-radius;
}
</style>