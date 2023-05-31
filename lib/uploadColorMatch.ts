import { firestore } from "@/util/firebase";
import { collection, doc, setDoc } from "firebase/firestore";

export const uploadColorMatch = async (formData: ColorMatch) => {
    const docRef = doc(collection(firestore, 'color-matches'))

    return await setDoc(docRef, formData)
}