export type InitStateType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingACType): InitStateType => { // fix any
    switch (action.type) {
        case 'LOADING-ON': {
            return {...state, isLoading: true}
        }

        case 'LOADING-OFF': {
            return {...state, isLoading: false}
        }
        default: return state
    }
}

export const loadingOnAC = () => {
    return {
        type: "LOADING-ON"
    } as const
} // fix any

export const loadingOffAC = () => {
    return {
        type: "LOADING-OFF"
    } as const
} // fix any



type LoadingACType = ReturnType<typeof loadingOnAC> | ReturnType<typeof loadingOffAC>