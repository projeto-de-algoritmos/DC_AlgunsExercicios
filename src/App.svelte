<script lang="ts">
  import PointView from "./compoenents/PointView.svelte";
  import PointsContainer from "./compoenents/PointsContainer.svelte";

  type Point = {
    x: number;
    y: number;
  };

  const points: Point[] = [];

  for (let i = 0; i < 8; i++) {
    points.push({
      x: Math.trunc(Math.random() * 100),
      y: Math.trunc(Math.random() * 100),
    });
  }

</script>

<main>
  <h1>Jogo do Par de Pontos mais Próximos </h1>

  <PointsContainer>
    {#each points as p, i}
      <PointView id={i} x={p.x} y={p.y} />
    {/each}
  </PointsContainer>
</main>

<style>
</style>
