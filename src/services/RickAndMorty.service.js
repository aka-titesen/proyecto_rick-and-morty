import { API_RM } from './../constants/Api.constants';

/**
 * Clase de servicio que se encarga de comunicarse con la api y retornar los datos
 * ? 1) getAllCharacter se encarga de traer todos los peronajes y retornarlos en formato JSON
 * ? 2) getCharacterById se encarga de traer un personaje en base a un id pasado por parámetro
 */

class RickAndMortyService {
    async getAllCharacters(){
        const responde = await fetch(API_RM.CHARACTERS());
        return responde.json();
    }

    async getCharacterById(id){
        const responde = await fetch(API_RM.CHARACTER_BY_ID(id));
        return responde.json();
    }
}

export default new RickAndMortyService();