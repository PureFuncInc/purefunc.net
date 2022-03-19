<script lang="ts">
  import Section from "$lib/components/Section/Section.svelte";
  import { container, h1, h2 } from './HomeSection.css'

  const srcset = '/images/backgrounds/home/home,w_768.jpg 768w,' +
    '/images/backgrounds/home/home,w_1664.jpg 1664w,' +
    '/images/backgrounds/home/home,w_2700.jpg 2700w,' +
    '/images/backgrounds/home/home,w_3536.jpg 3536w,' +
    '/images/backgrounds/home/home,w_3655.jpg 3655w,' +
    '/images/backgrounds/home/home,w_3840.jpg 3840w'
</script>

<Section id="home" {srcset}>
  <div class={container}>
    <h1 class={h1}>Making changes</h1>
    <h2 class={h2}>One function at a time</h2>
  </div>
</Section>
