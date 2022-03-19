<script lang="ts">
  import {
    logo,
    navBar,
    spacer,
    navItem,
    link,
  } from './NavBar.css'
  import { entries } from 'lodash-es'

  const navs = entries({
    'people': "團隊",
    'service': "服務",
    'project': "產品",
    'contact': "聯絡",
  })
</script>

<nav class={navBar}>
  <div class={logo}></div>

  <div class={spacer}></div>

  {#each navs as [href, label]}
    <li class={navItem}>
      <a class={link} href={'#' + href}>
        {label}
      </a>
    </li>
  {/each}
</nav>
