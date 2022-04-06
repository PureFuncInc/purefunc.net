<script lang="ts">
  import Section from "$lib/components/Section/Section.svelte";
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import { people } from './People.content';
  import { wrapper } from "./PeopleSection.css";
  import PersonCard from "./PersonCard/PersonCard.svelte";
  import SectionTitle from "$lib/components/SectionTitle/SectionTitle.svelte";
  import PeopleBg from '$lib/assets/images/backgrounds/people.jpg';

  const options = {
    height: '65vh',
    gap: '1.5rem',
    padding: '3rem',
    pagination: false,
  }
</script>

<Section id="people" src={PeopleBg}>
  <div class={wrapper}>
    <SectionTitle>
      團隊
    </SectionTitle>

    <Splide {options}>
      {#each people as person}
        <SplideSlide>
          <PersonCard {person} />
        </SplideSlide>
      {/each}
    </Splide>
  </div>
</Section>
