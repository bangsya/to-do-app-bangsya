import Checkbox from "./Checkbox";

export default function Card({judul, deskripsi, tanggal, completed}) {
    return (
        <div className="card py-4 px-4 w-full lg:w-1/2 box-border">
            <div className="bg-white rounded-xl shadow-md py-6 px-4">
                <div className="card-content flex justify-between items-center">
                    <div>
                        <h2 className={`text-xl font-bold text-blue-950 ${completed ? 'line-through' : ''}`}>{judul}</h2>
                        <p className="text-sm text-slate-500">{deskripsi}</p>
                    </div>
                    <Checkbox completed={completed} />
                </div>
                <hr className="mt-2.5 border-slate-300" />
                <p className="text-slate-400 mt-2 text-sm">Dibuat {tanggal.toLocaleDateString("id-ID", {
                    day : 'numeric',
                    month : 'long',
                    year : 'numeric'
                })} | {tanggal.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
        </div>
    );
}