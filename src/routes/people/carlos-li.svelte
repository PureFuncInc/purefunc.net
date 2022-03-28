<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from '$app/navigation';

  function redirect() {
    goto('/')
  }

  onMount(() => {
    redirect()
  })
</script>

<h2>
  Hello
</h2>
