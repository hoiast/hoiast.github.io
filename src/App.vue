<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar/NavBar.vue";
import Footer from "./components/FooterBar/FooterBar.vue";
</script>

<template>
  <NavBar />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
