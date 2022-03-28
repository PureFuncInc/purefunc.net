<script lang="ts">
  import { SplideSlide } from '@splidejs/svelte-splide';
  import {section, wrapper, bg, bgWrapper} from "./Section.css";

  export let id = '';
  export let src: string
</script>

<SplideSlide>
  <section {id} class={section}>
    <div class={wrapper}>
      <slot />
    </div>

    <picture class={bgWrapper}>
      <img
        class={bg}
        {src}
        alt="background" />
    </picture>
  </section>
</SplideSlide>
