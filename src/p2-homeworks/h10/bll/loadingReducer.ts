export type InitStateType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingACType): InitStateType => { // fix any
    switch (action.type) {
        case 'loadingOn': {
            return {...state, isLoading: true}
        }

        case 'loadingOff': {
            return {...state, isLoading: false}
        }
        default: return state
    }
}

export const loadingOnAC = () => {
    return {
        type: "loadingOn"
    } as const
} // fix any

export const loadingOffAC = () => {
    return {
        type: "loadingOff"
    } as const
} // fix any



type LoadingACType = ReturnType<typeof loadingOnAC> | ReturnType<typeof loadingOffAC>