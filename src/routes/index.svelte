<script lang="ts">
  import NavBar from '$lib/components/NavBar/NavBar.svelte'
  import HomeSection from '$lib/sections/Home/HomeSection.svelte'
  import PeopleSection from "$lib/sections/People/PeopleSection.svelte";
  import ServiceSection from "$lib/sections/Service/ServiceSection.svelte";

  export const prerender = true
</script>

<svelte:head>
	<title>$_purefunc</title>
</svelte:head>

<div>
	<NavBar />

  <HomeSection />

  <PeopleSection />

  <ServiceSection />
</div>
