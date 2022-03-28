<script lang="ts">
  import Section from '$lib/components/Section/Section.svelte';
  import SectionTitle from '$lib/components/SectionTitle/SectionTitle.svelte';
  import ServiceBg from '$lib/assets/images/backgrounds/service.jpg';
  import ServiceCard from './ServiceCard/ServiceCard.svelte';
  import {Splide, SplideSlide} from '@splidejs/svelte-splide';
  import {services} from './Service.content';
  import {wrapper} from './ServiceSection.css';

  const options = {
    width: '100vw',
    gap: '6rem',
    padding: '6rem',
  }
</script>

<Section id="service" src={ServiceBg}>
  <div class={wrapper}>
    <SectionTitle>
      服務
    </SectionTitle>

    <Splide {options}>
      {#each services as service}
        <SplideSlide>
          <ServiceCard {service} />
        </SplideSlide>
      {/each}
    </Splide>
  </div>
</Section>
