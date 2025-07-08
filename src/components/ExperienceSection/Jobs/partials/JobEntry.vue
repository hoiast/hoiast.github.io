<script setup lang="ts">
import GradientBulletEntry from "@/components/partials/GradientBulletEntry.vue";
defineProps({
  colorPattern: {
    type: Array<string>,
    default: ["#65B947", "#1232A5", "#7547AE", "#FC0D46"],
  },
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
      <GradientBulletEntry :colorPattern="colorPattern"
        ><div>
          <p class="text-lg font-bold">{{ role }}</p>
          <p class="text-base font-bold">{{ period }}</p>
        </div>
      </GradientBulletEntry>
    </div>
    <p>
      <slot />
    </p>
  </div>
</template>
