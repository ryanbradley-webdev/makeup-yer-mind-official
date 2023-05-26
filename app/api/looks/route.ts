import { NextResponse } from "next/server";
import { SAMPLE_LOOKS } from "@/app/looks/sampleLooks";

export function GET(request: Request) {
    return NextResponse.json({ data: SAMPLE_LOOKS })
}