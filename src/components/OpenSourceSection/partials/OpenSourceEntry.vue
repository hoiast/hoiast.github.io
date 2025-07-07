<script setup lang="ts">
import GradientIconLink from "@/components/partials/GradientIconLink.vue";
const props = defineProps({
  colorPattern: {
    type: Array<string>,
    default: ["#65B947", "#1232A5", "#7547AE", "#FC0D46"],
  },
  title: {
    type: String,
    default: "ExoSim",
  },
  gitHubURL: {
    type: String,
    default: "",
  },
  gitHubLabel: {
    type: String,
    default: "",
  },
  linkURL: {
    type: String,
    default: "",
  },
  linkLabel: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div>
    <div class="flex items-center space-x-4">
      <p class="text-2xl">{{ title }}</p>
      <GradientIconLink
        v-if="linkURL"
        :linkURL="linkURL"
        :linkLabel="linkLabel"
        :color-pattern="colorPattern"
        iconClass="i-carbon-launch"
      ></GradientIconLink>
      <GradientIconLink
        v-if="gitHubURL"
        :linkURL="gitHubURL"
        :linkLabel="gitHubLabel"
        :color-pattern="colorPattern"
        iconClass="i-carbon-logo-github"
      ></GradientIconLink>
    </div>
    <p>
      <slot />
    </p>
  </div>
</template>
