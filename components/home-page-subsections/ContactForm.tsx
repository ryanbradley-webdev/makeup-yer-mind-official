'use client'

import { useRef, useState } from 'react'
import Button from '../Button'
import styles from './section.module.css'
import { quickMessage, sendMessage } from '@/lib/sendMessage'
import { serverTimestamp } from 'firebase/firestore'

export default function ContactForm() {
    const [msgSending, setMsgSending] = useState(false)
    const [msgSuccess, setMsgSuccess] = useState(false)
    const [msgError, setMsgError] = useState(false)

    const formRef = useRef<HTMLFormElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)

    const generateBtnMsg = () => {
        if (msgSending) {
            return 'Sending Message...'
        }

        if (msgSuccess) {
            return 'Message Sent!'
        }

        if (msgError) {
            return 'Something went wrong'
        }

        return 'Submit'
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        setMsgSending(true)

        const msgData: quickMessage = {
            name: '',
            content: '',
            read: false,
            sentAt: serverTimestamp()
        }

        if (nameRef?.current && messageRef?.current) {
            msgData.name = nameRef.current.value
            msgData.content = messageRef.current.value
        } else {
            return
        }

        sendMessage(msgData)
            .then(res => {
                setMsgSending(false)
                if (res.id) {
                    setMsgSuccess(true)
                    if (formRef?.current) formRef.current.reset()
                    setTimeout(() => {
                        setMsgSuccess(false)
                    }, 4000)
                }
            })
            .catch(err => {
                setMsgSending(false)
                setMsgError(true)
                console.log(err.message)
            })
    }

    return (
        <section className={styles.contact}>
            
            <h5>
                Want to see specific content?
                <br />
                Send me a message to let me know what you want to see!
            </h5>

            <form
                action=""
                onSubmit={handleSubmit}
                className={styles.form}
                ref={formRef}
            >

                <label htmlFor="name">

                    <span>
                        First Name
                    </span>

                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Please tell me your name!'
                        ref={nameRef}
                        required 
                    />

                </label>

                <label htmlFor="message">

                    <span>
                        Message
                    </span>

                    <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={5}
                        placeholder='Enter your message here!'
                        ref={messageRef}
                        required
                    ></textarea>

                </label>
                
                <Button
                    disabled={msgSending || msgSuccess}
                >
                    {generateBtnMsg()}
                </Button>

            </form>

        </section>
    )
}