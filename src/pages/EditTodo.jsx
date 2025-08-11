import { useNavigate, useParams } from "react-router";
import FormInput from "./komponents/FormInput";
import JudulSection from "./komponents/JudulSection";
import Section from "./komponents/Section";
import { useDispatch, useSelector } from "react-redux";
import { getTodo, updateTodo } from "../redux/slice/todoSlice";
import { useState } from "react";

export default function EditTodo() {
    const params = useParams();
    const todo = useSelector((state) => getTodo(state, Number(params.id)));
    const [name, setName] = useState(todo.judul);
    const [description, setDescription] = useState(todo.deskripsi);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = (e) => {
        e.preventDefault();
        const updatedTodo = {
            id: todo.id,
            name: name,
            description: description,
        };
        dispatch(updateTodo(updatedTodo));
        navigate("/");
    }

    // console.log(todo);
    return (
        <Section name="Edit Todo">
            <JudulSection title="Edit Todo" textPosition="text-center" />
            <FormInput action="/edit-todo" 
                label="Update Todo"
                valueName={name} 
                valueDescription={description}
                onChangeName={e => setName(e.target.value)}
                onChangeDescription={e => setDescription(e.target.value)}
                handleClick={handleEdit} />
        </Section>
    );
}