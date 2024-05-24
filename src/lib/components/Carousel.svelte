<script>
  import { onMount } from 'svelte';
  import { quintInOut, quintOut } from 'svelte/easing';
  import { fade } from 'svelte/transition';

  let currentIndex = 0;

  export let images = [];

  const next = () => {
    currentIndex = (currentIndex + 1) % images.length;
  }

  const prev = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  let interval;

  onMount(() => {
    interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  })

</script>

<div class="carousel">
  <div class="images" style="transform: translateX(-{currentIndex * 38}rem);">
    {#each images as image, index (index)}
      <img src={image} alt="Carousel Image {index + 1}" class="image" transition:slide />
    {/each}
  </div>
  <div class="indicators">
    {#each images as _, index}
      <div class="indicator" class:active={index === currentIndex} on:click={() => currentIndex = index}></div>
    {/each}
  </div>
</div>

<style>
    @import '../css/Carousel.css';
</style>