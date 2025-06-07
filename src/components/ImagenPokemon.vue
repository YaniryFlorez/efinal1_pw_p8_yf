<template>
    <div class="container">
        <div>
        <label for="Puntaje:">Puntaje: {{ puntaje }}</label>
        <label for="Intentos:">Intentos: {{ intentos }}</label>
        </div>
        <div class="imagenes">
            <div class="imagen-item">
                <img :src="imagenUrl1" alt="no se cargo la imagen" />
                <label>{{ nombre1 }}</label>
            </div>
            <div class="imagen-item">
                <img :src="imagenUrl2" alt="no se cargo la imagen" />
                <label>{{ nombre2 }}</label>
            </div>
            <div class="imagen-item">
                <img :src="imagenUrl3" alt="no se cargo la imagen" />
                <label>{{ nombre3 }}</label>
            </div>
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
            puntaje: 0,
            intentos: 5,
        };
    },
    methods: {
        async buscarPokemon() {
            
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.imagenes {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 40px;
    padding: 20px;
    margin: 50px;
}
.imagen-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}
label {
    font-size: 20px;
    color: #333;
    margin-top: 10px;
}
</style>