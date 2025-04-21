<script setup lang="ts">
import { useNow } from '@/composables/useNow'
import { differenceInDays, intervalToDuration } from 'date-fns'
import { computed } from 'vue'

const now = useNow()
const weddingDate = new Date('2025-09-13T14:45:00Z')

const remaining = computed(() =>
  intervalToDuration({
    start: now.value,
    end: weddingDate
  })
)
</script>

<template>
  <v-row justify="center">
    <v-col cols="auto" class="text-center">
      <div class="text-accent font-weight-bold">{{ differenceInDays(weddingDate, now) }}</div>

      <div class="text-accent">Giorni</div>
    </v-col>

    <v-col cols="auto" class="text-center">
      <div class="text-accent font-weight-bold">{{ remaining.hours ?? 0 }}</div>
      <div class="text-accent">Ore</div>
    </v-col>

    <v-col cols="auto" class="text-center">
      <div class="text-accent font-weight-bold">{{ remaining.minutes ?? 0 }}</div>
      <div class="text-accent">Minuti</div>
    </v-col>
    <v-col cols="auto" class="text-center">
      <div class="text-accent font-weight-bold">{{ remaining.seconds ?? 0 }}</div>
      <div class="text-accent">Secondi</div>
    </v-col>
  </v-row>
</template>
