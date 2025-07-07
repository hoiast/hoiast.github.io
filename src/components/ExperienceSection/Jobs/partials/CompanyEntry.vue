<script setup lang="ts">
import GradientIconLink from "@/components/partials/GradientIconLink.vue";
const props = defineProps({
  colorPattern: {
    type: Array<string>,
    default: ["#65B947", "#1232A5", "#7547AE", "#FC0D46"],
  },
  role: {
    type: String,
    default: "Developer",
  },
  companyName: {
    type: String,
    default: "Company",
  },
  institutionalURL: {
    type: String,
    default: "",
  },
  institutionalURLLabel: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "City - Country",
  },
  period: {
    type: String,
    default: "Month Year - Month Year",
  },
});
</script>
<template>
  <div class="flex flex-col space-y-2">
    <div>
      <div class="flex items-center space-x-4">
        <p class="text-2xl">{{ companyName }}</p>
        <GradientIconLink
          v-if="institutionalURL"
          :colorPattern="colorPattern"
          :linkURL="institutionalURL"
          :linkURLLabel="institutionalURLLabel"
          iconClass="i-carbon-launch"
        >
        </GradientIconLink>
      </div>
      <p>{{ location }}</p>
    </div>
    <slot />
  </div>
</template>
