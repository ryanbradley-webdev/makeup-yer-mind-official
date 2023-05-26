import { NextResponse } from "next/server";
import { getAllLooks } from "@/lib/getAllLooks";

export async function GET(request: Request) {
    const looks = await getAllLooks()

    try {
        return NextResponse.json({ looks })
    } catch (err) {
        return new NextResponse('failed')
    }
}