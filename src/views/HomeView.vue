<script setup lang="ts">
import InteractiveHome from "@/components/InteractiveHome/InteractiveHome.vue";
import AboutMeSection from "@/components/AboutMeSection/SectionIndex.vue";
import EducationSection from "@/components/EducationSection/SectionIndex.vue";
import ExperienceSection from "@/components/ExperienceSection/SectionIndex.vue";
import OpenSourceSection from "@/components/OpenSourceSection/SectionIndex.vue";
import ContactSection from "@/components/ContactSection/SectionIndex.vue";
</script>

<template>
  <main>
    <div class="relative w-full">
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
