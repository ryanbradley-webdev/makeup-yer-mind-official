import { ColorMatchFormData } from "@/app/color-match/lib/Reducer";
import { firestore } from "@/util/firebase";
import { collection, doc, setDoc } from "firebase/firestore";

export const uploadColorMatchForm = async (formData: ColorMatchFormData) => {
    const docRef = doc(collection(firestore, 'color-matches'))

    return await setDoc(docRef, formData)
}