<script lang="ts">
  import HomeSection from '$lib/sections/Home/HomeSection.svelte'
  import PeopleSection from "$lib/sections/People/PeopleSection.svelte";
  import ServiceSection from "$lib/sections/Service/ServiceSection.svelte";
  import ProjectSection from "$lib/sections/Project/ProjectSection.svelte";
  import ContactSection from "$lib/sections/Contact/ContactSection.svelte";
  import { Splide } from '@splidejs/svelte-splide';

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
</script>

<svelte:head>
	<title>$_purefunc</title>
</svelte:head>

<Splide options={options}>
  <HomeSection />

  <PeopleSection />

  <ServiceSection />

  <ProjectSection />

  <ContactSection />
</Splide>
