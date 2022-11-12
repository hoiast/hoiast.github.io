<script setup lang="ts">
import GradientBulletEntry from "@/components/partials/GradientBulletEntry.vue";
import SubSectionTitle from "@/components/partials/SubSectionTitle.vue";
defineProps({
  colorPattern: {
    type: Array<string>,
    default: ["#65B947", "#1232A5", "#7547AE", "#FC0D46"],
  },
});
</script>

<template>
  <div>
    <SubSectionTitle :colorPattern="colorPattern" title="Languages" />
    <GradientBulletEntry :colorPattern="colorPattern"
      >Portuguese</GradientBulletEntry
    >
    <GradientBulletEntry :colorPattern="colorPattern"
      >English</GradientBulletEntry
    >
  </div>
</template>
