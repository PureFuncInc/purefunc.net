<script lang="ts">
  import Section from "$lib/components/Section/Section.svelte";
  import { container, h1, h2 } from './HomeSection.css'
  import HomeBg from '$lib/assets/images/backgrounds/home.jpg';
</script>

<Section id="home" src={HomeBg}>
  <div class={container}>
    <h1 class={h1}>Making changes</h1>
    <h2 class={h2}>One function at a time</h2>
  </div>
</Section>
