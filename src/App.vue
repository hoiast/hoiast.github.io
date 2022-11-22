<script setup lang="ts">
import { ref } from "vue";
import { useEventStore } from "@/stores/event";
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar/NavBar.vue";
import Footer from "./components/FooterBar/FooterBar.vue";

const isScrollEnabled = ref(false);
const viewFooterRef = ref();
const eventStore = useEventStore();
const setScroll = (value: boolean) => {
  isScrollEnabled.value = value;
  if (!value) {
    viewFooterRef.value.scrollTo({ top: 0, behavior: "smooth" });
  }
};
eventStore.on("setScroll", (value) => {
  value ? setScroll(true) : setScroll(false);
});
</script>

<template>
  <main class="bg-base text-base transition-base h-screen">
    <div class="max-w-[48rem] mx-auto">
      <NavBar />
    </div>
    <div
      class="top-[10vh] h-[90vh] w-full scrollbar scrollbar-w-8px scrollbar-track-color-[#1f2937] scrollbar-thumb-color-[#4b5563] scrollbar-gutter-stable"
      :class="{ 'overflow-hidden': !isScrollEnabled }"
      ref="viewFooterRef"
    >
      <div class="max-w-[48rem] mx-auto mb-[5vh]">
        <RouterView />
        <Footer />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
