<script lang="ts">
  import Section from '$lib/components/Section/Section.svelte';
  import {wrapper, ul, li, link, icon} from './ContactSection.css';
  import {contacts} from './ContactSection.content';
  import Fa from "svelte-fa/src/fa.svelte";
  import SectionTitle from "$lib/components/SectionTitle/SectionTitle.svelte";

  const srcset = "/images/backgrounds/contact/contact,w_768.jpg 768w," +
    "/images/backgrounds/contact/contact,w_1947.jpg 1947w," +
    "/images/backgrounds/contact/contact,w_2488.jpg 2488w," +
    "/images/backgrounds/contact/contact,w_2825.jpg 2825w," +
    "/images/backgrounds/contact/contact,w_3338.jpg 3338w," +
    "/images/backgrounds/contact/contact,w_3840.jpg 3840w"
</script>

<Section id="contact" {srcset}>
  <div class={wrapper}>
    <SectionTitle>
      聯絡我們
    </SectionTitle>

    <ul class={ul}>
      {#each contacts as contact}
        <li class={li}>
          <a class={link} target="_blank" href={contact.href}>
            <Fa class={icon} size="2x" icon={contact.icon}/>
            <div>{contact.key.toUpperCase()}</div>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</Section>
