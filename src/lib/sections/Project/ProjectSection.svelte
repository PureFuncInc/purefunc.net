<script lang="ts">
  import Section from "$lib/components/Section/Section.svelte";
  import {title} from "./ProjectSection.css";

  const srcset = "/images/backgrounds/project/project,w_768.jpg 768w," +
    "/images/backgrounds/project/project,w_1611.jpg 1611w," +
    "/images/backgrounds/project/project,w_2202.jpg 2202w," +
    "/images/backgrounds/project/project,w_2687.jpg 2687w," +
    "/images/backgrounds/project/project,w_3102.jpg 3102w," +
    "/images/backgrounds/project/project,w_3250.jpg 3250w"
</script>

<Section id="project" {srcset}>
<!--  <div class={strip}>-->
<!--    UPCOMING PROJECTS-->
<!--  </div>-->
  <h2 class={title}>
    敬請期待
  </h2>
</Section>
