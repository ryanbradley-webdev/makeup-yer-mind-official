import { NextResponse } from "next/server";
import client from '@mailchimp/mailchimp_marketing'

type Params = {
    params: { formData: any }
}

client.setConfig({
    apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
    server: 'us20'
})

export async function POST(request: Request) {

    const { email } = await request.json()

    console.log(email)

    if (!email) {
        return NextResponse.json({
            error: 'no email provided'
        }, {
            status: 400
        })
    }

    try {
        const res = await client.lists.addListMember(process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID as string, {
            email_address: email,
            status: 'subscribed'
        })
    
        if (res.status === 'subscribed') {
            return NextResponse.json({
                status: 200
            })
        } else {
            return NextResponse.json({
                error: 'failed to subscribe'
            }, {
                status: 500
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