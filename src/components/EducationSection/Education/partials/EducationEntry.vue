<script setup lang="ts">
import GradientText from "@/components/partials/GradientText.vue";
import GradientIconLink from "@/components/partials/GradientIconLink.vue";
defineProps({
  colorPattern: {
    type: Array<string>,
    default: ["#65B947", "#1232A5", "#7547AE", "#FC0D46"],
  },
  title: {
    type: String,
    default: "Course",
  },
  period: {
    type: String,
    default: "Period",
  },
  institution: {
    type: String,
    default: "Institution - Location",
  },
  documentURL: {
    type: String,
    default: "",
  },
  documentLabel: {
    type: String,
    default: "",
  },
  notes: {
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
    <p class="text-base">{{ period }}</p>
    <div class="flex space-x-4">
      <p class="text-base">{{ institution }}</p>
      <GradientIconLink
        v-if="documentURL"
        :linkURL="documentURL"
        :linkLabel="documentLabel"
        :color-pattern="colorPattern"
        iconClass="i-carbon-book"
      ></GradientIconLink>
    </div>
    <GradientText v-if="notes" class="text-lg" :colorPattern="colorPattern">
      {{ notes }}
    </GradientText>
  </div>
</template>
