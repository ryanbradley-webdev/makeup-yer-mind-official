'use client'

import { useEffect, useRef, useState } from 'react'
import styles from '../page.module.css'
import Button from '@/components/Button'

export default function Form() {
    const [btnMsg, setBtnMsg] = useState('Submit')
    const [messageSending, setMessageSending] = useState(false)
    const [messageSuccess, setMessageSuccess] = useState(false)
    const [messageError, setMessageError] = useState(false)

    const formRef = useRef<HTMLFormElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const subjectRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        setMessageError(false)
        setMessageSending(true)

        const formData = {
            name: nameRef?.current?.value,
            email: emailRef?.current?.value,
            subject: subjectRef?.current?.value,
            message: messageRef?.current?.value
        }

        for (const field in formData) {
            if (!field) return setMessageError(true)
        }

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify(formData)
            })

            setMessageSending(false)

            if (res.status === 202) {
                setMessageSuccess(true)
                if (formRef?.current) formRef.current.reset()
                setTimeout(() => {
                    setMessageSuccess(false)
                }, 4000)
            } else {
                setMessageError(true)
            }
        } catch {
            setMessageSending(false)
            setMessageError(true)
        }
    }

    useEffect(() => {
        if (messageSending) {
            setBtnMsg('Sending Message...')
        } else if (messageSuccess) {
            setBtnMsg('Message Sent!')
        } else if (messageError) {
            setBtnMsg('Something went wrong. Retry?')
        } else {
            setBtnMsg('Submit')
        }
    }, [messageSending, messageSuccess, messageError])

    return (
        <form action="" onSubmit={handleSubmit} className={styles.form} ref={formRef}>

            <label htmlFor="name">
                <span>Name</span>
                <input type="text" name='name' id='name' ref={nameRef} required />
            </label>

            <label htmlFor="email">
                <span>Email</span>
                <input type="email" name="email" id="email" ref={emailRef} required />
            </label>

            <label htmlFor="subject">
                <span>Subject</span>
                <input type="text" name="subject" id="subject" ref={subjectRef} required />
            </label>

            <label htmlFor="message">
                <span>Message</span>
                <textarea name="message" id="message" cols={30} rows={5} ref={messageRef} required></textarea>
            </label>

            <Button itemType='submit'>
                {btnMsg}
            </Button>

        </form>
    )
}