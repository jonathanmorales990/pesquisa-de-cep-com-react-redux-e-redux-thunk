import axios from 'axios';

export function displayError() {
    return { type: 'DISPLAY_ERROR' }
}

export function buscaCep(data){
   
    let url = `http://viacep.com.br/ws/${data}/json/`;

    return function (dispatch) {
        
        dispatch({
            type:'LOADING'
        });

        axios.get(url)
            .then((response) => {

                dispatch({

                    type:'DISPLAY_CEP', 
                    payload: response.data

                });

            }).catch((error) => { 

                dispatch({

                    type: 'DISPLAY_ERROR'
            
                });
            })
    }
}