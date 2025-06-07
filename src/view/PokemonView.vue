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

}
</script>

<style>

</style>