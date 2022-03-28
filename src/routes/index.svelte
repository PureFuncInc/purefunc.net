<script lang="ts">
  import HomeSection from '$lib/sections/Home/HomeSection.svelte'
  import PeopleSection from "$lib/sections/People/PeopleSection.svelte";
  import ServiceSection from "$lib/sections/Service/ServiceSection.svelte";
  import ProjectSection from "$lib/sections/Project/ProjectSection.svelte";
  import CommunitySection from "$lib/sections/Community/CommunitySection.svelte";
  import ContactSection from "$lib/sections/Contact/ContactSection.svelte";
  import NavBar from '$lib/components/NavBar/NavBar.svelte';
  import { Splide } from '@splidejs/svelte-splide';

  let splide: Splide;

  const options = {
    direction: 'ttb',
    width: '100vw',
    height: '100vh',
    type: 'fade',
    gap: 0,
    wheel: true,
    waitForTransition: true,
    releaseWheel: true,
    drag: true,
    arrows: false,
    autoplay: false,
    pagination: false,
  }

  const navs = [
    ['people', "團隊", PeopleSection],
    ['service', "服務", ServiceSection],
    ['project', "產品", ProjectSection],
    ['community', '社群', CommunitySection],
    ['contact', "聯絡", ContactSection],
  ]

  function handleNavigate(event: CustomEvent) {
    if (!splide) {
      return
    }

    const index = navs.findIndex(nav => nav[0] == event.detail.id) + 1

    if (index) {
      splide.go(index)
    } else {
      splide.go(0)
    }
  }
</script>

<svelte:head>
	<title>$_purefunc</title>
</svelte:head>

<NavBar {navs} on:navigate={handleNavigate} />

<Splide {options} bind:this={splide}>
  <HomeSection />

  {#each navs as [,, component]}
    <svelte:component this={component} />
  {/each}
</Splide>
