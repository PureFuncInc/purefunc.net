<script lang="ts">
  import {card, cardTitle, cardAvatar, cardContent, avatarImage} from "./PersonCard.css";
  import type {Person} from '../People.content';

  export let person: Person
</script>

<div class={card}>
  <div class={cardAvatar}>
    {#if person.imageUrl}
      <img alt="avatar" class={avatarImage} src={person.imageUrl} />
    {/if}
  </div>

  <div class={cardTitle}>
    <h2>{person.name.mandarin}</h2>
    <h3>{person.name.english}</h3>

    <h5>{person.title}</h5>
  </div>

  <div class={cardContent}>
    <dl>
      <dt>
        專長
      </dt>

      <dd>
        {person.expertise}
      </dd>
    </dl>
  </div>
</div>
