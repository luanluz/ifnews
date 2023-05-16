<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import axios from 'axios'
import InputComponent from '@/components/Input.vue'
import ButtonComponent from '@/components/Button.vue'
import type {Content} from '@/types/interfaces/icontent'
import CardComponent from '@/components/Card.vue'
import LoadingComponent from "@/components/Loading.vue";

export default defineComponent({
    name: 'BaseView',
    components: {LoadingComponent, CardComponent, ButtonComponent, InputComponent},
    setup() {
        const BASE_URL = 'https://api.rss2json.com/v1/api.json?rss_url=http://www.ifto.edu.br/'
        const contents = ref<Content[]>([])
        const searchQuery = ref('')
        const sortBy = ref<boolean>(false)
        const loading = ref<boolean>(true)

        axios.get(`${BASE_URL}palmas/noticias/ultimas-noticias/RSS`)
            .then((response) => {
                contents.value = response.data.items
            })
            .catch(error => console.log(error))
            .finally(() => loading.value = false)

        const filteredContents = computed(() => {
            const query = searchQuery.value.trim().toLowerCase()

            return (query ? contents.value.filter((content) => content.title.toLowerCase().includes(query)) : contents.value)
                .sort((a, b) => {
                    if (sortBy.value)
                        return new Date(a.pubDate).getTime() - new Date(b.pubDate).getTime()

                    return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
                })
        })

        const sortByAsc = () => {
            sortBy.value = !sortBy.value
        }

        return {
            contents,
            searchQuery,
            filteredContents,
            sortByAsc,
            sortBy,
            loading
        }
    },
})
</script>

<template>
    <div>
        <div class="row section-spacing-y">
            <div class="col-sm-10 col-md-10 col-lg-10 col-xl-10">
                <InputComponent
                    v-model="searchQuery"
                    icon="bi-search"
                    placeholder="Pesquisar por..."
                />
            </div>

            <div class="col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <ButtonComponent
                    :icon="sortBy ? 'bi-sort-down' : 'bi-sort-up'"
                    @click="sortByAsc"
                />
            </div>
        </div>

        <LoadingComponent :is-loading="loading" />

        <div v-if="filteredContents.length">
            <CardComponent v-for="(content, index) in filteredContents" :content="content" :key="index" />
        </div>
    </div>
</template>

<style scoped lang="scss">

</style>