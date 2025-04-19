<template>
  <v-dialog
    :model-value="show && !!gift"
    fullscreen
    :scrim="false"
    transition="dialog-bottom-transition"
    @update:model-value="closeModal"
  >
    <v-card v-if="!!gift" class="bg-accent">
      <v-card-text class="d-flex align-center">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="10" class="px-0">
              <v-btn color="primary" flat rounded="lg" @click="closeModal">
                <span class="text-neutral"> Torna alla lista </span>
                <template #prepend> <v-icon color="neutral">mdi-arrow-left</v-icon> </template>
              </v-btn>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col
              cols="12"
              md="10"
              class="pa-4 pa-md-10 rounded-lg border border-primary border-md bg-neutral"
            >
              <GiftModalFormContent
                v-if="view === 'message'"
                :gift="gift"
                @submit-completed="closeModal"
              />
              <GiftModalPaymentContent v-else />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import type { EnrichedGift } from '@/composables/useSpreadsheet'
import { toRefs } from 'vue'
import GiftModalFormContent from './GiftModalFormContent.vue'
import { defineComponent } from 'vue'
import { ref } from 'vue'
import GiftModalPaymentContent from './GiftModalPaymentContent.vue'

type Props = {
  gift?: EnrichedGift
  show: boolean
  view?: 'payment' | 'message'
}

defineComponent({ name: 'GiftModal' })

type Emits = {
  (e: 'close-modal'): void
}

const props = withDefaults(defineProps<Props>(), {
  view: 'message'
})

const emit = defineEmits<Emits>()

const { gift, show } = toRefs(props)

const closeModal = () => {
  emit('close-modal')
}
</script>
