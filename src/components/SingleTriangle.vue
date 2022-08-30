<script setup lang="ts">
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
    default: "#777777",
  },
  isClickDisabled: {
    type: Boolean,
    default: false,
  },
  colorPattern: {
    type: Array<string>,
    default: ["#65B947", "#1232A5", "#7547AE", "#FC0D46"],
  },
  rotationalState: {
    type: Number,
    default: 0,
  },
  transformDuration: { type: Number, default: 500 },
});

const rotationalState = ref(props.rotationalState);
const unlimitedRotationalState = ref(props.rotationalState);
watch(props, () => {
  rotationalState.value = props.rotationalState;
  if (props.rotationalState !== unlimitedRotationalState.value % 8) {
    unlimitedRotationalState.value = props.rotationalState;
  }
});

const emit = defineEmits<{
  (e: "update:rotationalState", value: number): void;
}>();

const rotate = () => {
  if (!props.isClickDisabled) {
    unlimitedRotationalState.value += 2;
    rotationalState.value = unlimitedRotationalState.value % 8;
    emit("update:rotationalState", rotationalState.value);
  }
};

// . props-dependent CSS instructions
const rotationDegrees = computed(() => {
  return `${unlimitedRotationalState.value * 45}deg`;
});
const triangleColor = computed(() => {
  return `linear-gradient(${
    props.isColorDisabled
      ? `${props.disablingColor},${props.disablingColor}`
      : props.colorPattern.join(",")
  })`;
});
const outerTriangleSizeInPixels = computed(() => {
  return `${props.size * 10}vh`;
  // return `${props.size * 100}px`;
});
const innerTriangleSizeInPixels = computed(() => {
  return `${props.size * 8}vh`;
  // return `${props.size * 85}px`;
});
const innerTriangleMarginTopInPixels = computed(() => {
  return `${props.size * 0.7}vh`;
  // return `${props.size * 6}px`;
});
</script>
<template>
  <div
    @click="rotate"
    :class="[
      `transform rotate triangle .transition-transform duration-${transformDuration} ease-in-out`,
      { 'cursor-pointer': !isClickDisabled },
    ]"
  >
    <div class="bg-base transition-base"></div>
  </div>
</template>
<style scoped>
.triangle {
  background-image: v-bind(triangleColor);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  width: v-bind(outerTriangleSizeInPixels);
  height: v-bind(outerTriangleSizeInPixels);
  display: flex;
  justify-content: center;
  align-items: center;
}
.triangle div {
  margin-top: v-bind(innerTriangleMarginTopInPixels);
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  width: v-bind(innerTriangleSizeInPixels);
  height: v-bind(innerTriangleSizeInPixels);
}
.rotate {
  --un-rotate: v-bind(rotationDegrees);
}
</style>
