
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
      <button @click="buscarCandidato()">Buscar</button>
      <button @click="agregarCandidato()">Agregar</button>
    </div>
  </div>
</template>

<script>
import { consumirAPIFachada } from "@/cliente/candidatoCliente.js";
export default {
  data() {
    return {
      imagenUrl1: "https://placehold.co/200x200/000000/000000.png",
      nombre1: "xxxxxxx",
      imgpokemon: "",
      nombre: "",
    };
  },
  methods: {
    async buscarPokemon() {
      const data = await consumirAPIFachada();
      const pokemons = data.results[0];

      this.imgpokemon = 
      this.nombre = candidatosApi.name.first;
     
    },

    },
  };

</script>

<style scoped>

</style>