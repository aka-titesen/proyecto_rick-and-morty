import { useState } from 'react';

export const useUserForm = (initialState = {}) => {

    const [form, setform] = useState(initialState);

    /*
    * Ésta función se encargará de escuchar cambios. Estará siempre a la escucha de cambios, 
    * atrapará a quien la llame, "target" vendría a ser el input que llama a handleChanges
    */
    const handleChanges = ({ target }) => { //Va a capturar el input que lo llamé, "target" hace referencia al input capturado

        const { name, value } = target; //Desestructuro target para obtener nombre y valor
        //? Con setform genero un json que voy a ir guardando en la variable form
        setform(
            {
                ...form,
                [name]: value

            }
        )
    }
    return{ //Éste return devuelve éstos parámetros cuando se llama a useUserForm
        form, setform, handleChanges,
    }
}