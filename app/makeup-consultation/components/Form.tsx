'use client'

import { ChangeEvent, Reducer, useEffect, useReducer, useRef, useState } from 'react'
import { reducer, initialState, Action } from '../lib/Reducer'
import styles from '../page.module.css'
import FormDiv from './FormDiv'
import Image from 'next/image'
import { uploadImg } from '@/lib/uploadImg'
import { uploadColorMatch } from '@/lib/uploadColorMatch'
import FormSubmitting from './FormSubmitting'
import FormSuccess from './FormSuccess'
import FormError from './FormError'
import Button from '@/components/Button'
import { serverTimestamp } from 'firebase/firestore'

export default function Form() {
    const [formData, dispatch] = useReducer<Reducer<ColorMatchFormData, Action>>(reducer, initialState)

    const [formPage, setFormPage] = useState(1)
    const [selfieFile, setSelfieFile] = useState<File>()
    const [localSelfieSrc, setLocalSelfieSrc] = useState('')
    const [seintCartWanted, setSeintCartWanted] = useState(false)
    const [formSubmitting, setFormSubmitting] = useState(false)
    const [formSuccess, setFormSuccess] = useState(false)
    const [formError, setFormError] = useState(false)

    const formRef = useRef<HTMLFormElement>(null)
    const greenRef = useRef<HTMLLabelElement>(null)
    const blueRef = useRef<HTMLLabelElement>(null)
    const bothRef = useRef<HTMLLabelElement>(null)
    const selfieRef = useRef<HTMLDivElement>(null)

    const previewSelfie = (e: React.ChangeEvent<HTMLInputElement>) => {
        const images = e.target.files
        if (!images || images.length === 0) return

        const newFile = images[images.length - 1]
        const imgSrc = URL.createObjectURL(newFile)

        setSelfieFile(newFile)
        setLocalSelfieSrc(imgSrc)
        validateSelfie(true)
    }

    const validateSelfie = (isValid?: boolean) => {
        if (selfieRef.current) {
            if (selfieFile || isValid) {
                selfieRef.current.style.borderColor = ''
            } else {
                selfieRef.current.style.borderColor = 'var(--color-invalid)'
            }
        }
    }

    const handleSeintCartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            if (e.target.value === 'yes') {
                setSeintCartWanted(true)
            }

            if (e.target.value === 'no') {
                setSeintCartWanted(false)
            }
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, type: string) => {
        const field = e.target

        if (!field) return
        
        if (!field.value) {
            field.style.borderColor = 'var(--color-invalid)'
        } else {
            field.style.borderColor = ''
        }
        
        dispatch({ type, payload: field.value })
    }

    const validateVeinColor = (e?: ChangeEvent<HTMLInputElement>) => {
        if (e) {
            dispatch({ type: 'change-vein-color', payload: e.target.value })
        }

        if (blueRef.current && greenRef.current && bothRef.current) {
            blueRef.current.style.borderColor = (formData.veinColor || e?.target.value) ? '' : 'var(--color-invalid)'
            greenRef.current.style.borderColor = (formData.veinColor || e?.target.value) ? '' : 'var(--color-invalid)'
            bothRef.current.style.borderColor = (formData.veinColor || e?.target.value) ? '' : 'var(--color-invalid)'
        }
    }

    const validateForm = () => {
        formRef.current?.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea').forEach(field => {
            if (!field.value) {
                field.style.borderColor = 'var(--color-invalid)'
            }
        })

        validateVeinColor()
        validateSelfie()

        if (!formData.firstName || !formData.lastName || !formData.email) {
            return setFormPage(2)
        }

        if (!formData.referral || !formData.veinColor) {
            return setFormPage(3)
        }

        if (!formData.coverage) {
            return setFormPage(4)
        }

        if (!selfieFile) {
            return setFormPage(6)
        }

        if (seintCartWanted && (!formData.address || !formData.phone)) {
            return setFormPage(7)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!selfieFile) return

        setFormSubmitting(true)
        setFormPage(prevPage => prevPage + 1)

        const newColorMatch: ColorMatch = {
            ...formData,
            read: false,
            completed: false,
            sentAt: serverTimestamp()
        }

        try {
            newColorMatch.selfie = await uploadImg(selfieFile)
            await uploadColorMatch(newColorMatch)
            setFormSubmitting(false)
            setFormSuccess(true)
            if (formRef?.current) formRef.current.reset()
        } catch {
            setFormSubmitting(false)
            setFormError(true)
        }
    }

    useEffect(() => {
        dispatch({ type: 'change-cart', payload: seintCartWanted })
    }, [seintCartWanted])

    return (
        <form
            action=''
            onSubmit={handleSubmit}
            className={styles.form}
            ref={formRef}
        >

            <div 
                className={styles.page_counter}
                style={{
                    opacity: formPage > 1 && formPage < 9 ? '1' : '0'
                }}
            >
                Page {formPage - 1} of 7
            </div>

            <FormDiv
                formPage={formPage}
                pageIndex={1}
            >
            
                <h1>
                    Well Hello Gorgeous!!
                </h1>

                <p>
                    Thank you so much for trusting me to help you on your beauty adventure. In order for me to best serve you, I just need to know a few things about you!
                </p>

                <p>
                    Beauty is a personal journey, and I value you and your trust so everything between us is always 100% confidential.
                </p>

                <p>
                    Ready to completely revamp your beauty routine?!
                </p>

                <p>
                    Let&apos;s go!
                </p>

            </FormDiv>

            <FormDiv
                formPage={formPage}
                pageIndex={2}
            >

                <label htmlFor="firstName">
                    <span>First Name</span>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        onChange={e => handleChange(e, 'change-first-name')}
                        value={formData.firstName}
                        placeholder='First Name'
                        required 
                    />
                </label>
                
                <label htmlFor="lastName">
                    <span>Last Name</span>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        onChange={e => handleChange(e, 'change-last-name')}
                        value={formData.lastName}
                        placeholder='Last Name'
                        required 
                    />
                </label>
                
                <label htmlFor="email">
                    <span>Email</span>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={e => handleChange(e, 'change-email')}
                        value={formData.email}
                        placeholder='example@email.com'
                        required 
                    />
                </label>

            </FormDiv>

            <FormDiv
                formPage={formPage}
                pageIndex={3}
            >

                <label htmlFor="referral">
                    <span>Referral</span>
                    <input 
                        type="text" 
                        name="referral" 
                        id="referral"
                        onChange={e => handleChange(e, 'change-referral')}
                        placeholder="If you weren't referred, tell me how you found me!"
                        value={formData.referral}
                    />
                </label>

                <div className={styles.radioDiv}>

                    <p>
                        When you look at the veins on the underside of your wrist (in natural light) are they...
                    </p>

                    <label 
                        htmlFor="green"
                        ref={greenRef}
                    >
                        <input 
                            type="radio"
                            name="vein-color"
                            value='green'
                            id="green"
                            onChange={e => validateVeinColor(e)}
                            required
                        />
                        <span>Green</span>
                    </label>

                    <label 
                        htmlFor="blue"
                        ref={blueRef}
                    >
                        <input 
                            type="radio"
                            name="vein-color"
                            value='blue'
                            id="blue"
                            onChange={e => validateVeinColor(e)}
                            required
                        />
                        <span>Blue</span>
                    </label>

                    <label 
                        htmlFor="both"
                        ref={bothRef}
                    >
                        <input 
                            type="radio"
                            name="vein-color"
                            value='both'
                            id="both"
                            onChange={e => validateVeinColor(e)}
                            required
                        />
                        <span>A perfect combination of green and blue</span>
                    </label>

                </div>

            </FormDiv>

            <FormDiv
                formPage={formPage}
                pageIndex={4}
            >

                <p>
                    What are your biggest makeup concerns?
                </p>

                <p>
                    Any skin concerns?
                </p>

                <p>
                    What are you wanting to achieve from your beauty routine?
                </p>

                <textarea
                    name="coverage"
                    id="coverage"
                    cols={30}
                    rows={10}
                    onChange={e => handleChange(e, 'change-coverage')}
                    placeholder='Tell me all about it here!'
                    value={formData.coverage}
                    required
                ></textarea>

            </FormDiv>

            <FormDiv
                formPage={formPage}
                pageIndex={5}
            >

                <p>
                    Okay gorgeous, I just need a makeup-free selfie! This is so important for me to accurately match your natural skin-tone and undertones and get a better idea of how your skin is behaving right now.
                </p>

                <p>
                    I know that sending a makeup-free selfie can be intimidating, please know that I am the only one who will see it and I will delete it as soon as I&apos;m done matching you! Follow the instructions below to submit a perfect selfie!
                </p>

                <div className={styles.img_container}>
                    <Image src='/selfie-how-to.png' width={480} height={540} alt='' />
                </div>

            </FormDiv>

            <FormDiv
                formPage={formPage}
                pageIndex={6}
            >
                <label
                    htmlFor="selfie"
                    className={styles.selfie}
                >
                    <span>Upload Selfie</span>
                    <input
                        type="file"
                        name="selfie"
                        id="selfie"
                        onChange={previewSelfie}
                        required
                    />
                 
                    <div
                        className={styles.img_container_selfie}
                        ref={selfieRef}
                    >
                        {localSelfieSrc && <Image src={localSelfieSrc} height={550} width={480} alt='' />}
                    </div>

                </label>
                
            </FormDiv>

            <FormDiv
                formPage={formPage}
                pageIndex={7}
            >

                <p>
                    Would you like me to custom build your cart with any Seint Makeup related recommendations for you?
                </p>

                <div className={styles.radioDiv}>

                    <label htmlFor="yes">
                        <input type="radio"
                            name='seintCart'
                            id='yes'
                            value='yes'
                            onChange={handleSeintCartChange}
                            checked={seintCartWanted}
                            required
                            />
                        <span>Yes, please!</span>
                    </label>

                    <label htmlFor="no">
                        <input type="radio"
                            name='seintCart'
                            id='no'
                            value='no'
                            onChange={handleSeintCartChange}
                            checked={!seintCartWanted}
                            required
                            />
                        <span>No thank you.</span>
                    </label>

                </div>

                {seintCartWanted && <div className={styles.cart_info}>

                    <p>
                        I just need a little more information to set up a profile for you.
                    </p>

                    <p>
                        <em>
                            I will never call you or send unsolicited messages this information is kept confidential and is used solely to create your Seint profile. You may edit any info afterward if you so choose.
                        </em>
                    </p>

                    <label htmlFor="address">
                        <span>Address</span>
                        <input
                            type="text"
                            name="address"
                            id="address"
                            onChange={e => handleChange(e, 'change-address')}
                            placeholder='Enter your address here!'
                            required
                        />
                    </label>

                    <label htmlFor="phone">
                        <span>Phone Number</span>
                        <input
                            type='tel'
                            name="phone"
                            id="phone"
                            onChange={e => handleChange(e, 'change-phone')}
                            placeholder='(123) 555-1234'
                            required
                        />
                    </label>

                </div>}


            </FormDiv>

            <FormDiv
                formPage={formPage}
                pageIndex={8}
            >

                <p>
                    Okay! That&apos;s all I need to get started! Watch your email inbox for your results! If you don&apos;t see an email in the next 24-48 hours please make sure it didn&apos;t go to your spam or promotions folders, if it&apos;s still not there reach out to me and let me know!
                </p>

                <p>
                    I can&apos;t wait to get to know you!
                </p>

            </FormDiv>

            <FormDiv
                formPage={formPage}
                pageIndex={9}
            >
                {formSubmitting && <FormSubmitting />}
                {formSuccess && <FormSuccess />}
                {formError && <FormError />}
            </FormDiv>

            {!formSubmitting && !formSuccess && !formError && 
            
                <div className={styles.btnDiv}>

                    {
                        formPage > 1 && formPage < 9 && 
                        
                        <Button 
                            onClick={() => setFormPage(prevPage => prevPage - 1)} 
                            type='button'
                        >
                            Previous
                        </Button>
                    }

                    {
                        formPage < 8 && 
                        
                        <Button 
                            onClick={() => setFormPage(prevPage => prevPage + 1)} 
                            style={{ gridColumn: '2' }} 
                            type='button'
                        >
                            Next
                        </Button>
                    }

                    {
                        formPage === 8 && 
                        
                        <Button 
                            variant='solid' 
                            onClick={validateForm}
                        >
                            Submit
                        </Button>
                    }

                </div>
            
            }

        </form>
    )
}