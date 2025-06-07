import axios from "axios";
 
const consumirAPI = async () => {
    const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/{idPokemon}`){ 
    
    return  respuesta.data;
} 


export const consumirAPIFachada = async () => {
    return await consumirAPI()
}
