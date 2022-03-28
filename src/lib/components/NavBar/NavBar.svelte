<script lang="ts">
  import {
    logo,
    navBar,
    spacer,
    navItem,
    link,
  } from './NavBar.css'
  import { createEventDispatcher } from 'svelte'

  export let navs: [string, string, unknown][] = []

  const dispatch = createEventDispatcher()

  function onClickLink(id?: string) {
    dispatch('navigate', {id})
  }
</script>

<nav class={navBar}>
  <div class={logo} on:click={() => onClickLink()}></div>

  <div class={spacer}></div>

  {#each navs as [id, label]}
    <li class={navItem}>
      <a class={link} href="#" on:click={() => onClickLink(id)}>
        {label}
      </a>
    </li>
  {/each}
</nav>
