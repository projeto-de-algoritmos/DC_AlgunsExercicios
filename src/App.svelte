<script lang="ts">
  import PointView from "./compoenents/PointView.svelte";
  import PointsContainer from "./compoenents/PointsContainer.svelte";

  const height = 300;
  const width = 500;
  const paddingH = 15;
  const paddingV = 15;
  let numberOfPoints = 15;

  type Point = {
    x: number;
    y: number;
  };

  const points: Point[] = [];
  console.clear()

  for (let i = 0; i < numberOfPoints; i++) {
    points.push({
      x: paddingH + Math.trunc(Math.random() * (width - 2 * paddingH)),
      y: paddingV + Math.trunc(Math.random() * (height - 2 * paddingV)),
      // x: 15,
      // y: 15,
    });
  }
</script>

<main>
  <h1>Jogo do Par de Pontos mais Próximos</h1>

  <div>
    <aside>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, non ullam.</p>
      
      <p>Leia as instruções do jogo 
        <a href="https://github.com/projeto-de-algoritmos/DC_ParDePontos">
          aqui
        </a>.
      </p>
    </aside>
  
    <PointsContainer {height} {width}>
      {#each points as p, i}
        <PointView id={i} x={p.x} y={p.y} />
      {/each}
    </PointsContainer>
  </div>

</main>

<style>
  div {
    display: flex;
    justify-content: space-between;
  }
</style>
