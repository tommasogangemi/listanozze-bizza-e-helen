<template>
  <h1
    class="pretty-font text-accent text-center mt-6 mb-12"
    style="font-size: 4.5rem; line-height: 6rem"
  >
    Helen & Marco
  </h1>

  <v-row justify="center" class="mb-4">
    <v-col cols="10" md="9" class="rounded-xl bg-neutral-lighten-1 elevation-2 pa-0">
      <v-img cover src="heading-image.jpeg" aspect-ratio="1.7" class="rounded-xl" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({ name: 'PageHeader' })
</script>
