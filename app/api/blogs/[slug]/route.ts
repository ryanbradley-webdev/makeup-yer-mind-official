import { NextResponse } from "next/server";
import { SAMPLE_BLOGS } from "@/app/blogs/sampleBlogs";

interface Params {
    params: { slug: string }
}

export async function GET(request: Request, { params }: Params) {
    const { slug } = params

    const blog = SAMPLE_BLOGS.find(blog => blog.slug === slug)

    if (blog) {
        return NextResponse.json(blog)
    } else {
        return new NextResponse('No Blog Found')
    }
}