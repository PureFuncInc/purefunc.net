<script lang="ts">
  import VideoSection from "$lib/components/Section/VideoSection.svelte";
  import PersonCard from "./PersonCard/PersonCard.svelte";
  import { people } from './People.content';
  import { cards, title, wrapper } from "./PeopleSection.css";
</script>

<VideoSection video="video/people_stub.mp4">
  <div class={wrapper}>
    <h1 class={title}>People</h1>

    <div class={cards}>
      {#each people as person}
        <PersonCard {person} />
      {/each}
    </div>
  </div>
</VideoSection>
