<script setup lang="ts">
import { computed } from "vue";
import SectionTitle from "@/components/SectionTitle.vue";
import GradientText from "./GradientText.vue";
const colorPattern = ["#443DAA", "#973894"];
const lgColorString = computed(() => {
  return `linear-gradient(${colorPattern.join(",")})`;
});
</script>
<template>
  <section>
    <SectionTitle
      :title="'Experience'"
      :rotationalStates="[0, 6, 6, 2]"
      :colorPattern="colorPattern"
    />
    <div class="px-6 text-[#D2] text-lg">
      <div class="flex flex-col space-y-8">
        <div>
          <GradientText class="text-3xl mb-4" :colorPattern="colorPattern">
            Jobs
          </GradientText>
          <div class="flex flex-col space-y-6">
            <div class="flex flex-col space-y-2">
              <p class="text-2xl">Full Stack Developer</p>
              <div class="text-base">
                <div class="flex items-center space-x-2">
                  <p>LUCA - Ciência para Educar</p>
                  <a
                    href="https://lucaeducar.com.br/"
                    class="text-lg text-[#FC0D46]"
                  >
                    <div class="mb-2 flex items-center">
                      <div
                        class="i-mdi-web"
                        :style="`background-image: ${lgColorString}`"
                      ></div>
                    </div>
                  </a>
                </div>
                <p>São Paulo - Brazil</p>
                <p>Oct. 2020 - Jul. 2022</p>
              </div>
              <p>
                At LUCA, I worked as the main developer of
                <a
                  href="https://roversandbeyond.com.br/"
                  class="px-1 rounded-lg cursor-pointer"
                  :style="`background-image: ${lgColorString}`"
                  >Rovers & Beyond</a
                >, a gamified experience for space missions on Mars. It includes
                ludic quizzes, training simulators and remote driving sessions
                of robotic rovers.
              </p>
            </div>
            <div class="flex flex-col space-y-2">
              <p class="text-2xl">Visiting Researcher</p>
              <div class="text-base">
                <div class="flex items-center space-x-2">
                  <p>Institut Laue-Langevin - Theory Group</p>
                  <a
                    href="https://www.ill.eu/users/scientific-groups/theory"
                    class="text-lg text-[#FC0D46]"
                  >
                    <div class="mb-2 flex items-center">
                      <div
                        class="i-mdi-web"
                        :style="`background-image: ${lgColorString}`"
                      ></div>
                    </div>
                  </a>
                </div>
                <p>Grenoble - France</p>
                <p>Oct. 2018 - Sept. 2019</p>
              </div>
              <p>
                I worked on the
                <a
                  href="https://www.pdynamo.org/"
                  class="px-1 rounded-lg cursor-pointer"
                  :style="`background-image: ${lgColorString}`"
                  >pDynamo</a
                >
                library, migrating its codebase to Python 3 and implementing new
                features.
              </p>
            </div>
          </div>
        </div>
        <div>
          <GradientText class="text-3xl mb-4" :colorPattern="colorPattern">
            Published Work
          </GradientText>
          <div class="flex flex-col space-y-6">
            <div>
              <p class="text-2xl">
                Effects of lipid composition on membrane distribution and
                permeability of natural quinones
              </p>

              <p>Teixeira, M. H. and Arantes, G. M.</p>
              <div class="flex items-center space-x-2">
                <p>RSC Advances, v. 9, p. 16892-16899, 2019</p>
                <a href="https://dx.doi.org/10.1039/c9ra01681c" class="text-lg">
                  <div class="mb-2 flex items-center">
                    <div
                      class="i-mdi-book-open-page-variant-outline"
                      :style="`background-image: ${lgColorString}`"
                    ></div>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <p class="text-2xl">
                Modeling the Hydrolysis of Iron-Sulfur Clusters
              </p>

              <p>
                Teixeira, M. H. , Curtolo, F., Camilo, S. R. G. , Field, M. J.,
                Zheng, P., Li, H. and Arantes, G. M.
              </p>
              <div class="flex items-center space-x-2">
                <p>
                  Journal of Chemical Information and Modeling, v. 60, p.
                  653-660, 2019
                </p>
                <a
                  href="https://dx.doi.org/10.1021/acs.jcim.9b00881"
                  class="text-lg"
                >
                  <div class="mb-2 flex items-center">
                    <div
                      class="i-mdi-book-open-page-variant-outline"
                      :style="`background-image: ${lgColorString}`"
                    ></div>
                  </div>
                </a>
              </div>
            </div>
            <div>
              <p class="text-2xl">
                Balanced internal hydration discriminates substrate binding to
                respiratory complex I
              </p>

              <p>Teixeira, M. H. and Arantes, G. M.</p>
              <div class="flex items-center space-x-2">
                <p>
                  Biochimica et Biophysica Acta - Bioenergetics, v. 1860, p.
                  541-548, 2019
                </p>
                <a
                  href="https://dx.doi.org/10.1016/j.bbabio.2019.05.004"
                  class="text-lg"
                >
                  <div class="mb-2 flex items-center">
                    <div
                      class="i-mdi-book-open-page-variant-outline"
                      :style="`background-image: ${lgColorString}`"
                    ></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
