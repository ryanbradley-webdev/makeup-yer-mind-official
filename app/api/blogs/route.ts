import { NextResponse } from "next/server";
import { SAMPLE_BLOGS } from "@/app/blogs/sampleBlogs";

export function GET(request: Request) {
    return NextResponse.json({ data: SAMPLE_BLOGS })
}