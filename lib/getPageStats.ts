import { firestore } from "@/util/firebase"
import { doc, getDoc } from "firebase/firestore"
import { dataIsBlog, dataIsLook } from "./typeCheck"

export const getPageStats = async (id: string, docType: string) => {
    const stats = {
        likes: 0,
        views: 0
    }
    
    try {
        const docRef = doc(firestore, `${docType}s`, id)

        const docData = (await getDoc(docRef)).data()

        if (!docData) {
            return stats
        }

        if (dataIsBlog(docData) || dataIsLook(docData)) {
            stats.likes = docData.likes
            stats.views = docData.views
        }

        return stats
    } catch {
        return stats
    }
}