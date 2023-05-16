<script lang="ts">
import { defineComponent } from 'vue'
import type {Content} from '@/types/interfaces/icontent'
import { timeAgoService } from '@/services/time-ago.service'

export default defineComponent({
    name: 'CardComponent',
    props: {
        content: {
            type: Object as () => Content
        }
    },
    setup() {
        return {
            timeAgoService
        }
    }
})
</script>

<template>
  <a class="card" :href="content?.link" target="_blank">
      <div class="body">
          <h3 class="title">{{ content.title }}</h3>
          <p class="description">{{ content.description }}</p>
      </div>
      <div v-if="content?.pubDate" class="footer">
          <span class="time-ago">
              <i class="bi-clock"></i>
              {{ timeAgoService(content.pubDate) }}
          </span>
      </div>
  </a>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px;
  gap: 15px;
  width: 100%;
  height: 100%;
  background: $isabelline;
  border-radius: $border-radius-lg;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  .body {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
      gap: 5px;
      width: 100%;
      height: 100%;
      flex: none;
      order: 0;
      align-self: stretch;
      flex-grow: 0;
      color: $dark-green;

      .title {
          font-weight: 500;
          font-size: 1.25rem;
          line-height: 1.5rem;
          margin-bottom: 0.25rem;
      }

      .description {
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.25rem;
      }
  }

  .footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    gap: 5px;
    width: 100%;
    flex: none;
    order: 1;
    flex-grow: 0;

      .time-ago {
          font-size: 0.75rem;
          line-height: 0.875rem;
      }
  }
}
</style>