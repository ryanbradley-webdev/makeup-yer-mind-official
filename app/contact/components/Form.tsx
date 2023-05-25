'use client'

import { useRef, useState } from 'react'
import styles from '../page.module.css'
import Button from '@/components/Button'

export default function Form() {
    const [messageSending, setMessageSending] = useState(false)
    const [messageSent, setMessageSent] = useState(false)
    const [messageError, setMessageError] = useState(false)

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const subjectRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const formData = {
            name: nameRef?.current?.value,
            email: emailRef?.current?.value,
            subject: subjectRef?.current?.value,
            message: messageRef?.current?.value
        }

        for (const field in formData) {
            if (!field) return setMessageError(true)
        }

        // TODO add API call for message submission
    }

    return (
        <form action="" onSubmit={handleSubmit} className={styles.form}>

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
                Submit
            </Button>

        </form>
    )
}