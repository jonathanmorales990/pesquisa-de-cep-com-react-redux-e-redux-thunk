const INITIAL_STATE = { erro:false, consulta: null, loading:false, erroMessage:'O CEP é inválido ou não existe' }

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
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