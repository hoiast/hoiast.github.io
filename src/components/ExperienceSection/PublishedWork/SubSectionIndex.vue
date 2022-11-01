<script setup lang="ts">
import SubSectionTitle from "@/components/partials/SubSectionTitle.vue";
import PublicationEntry from "@/components/ExperienceSection/PublishedWork/partials/PublicationEntry.vue";
defineProps({
  colorPattern: {
    type: Array<string>,
    default: ["#65B947", "#1232A5", "#7547AE", "#FC0D46"],
  },
});
</script>

<template>
  <div>
    <SubSectionTitle :colorPattern="colorPattern" title="Published Work" />
    <div class="flex flex-col space-y-6">
      <PublicationEntry
        :colorPattern="colorPattern"
        title="Effects of lipid composition on membrane distribution and permeability of natural quinones"
        authors="Teixeira, M. H. and Arantes, G. M."
        details="RSC Advances, v. 9, p. 16892-16899, 2019"
        documentURL="https://dx.doi.org/10.1039/c9ra01681c"
        documentLabel="Scientific journal link for the article entitled: Effects of lipid composition on membrane distribution and permeability of natural quinones"
      />
      <PublicationEntry
        :colorPattern="colorPattern"
        title="Modeling the Hydrolysis of Iron-Sulfur Clusters"
        authors="Teixeira, M. H. , Curtolo, F., Camilo, S. R. G. , Field, M. J., Zheng, P., Li, H. and Arantes, G. M."
        details="Journal of Chemical Information and Modeling, v. 60, p.653-660, 2019"
        documentURL="https://dx.doi.org/10.1021/acs.jcim.9b00881"
        documentLabel="Scientific journal link for the article entitled: Modeling the Hydrolysis of Iron-Sulfur Clusters"
      />
      <PublicationEntry
        :colorPattern="colorPattern"
        title="Balanced internal hydration discriminates substrate binding to respiratory complex I"
        authors="Teixeira, M. H. and Arantes, G. M."
        details="Biochimica et Biophysica Acta - Bioenergetics, v. 1860, p.541-548, 2019"
        documentURL="https://dx.doi.org/10.1016/j.bbabio.2019.05.004"
        documentLabel="Scientific journal link for the article entitled: Balanced internal hydration discriminates substrate binding to respiratory complex I"
      />
    </div>
  </div>
</template>
