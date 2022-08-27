<script setup lang="ts">
import InteractiveHome from "@/components/InteractiveHome.vue";
import AboutMeSection from "@/components/AboutMeSection.vue";
import EducationSection from "@/components/EducationSection.vue";
import ExperienceSection from "@/components/ExperienceSection.vue";
import OpenSourceSection from "@/components/OpenSourceSection.vue";
import ContactSection from "../components/ContactSection.vue";
</script>

<template>
  <main>
    <div class="relative top-[10vh] w-full">
      <InteractiveHome></InteractiveHome>
      <div class="flex flex-col space-y-8">
        <AboutMeSection />
        <EducationSection />
        <ExperienceSection />
        <OpenSourceSection />
        <ContactSection />
      </div>
    </div>
  </main>
</template>
