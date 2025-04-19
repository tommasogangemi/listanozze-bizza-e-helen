<script setup lang="ts">
import { computed, ref } from 'vue'
import GiftModal from './GiftModal.vue'
import type { EnrichedGift } from '@/composables/useSpreadsheet'

const CARD: EnrichedGift = {
  name: 'Viaggio di nozze Sudafrica e Seychelles',
  image: 'viaggio.jpeg',
  availableAmount: 100000,
  donatedPercentage: 0
}

const giftModalView = ref<'payment' | 'message'>()
const showModal = computed(() => !!giftModalView.value)
</script>

<template>
  <v-row justify="center">
    <v-col cols="12" md="8">
      <v-img :src="CARD.image" aspect-ratio="1.7" cover class="rounded-xl" />
    </v-col>

    <v-col class="d-flex py-lg-6 flex-column justify-space-evenly" style="gap: 20px">
      <div class="d-flex flex-column flex-lg-row justify-space-around align-center">
        <v-btn
          rounded="pill"
          size="large"
          variant="text"
          flat
          color="primary"
          class="mb-4 mb-lg-0"
          style="width: fit-content; border: 3px solid rgb(var(--v-theme-primary))"
          @click="giftModalView = 'message'"
        >
          <span class="font-weight-bold"> Lascia un messaggio di auguri </span>
        </v-btn>

        <v-btn
          rounded="pill"
          size="large"
          variant="text"
          flat
          color="primary"
          style="width: fit-content; border: 3px solid rgb(var(--v-theme-primary))"
          @click="giftModalView = 'payment'"
        >
          <span class="font-weight-bold"> Per contribuire al viaggio </span>
        </v-btn>
      </div>
    </v-col>

    <GiftModal
      :show="showModal"
      :view="giftModalView"
      :gift="CARD"
      @close-modal="giftModalView = undefined"
    />
  </v-row>
</template>
