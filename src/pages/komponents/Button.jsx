export default function Button({ label, onClick, color, textColor, width = "" }) {
    return (
        <button onClick={onClick} className={`px-4 py-2 ${color} ${textColor} font-medium rounded-lg cursor-pointer ${width}`}>{label}</button>
    );
}