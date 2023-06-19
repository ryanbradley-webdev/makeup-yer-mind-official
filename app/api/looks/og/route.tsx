/* eslint-disable @next/next/no-img-element */

import { getLookBySlug } from "@/lib/getLookBySlug";
import { ImageResponse, NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)

        const slug = searchParams.get('slug')

        if (!slug) {
            return NextResponse.json({
                error: 'No Image'
            }, {
                status: 400
            })
        }

        const look = await getLookBySlug(slug)

        if (!look) {
            return NextResponse.json({
                error: 'Look not found'
            }, {
                status: 404
            })
        }

        return new ImageResponse(
            (
                <div
                    style={{
                        height: '630px',
                        width: '1200px',
                        display: 'flex'
                    }}
                >
                    <img
                        src={look.image1}
                        alt=""
                        width={600}
                        height={630}
                        style={{
                            objectFit: 'cover'
                        }}
                    />
                    <img
                        src={look.image2}
                        alt=""
                        width={600}
                        height={630}
                        style={{
                            objectFit: 'cover'
                        }}
                    />
                </div>
            )
        )
    } catch (e: any) {
        return NextResponse.json({
            error: 'Failed to generate image'
        }, {
            status: 500
        })
    }
}