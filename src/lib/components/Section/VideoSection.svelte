<script lang="ts">
  import { section, wrapper, backgroundVideo } from "./Section.css";

  export let video: string;
</script>

<section class={section}>
  <video class={backgroundVideo} autoplay muted loop>
    <source src="{video}" type="video/mp4">
  </video>

  <div class={wrapper}>
    <slot />
  </div>
</section>
