<template>
  <v-app class="bg-primary">
    <v-main>
      <v-row justify="center" class="my-0 my-md-6 mx-0">
        <v-col cols="12" md="8" class="bg-neutral rounded-xl">
          <PageHeader />

          <!-- <InfoSection /> -->

          <GiftsSection />

          <MessagesSection />

          <Footer />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import InfoSection from './components/InfoSection.vue'
import GiftsSection from './components/GiftsSection.vue'
import PageHeader from './components/PageHeader.vue'
import MessagesSection from './components/MessagesSection.vue'
import Footer from './components/Footer.vue'
</script>
