import { todos } from "../todos";
import Card from "./komponents/Card";
import JudulSection from "./komponents/JudulSection";
import Section from "./komponents/Section";

export default function Complete (){
    return (
        <Section name="Complete">
            <JudulSection title="Completed Tasks" />
            <div className="container-card flex flex-wrap box-border">
                {todos.filter(todo => todo.completed === true).map(todo => (
                    <Card key={todo.id} judul={todo.judul} deskripsi={todo.deskripsi} tanggal={todo.tanggal} completed={todo.completed} />
                ))}
            </div>
        </Section>
    );
}