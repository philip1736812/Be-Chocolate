<template>
  <div>
    <div class="relative w-72 p-5 rounded-lg" :class="props.cardBgColor">
      <div class="absolute top-2 right-4 font-medium text-sm">month</div>
      <div>
        <p class="text-md text-slate-500">{{ props.titleCard }}</p>
        <p v-if="props.isCurrency" class="text-2xl font-medium">950.00 B</p>
        <p v-else class="text-2xl font-medium">245</p>
      </div>
      <div class="flex items-end justify-between mt-6">
        <div class="flex space-x-3.5">
          <div class="w-2.5 h-16 bg-black rounded-t-md"></div>
          <div class="w-2.5 h-16 bg-black rounded-t-md"></div>
          <div class="w-2.5 h-16 bg-black rounded-t-md"></div>
          <div class="w-2.5 h-16 bg-black rounded-t-md"></div>
          <div class="w-2.5 h-16 bg-black rounded-t-md"></div>
          <div class="w-2.5 h-16 bg-black rounded-t-md"></div>
        </div>
        <div>
          <div class="font-medium text-green-600">
            <span><font-awesome-icon icon="fa-regular fa-circle-up" /></span>
            <span v-if="props.isCurrency">
              {{ getSummaryEarn }}
            </span>
            <span v-else>{{ getSummaryOrder }}</span>
          </div>

          <!-- <div><font-awesome-icon icon="fa-regular fa-circle-down" /></div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";
import {
  currencyFormat,
  numberFormat,
} from "../../../components/hooks/UseNumberFormat";

const props = defineProps({
  cardBgColor: String,
  titleCard: String,
  isCurrency: Boolean,
});

const getSummaryEarn = computed(() => currencyFormat(45));
const getSummaryOrder = computed(() => numberFormat(45));
</script>
