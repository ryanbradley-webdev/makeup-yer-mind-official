interface ExternalLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode
}

export default function ExternalLink({
    children,
    ...props
}: ExternalLinkProps) {
    return (
        <a
            target="_blank"
            rel="noopener noreferrer" 
            {...props}
        >
            {children}
        </a>
    )
}