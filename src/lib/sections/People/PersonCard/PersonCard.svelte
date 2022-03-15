<script lang="ts">
  import {card, cardTitle} from "./PersonCard.css";
  import type {Person} from '../People.content';

  export let person: Person
</script>

<div class={card}>
  <div class={cardTitle}>
    <h3>{person?.name.mandarin}</h3>
    <h4>{person?.name.english}</h4>
  </div>
</div>
