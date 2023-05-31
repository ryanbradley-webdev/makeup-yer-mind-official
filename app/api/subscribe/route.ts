import { NextResponse } from "next/server";
import client from '@mailchimp/mailchimp_marketing'

type Params = {
    params: { formData: any }
}

export async function POST(request: Request) {
    const { email } = await request.json()
    const API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY
    const LIST_ID = process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID

    if (!API_KEY || !LIST_ID) {
        return NextResponse.json({
            error: 'Missing server data'
        }, {
            status: 500
        })
    }

    client.setConfig({
        apiKey: API_KEY,
        server: 'us20'
    })

    console.log(email)

    if (!email) {
        return NextResponse.json({
            error: 'no email provided'
        }, {
            status: 400
        })
    }

    try {
        const res = await client.lists.addListMember(LIST_ID, {
            email_address: email,
            status: 'subscribed'
        })
    
        if (res.status === 'subscribed') {
            return NextResponse.json({
                status: 200
            })
        } else {
            return NextResponse.json({
                error: 'Failed to subscribe user'
            }, {
                status: 424
            })
        }
    } catch (err) {
        return NextResponse.json({
            error: err
        }, {
            status: 500
        })
    }
}