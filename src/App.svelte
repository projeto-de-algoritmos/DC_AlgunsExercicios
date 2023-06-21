<script lang="ts">
  import {
    Point,
    type ClosestPair,
    getClosestPair,
    distance,
  } from "./closestPairOfPoints";
  import PointView from "./compoenents/PointView.svelte";
  import PointsContainer from "./compoenents/PointsContainer.svelte";

  const height = 300;
  const width = 500;
  const paddingH = 15;
  const paddingV = 15;

  const maxNumberOfPoints = 15;
  let numberOfPoints = 4;
  let points: Point[] = [];
  let realClosestPair: ClosestPair = {
    distance: 0,
    pair: { p1: new Point(0, 0), p2: new Point(0, 0) },
  };

  let selectedPoints: Point[] = [];

  function generatePoints(numberOfPoints: number) {
    const p: Point[] = [];
    points = []

    for (let i = 0; i < numberOfPoints; i++) {
      points.push({
        x: paddingH + Math.trunc(Math.random() * (width - 2 * paddingH)),
        y: paddingV + Math.trunc(Math.random() * (height - 2 * paddingV)),
        // x: 15,
        // y: 15,
      });
    }

    realClosestPair = getClosestPair(points);
  }

  generatePoints(numberOfPoints);

  function handleClick(point: Point) {
    selectedPoints.push(point);

    if (selectedPoints.length == 1) {
      console.log("Selecionou um ponto");
    } else if (selectedPoints.length == 2) {
      console.log("Selecionou segundo ponto");

      const selectedPointsDistance = distance(
        selectedPoints[0],
        selectedPoints[1]
      );
      // console.log({selectedPointsDistance, realDist: realClosestPair.distance});
      
      if (selectedPointsDistance <= realClosestPair.distance) {
        console.log("Acertou miseravi");
        numberOfPoints++
        generatePoints(numberOfPoints)
        selectedPoints = []
      } else {
        console.log("Errrouu!!!");
        selectedPoints = [];
      }
    } else {
      selectedPoints = [];
      console.log("Limpei");
    }
  }
</script>

<main>
  <h1>Jogo do Par de Pontos mais Próximos</h1>

  <div>
    <aside>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, non
        ullam.
      </p>

      <p>
        Leia as instruções do jogo
        <a href="https://github.com/projeto-de-algoritmos/DC_ParDePontos">
          aqui
        </a>.
      </p>
    </aside>

    <PointsContainer {height} {width} {numberOfPoints}>
      {#each points as p, i}
        <PointView id={i} point={p} {handleClick} />
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
