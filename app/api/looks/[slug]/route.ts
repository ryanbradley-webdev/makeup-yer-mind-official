import { NextResponse } from "next/server";
import { SAMPLE_LOOKS } from "@/app/looks/sampleLooks";

interface Params {
    params: { slug: string }
}

export async function GET(request: Request, { params }: Params) {
    const { slug } = params

    const look = SAMPLE_LOOKS.find(look => look.slug === slug)

    if (look) {
        return NextResponse.json(look)
    } else {
        return new NextResponse('No Look Found')
    }
}