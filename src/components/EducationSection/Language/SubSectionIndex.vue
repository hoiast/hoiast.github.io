<script setup lang="ts">
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
    <p>Portuguese and English</p>
  </div>
</template>
