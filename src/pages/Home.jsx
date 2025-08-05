import { todos } from "../todos";
import Button from "./komponents/Button";
import Card from "./komponents/Card";

export default function Home(){
    
    return (
        <section className="Home">
            <div className="container mx-auto w-full">
                <div className="flex justify-between items-center px-4 py-6">
                    <h1 className="text-3xl font-bold text-blue-950 lg:text-4xl">My Todo List</h1>
                    <Button label="+ New Task" onClick={() => alert("Add Task Clicked")} />
                </div>
                <div className="container-card flex flex-wrap mx-5 box-border">
                    {todos.map(todo => (
                        <Card key={todo.id} judul={todo.judul} deskripsi={todo.deskripsi} tanggal={todo.tanggal} completed={todo.completed} />
                    ))}
                </div>
            </div>
        </section>
    )
}