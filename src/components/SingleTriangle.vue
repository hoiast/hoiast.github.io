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

const rotate = (event: MouseEvent) => {
  if (!props.isClickDisabled) {
    unlimitedRotationalState.value += 2;
    rotationalState.value = unlimitedRotationalState.value % 8;
    emit("update:rotationalState", rotationalState.value);
  }
  return event;
};

// . props-dependent CSS instructions
const rotationDegrees = computed(() => {
  return `${unlimitedRotationalState.value * 45}deg`;
});

const triangleColor = computed(() => {
  return props.isColorDisabled
    ? new Array(2).fill(props.disablingColor)
    : props.colorPattern;
});
const gradientUUID = crypto.randomUUID();
const outerTriangleSizeInPixels = computed(() => {
  return `${props.size * 10}vh`;
});
const innerTriangleSizeInPixels = computed(() => {
  return `${props.size * 8}vh`;
});
const innerTriangleMarginTopInPixels = computed(() => {
  return `${props.size * 0.5}vh`;
});
const paddingToAdjustRotationCenter = computed(() => {
  return `${1 * props.size}rem`;
});
</script>
<template>
  <div
    @click="rotate"
    :class="[
      `transform triangle relative rotate .transition-transform duration-${transformDuration} ease-in-out`,
      { paddingToAdjustRotationCenter: rotationalState % 2 === 0 },
      { 'cursor-pointer': !isClickDisabled },
    ]"
  >
    <svg viewBox="0 0 10 10" preserveAspectRatio="none">
      <defs>
        <linearGradient :id="gradientUUID" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop
            v-for="(color, index) in triangleColor"
            :key="index"
            :offset="`${(index * 100) / (triangleColor.length - 1)}%`"
            :stop-color="color"
          />
        </linearGradient>
      </defs>
      <polygon :fill="`url(#${gradientUUID})`" points="5 0 10 10 0 10" />
    </svg>
    <div class="absolute">
      <div class="bg-base transition-base"></div>
    </div>
  </div>
</template>
<style scoped>
.triangle {
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
.paddingToAdjustRotationCenter {
  padding-bottom: v-bind(paddingToAdjustRotationCenter);
}
</style>
