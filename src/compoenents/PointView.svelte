<script lang="ts">
    export let x = 0;
    export let y = 0;
    export let id = 0;
    export let width = 4;
    export let height = 4;

    // div handlers
    // on:click={() => console.log("fui clicado", id)}
    // on:keydown={() => {}}
</script>

<div
    class="point"
    style:width="{width}px"
    style:height="{height}px"
    style:top="{x}%"
    style:left="{y}%"
/>

<style>
    .point {
        position: absolute;
        border-radius: 50%;
        border: 2px solid grey;
        background: white;
    }
</style>
