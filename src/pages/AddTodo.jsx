import { useState } from "react";
import FormInput from "./komponents/FormInput";
import JudulSection from "./komponents/JudulSection";
import Section from "./komponents/Section";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slice/todoSlice";

export default function AddTodo() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const buttonClick = (e) => {
        e.preventDefault();
        const todo = {
            name,
            description,
        };
        dispatch(addTodo(todo));
        navigate("/");
    }

    return (
        <Section name="Add Todo">
            <JudulSection title="Add New Todo" textPosition="text-center" />
            <FormInput 
                action="/add-todo"
                label="Add Todo"
                valueName={name}
                valueDescription={description}
                onChangeName={(e) => setName(e.target.value)} 
                onChangeDescription={(e) => setDescription(e.target.value)}
                handleClick={buttonClick} />
        </Section>
    );
}