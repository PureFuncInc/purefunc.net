<script lang="ts">
  import {section, wrapper} from "./Section.css";
  import {assignInlineVars} from "@vanilla-extract/dynamic";
  import {backgroundImage} from "$lib/styles/vars.css";

  export let image: string;
</script>

<section style={assignInlineVars({[backgroundImage]: `url('${image}')`})} class={section}>
  <div class={wrapper}>
    <slot />
  </div>
</section>
