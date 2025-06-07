<template>
    <div class="container">
        
   
    <div class="container">
        <p class="perder" v-show="perder">Ha utilizado tus 5 intentos, El juego a Terminado, intentelo otra vez</p>
        <p class="ganar" v-show="ganar">felicidades has ganado un premio de $10000</p>
    </div>
    <div class="butones">
        <button @click="jugar()">Jugar</button>
    </div>
    </div>
</template>

<script>
export default {
        data() {
                return {
                        puntaje: 0,
                        intentos: 5,
                        perder: true,
                        ganar: true,
                };
        },
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 32px;
 
    font-size: 20px;    
    font-weight: bold;
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
}
.perder {
    color: red;
    font-size: 24px;
    font-weight: bold;
}
.ganar {
    color: blue;
    font-size: 24px;
    font-weight: bold;
}
.butones {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
</style>