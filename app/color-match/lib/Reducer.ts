export type ColorMatchFormData = {
    firstName: string,
    lastName: string,
    email: string,
    referral: string,
    veinColor: string,
    coverage: string,
    selfie: string,
    customCart: boolean,
    address?: string,
    phone?: string,
    read: boolean,
    completed: boolean,
    docType: 'color-match'
}

export type Action = {
    type: string,
    payload: string | boolean
}

export const initialState: ColorMatchFormData = {
    firstName: '',
    lastName: '',
    email: '',
    referral: '',
    veinColor: '',
    coverage: '',
    selfie: '',
    customCart: false,
    address: '',
    phone: '',
    read: false,
    completed: false,
    docType: 'color-match'
}

export const reducer = (state: ColorMatchFormData, action: Action) => {
    switch (action.type) {

        case 'change-first-name':
            if (typeof action.payload === 'string') {
                return { ...state, firstName: action.payload }
            } else {
                return state
            }

        case 'change-last-name':
            if (typeof action.payload === 'string') {
                return { ...state, lastName: action.payload }
            } else {
                return state
            }

        case 'change-email':
            if (typeof action.payload === 'string') {
                return { ...state, email: action.payload }
            } else {
                return state
            }

        case 'change-referral':
            if (typeof action.payload === 'string') {
                return { ...state, referral: action.payload }
            } else {
                return state
            }

        case 'change-vein-color':
            if (typeof action.payload === 'string') {
                return { ...state, veinColor: action.payload }
            } else {
                return state
            }

        case 'change-coverage':
            if (typeof action.payload === 'string') {
                return { ...state, coverage: action.payload }
            } else {
                return state
            }

        case 'change-cart':
            if (typeof action.payload === 'boolean') {
                return { ...state, customCart: action.payload }
            } else {
                return state
            }

        case 'change-address':
            if (typeof action.payload === 'string') {
                return { ...state, address: action.payload }
            } else {
                return state
            }

        case 'change-phone':
            if (typeof action.payload === 'string') {
                return { ...state, phone: action.payload }
            } else {
                return state
            }

        default:
            return state
    }
}