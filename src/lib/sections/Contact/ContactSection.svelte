<script lang="ts">
  import Section from '$lib/components/Section/Section.svelte';
  import SectionTitle from "$lib/components/SectionTitle/SectionTitle.svelte";
  import ContactBg from '$lib/assets/images/backgrounds/contact.jpg';
  import {wrapper, ul, li, link, icon} from './ContactSection.css';
  import {contacts} from './Contact.content';
  import Fa from "svelte-fa/src/fa.svelte";
</script>

<Section id="contact" src={ContactBg}>
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
