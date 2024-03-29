const IconLink = ({ icon, children, href, ...props }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-gray-200"
            {...props}
        >
            {icon}
            {children}
        </a>
    )
}

export default IconLink
