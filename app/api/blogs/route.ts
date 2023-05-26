import { NextResponse } from "next/server";
import { getAllBlogs } from "@/lib/getAllBlogs";

export async function GET(request: Request) {
    const blogs = await getAllBlogs()

    try {
        return NextResponse.json({ blogs })
    } catch (err) {
        return new NextResponse('failed')
    }
}