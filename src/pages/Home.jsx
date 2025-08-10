import { Link, useNavigate } from "react-router";
// import { todos } from "../todos";
import Button from "./komponents/Button";
import Card from "./komponents/Card";
import JudulSection from "./komponents/JudulSection";
import Section from "./komponents/Section";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../redux/slice/todoSlice";

export default function Home(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const todoLists = useSelector(state => state.todolist);
    
    return (
        <Section name="Home">
            <div className="flex justify-between items-center">
                <JudulSection title="My To-Do List" />
                <Button label="+ New Task" onClick={() => navigate("/add")} textColor="text-blue-600" color="bg-blue-200" />
                
            </div>
            <div className="container-card flex flex-wrap box-border">
                {todoLists.map(todo => (
                    <Card key={todo.id} id={todo.id} judul={todo.judul} deskripsi={todo.deskripsi} tanggal={todo.tanggal} completed={todo.completed} handleDelete={() => dispatch(removeTodo({ id: todo.id }))} />
                ))}
            </div>
        </Section>
    );
}