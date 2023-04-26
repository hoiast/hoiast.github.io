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
      >Javascript, Typescript, C#, PHP and Python</GradientBulletEntry
    >
    <GradientBulletEntry :colorPattern="colorPattern"
      >Express, ASP.NET and Laravel</GradientBulletEntry
    >
    <GradientBulletEntry :colorPattern="colorPattern"
      >MySQL, PostgreSQL and MongoDB</GradientBulletEntry
    >
    <GradientBulletEntry :colorPattern="colorPattern"
      >Vue 3</GradientBulletEntry
    >
    <GradientBulletEntry :colorPattern="colorPattern"
      >Jester, XUnit, PHPUnit and Pytest
    </GradientBulletEntry>
    <GradientBulletEntry :colorPattern="colorPattern"
      >SCSS and CSS3 with Bootstrap, TailwindCSS and UnoCSS</GradientBulletEntry
    >
    <GradientBulletEntry :colorPattern="colorPattern"
      >WebRTC, WebUSB, Websockets and MQTT</GradientBulletEntry
    >
    <GradientBulletEntry :colorPattern="colorPattern"
      >Git with Github, GitLab and Bitbucket</GradientBulletEntry
    >
    <GradientBulletEntry :colorPattern="colorPattern"
      >Docker, Docker Composer and Portainer</GradientBulletEntry
    >
    <GradientBulletEntry :colorPattern="colorPattern"
      >AirBite, Airflow and DBT</GradientBulletEntry
    >
    <GradientBulletEntry :colorPattern="colorPattern"
      >AWS and GCP</GradientBulletEntry
    >
    <GradientBulletEntry :colorPattern="colorPattern"
      >Jira, Trello and Notion</GradientBulletEntry
    >
    <GradientBulletEntry :colorPattern="colorPattern"
      >Retool, Appsmith and Jestor</GradientBulletEntry
    >
  </div>
</template>
