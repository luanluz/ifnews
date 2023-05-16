import { createRouter, createWebHistory } from 'vue-router'
import NewsView from '@/views/NewsView.vue'
import NoticesView from '@/views/NoticesView.vue'
import ClosedNoticesView from '@/views/ClosedNoticesView.vue'
import SystemsView from '@/views/SystemsView.vue'
import BaseView from '@/views/BaseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'News',
      component: BaseView,
      meta: {
        title: 'Notícias'
      }
    },
    {
      path: '/editais-em-aberto',
      name: 'Notices',
      component: NoticesView,
      meta: {
        title: 'Editais em Aberto'
      }
    },
    {
      path: '/editais-fechados',
      name: 'Closed Notices',
      component: ClosedNoticesView,
      meta: {
        title: 'Editais Fechados'
      }
    },
    {
      path: '/sistemas',
      name: 'Systems',
      component: SystemsView,
      meta: {
        title: 'Sistemas dos Campus'
      }
    }
  ]
})

// Define o título padrão da aplicação
const DEFAULT_TITLE = 'IFNews'

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - ${DEFAULT_TITLE}` || DEFAULT_TITLE
  next()
})

export default router
