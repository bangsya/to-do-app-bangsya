export default function Section({name, children}) {
    return (
        <section className={name}>
            <div className="container mx-auto w-full px-4 pt-6">
                {children}
            </div>
        </section>
    )
}