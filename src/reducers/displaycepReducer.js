const INITIAL_STATE = { erro:false, consulta: null, loading:false }

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'DISPLAY_CEP':
            return { ...state, consulta: action.payload}
        case 'DISPLAY_ERROR':
            return { ...state, erro: true }
        case 'CLEAN_ERROR':
            return {...state, erro:false }
        case 'LOADING_TOGGLE':
            return {...state, loading:!this.state.loading }
        default:
            return state
    }
}