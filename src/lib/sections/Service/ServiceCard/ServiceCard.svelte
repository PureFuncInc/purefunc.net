<script lang="ts">
  import type { Service } from '../Service.content'
  import { card, cardTitle } from './ServiceCard.css'

  export let service: Service
</script>

<div class={card}>
  <h3 class={cardTitle}>
    {service.name}
  </h3>
</div>
