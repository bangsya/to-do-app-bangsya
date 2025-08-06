export default function JudulSection({title, textPosition = ""}) {
    return(
        <h1 className={`text-3xl font-bold text-blue-950 lg:text-4xl ${textPosition}`}>{title}</h1>
    )
}