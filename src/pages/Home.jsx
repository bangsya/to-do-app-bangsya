import { Link } from "react-router";
import { todos } from "../todos";
import Button from "./komponents/Button";
import Card from "./komponents/Card";
import JudulSection from "./komponents/JudulSection";
import Section from "./komponents/Section";

export default function Home(){
    
    return (
        <Section name="Home">
            <div className="flex justify-between items-center">
                <JudulSection title="My To-Do List" />
                <Link to="/add">
                    <Button label="+ New Task" onClick={() => {}} textColor="text-blue-600" color="bg-blue-200" />
                </Link>
            </div>
            <div className="container-card flex flex-wrap box-border">
                {todos.map(todo => (
                    <Card key={todo.id} judul={todo.judul} deskripsi={todo.deskripsi} tanggal={todo.tanggal} completed={todo.completed} />
                ))}
            </div>
        </Section>
    )
}