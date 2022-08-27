<script setup lang="ts">
import SectionTitle from "@/components/SectionTitle.vue";
import GradientBorder from "./GradientBorder.vue";

const colorPattern = ["#65B947", "#27548E"];
</script>
<template>
  <section>
    <SectionTitle
      :title="'About Me'"
      :rotationalStates="[2, 4, 4, 6]"
      :colorPattern="colorPattern"
    />
    <div class="px-6">
      <div class="grid grid-cols-1 sm:grid-cols-3 items-center">
        <GradientBorder
          class="w-44 col-span-1 rounded-full"
          :colorPattern="colorPattern"
        >
          <img src="/assets/profilePhoto.jpg" class="rounded-full" />
        </GradientBorder>

        <div
          class="text-[#D2] text-lg col-span-1 sm:col-span-2 text-left sm:text-justify indent"
        >
          <p>
            Hi, I am Murilo Hoias Teixeira, Mumu for short. A father, husband,
            scientist and programmer. I have matured my taste for sciences and
            programming in my PhD in Computational Biochemistry and Biophysics
            and I don't intend to stop learning about these topics anytime soon.
          </p>
          <p>
            Currently, I am interested about Fullstack Web Development and Data
            Science. I am also a very social person and you may reach me easily
            on Discord where we can talk about anything, but specially science,
            technology, gaming, body art, veganism and politics.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
