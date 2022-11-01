<script setup lang="ts">
import SectionTitle from "@/components/partials/SectionTitle.vue";
import EducationSubSection from "@/components/EducationSection/Education/SubSectionIndex.vue";
import LanguageSubSection from "@/components/EducationSection/Language/SubSectionIndex.vue";
import ProgrammingSubSection from "@/components/EducationSection/Programming/SubSectionIndex.vue";
const colorPattern = ["#27548E", "#443DAA"];
</script>
<template>
  <section>
    <SectionTitle
      :title="'Education and Skills'"
      :rotationalStates="[6, 2, 2, 0]"
      :colorPattern="colorPattern"
    />
    <div class="px-6 color-base text-lg">
      <div class="flex flex-col space-y-4">
        <EducationSubSection :colorPattern="colorPattern" />
        <ProgrammingSubSection :colorPattern="colorPattern" />
        <LanguageSubSection :colorPattern="colorPattern" />
      </div>
    </div>
  </section>
</template>
