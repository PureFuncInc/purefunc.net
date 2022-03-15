<script context="module" lang="ts">
  import {
    logo,
    navBar,
    spacer,
    navItem,
    link,
  } from './NavBar.css'
  import DarkMode from 'svelte-dark-mode'
  import { entries } from 'lodash-es'

  let theme: string;

  const navs = entries({
    Home: '#',
    Us: '#us',
    Services: '#services',
    Projects: '#projects',
    Contact: '#contact',
  })
</script>

<DarkMode bind:theme />

<nav class={navBar}>
  <img class={logo} alt="logo" src={theme === 'dark' ? "images/$_purefunc_white.svg" : "images/$_purefunc_black.svg"}/>

  <div class={spacer}></div>

  {#each navs as [label, href]}
    <li class={navItem}>
      <a class={link} href={href}>
        {label}
      </a>
    </li>
  {/each}
</nav>
