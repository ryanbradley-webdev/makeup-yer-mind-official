import { NextResponse } from "next/server";
import { getLookById } from "@/lib/getLookById";

interface Params {
    params: { id: string }
}

export async function GET(request: Request, { params }: Params) {
    const { id } = params

    try {
        const look = await getLookById(id)
        return NextResponse.json(look)
    } catch (err) {
        return new NextResponse('error')
    }
}