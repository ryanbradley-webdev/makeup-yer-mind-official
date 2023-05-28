'use client'

import { useReducer, useRef, useState } from 'react'
import { reducer, initialState } from '../lib/Reducer'
import styles from '../page.module.css'
import FormDiv from './FormDiv'
import Image from 'next/image'
import { uploadImg } from '@/lib/uploadImg'
import { uploadColorMatchForm } from '@/lib/uploadColorMatchForm'
import FormSubmitting from './FormSubmitting'
import FormSuccess from './FormSuccess'
import FormError from './FormError'

export default function Form() {
    const [formData, dispatch] = useReducer(reducer, initialState)

    const [formPage, setFormPage] = useState(1)
    const [selfieFile, setSelfieFile] = useState<File>()
    const [localSelfieSrc, setLocalSelfieSrc] = useState('')
    const [seintCartWanted, setSeintCartWanted] = useState(false)
    const [formSubmitting, setFormSubmitting] = useState(false)
    const [formSuccess, setFormSuccess] = useState(false)
    const [formError, setFormError] = useState(false)

    const formRef = useRef<HTMLFormElement>(null)

    const previewSelfie = (e: React.ChangeEvent<HTMLInputElement>) => {
        const images = e.target.files
        if (!images || images.length === 0) return

        const newFile = images[images.length - 1]
        const imgSrc = URL.createObjectURL(newFile)

        setSelfieFile(newFile)
        setLocalSelfieSrc(imgSrc)
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

    const validateForm = () => {
        if (!formData.firstName || !formData.lastName || !formData.email) {
            return setFormPage(1)
        }

        if (!formData.referral || !formData.veinColor) {
            return setFormPage(2)
        }

        if (!formData.coverage) {
            return setFormPage(3)
        }

        if (!selfieFile) {
            return setFormPage(5)
        }

        if (seintCartWanted && (!formData.address || !formData.phone)) {
            return setFormPage(6)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!selfieFile) return

        setFormSubmitting(true)
        setFormPage(prevPage => prevPage + 1)

        const colorMatchForm = {
            ...formData
        }

        try {
            colorMatchForm.selfie = await uploadImg(selfieFile)
            await uploadColorMatchForm(colorMatchForm)
            setFormSubmitting(false)
            setFormSuccess(true)
            setTimeout(() => {
                setFormSuccess(false)
                if (formRef?.current) formRef.current.reset()
            }, 4000)
        } catch {
            setFormSubmitting(false)
            setFormError(true)
        }
    }

    return (
        <form
            action=''
            onSubmit={handleSubmit}
            className={styles.form}
            ref={formRef}
        >

            <FormDiv
                firstPage
                formPage={formPage}
                setFormPage={setFormPage}
                pageIndex={1}
            >

                <label htmlFor="firstName">
                    <span>First Name</span>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        onChange={e => dispatch({ type: 'change-first-name', payload: e.target.value })}
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
                        onChange={e => dispatch({ type: 'change-last-name', payload: e.target.value })}
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
                        onChange={e => dispatch({ type: 'change-email', payload: e.target.value })}
                        value={formData.email}
                        placeholder='example@email.com'
                        required 
                    />
                </label>

            </FormDiv>

            <FormDiv
                formPage={formPage}
                setFormPage={setFormPage}
                pageIndex={2}
            >

                <label htmlFor="referral">
                    <span>Referral</span>
                    <input 
                        type="text" 
                        name="referral" 
                        id="referral"
                        onChange={e => dispatch({ type: 'change-referral', payload: e.target.value })}
                        placeholder="If you weren't referred, tell me how you found me!"
                        value={formData.referral}
                    />
                </label>

                <div className={styles.radioDiv}>

                    <p>
                        When you look at the veins on the underside of your wrist (in natural light) are they...
                    </p>

                    <label htmlFor="green">
                        <input 
                            type="radio"
                            name="vein-color"
                            id="green"
                            onChange={e => dispatch({ type: 'change-vein-color', payload: 'green' })}
                        />
                        <span>Green</span>
                    </label>

                    <label htmlFor="blue">
                        <input 
                            type="radio"
                            name="vein-color"
                            id="blue"
                            onChange={e => dispatch({ type: 'change-vein-color', payload: 'blue' })}
                        />
                        <span>Blue</span>
                    </label>

                    <label htmlFor="vein-color">
                        <input 
                            type="radio"
                            name="vein-color"
                            id="both"
                            onChange={e => dispatch({ type: 'change-vein-color', payload: 'both' })}
                        />
                        <span>A perfect combination of green and blue</span>
                    </label>

                </div>

            </FormDiv>

            <FormDiv
                formPage={formPage}
                setFormPage={setFormPage}
                pageIndex={3}
            >

                <p>
                    What kind of coverage are you looking for in your makeup? What are your skin concerns?
                </p>

                <textarea
                    name="coverage"
                    id="coverage"
                    cols={30}
                    rows={10}
                    onChange={e => dispatch({ type: 'change-coverage', payload: e.target.value })}
                    placeholder='Tell me all about it here!'
                    value={formData.coverage}
                    required
                ></textarea>

            </FormDiv>

            <FormDiv
                formPage={formPage}
                setFormPage={setFormPage}
                pageIndex={4}
            >

                <p>
                    Okay gorgeous, I just need a makeup free selfie! This is so important for me to accurately match you. I know that sending a makeup-free selfie can be intimidating, please know that I am the only one who will see it and I will delete it as soon as I&apos;m done matching you! Follow the instructions below to submit a perfect selfie!
                </p>

                <div className={styles.img_container}>
                    <Image src='/selfie-how-to.png' width={480} height={540} alt='' />
                </div>

            </FormDiv>

            <FormDiv
                formPage={formPage}
                setFormPage={setFormPage}
                pageIndex={5}
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
                 
                    <div className={styles.img_container}>
                        {localSelfieSrc && <Image src={localSelfieSrc} height={550} width={480} alt='' />}
                    </div>

                </label>
                
            </FormDiv>

            <FormDiv
                formPage={formPage}
                setFormPage={setFormPage}
                pageIndex={6}
            >

                <p>
                    Would you like me to custom build your cart with my recommendations for you?
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

                {seintCartWanted && <div>

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
                            onChange={e => dispatch({ type: 'change-address', payload: e.target.value })}
                            placeholder='address'
                            required
                        />
                    </label>

                    <label htmlFor="phone">
                        <span>Phone Number</span>
                        <input
                            type='tel'
                            name="phone"
                            id="phone"
                            onChange={e => dispatch({ type: 'change-phone', payload: e.target.value })}
                            placeholder='(123) 555-1234'
                            required
                        />
                    </label>

                </div>}


            </FormDiv>

            <FormDiv
                formPage={formPage}
                setFormPage={setFormPage}
                pageIndex={7}
                lastPage
                validateForm={validateForm}
            >

                <p>
                    If you&apos;re happy with everything, submit the form and I&apos;ll give you your color match in just a few days!
                </p>

            </FormDiv>

            <FormDiv
                formPage={formPage}
                setFormPage={setFormPage}
                pageIndex={8}
                formSubmitting={formSubmitting}
                formSuccess={formSuccess}
                formError={formError}
            >
                {formSubmitting && <FormSubmitting />}
                {formSuccess && <FormSuccess />}
                {formError && <FormError />}
            </FormDiv>

        </form>
    )
}