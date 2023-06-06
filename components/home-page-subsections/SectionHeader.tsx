import Link from 'next/link'
import styles from './section.module.css'
import Button from '../Button'

export default function SectionHeader({
    children,
    type
}: {
    children: string,
    type: string
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
                return 'Check out the rest of my deals!'
            case 'looks':
                return 'Find your next great look!'
            case 'blogs':
                return 'Learn something new!'
            default:
                return 'See what else I have in store!'
        }
    }

    return (
        <div className={styles.sectionHeader}>
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