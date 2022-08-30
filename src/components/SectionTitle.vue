<script setup lang="ts">
import { computed } from "vue";
import TriangleQuartet from "@/components/TriangleQuartet.vue";
const props = defineProps({
  title: {
    type: String,
    default: "Section",
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  colorPattern: {
    type: Array<string>,
    default: ["#65B947", "#1232A5", "#7547AE", "#FC0D46"],
  },
  rotationalStates: {
    type: Array<number>,
    default: [0, 0, 0, 0],
  },
  href: {
    type: String,
    default: "",
  },
  dividerHeight: {
    type: Number,
    default: 1, //in pixels
  },
});
const lgColorString = computed(() => {
  return `linear-gradient(${props.colorPattern.join(",")})`;
});
</script>
<template>
  <div class="flex flex-col p-4">
    <div class="flex mb-2 items-center space-x-6 ml-4 mb-4">
      <TriangleQuartet
        :rotationalStates="rotationalStates"
        :isClickDisabled="true"
        :isColorDisabled="isDisabled"
        :colorPattern="colorPattern"
        :size="0.25"
        class=""
      ></TriangleQuartet>
      <p
        class="text-3xl"
        :class="'bg-clip-text'"
        :style="`-webkit-text-fill-color: transparent; background-image: ${lgColorString};`"
      >
        {{ title }}
      </p>
    </div>
    <div
      class="w-full mb-4"
      :style="`background-image: ${lgColorString}; height: ${dividerHeight}px;`"
    />
  </div>
</template>
<style scoped></style>
