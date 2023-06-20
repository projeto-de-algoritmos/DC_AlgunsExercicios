<script lang="ts">
    // FIXME: x e y são valores percentuais
    export let x = 0;
    export let y = 0;
    export let id = 0;
    export let radius = 5;
    let width = radius;
    let height = radius;
</script>

<div
    class="point"
    style:width="{width}px"
    style:height="{height}px"
    style:left="{x - radius}px"
    style:top="{y - radius}px"
    on:click={() => console.log("Ponto", id, x, y)}
    on:keydown={() => {}}
/>

<style>
    .point {
        position: absolute;
        border-radius: 50%;
        border: 2px solid grey;
        background: white;
    }
</style>
