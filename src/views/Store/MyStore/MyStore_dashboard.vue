<template>
  <div class="flex flex-row space-x-4">
    <summary-card
      cardBgColor="bg-amber-200"
      titleCard="Revenue"
      :isCurrency="true"
    ></summary-card>
    
    <summary-card
      cardBgColor="bg-red-200"
      titleCard="Total Order"
    ></summary-card>
  </div>
</template>

<script setup>
import SummaryCard from "../../../components/MyStoreView/Dashboard/SummaryCard.vue";
</script>
