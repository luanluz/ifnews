<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        modelValue: {
            type: String,
            default: ''
        },
        placeholder: {
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
    <div class="input">
        <i v-if="icon" :class="icon"></i>
        <input
            type="text"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :placeholder="placeholder"
        />
    </div>
</template>

<style scoped lang="scss">
.input {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.75rem;
    gap: 10px;
    width: 100%;
    height: 100%;
    background: $white;
    border: 1px solid $gray-400;
    border-radius: $border-radius;
    color: $la-salle-green;

    *::placeholder,
    input {
        color: $la-salle-green;
    }

    input {
        width: 100%;
    }
}
</style>