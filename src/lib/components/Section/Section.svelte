<script lang="ts">
  import { SplideSlide } from '@splidejs/svelte-splide';
  import {section, wrapper, bg, bgWrapper} from "./Section.css";

  export let id = '';
  export let srcset: string
</script>

<SplideSlide>
  <section {id} class={section}>
    <div class={wrapper}>
      <slot />
    </div>

    <picture class={bgWrapper}>
      <img
        class={bg}
        sizes="(max-width: 3840px) 100vw, 3840px"
        {srcset}
        alt="">
    </picture>
  </section>
</SplideSlide>
