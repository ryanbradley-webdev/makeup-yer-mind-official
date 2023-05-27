import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import Button from '@/components/Button'
import { hiddenRight, visible, hiddenLeft } from '../util/styles'
import styles from '../page.module.css'

export default function FormDiv({
    children,
    firstPage,
    lastPage,
    pageIndex,
    formPage,
    setFormPage
}: {
    children: ReactNode,
    firstPage?: boolean,
    lastPage?: boolean,
    pageIndex: number,
    formPage: number,
    setFormPage: Dispatch<SetStateAction<number>>
}) {
    const [style, setStyle] = useState(hiddenRight)

    useEffect(() => {
        if (formPage === pageIndex) {
            setStyle(visible)
        }
        if (formPage < pageIndex) {
            setStyle(hiddenRight)
        }
        if (formPage > pageIndex) {
            setStyle(hiddenLeft)
        }
    }, [formPage, pageIndex])

    return (
        <div className={styles.formDiv} style={style}>

            {children}
            
            <div className={styles.btnDiv}>

                {!firstPage && <Button onClick={() => setFormPage(prevPage => prevPage - 1)}>
                    Previous
                </Button>}

                {!lastPage && <Button onClick={() => setFormPage(prevPage => prevPage + 1)}>
                    Next
                </Button>}

            </div>

        </div>
    )
}