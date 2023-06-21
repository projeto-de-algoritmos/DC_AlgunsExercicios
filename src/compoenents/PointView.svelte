<script lang="ts">
    import { Point } from "../closestPairOfPoints";

    export let point = new Point(0, 0)
    export let id = 0;
    export let radius = 9;
    export let handleClick: (point: Point) => void

    let width = radius;
    let height = radius;
</script>

<div
    id="point-{id}"
    class="point"
    style:width="{width}px"
    style:height="{height}px"
    style:left="{point.x - radius}px"
    style:top="{point.y - radius}px"
    on:click={() => handleClick(point)}
    on:keydown={() => {}}
/>

<style>
    .point {
        position: absolute;
        border-radius: 50%;
        border: 3px solid grey;
        background: white;
        transform: scale(1.0);
        /* transition: x ease-in-out 0.2s, y ease-in-out 0.2s, scale ease-in-out 0.1s; */
        transition: all ease-in-out 0.3s;
    }

    .point:hover {
        transform: scale(1.3);
    }
</style>
