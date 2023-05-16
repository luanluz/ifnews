<script lang="ts">
import {defineComponent, ref} from 'vue'
import CardComponent from '@/components/Card.vue'
import {Content} from "@/types/interfaces/icontent";

export default defineComponent({
    components: {CardComponent},
    setup() {
        const contents = ref<Content[]>([])

        contents.value = [
            {
                title: 'Acervo da Biblioteca',
                link: 'https://biblioteca.ifto.edu.br/'
            },
            {
                title: 'Moodle',
                link: 'https://moodlepalmas.ifto.edu.br/moodle/'
            },
            {
                title: 'Ticket de Alimentação',
                link: 'https://si.ifto.edu.br/restaurante/gerar_ticket/'
            },
            {
                title: 'Abertura de Chamados',
                link: 'https://suap.ifto.edu.br/accounts/login/?next=/centralservicos/selecionar_servico_abertura/tecnologia-da-informacao/'
            },
            {
                title: 'Realizar Inscrição em Eventos do IFTO ',
                link: 'https://si.ifto.edu.br/evento/inscricoes/'
            },
            {
                title: 'Emitir Certificado de Eventos do IFTO ',
                link: 'https://si.ifto.edu.br/evento/certificados/'
            },
        ]

        return {
            contents
        }
    }
})
</script>

<template>
    <div class="section-spacing-y">
        <h2 class="page-title">
            Sistemas do IFTO - campus Palmas
        </h2>
    </div>

    <CardComponent v-for="(content, index) in contents" :content="content" :key="index" />
</template>

<style scoped lang="scss">
.page-title {
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 1.625rem;
  color: $dark-green;
}
</style>