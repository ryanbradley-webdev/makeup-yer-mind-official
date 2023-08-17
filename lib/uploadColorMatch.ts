import { firestore } from "@/util/firebase";
import { collection, doc, setDoc } from "firebase/firestore";

export const uploadColorMatch = async (formData: ColorMatch) => {
    const docRef = doc(collection(firestore, 'color-matches'))

    await setDoc(docRef, formData)

    try {
        const colorMatchMsg = {
            name: 'Makeup Yer Mind',
            email: formData.email,
            subject: 'New Makeup Consultation Requet',
            message: 'Someone requested a makeup consultation! Their information can be found on your dashboard.'
        }

        await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(formData)
        })

        return
    } catch {
        return
    }
}