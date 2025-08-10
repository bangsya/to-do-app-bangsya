
import { useSelector } from "react-redux";
import Card from "./komponents/Card";
import JudulSection from "./komponents/JudulSection";
import Section from "./komponents/Section";

export default function Complete (){
    const todos = useSelector(state => state.todolist);
    return (
        <Section name="Complete">
            <JudulSection title="Completed Tasks" />
            <div className="container-card flex flex-wrap box-border">
                {todos.filter(todo => todo.completed).map(todo => (
                    <Card key={todo.id} id={todo.id} judul={todo.judul} deskripsi={todo.deskripsi} tanggal={todo.tanggal} completed={todo.completed} />
                ))}
            </div>
        </Section>
    );
}