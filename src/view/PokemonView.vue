<template>
  <ImagenPokemon/>
  <MensajePokemon/>
</template>

<script>
import ImagenPokemon from '@/components/ImagenPokemon.vue'
import MensajePokemon from '@/components/MensajePokemon.vue'
export default {
    name: 'PokemonView',
    components: {
        ImagenPokemon,
        MensajePokemon,
    },
    data() {
        return {
        pokemon: {
            nombre: 'Pikachu',
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
            mensaje: '¡Pikachu te saluda!'
        }
        }
    },
    methods: {
        obtenerImagen() {
        return this.pokemon.imagen;
        }
    }

}
</script>

<style>

</style>