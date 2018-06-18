import axios from 'axios';

export function displayError() {
    return { type: 'DISPLAY_ERROR' }
}
export function cleanError() {
    return { type: 'CLEAN_ERROR' }
}
export function buscaCep(data){
   
    let url = `http://viacep.com.br/ws/${data}/json/`;

    return function (dispatch) {
        
        dispatch({
            type:'DISPLAY_ERROR'
        });

        axios.get(url)
            .then((response) => {

                dispatch({

                    type:'DISPLAY_CEP', 
                    payload: response.data

                });

            }).catch((response) => dispatch({

                type: 'DISPLAY_ERROR'
            
            }))
    }
}