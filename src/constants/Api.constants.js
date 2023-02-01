/** 
 * * A P I  D E  R I C K  A N D  M O R T Y
 * * Constante que se encarga de comunicarse con el api de rick and morty
 */
export const API_RM = { //? Objeto
    URL: "https://rickandmortyapi.com/api",

    CHARACTERS: function(){ //Método que que trae todos los personajes
        return `${this.URL}/character` //? Concatena la url con la direccion donde estan los personajes
    },
    
    CHARACTER_BY_ID: function(id){ //Método que que trae un personaje en base a un id que le mandamo
        return `${this.URL}/character/${id}` //? Concatena la url con la direccion donde puedo conseguir un personaje mediante su id
    }
} 