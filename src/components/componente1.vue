
<template>
  <div class="container">
    <div class="datos">
      <div class="imagen"> 
      <img
        :src="imgpokemon"
        alt="la imagen no se encontró"
        id="imagenPokemon"
      /></div>
  
      <label for="nombre">Nombre</label>
      <input type="text" v-model="nombre" />
    
    </div>
    <div class="butones">
   
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagenUrl1: "https://placehold.co/200x200/000000/000000.png",
      nombre1: "xxxxxxx",
      imgpokemon: "",
      nombre: "",
    };
  },
 

  };

</script>

<style scoped>

</style>