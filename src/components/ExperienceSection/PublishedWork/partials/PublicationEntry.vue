<script setup lang="ts">
import GradientIconLink from "@/components/partials/GradientIconLink.vue";
defineProps({
  colorPattern: {
    type: Array<string>,
    default: ["#65B947", "#1232A5", "#7547AE", "#FC0D46"],
  },
  title: {
    type: String,
    default: "Research Paper",
  },
  authors: {
    type: String,
    default: "Author1, Author2, Author3",
  },
  details: {
    type: String,
    default: "Journal, volume, page, year",
  },
  documentURL: {
    type: String,
    default: "",
  },
  documentLabel: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div>
    <p class="text-2xl">
      {{ title }}
    </p>

    <p>{{ authors }}</p>
    <div class="flex items-center space-x-4">
      <p>{{ details }}</p>
      <GradientIconLink
        v-if="documentURL"
        :linkURL="documentURL"
        :linkLabel="documentLabel"
        :color-pattern="colorPattern"
        iconClass="i-carbon-book"
      ></GradientIconLink>
    </div>
  </div>
</template>
