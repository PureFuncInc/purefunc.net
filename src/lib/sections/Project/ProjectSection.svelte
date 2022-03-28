<script lang="ts">
  import Section from "$lib/components/Section/Section.svelte";
  import SectionTitle from '$lib/components/SectionTitle/SectionTitle.svelte';
  import ProjectBg from '$lib/assets/images/backgrounds/project.jpg';
  import {Splide, SplideSlide} from '@splidejs/svelte-splide';
  import ProjectCard from './ProjectCard/ProjectCard.svelte';
  import { projects } from './Project.content';
  import {wrapper} from "./ProjectSection.css";

  const options = {
    width: '100vw',
    gap: '6rem',
    padding: '6rem',
  }
</script>

<Section id="project" src={ProjectBg}>
  <div class={wrapper}>
    <SectionTitle>
      產品
    </SectionTitle>

    <Splide {options}>
      {#each projects as project}
        <SplideSlide>
          <ProjectCard {project} />
        </SplideSlide>
      {/each}
    </Splide>
  </div>
</Section>
