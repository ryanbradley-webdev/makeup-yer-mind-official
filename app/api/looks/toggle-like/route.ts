import { NextResponse } from "next/server";
import { firestore } from "@/util/firebase";
import { updateDoc, doc } from "firebase/firestore";

export async function PATCH(request: Request) {
    const { id, likes, isLiked } = await request.json()

    if (!id || isLiked == undefined) {
        return NextResponse.json({
            message: 'Missing data'
        }, {
            status: 400
        })
    }

    try {
        const lookRef = doc(firestore, 'looks', id)

        const newLikes = isLiked ? likes - 1 : likes + 1

        await updateDoc(lookRef, {
            likes: newLikes
        })

        return NextResponse.json({
            message: 'Likes updated'
        }, {
            status: 200
        })
    } catch {
        return NextResponse.error()
    }
}