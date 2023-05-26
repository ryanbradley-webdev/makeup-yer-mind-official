import { NextResponse } from "next/server";

type Params = {
    params: { formData: any }
}

export async function POST(request: Request, { params }: Params) {
    return new NextResponse('posted')
}