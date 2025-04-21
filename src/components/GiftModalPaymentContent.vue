<template>
  <div>
    <div class="text-primary">Bonifico bancario a:</div>
    <div class="mb-1" style="text-wrap: pretty">Marco Bizzarri e Helen Renzi</div>
    <div class="d-flex align-center flex-wrap">
      IBAN:
      <v-btn
        color="primary"
        rounded="lg"
        variant="outlined"
        class="border border-primary border-md border-opacity-100 text-truncate"
        @click="onIbanClick"
      >
        <span class="text-primary" style="font-size: 1rem"> {{ IBAN }} </span>
        <template #append>
          <v-icon color="primary" size="sm">mdi-content-copy</v-icon>
        </template>
      </v-btn>
    </div>

    <v-divider class="my-5" />
    <div class="italic-font text-center text-accent" style="font-size: 2rem">Grazie!</div>
  </div>

  <v-snackbar v-model="snackBar" rounded="lg" color="neutral"> Iban copiato! </v-snackbar>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue'

defineComponent({ name: 'GiftModalPaymentContent' })

const snackBar = ref(false)

const IBAN = 'IT80J0306234210000002957789'

const openWindow = (url: string) => {
  window.open(url, '_blank')
}

const onIbanClick = () => {
  navigator.clipboard.writeText(IBAN)
  snackBar.value = true

  setTimeout(() => {
    snackBar.value = false
  }, 2000)
}
</script>

<style scoped>
.paypal {
  border: 2px solid rgb(0, 69, 124);
  width: max-content;
  transition: all 0.15s ease-in-out;
}

.paypal:hover {
  background: rgba(0, 69, 124, 0.2);
  cursor: pointer;
  transition: all 0.15s ease-in-out;
}

.satispay {
  border: 2px solid rgb(255, 0, 0);
  width: max-content;
  transition: all 0.15s ease-in-out;
}

.satispay:hover {
  background: rgba(255, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.15s ease-in-out;
}
</style>
