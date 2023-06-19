import { getLookBySlug } from "@/lib/getLookBySlug";
import Image from "next/image";
import { ImageResponse } from "next/server";

type Params = {
    params: {
        slug: string
    }
}

export default async function OpengraphImage({ params }: Params) {
    const { slug } = params

    console.log(slug)

    if (!slug) return null

    const look = await getLookBySlug(slug)

    if (!look) return null

    const { image1, image2 } = look

    return new ImageResponse(
        (
            <div
                style={{
                    height: '630px',
                    width: '1200px',
                    display: 'flex'
                }}
            >
                <Image
                    src={image1}
                    alt=""
                    width={600}
                    height={630}
                    style={{
                        objectFit: 'cover'
                    }}
                />
                <Image
                    src={image2}
                    alt=""
                    width={600}
                    height={630}
                    style={{
                        objectFit: 'cover'
                    }}
                />
            </div>
        ), {
            width: 1200,
            height: 630
        }
    )
}