<template>
  <v-container v-if="donationsWithMessages.length > 0" class="mt-4">
    <SectionHeading id="messaggi" title="Messaggi" />

    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card
          flat
          class="bg-white overflow-y-auto"
          max-height="408"
          style="border: 1px solid rgb(var(--v-theme-accent))"
        >
          <v-card-text class="py-0">
            <template
              v-for="(donationMessage, idx) in donationsWithMessages"
              :key="donationMessage.message"
            >
              <v-row class="my-2">
                <v-col cols="12">
                  <div>
                    <span class="text-accent">
                      {{ donationMessage.donorName }}
                    </span>
                    <span class="text-grey"> - </span>
                    <span class="text-grey text-subtitle-1">{{
                      donationMessage.date.toLocaleDateString('it-IT', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })
                    }}</span>
                  </div>
                  <div style="white-space: pre-line">{{ donationMessage.message }}</div>
                </v-col>
              </v-row>

              <v-divider v-if="idx !== donationsWithMessages.length - 1" />
            </template>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useSpreadsheet } from '@/composables/useSpreadsheet'
import { computed } from 'vue'
import { defineComponent } from 'vue'
import SectionHeading from './SectionHeading.vue'

defineComponent({ name: 'MessagesSection' })

const { spreadSheet, get } = useSpreadsheet()

get()

const donationsWithMessages = computed(
  () =>
    spreadSheet.value?.sheets
      .flatMap((s) => s.rowsData)
      .filter((r) => !!r.message && !!r.date)
      .sort((d1, d2) => d2.date.getTime() - d1.date.getTime()) ?? []
)
</script>
