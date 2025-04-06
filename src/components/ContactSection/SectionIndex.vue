<script setup lang="ts">
import SectionTitle from "@/components/partials/SectionTitle.vue";
import ContactEntry from "@/components/ContactSection/partials/ContactEntry.vue";
const colorPattern = ["#65B947", "#27548E"];
</script>
<template>
  <section>
    <SectionTitle
      :title="'Contact and Links'"
      :rotationalStates="[7, 1, 5, 3]"
      :dividerHeight="2"
      :colorPattern="colorPattern"
    />
    <div class="mb-10 px-6 color-base text-3xl">
      <ContactEntry
        :colorPattern="colorPattern"
        title="murilohoias@gmail.com"
        iconClass="i-carbon-email"
      />
      <ContactEntry
        :colorPattern="colorPattern"
        title="Mumu#6876"
        iconClass="i-carbon-logo-discord"
      />
      <div class="grid grid-cols-1 w-fit">
        <ContactEntry
          :colorPattern="colorPattern"
          title="Github"
          iconClass="i-carbon-logo-github"
          linkURL="https://github.com/hoiast"
          linkLabel="hoiast's Github page"
        />
        <ContactEntry
          :colorPattern="colorPattern"
          title="LinkedIn"
          iconClass="i-carbon-logo-linkedin"
          linkURL="https://www.linkedin.com/in/murilohoias"
          linkLabel="LinkedIn user page"
        />
        <ContactEntry
          :colorPattern="colorPattern"
          title="Lattes"
          iconClass="academicons-lattes"
          linkURL="http://lattes.cnpq.br/4928822491567061"
          linkLabel="Lattes curriculum page"
        />
      </div>
    </div>
  </section>
</template>
