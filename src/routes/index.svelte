<script lang="ts">
  import NavBar from '$lib/components/NavBar/NavBar.svelte'
  import HomeSection from '$lib/sections/Home/HomeSection.svelte'
  import PeopleSection from "$lib/sections/People/PeopleSection.svelte";
  import ServiceSection from "$lib/sections/Service/ServiceSection.svelte";
  import ProjectSection from "$lib/sections/Project/ProjectSection.svelte";
  import ContactSection from "$lib/sections/Contact/ContactSection.svelte";
  import Fa from "svelte-fa/src/fa.svelte";
  import {faArrowUp} from "@fortawesome/free-solid-svg-icons/faArrowUp";
  import {wrapper, backToTop} from "./index.css";

  let containerHeight: number
  let scrolledTop = 0
  let hideBackToTop = false
  let container: HTMLDivElement

  function goToTop() {
    container.scroll(0 , 0)
  }

  function handleOnScroll({ target }) {
    scrolledTop = target.scrollTop

    if (!container) {
      return;
    }

    hideBackToTop = container.scrollTop <= 120
  }
</script>

<svelte:head>
	<title>$_purefunc</title>
</svelte:head>

<div
  class={wrapper}
  bind:this={container}
  bind:clientHeight={containerHeight}
  on:scroll={handleOnScroll}>
	<NavBar />

  <HomeSection />

  <PeopleSection />

  <ServiceSection />

  <ProjectSection />

  <ContactSection />
</div>

<button class={backToTop} on:click={goToTop}>
  <Fa icon={faArrowUp} />
</button>
