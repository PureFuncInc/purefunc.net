<script lang="ts">
  import Section from "$lib/components/Section/Section.svelte";
  import SectionTitle from "$lib/components/SectionTitle/SectionTitle.svelte";
  import {Slidy} from "svelte-slidy";
  import {wrapper, caption} from "./ServiceSection.css";

  const slides = [
    {
      id: 1,
      src: '/images/placeholder.png',
      caption: '系統接案',
    },
    {
      id: 2,
      src: '/images/placeholder.png',
      caption: '訓練及課程',
    },
    {
      id: 3,
      src: '/images/placeholder.png',
      caption: '社群發展',
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
      height: "100%",
      width: '100%',
      backimg: true,
      imgsrckey: "src",
      objectfit: "contain",
      overflow: "hidden",
    },
    controls: {
      dots: true,
      dotsnum: false,
      dotsarrow: false,
      dotspure: true,
      arrows: false,
      keys: true,
      drag: true,
      wheel: true,
    },
  }

  const srcset = "/images/backgrounds/service/service,w_768.jpg 768w," +
    "/images/backgrounds/service/service,w_1453.jpg 1453w," +
    "/images/backgrounds/service/service,w_1923.jpg 1923w," +
    "/images/backgrounds/service/service,w_2394.jpg 2394w," +
    "/images/backgrounds/service/service,w_2890.jpg 2890w," +
    "/images/backgrounds/service/service,w_3000.jpg 3000w"
</script>

<Section id="service" {srcset}>
  <div class={wrapper}>
    <SectionTitle>
      服務
    </SectionTitle>

    <Slidy {slides} {...options} let:item>
      <figure class={caption}>
        <figcaption>
          {item.caption}
        </figcaption>
      </figure>
    </Slidy>
  </div>
</Section>
