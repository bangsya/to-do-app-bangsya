import { useDispatch } from "react-redux";
import Button from "./Button";
import Checkbox from "./Checkbox";
import { checkedTodo } from "../../redux/slice/todoSlice";

export default function Card({id, judul, deskripsi, tanggal, completed, handleDelete, handleEdit}) {
    // const todos = useSelector(state => state.todolist);
    const dispatch = useDispatch();

    tanggal = new Date(tanggal);

    return (
        <div className="card py-4 px-4 w-full lg:w-1/2 box-border">
            <div className="bg-white rounded-xl shadow-md py-6 px-4">
                <div className="card-content flex justify-between items-center gap-4">
                    <div className="content w-3/4">
                        <h2 className={`text-xl font-bold text-blue-950 ${completed ? 'line-through' : ''}`}>{judul}</h2>
                        <p className="text-sm text-slate-500">{deskripsi}</p>
                        <hr className="mt-2.5 border-slate-300" />
                        <p className="text-slate-400 mt-2 text-sm">Dibuat {tanggal.toLocaleDateString("id-ID", {
                            day : 'numeric',
                            month : 'long',
                            year : 'numeric'
                        })} | {tanggal.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    </div>
                    <div className="aksi flex flex-col items-center gap-1 w-1/4">
                        <Checkbox completed={completed} onChange={() => dispatch(checkedTodo({id, completed: !completed}))}/>
                        <Button label="Edit" onClick={handleEdit} color="bg-yellow-200" textColor="text-yellow-600" width="w-full"/>
                        <Button label="Delete" onClick={handleDelete} color="bg-red-200" textColor="text-red-600" width="w-full"/>
                    </div>
                </div>
            </div>
        </div>
    );
}