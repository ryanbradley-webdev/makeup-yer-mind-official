import { NextResponse } from "next/server";
import { getBlogById } from "@/lib/getBlogById";

interface Params {
    params: { id: string }
}

export async function GET(request: Request, { params }: Params) {
    const { id } = params

    try {
        const blog = await getBlogById(id)
        return NextResponse.json(blog)
    } catch (err) {
        return new NextResponse('error')
    }
}