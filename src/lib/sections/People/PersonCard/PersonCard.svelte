<script lang="ts">
  import {card, cardTitle, cardAvatar, cardContent, avatarImage, headline, story, detailList, detailTitle, detailContent, title, mandarinName, englishName} from "./PersonCard.css";
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
    <h2 class={mandarinName}>{person.name.mandarin}</h2>
    <h3 class={englishName}>{person.name.english}</h3>

    <h5 class={title}>{person.title}</h5>

    <h4 class={headline}>{person.headline}</h4>
  </div>

  <div class={cardContent}>
    <p class={story}>
      {person.story}
    </p>

    <dl class={detailList}>
      <dt class={detailTitle}>
        專長
      </dt>

      {#each person.expertise as expertise}
        <dd class={detailContent}>
          {expertise}
        </dd>
      {/each}

      <dt class={detailTitle}>
        成就
      </dt>

      {#each person.achievements as achievement}
        <dd class={detailContent}>
          {achievement}
        </dd>
      {/each}
    </dl>
  </div>
</div>
