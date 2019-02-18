const INITIAL_STATE = { 
    erro:false, 
    consulta: null, 
    loading:false, 
    cep:'',
    erroMessage:'O CEP é inválido ou não existe' 
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'ON_CHANGE_CEP_INPUT':
            return { ...state, cep: action.payload}
        case 'DISPLAY_CEP':
            return { ...state, consulta: action.payload, loading:false}
        case 'DISPLAY_ERROR':
            return { ...state, erro: true, loading:false }
        case 'LOADING':
            return {...state, loading:true, erro:false, consulta:null }
        default:
            return state
    }
}