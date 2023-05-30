import { DocumentData } from "firebase/firestore"

export const dataIsBlog = (data: DocumentData): data is Blog => {
    return data.docType === 'blog'
}

export const dataIsLook = (data: DocumentData): data is Look => {
    return data.docType === 'look'
}

export const dataIsPromo = (data: DocumentData): data is Promo => {
    return data.docType === 'promotion'
}

export const dataIsComment = (data: DocumentData): data is UserComment => {
    return data.docType === 'comment'
}