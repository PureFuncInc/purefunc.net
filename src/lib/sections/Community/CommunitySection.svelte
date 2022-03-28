<script lang="ts">
  import Section from "$lib/components/Section/Section.svelte";
  import SectionTitle from '$lib/components/SectionTitle/SectionTitle.svelte';
  import CommunityBg from '$lib/assets/images/backgrounds/community.jpg';
  import {Splide, SplideSlide} from '@splidejs/svelte-splide';
  import { wrapper, image } from './CommunitySection.css';

  const options = {
    width: '100vw',
  }
</script>

<Section id="community" src={CommunityBg}>
  <div class={wrapper}>
    <SectionTitle>
      社群
    </SectionTitle>

    <Splide {options}>
      <SplideSlide>
        <img class={image} alt="PureFunc Cafe" src="/images/purefunc_cafe.png" />
      </SplideSlide>
    </Splide>
  </div>
</Section>
