import { storage } from "@/util/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const uploadImg = async (file: File) => {
    const { name } = file
    const imgRef = ref(storage, `/color-match-photos/${name}`)

    try {
        const res = await uploadBytes(imgRef, file)
        if (res) {
            const url = await getDownloadURL(imgRef)
            if (url) {
                return url
            } else {
                throw new Error()
            }
        } else {
            throw new Error()
        }
    } catch {
        throw new Error('upload failed')
    }
}