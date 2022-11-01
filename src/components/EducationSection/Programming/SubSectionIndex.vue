<script setup lang="ts">
import SubSectionTitle from "@/components/partials/SubSectionTitle.vue";
import GradientBulletEntry from "@/components/partials/GradientBulletEntry.vue";
defineProps({
  colorPattern: {
    type: Array<string>,
    default: ["#65B947", "#1232A5", "#7547AE", "#FC0D46"],
  },
});
</script>

<template>
  <div>
    <SubSectionTitle :colorPattern="colorPattern" title="Programming" />
    <GradientBulletEntry :colorPattern="colorPattern"
      >Javascript, Typescript, Python and PHP</GradientBulletEntry
    >

    <GradientBulletEntry :colorPattern="colorPattern"
      >Node.js Express and Laravel</GradientBulletEntry
    >
    <GradientBulletEntry :colorPattern="colorPattern"
      >MySQL and MongoDB</GradientBulletEntry
    >
    <GradientBulletEntry :colorPattern="colorPattern"
      >Vue 3</GradientBulletEntry
    >
    <GradientBulletEntry :colorPattern="colorPattern"
      >SCSS and CSS3 with Bootstrap, TailwindCSS and UnoCSS</GradientBulletEntry
    >
    <GradientBulletEntry :colorPattern="colorPattern"
      >WebRTC, WebUSB, Websockets and MQTT</GradientBulletEntry
    >
    <GradientBulletEntry :colorPattern="colorPattern"
      >Git with Github and Bitbucket</GradientBulletEntry
    >
    <GradientBulletEntry :colorPattern="colorPattern"
      >Jira and Trello</GradientBulletEntry
    >
  </div>
</template>
