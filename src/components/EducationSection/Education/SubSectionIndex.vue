<script setup lang="ts">
import SubSectionTitle from "@/components/partials/SubSectionTitle.vue";
import EducationEntry from "@/components/EducationSection/Education/partials/EducationEntry.vue";
defineProps({
  colorPattern: {
    type: Array<string>,
    default: ["#65B947", "#1232A5", "#7547AE", "#FC0D46"],
  },
});
</script>

<template>
  <div>
    <SubSectionTitle :colorPattern="colorPattern" title="Education" />
    <div class="flex flex-col space-y-2">
      <EducationEntry
        :colorPattern="colorPattern"
        title="PhD Computational Biochemistry and Biophysics"
        period="Mar. 2015 - Jul. 2020"
        institution="University of São Paulo - Brazil"
        documentURL="https://www.teses.usp.br/teses/disponiveis/46/46131/tde-23092021-093730/en.php"
        documentLabel="My phD thesis available at www.teses.usp.br"
        notes="2021 CAPES Thesis Award - Honorable Mention"
      />
      <EducationEntry
        :colorPattern="colorPattern"
        title="Bachelor of Science Degree in Chemistry"
        period="Mar. 2011 - Dez. 2014"
        institution="University of São Paulo - Brazil"
      />
    </div>
  </div>
</template>
