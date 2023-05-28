'use client'

import { useEffect, useRef, useState } from 'react'
import Button from '../Button'
import styles from './footer.module.css'

export default function Subscribe() {
    const [btnMessage, setBtnMessage] = useState('Subscribe')
    const [msgSending, setMsgSending] = useState(false)
    const [msgSuccess, setMsgSuccess] = useState(false)
    const [msgError, setMsgError] = useState(false)

    const emailRef = useRef<HTMLInputElement>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (!emailRef.current) return
        
        setMsgSending(true)
        if (msgError) setMsgError(false)

        fetch('/api/subscribe', {
            method: 'POST',
            body: JSON.stringify({
                email: emailRef.current.value
            })
        })
        .then(res => {
            if (res.ok) {
                setMsgSending(false)
                setMsgSuccess(true)
                setTimeout(() => {
                    setMsgSuccess(false)
                    if (emailRef?.current) emailRef.current.value = ''
                }, 4000)
            } else {
                setMsgSending(false)
                setMsgError(true)
            }
        })
        .catch(() => {
            setMsgSending(false)
            setMsgError(true)
        })
    }

    useEffect(() => {
        if (msgSending) {
            setBtnMessage('Subscribing...')
        } else if (msgSuccess) {
            setBtnMessage('Subscribed!')
        } else if (msgError) {
            setBtnMessage('Something went wrong. Retry?')
        } else {
            setBtnMessage('Subscribe')
        }
    }, [msgSending, msgSuccess, msgError])

    return (
        <form action='' onSubmit={handleSubmit} className={styles.form}>

            <p>Want to know when I add new content?</p>
            <p>Subscribe to my mailing list to get notified!</p>

            <div>

                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder='Enter your email'
                    ref={emailRef}
                    required
                />

                <Button
                    variant='ghost'
                    disabled={msgSending || msgSuccess}
                >
                    {btnMessage}
                </Button>

            </div>

        </form>
    )
}