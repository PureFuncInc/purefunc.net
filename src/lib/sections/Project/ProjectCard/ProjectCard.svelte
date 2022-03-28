<script lang="ts">
  import type { Project } from '../Project.content'
  import { card, cardTitle } from './ProjectCard.css'

  export let project: Project
</script>

<div class={card}>
  <h3 class={cardTitle}>
    {project.name}
  </h3>
</div>
