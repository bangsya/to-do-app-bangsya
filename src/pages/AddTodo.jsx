import FormInput from "./komponents/FormInput";
import JudulSection from "./komponents/JudulSection";
import Section from "./komponents/Section";

export default function AddTodo() {
    return (
        <Section name="Add Todo">
            <JudulSection title="Add New Todo" textPosition="text-center" />
            <FormInput action="/add-todo" />
        </Section>
    );
}