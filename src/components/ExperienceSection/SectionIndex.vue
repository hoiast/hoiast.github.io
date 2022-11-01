<script setup lang="ts">
import SectionTitle from "@/components/partials/SectionTitle.vue";
import JobsSubSection from "@/components/ExperienceSection/Jobs/SubSectionIndex.vue";
import PublishedWorkSection from "@/components/ExperienceSection/PublishedWork/SubSectionIndex.vue";
const colorPattern = ["#443DAA", "#973894"];
</script>
<template>
  <section>
    <SectionTitle
      :title="'Experience'"
      :rotationalStates="[0, 6, 6, 2]"
      :colorPattern="colorPattern"
    />
    <div class="px-6 color-base text-lg">
      <div class="flex flex-col space-y-4">
        <JobsSubSection :colorPattern="colorPattern" />
        <PublishedWorkSection :colorPattern="colorPattern" />
      </div>
    </div>
  </section>
</template>
