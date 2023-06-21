<script lang="ts">
    import { onMount } from "svelte";

    export let numberOfPoints = 0;
    export let width = 500;
    export let height = 500;

    let container: HTMLDivElement;
    let text = "";

    type WithTarget<Event, Target> = Event & { currentTarget: Target };

    function handleClick(event: WithTarget<MouseEvent, HTMLDivElement>) {
        // FIXME: x e y são valore sabsolutos em pixeis. PointView usa
        // valores relativos
        // const rect = event.target.getBoundingClientRect();
        const rect = container.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        text = `${x}, ${y}`;
    }

    onMount(() => {
        container = document.querySelector(".points-container")!;
    });
</script>

<div>
    <p>
        N° de Pontos: {numberOfPoints}
        <!-- | Clicado {text} -->
    </p>
    <div
        class="points-container"
        on:click={handleClick}
        on:keydown={() => {}}
        style:height="{height}px"
        style:width="{width}px"
    >
        <slot />
    </div>
</div>

<style>
    .points-container {
        position: relative;
        border: 1px solid grey;
        border-radius: 8px;
    }
</style>
