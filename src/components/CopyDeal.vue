<template>
  <div>
    <input v-model="dealId" type="number" placeholder="Deal ID" />
    <button @click="copyExistingDeal(dealId)">Copy Deal</button>
    <p v-if="dealStatus">{{ dealStatus }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useDeals } from "../composables/useDeals";

const { dealStatus, copyExistingDeal } = useDeals();
const dealId = ref("");
</script>
