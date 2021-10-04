import {ActionType, UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'sort':
            let stateCopy = [...state].sort((a,b) => {
                if (a.name < b.name) {
                    return -100
                } else if (a.name > b.name) {
                    return 100
                } else return 0
            })
            return action.payload === "up" ? stateCopy : stateCopy.reverse()

        case 'check' :
            return state.filter(u => u.age > action.payload)

        default:
            return state
    }
}