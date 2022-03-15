<script lang="ts">
  import Section from "$lib/components/Section/Section.svelte";
  import {Slidy} from "svelte-slidy";
  import {wrapper} from "./ServiceSection.css";

  const slides = [
    {
      id: 1,
      src: 'https://loremflickr.com/500/500/',
      caption: '',
    },
    {
      id: 2,
      src: 'https://loremflickr.com/501/501/',
      caption: '',
    },
    {
      id: 3,
      src: 'https://loremflickr.com/502/501/',
      caption: '',
    },
    {
      id: 4,
      src: 'https://loremflickr.com/501/502/',
      caption: '',
    },
    {
      id: 5,
      src: 'https://loremflickr.com/503/501/',
      caption: '',
    },
  ]

  const options = {
    wrap: {
      id: "slidy-wrap",
      width: "100%",
      height: "100%",
      padding: "0",
      align: "middle",
      alignmargin: 50,
    },
    slide: {
      gap: 10,
      class: "",
      width: "85%",
      height: "100%",
      backimg: true,
      imgsrckey: "src",
      objectfit: "cover",
      overflow: "hidden",
    },
    controls: {
      dots: false,
      dotsnum: false,
      dotsarrow: false,
      dotspure: false,
      arrows: false,
      keys: true,
      drag: true,
      wheel: true,
    },
  }
</script>

<Section image="https://loremflickr.com/1600/900">
  <div class={wrapper}>
    <Slidy {slides} {...options} />
  </div>
</Section>
