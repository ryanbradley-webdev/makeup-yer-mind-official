import Link from 'next/link'
import styles from './section.module.css'
import Button from '../Button'

export default function SectionHeader({
    children,
    type,
    className
}: {
    children: string,
    type: string,
    className: string
}) {
    const targetPath = () => {
        if (type === 'new') {
            return '/promotions'
        } else if (!type) {
            return '/about'
        } else {
            return `/${type}`
        }
    }

    const buttonContent = () => {
        switch (type) {
            case 'new':
                return 'See what\'s new!'
            case 'looks':
                return 'Find your new favorite look!'
            case 'blogs':
                return 'Discover something new!'
            default:
                return 'See what else I have in store!'
        }
    }

    return (
        <div className={`${styles.sectionHeader} ${className}`}>
            <h2>
                {children}
            </h2>
            <Link href={targetPath()}>
                <Button>
                    {buttonContent()}
                </Button>
            </Link>
        </div>
    )
}