export function SectionHeading({
    label,
    docsLink,
}: {
    label: string;
    docsLink: string;
}) {
    return (
        <a href={docsLink} className="text-3xl font-bold">
            {label}
        </a>
    );
}
