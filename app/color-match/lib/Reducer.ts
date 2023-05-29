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
    completed: boolean
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
    completed: false
}

export const reducer = (state: ColorMatchFormData, action: Action) => {
    switch (action.type) {

        case 'change-first-name':
            return { ...state, firstName: action.payload }

        case 'change-last-name':
            return { ...state, lastName: action.payload }

        case 'change-email':
            return { ...state, email: action.payload }

        case 'change-referral':
            return { ...state, referral: action.payload }

        case 'change-vein-color':
            return { ...state, veinColor: action.payload }

        case 'change-coverage':
            return { ...state, coverage: action.payload }

        case 'change-cart':
            return { ...state, customCart: action.payload }

        case 'change-address':
            return { ...state, address: action.payload }

        case 'change-phone':
            return { ...state, phone: action.payload }

        default:
            return state
    }
}