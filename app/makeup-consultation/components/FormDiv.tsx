import { ReactNode, useEffect, useState } from 'react'
import { hiddenRight, visible, hiddenLeft } from '../lib/styles'
import styles from '../page.module.css'

export default function FormDiv({
    children,
    pageIndex,
    formPage
}: {
    children: ReactNode,
    pageIndex: number,
    formPage: number
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

        </div>
    )
}