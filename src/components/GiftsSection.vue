<script setup lang="ts">
import HoneyMoonSection from './HoneyMoonSection.vue'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <v-container>
    <SectionHeading id="informazioni" title="Ci sposiamo!" />

    <v-row>
      <v-col class="text-center pt-0">
        <h3 class="italic-font text-accent" style="font-size: 2rem">Sabato 13 settembre 2025</h3>
      </v-col>
    </v-row>

    <v-row justify="center" class="mb-3">
      <v-col cols="11" sm="9" lg="6" class="text-center">
        <p class="mb-4">
          Vi aspettiamo il 13 settembre, ore 14:45 alla
          <a href="https://maps.app.goo.gl/DD35jfEFe2fWt8mk8" target="_blank">
            Pieve di San Giovanni Battista a Remole, Sieci
            <v-icon size="18" color="primary">mdi-open-in-new</v-icon>
          </a>
        </p>

        <p>
          La vostra presenza sarà per noi il dono più bello! Se desiderate farci un regalo, potete
          aiutarci a realizzare il nostro viaggio in Sudafrica e Seychelles.
        </p>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="10" class="px-2 px-lg-6">
        <HoneyMoonSection />
      </v-col>
    </v-row>
  </v-container>
</template>
