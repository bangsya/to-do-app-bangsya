export default function Button({ label, onClick }) {
    return (
        <button onClick={onClick} className="ml-4 px-4 py-2 bg-blue-200 text-blue-600 font-medium rounded-lg cursor-pointer">{label}</button>
    );
}