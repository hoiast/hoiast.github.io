<script setup lang="ts">
const props = defineProps({
  role: {
    type: String,
    default: "Developer",
  },
  period: {
    type: String,
    default: "Month Year - Month Year",
  },
});
</script>
<template>
  <div>
    <div>
      <p class="text-lg font-bold">{{ role }}</p>
      <p class="text-base font-bold">{{ period }}</p>
    </div>
    <p>
      <slot />
    </p>
  </div>
</template>
