<template>
  <div class="container">
    <div class="imgenes">
      <img :src="imagenUrl1" alt="no se cargo la imagen" />
      <label for="nombre1">xxxxxxx</label>
      <img :src="imagenUrl1" alt="no se cargo la imagen" />
      <label for="nombre1">xxxxxxx</label>
      <img :src="imagenUrl1" alt="no se cargo la imagen" />
      <label for="nombre1">xxxxxxx</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagenUrl1: "https://placehold.co/200x200/000000/000000.png",
      nombre1: "xxxxxxx",
      imagenUrl2: "https://placehold.co/200x200/000000/000000.png",
      nombre2: "xxxxxxx",
      imagenUrl3: "https://placehold.co/200x200/000000/000000.png",
      nombre3: "xxxxxxx",
    };
  },
};
</script>

<style>
</style>