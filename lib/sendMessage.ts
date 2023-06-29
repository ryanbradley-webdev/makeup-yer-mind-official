import { firestore } from "@/util/firebase";
import { collection, addDoc, DocumentReference, FieldValue } from "firebase/firestore";

export type quickMessage = {
    name: string,
    content: string,
    read: boolean,
    sentAt: FieldValue,
    docType: 'message'
}

export const sendMessage = async (msg: quickMessage): Promise<DocumentReference> => {
    const messagesRef = collection(firestore, 'messages')

    try {
        return await addDoc(messagesRef, msg)
    } catch {
        throw new Error('Error sending message')
    }
}