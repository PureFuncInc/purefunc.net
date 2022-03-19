<script lang="ts">
  import Section from "$lib/components/Section/Section.svelte";
  import PersonCard from "./PersonCard/PersonCard.svelte";
  import { people } from './People.content';
  import { cards, wrapper } from "./PeopleSection.css";
  import SectionTitle from "$lib/components/SectionTitle/SectionTitle.svelte";

  const srcset= "/images/backgrounds/people/people,w_768.jpg 768w,"+
    "/images/backgrounds/people/people,w_1632.jpg 1632w,"+
    "/images/backgrounds/people/people,w_2228.jpg 2228w,"+
    "/images/backgrounds/people/people,w_2729.jpg 2729w,"+
    "/images/backgrounds/people/people,w_2723.jpg 2723w,"+
    "/images/backgrounds/people/people,w_3840.jpg 3840w"
</script>

<Section id="people" {srcset}>
  <div class={wrapper}>
    <SectionTitle>
      團隊
    </SectionTitle>

    <div class={cards}>
      {#each people as person}
        <PersonCard {person} />
      {/each}
    </div>
  </div>
</Section>
