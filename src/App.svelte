<script lang="ts">
  import { onMount } from "svelte";
  import {
    Point,
    type ClosestPair,
    getClosestPair,
    distance,
  } from "./closestPairOfPoints";
  import PointView from "./compoenents/PointView.svelte";
  import PointsContainer from "./compoenents/PointsContainer.svelte";
  import { dateToFormattedString } from "./time";

  const height = 300;
  const width = 500;
  const paddingH = 15;
  const paddingV = 15;
  const maxNumberOfPoints = 5;
  const initialNumberOfPoints = 5;

  let mountDate: Date = new Date();
  let numberOfPoints = initialNumberOfPoints;
  let points: Point[] = [];
  let realClosestPair: ClosestPair = {
    distance: 0,
    pair: { p1: new Point(0, 0), p2: new Point(0, 0) },
  };

  let timerStr = "0h0m0s0ms";
  let listOfTimes: Date[] = [];

  let selectedPoints: Point[] = [];

  function generatePoints(numberOfPoints: number) {
    points = [];

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
    if (selectedPoints.find((p) => p.x === point.x && p.y === point.y)) {
      console.log("Ponto", point, "clicado pela segunda vez!");
      selectedPoints.filter((p) => p.x !== point.x && p.y !== point.y);
      console.log("Ponto", point, "removido");
      return;
    }

    selectedPoints.push(point);

    if (selectedPoints.length == 1) {
      console.log("Selecionou 1o ponto");
    } else if (selectedPoints.length == 2) {
      console.log("Selecionou 2o ponto");

      const selectedPointsDistance = distance(
        selectedPoints[0],
        selectedPoints[1]
      );
      // console.log({selectedPointsDistance, realDist: realClosestPair.distance});

      if (selectedPointsDistance <= realClosestPair.distance) {
        console.log("Acertou miseravi");
        numberOfPoints++;
        generatePoints(numberOfPoints);
        selectedPoints = [];

        const now = new Date().getTime();
        const diff = new Date(now - mountDate.getTime());
        listOfTimes.push(diff);
        listOfTimes = listOfTimes;

        console.log(points.length, maxNumberOfPoints)
        if (points.length >= maxNumberOfPoints) {
          console.log("Você venceu!");
          alert(
            "Parabéns, você venceu o jogo em " +
              dateToFormattedString(listOfTimes.at(-1)) + "!"
          );
          numberOfPoints = initialNumberOfPoints;
        }
      } else {
        console.log("Errrouu!!!");
        selectedPoints = [];
      }
    } else {
      selectedPoints = [];
      console.log("Limpei");
    }
  }

  onMount(() => {
    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const diff = new Date(now - mountDate.getTime());
      timerStr = dateToFormattedString(diff);
    }, 10);

    return () => {
      clearInterval(timerInterval);
    };
  });
</script>

<main>
  <h1>Jogo do Par de Pontos mais Próximos</h1>

  <div>
    <aside>
      <p>
        Tempo: {timerStr}
      </p>

      <ul>
        {#each listOfTimes as t, i}
          <li>{i}: {dateToFormattedString(t)}</li>
        {/each}
      </ul>

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

  ul {
    display: flex;
    flex-direction: column-reverse;
  }

  li {
    list-style: none;
  }
</style>
