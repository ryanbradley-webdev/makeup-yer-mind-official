import { NextResponse } from "next/server";
import sgMail, { MailDataRequired } from '@sendgrid/mail'

export async function POST(request: Request) {
    const API_KEY = process.env.NEXT_PUBLIC_SENDGRID_API_KEY
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_SENDGRID_TEMPLATE_ID
    const TO_EMAIL = process.env.NEXT_PUBLIC_TO_EMAIL
    const FROM_EMAIL = process.env.NEXT_PUBLIC_FROM_EMAIL

    if (!API_KEY || !TEMPLATE_ID || !TO_EMAIL || !FROM_EMAIL) {
        return NextResponse.json({
            error: 'missing server data'
        }, {
            status: 500
        })
    }

    const body = await request.json()

    for (const field in body) {
        if (!field) return NextResponse.json({
            error: 'missing form data'
        }, {
            status: 400
        })
    }

    sgMail.setApiKey(API_KEY)

    const msg = {
        to: {
            name: 'Courtney Baumann',
            email: TO_EMAIL
        },
        from: {
            name: body.name,
            email: FROM_EMAIL
        },
        subject: body.subject,
        templateId: TEMPLATE_ID,
        dynamicTemplateData: body
    }

    try {
        const [ response ] = await sgMail.send(msg as MailDataRequired)

        if (response.statusCode === 202) {
            return NextResponse.json({
                message: 'email sent'
            }, {
                status: 202
            })
        } else {
            return NextResponse.json({
                message: 'bad request'
            }, { 
                status: 400
            })
        }
    } catch (error) {
        return NextResponse.json({
            error
        }, {
            status: 500
        })
    }

}