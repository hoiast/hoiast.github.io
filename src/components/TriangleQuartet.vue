<script setup lang="ts">
import SingleTriangle from "@/components/SingleTriangle.vue";
import { ref, watch, computed } from "vue";

const props = defineProps({
  size: {
    type: Number,
    default: 1,
  },
  isColorDisabled: {
    type: Boolean,
    default: false,
  },
  disablingColor: {
    type: String,
    default: "#D9D9D9",
  },
  isClickDisabled: {
    type: Boolean,
    default: false,
  },
  colorPattern: {
    type: Array<string>,
    default: ["#65B947", "#1232A5", "#7547AE", "#FC0D46"],
  },
  isPulsing: {
    type: Boolean,
    default: false,
  },
  rotationalStates: {
    type: Array<number>,
    default: [0, 0, 0, 0],
  },
  transformDuration: { type: Number, default: 500 },
});

const rotationalStates = ref([...props.rotationalStates]);
watch(props, () => {
  rotationalStates.value = [...props.rotationalStates];
});

const quartetSpacing = computed(() => {
  return `${props.size * 2}`;
});
</script>
<template>
  <div
    :class="[
      `grid grid-rows-2 space-y-${quartetSpacing}`,
      { 'animate-pulse': isPulsing },
    ]"
  >
    <div
      :class="`grid grid-cols-2 space-x-${quartetSpacing}`"
      v-for="colIndex in 2"
      :key="colIndex - 1"
    >
      <SingleTriangle
        v-for="rowIndex in 2"
        :key="(colIndex - 1) * 2 + (rowIndex - 1)"
        :size="size"
        :isColorDisabled="isColorDisabled"
        :isClickDisabled="isClickDisabled"
        :colorPattern="colorPattern"
        v-model:rotationalState="
          rotationalStates[(colIndex - 1) * 2 + (rowIndex - 1)]
        "
        @update:rotationalState="
          $emit('update:rotationalStates', rotationalStates)
        "
        :transformDuration="transformDuration"
        :disablingColor="disablingColor"
      />
    </div>
  </div>
</template>

<style scoped></style>
